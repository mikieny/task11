import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Post('favorites/:id')
  addFavorite(@Param('id') id: string) {
    return this.catsService.addFavorite(id);
  }

  @Delete('favorites/:id')
  removeFavorite(@Param('id') id: string) {
    return this.catsService.removeFavorite(id);
  }

  @Get('favorites')
  findFavorites() {
    return this.catsService.findFavorites();
  }
}
