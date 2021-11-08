import { Controller, Post } from '@nestjs/common';

@Controller('api/v1/players')
export class PlayersController {
  @Post()
  async createAndUpdatePlayers() {
    return JSON.stringify({
      nome: 'Gustavo',
    });
  }
}
