import { Category } from "../model/Category";
import { ICategoriesRepositor, ICreateCategoryDTO } from "./ICategoriesRepositor";


class PostgreeCategoriesRepositor implements ICategoriesRepositor{

  findByName(name: string): Category {
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({name, description}:ICreateCategoryDTO): void {
    console.log(name,description)
  }
}