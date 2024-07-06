import express from 'express';
import { createRole, deleteRole, getAllRoles, updateRole } from '../controllers/role.controller.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

//create new role in DB
router.post('/create', verifyAdmin, createRole);

//Update role in DB
router.put('/update/:id', verifyAdmin, updateRole) 

export default router; 

//Get all roles from DB
router.get('/getAll', getAllRoles)

//Delete roles in DB
router.delete("/deleteRole/:id", deleteRole);

