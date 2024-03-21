import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { IPost } from './interfaces';
import { PostsModule } from './posts.module';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService],
      imports: [PostsModule]
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('allPosts', () => {
    it('should return all posts', () => {
      const results: IPost[] = [
        {
          title: 'title 1',
          content: 'content 1',
        },
        {
          title: 'title 2',
          content: 'content 2',
        },
      ];
      const allPostResults = service.allPosts();
      expect(allPostResults).toStrictEqual(results);
    });
  });
});
