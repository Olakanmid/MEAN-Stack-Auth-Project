import Role from "../models/Role.js"
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { CreateSuccess } from "../utils/success.js";
import { CreateError } from "../utils/error.js";

export const register = async (req, res, next)=>{
    const role = await Role.find({role: 'User'});
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt); 
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
        roles: role
       
    });
    await newUser.save();
    return next(CreateSuccess(200,"User Registered Successfully!" ));
}

export const login = async (req, res, next)=>{
    try {
        const user = await User.findOne({email: req.body.email})
        .populate("roles", "role");


        const { roles } = user;

        if(!user){
            return res.status(404).send("User Not Found!");
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).send("Password Incorrect!");
        }
        const token = jwt.sign(
            {id: user._id, isAdmin: user.isAdmin, roles: roles},
            process.env.JWT_SECRET
        )
        res.cookie("access_token", token, {httpOnly: true})
        .status(200)
        .json({
            status: 200,
            message: "Login Sucess!",
            data: user
        })
    } catch (error) {
      return res.status(500).send("Something Went Wrong!");
    } 
}