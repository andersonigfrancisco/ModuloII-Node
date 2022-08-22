import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;

}

export class CreateCategoryService {

  constructor(private categoriesRepository: CategoriesRepository) {

  }

  execute({ name, description }: IRequest):void {

    const categoryAlreadExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadExists)
      throw new Error("Category Already Exists!");

    this.categoriesRepository.create({ name, description });
  }

}