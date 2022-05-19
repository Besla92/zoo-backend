import { Router } from "express";
import { 
    getAllAnimals,
    getSingleAnimal
} from "../controllers/animalsController.js";

const animalsRouter = Router();

//An der Route /api/users wollen wir get & post akzeptieren
animalsRouter.route("/").get(getAllAnimals);

animalsRouter.route("/:id").get(getSingleAnimal);

export default animalsRouter;

