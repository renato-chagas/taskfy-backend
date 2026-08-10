import { Controller, Get, Post, Body, Param, UseGuards, Request, Delete, Req } from '@nestjs/common';
import { WorldsService } from './worlds.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth-guard';

@UseGuards(JwtAuthGuard)
@Controller('worlds')
export class WorldsController {
  constructor(private readonly worldsService: WorldsService) {}

  @Get()
  getUserWorlds(@Request() req) {
    return this.worldsService.getUserWorlds(req.user.sub);
  }

  @Post()
  createWorld(@Request() req, @Body('name') name: string) {
    return this.worldsService.createWorld(req.user.sub, name);
  }

  @Post('join')
  joinWorld(@Request() req, @Body('inviteCode') inviteCode: string) {
    return this.worldsService.joinWorld(req.user.sub, inviteCode);
  }

  @Get(':id')
  getWorldDetails(@Request() req, @Param('id') worldId: string) {
    return this.worldsService.getWorldDetails(worldId, req.user.sub);
  }

  @Delete(':id')
  deleteWorld(
    @Param('id') worldId: string, 
    @Req() req: any) {
    // Pega o ID do usuário logado pelo token JWT
    const userId = req.user.sub || req.user.id; 
    // Chama a função do Service que você já tinha criado
    return this.worldsService.deleteWorld(worldId, userId);
  }
}
