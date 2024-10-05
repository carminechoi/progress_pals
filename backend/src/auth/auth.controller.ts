import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('login')
  findAll(): string {
    return 'This action returns all cats';
  }
}
