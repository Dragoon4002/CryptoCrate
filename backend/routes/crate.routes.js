import express from 'express';
import { getAllCrate, getOneCrate, deleteCrate } from '../controllers/crates.controller.js';

const crateRoute = express.Router();

crateRoute.get('/getallcrate',getAllCrate);

crateRoute.get('/getonecrate/:id',getOneCrate);

crateRoute.delete('/deletecrate/:id',deleteCrate);


export default crateRoute;