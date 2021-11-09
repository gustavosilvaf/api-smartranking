import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './interfaces/player.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  async createAndUpdatePlayer(createPlayerDto: CreatePlayerDto): Promise<void> {
    this.create(createPlayerDto);
  }

  async getPlayers(): Promise<Player[]> {
    return this.getAllPlayers();
  }

  private create(createPlayerDto: CreatePlayerDto): void {
    const player: Player = {
      ...createPlayerDto,
      _id: uuid(),
      photoUrl: 'fakeUrl',
      rankingPosition: 0,
      ranking: 'A',
    };

    this.players.push(player);
  }

  private getAllPlayers(): Player[] {
    return this.players;
  }
}
