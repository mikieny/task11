import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  async findFavorites(): Promise<Cat[]> {
    return this.catsRepository.find({ where: { isFavorite: true } });
  }

  async addFavorite(id: string): Promise<void> {
    const cat = await this.catsRepository.findOne(id);
    if (cat) {
      cat.isFavorite = true;
      await this.catsRepository.save(cat);
    }
  }

  async removeFavorite(id: string): Promise<void> {
    const cat = await this.catsRepository.findOne(id);
    if (cat) {
      cat.isFavorite = false;
      await this.catsRepository.save(cat);
    }
  }
}
