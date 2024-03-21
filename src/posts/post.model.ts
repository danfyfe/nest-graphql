// import { Entity } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;
}
