import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { IPost } from './interfaces';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // @Get()
  // getPosts(): IPost[] {
  //   return this.postsService.allPosts();
  // }

  // @Post()
  // addPost(
  //   @Body('title') title: string,
  //   @Body('content') content: string,
  // ): IPost[] {
  //   return this.postsService.insertPost(title, content);
  // }
}
