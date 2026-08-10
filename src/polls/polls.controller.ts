import { Controller, Get, Post, Delete, Body, Param, UseGuards, Request, Query } from '@nestjs/common';
import { PollsService } from './polls.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth-guard';

@UseGuards(JwtAuthGuard)
@Controller('polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) {}

  @Post()
  create(@Request() req, @Body() body: any) {
    return this.pollsService.createPoll(req.user.sub, body);
  }

  @Get()
  findAll(@Query('worldId') worldId: string) {
    return this.pollsService.getPollsByWorld(worldId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pollsService.deletePoll(id);
  }

  @Post(':optionId/vote')
  vote(@Request() req, @Param('optionId') optionId: string) {
    return this.pollsService.vote(req.user.sub, optionId);
  }
}