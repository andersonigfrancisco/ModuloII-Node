import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/Services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {

  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description })

  return response.status(201).json({ message: "sucesso!" });

});

categoriesRoutes.get("/", (request, response) => {

  const all = categoriesRepository.list();

  return response.status(201).json(all);

});

export { categoriesRoutes };