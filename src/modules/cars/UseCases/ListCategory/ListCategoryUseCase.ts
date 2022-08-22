import { Category } from "../../model/Category";
import { ICategoriesRepositor } from "../../repositories/ICategoriesRepositor";



export class ListCategoryUseCase {

  constructor(private categoriesRepository: ICategoriesRepositor) {}

  execute():Category[] {

    const category = this.categoriesRepository.list();

    return category;
  }

}