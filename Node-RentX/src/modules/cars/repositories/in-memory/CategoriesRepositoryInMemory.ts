import { Category } from '../../entities/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  // Parei aos 31 min bau

  create({ name, description }: ICreateCategoryDTO): Promise<void> {
    return Promise.resolve(undefined);
  }

  findByName(Name: string): Promise<Category> {
    return Promise.resolve(undefined);
  }

  list(): Promise<Category[]> {
    return Promise.resolve([]);
  }
}
