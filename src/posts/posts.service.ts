import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  allPosts(): { title: string; content: string } {
    return {
      title: 'title',
      content: 'content',
    };
  }
}
