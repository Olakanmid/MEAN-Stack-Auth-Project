import mongoose, {Schema} from "mongoose";



const UserSchema = mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true
        },
        

        lastName:{
            type: String,
            required: true
        },
        

        username:{
            type: String,
            required: true,
            unique: true
        },
         

        email:{
            type: String,
            required: true,
            unique: true
        },

        password:{
            type: String,
            required: true,
        },

        profileImage:{
            type: String,
            required: false,
            default: "https://images.app.goo.gl/ECc6S5xCscFTQSBY6"
        },

        isAdmin:{
            type: Boolean,
            default: false,
            //will add role
        },

        roles: [{ type: Schema.Types.ObjectId, ref: 'Role' }]
    },
    {
        timestamps: true
    }
);


export default mongoose.model("User", UserSchema);  