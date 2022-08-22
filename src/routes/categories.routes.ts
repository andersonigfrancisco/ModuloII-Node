import { Router } from "express";
import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories:Category[] = [];

categoriesRoutes.post("/", (request, response) => {

  const { name, description } = request.body;

  const categorie = new Category();
  
  Object.assign(categorie,{
    name,
    description,
    created_at:new Date()
  })

  categories.push(categorie)

  return response.status(201).json({categorie,message:"sucesso!"});

});

export { categoriesRoutes };