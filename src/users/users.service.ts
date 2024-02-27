import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const hashPassword = await argon2.hash(createUserDto.password);
    createUserDto.password = hashPassword;
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const hashPassword = await argon2.hash(updateUserDto.password);
    updateUserDto.password = hashPassword;
    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
