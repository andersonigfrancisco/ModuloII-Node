import { ICategoriesRepositor } from "../repositories/ICategoriesRepositor";


interface IRequest {
  name: string;
  description: string;

}

export class CreateCategoryService {

  constructor(private categoriesRepository: ICategoriesRepositor) {

  }

  execute({ name, description }: IRequest):void {

    const categoryAlreadExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadExists)
      throw new Error("Category Already Exists!");

    this.categoriesRepository.create({ name, description });
  }

}