import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller('api/v1/players')
export class PlayersController {
  @Post()
  async createAndUpdatePlayer(@Body() createPlayerDto: CreatePlayerDto) {
    const { email } = createPlayerDto;
    return { email };
  }
}
