import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  title: string;

  @IsString()
  @IsOptional()
  @MinLength(10)
  @ApiProperty({ required: false })
  description?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @ApiProperty()
  body: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: false })
  published?: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  authorId: string;
}
