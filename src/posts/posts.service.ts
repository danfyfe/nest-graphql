import { Injectable } from '@nestjs/common';
import { IPost } from './interfaces';
import { Post } from './post.model';

@Injectable()
export class PostsService {
  posts: IPost[] = [
    {
      title: 'title 1',
      content: 'content 1',
    },
    {
      title: 'title 2',
      content: 'content 2',
    },
  ];

  allPosts(): IPost[] {
    return this.posts;
  }

  insertPost(title: string, content: string): IPost[] {
    // console.log('title: ', title)
    const newPost: IPost = new Post(title, content);
    this.posts.push(newPost);
    return this.posts;
  }
}
