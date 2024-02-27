import { ApiProperty } from '@nestjs/swagger';
import { Article } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';

export class ArticleEntity implements Article {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  body: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty({ default: false })
  published: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  authorId: string;
}

export class ArticleEntityWithAuthor extends ArticleEntity {
  @ApiProperty({ type: UserEntity })
  author: UserEntity;

  constructor({ author, ...data }: Partial<ArticleEntityWithAuthor>) {
    super();
    Object.assign(this, data);

    if (author) {
      this.author = new UserEntity(author);
    }
  }
}
