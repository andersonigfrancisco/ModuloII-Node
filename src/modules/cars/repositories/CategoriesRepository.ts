import { Category } from "../model/Category";
import { ICategoriesRepositor, ICreateCategoryDTO } from "./ICategoriesRepositor";





export class CategoriesRepository implements ICategoriesRepositor{

  private static INSTANCE:CategoriesRepository;

  private categories:Category[];

  private constructor(){
    this.categories = [];
  }

  public static getInstance ():CategoriesRepository{

    if(!CategoriesRepository.INSTANCE){
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;

  } 

  create({name,description}:ICreateCategoryDTO):void{

    const categorie = new Category();

    Object.assign(categorie,{
      name,
      description,
      created_at:new Date()
    })
  
    this.categories.push(categorie)

  }

  list():Category[]{

    return this.categories;
  }

  findByName(name:string):Category{

    const category = this.categories.find(category=>category.name===name);

    return category;
  }

  
}