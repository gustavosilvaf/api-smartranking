import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayersService } from './players.service';
import { Player } from './interfaces/player.interface';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async createAndUpdatePlayer(@Body() createPlayerDto: CreatePlayerDto) {
    await this.playersService.createAndUpdatePlayer(createPlayerDto);
  }

  @Get()
  async getPlayers(): Promise<Player[]> {
    return await this.playersService.getPlayers();
  }
}
