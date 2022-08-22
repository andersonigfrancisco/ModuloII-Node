import { Router } from "express";
import { createCategoryController } from "../modules/cars/UseCases/CreateCategory";
import { listCatetegoryController } from "../modules/cars/UseCases/ListCategory";


const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(response,request);
});

categoriesRoutes.get("/", (request, response) => {

 return listCatetegoryController.handle(response,request);

});

export { categoriesRoutes };