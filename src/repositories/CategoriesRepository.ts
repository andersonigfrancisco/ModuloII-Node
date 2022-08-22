import { Category } from "../model/Category";



//DTO Data transfer object
interface ICreateCategoryDTO{
  name:string;
  description:string;
}



export class CategoriesRepository{

  private categories:Category[];

  constructor(){
    this.categories = [];
  }

  create({name,description}:ICreateCategoryDTO):Category{

    const categorie = new Category();

    Object.assign(categorie,{
      name,
      description,
      created_at:new Date()
    })
  
    this.categories.push(categorie)

    return categorie;
  }

  list():Category[]{

    return this.categories;
  }

  findByName(name:string):Category{

    const category = this.categories.find(category=>category.name===name);
    
    return category;
  }
}