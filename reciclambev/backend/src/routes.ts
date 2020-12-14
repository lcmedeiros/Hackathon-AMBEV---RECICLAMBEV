import { Router } from "express";
import { getRepository } from "typeorm";
import Orphanage from "./model/MarketPoint";

const routes = Router();

routes.post('/marketpoint', async (request, response)=> {
    const {
        name,
        latitude, 
        longitude,
        about,
        instructions, 
        opening_hours,
        open_on_weekends,
    } = request.body;
   
    const marketPointRepository = getRepository(Orphanage);
   
    const point = marketPointRepository.create({
       name,
       latitude, 
       longitude,
       about,
       instructions, 
       opening_hours,
       open_on_weekends,
    });
   
    await marketPointRepository.save(point);
   
    return response.status(201).json(point);
   })

   export default routes;