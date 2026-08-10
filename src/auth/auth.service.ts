import { 
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service'; 
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly prisma: PrismaService 
  ) {}

  async register(nickname: string, pass: string) {
    const existingUser = await this.prisma.user.findUnique({ where: { nickname } });
    if (existingUser) {
      throw new ConflictException('Esse nickname já está em uso.');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(pass, salt);

    const user = await this.prisma.user.create({
      data: {
        nickname,
        password: hashedPassword,
      },
    });

    return this.generateToken(user.id, user.nickname);
  }

  async login(nickname: string, pass: string) {
    const user = await this.prisma.user.findUnique({ where: { nickname } });
    
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    return this.generateToken(user.id, user.nickname);
  }

  private generateToken(userId: string, nickname: string) {
    const payload = { sub: userId, nickname };
    return {
      access_token: this.jwtService.sign(payload),
      user: { id: userId, nickname }
    };
  }
}