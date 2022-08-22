import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/UseCases/CreateCategory";


const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(response,request);
});

categoriesRoutes.get("/", (request, response) => {

  const all = categoriesRepository.list();

  return response.status(201).json(all);

});

export { categoriesRoutes };