import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from './items.service'; // Correct relative path
import { getRepositoryToken } from '@nestjs/typeorm';
import { Item } from './items.entity';
import { Repository } from 'typeorm';

describe('ItemsService', () => {
  let service: ItemsService;
  let repository: Repository<Item>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: getRepositoryToken(Item),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ItemsService>(ItemsService);
    repository = module.get<Repository<Item>>(getRepositoryToken(Item));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Add more tests here
});
