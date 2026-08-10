import { Controller, Get, Post, Body, Param, UseGuards, Request, Delete, Req, Patch } from '@nestjs/common';
import { WorldsService } from './worlds.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth-guard';
import { Role } from '@prisma/client';

@UseGuards(JwtAuthGuard)
@Controller('worlds')
export class WorldsController {
  constructor(private readonly worldsService: WorldsService) {}

  @Post('join')
  joinWorld(@Request() req, @Body('inviteCode') inviteCode: string) {
    return this.worldsService.joinWorld(req.user.sub, inviteCode);
  }

  @Get()
  getUserWorlds(@Request() req) {
    return this.worldsService.getUserWorlds(req.user.sub);
  }

  @Post()
  createWorld(@Request() req, @Body('name') name: string) {
    const userId = req.user.sub || req.user.id || req.user.userId;
    return this.worldsService.createWorld(userId, name);
  }

  @Get(':id')
  getWorldDetails(@Request() req, @Param('id') worldId: string) {
    return this.worldsService.getWorldDetails(worldId, req.user.sub);
  }

  @Delete(':id')
  deleteWorld(@Param('id') worldId: string, @Req() req: any) {
    const userId = req.user.sub || req.user.id;
    return this.worldsService.deleteWorld(worldId, userId);
  }

  // 1. Alterar o cargo de um membro
  @Patch(':worldId/members/:userId/role')
  updateMemberRole(
    @Param('worldId') worldId: string,
    @Param('userId') targetUserId: string,
    @Body('role') newRole: Role,
    @Request() req,
  ) {
    const requesterId = req.user.sub || req.user.id;
    return this.worldsService.updateMemberRole(worldId, targetUserId, newRole, requesterId);
  }

  // 2. Banir um membro
  @Post(':worldId/members/:userId/ban')
  banMember(
    @Param('worldId') worldId: string,
    @Param('userId') targetUserId: string,
    @Request() req,
  ) {
    const requesterId = req.user.sub || req.user.id;
    return this.worldsService.banMember(worldId, targetUserId, requesterId);
  }

  // 3. Desbanir um membro
  @Delete(':worldId/members/:userId/ban')
  unbanMember(
    @Param('worldId') worldId: string,
    @Param('userId') targetUserId: string,
    @Request() req,
  ) {
    const requesterId = req.user.sub || req.user.id;
    return this.worldsService.unbanMember(worldId, targetUserId, requesterId);
  }

  @Get(':worldId/banned')
  getBannedMembers(
    @Param('worldId') worldId: string,
    @Request() req,
  ) {
    const requesterId = req.user.sub || req.user.id;
    return this.worldsService.getBannedMembers(worldId, requesterId);
  }
}