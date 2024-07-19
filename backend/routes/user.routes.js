import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser, getUserByAddress } from '../controllers/users.controller.js';

const userRoute = express.Router();

userRoute.post('/createuser',createUser);
userRoute.get('/getalluser',getAllUsers);
userRoute.get('/getoneuser/:id',getUserById);
userRoute.get('/getoneuserbyaddress/:id', getUserByAddress);
userRoute.put('/updateuser/:id',updateUser);
userRoute.delete('/deleteuser/:id',deleteUser);

export default userRoute;