import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthEntity } from './entities/auth.entity';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new NotFoundException(`User with email : ${email} not found`);
    }

    const isMatch = await argon2.verify(user.password, password);

    if (!isMatch) {
      throw new UnauthorizedException(`Invalid password`);
    }

    return {
      accessToken: this.jwt.sign({ userId: user.id }),
    };
  }
}
