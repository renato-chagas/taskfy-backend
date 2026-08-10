import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PollsService {
  constructor(private readonly prisma: PrismaService) {}

  async createPoll(userId: string, data: { question: string; worldId: string; options: string[] }) {
    return this.prisma.poll.create({
      data: {
        question: data.question,
        worldId: data.worldId,
        options: {
          create: data.options.map(text => ({ text })),
        },
      },
      include: { options: { include: { _count: { select: { votes: true } } } } },
    });
  }

  async getPollsByWorld(worldId: string) {
    return this.prisma.poll.findMany({
      where: { worldId },
      include: {
        options: {
          include: {
            _count: { select: { votes: true } },
            votes: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async deletePoll(pollId: string) {
    const poll = await this.prisma.poll.findUnique({ where: { id: pollId } });
    if (!poll) throw new NotFoundException('Enquete não encontrada.');

    return this.prisma.poll.delete({
      where: { id: pollId },
    });
  }

  async vote(userId: string, optionId: string) {
    const option = await this.prisma.pollOption.findUnique({
      where: { id: optionId },
      include: { poll: true },
    });

    if (!option) throw new NotFoundException('Opção não encontrada.');

    const existingVote = await this.prisma.vote.findFirst({
      where: {
        userId,
        option: { pollId: option.pollId },
      },
    });

    if (existingVote) {
      if (existingVote.optionId === optionId) {
        return this.prisma.vote.delete({ where: { id: existingVote.id } });
      }
      return this.prisma.vote.update({
        where: { id: existingVote.id },
        data: { optionId },
      });
    }

    return this.prisma.vote.create({
      data: { userId, optionId },
    });
  }
}