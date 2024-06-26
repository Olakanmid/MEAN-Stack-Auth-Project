import mongoose, {Schema} from "mongoose";

const UserSchema = mongoose.Schema(
    {
        FirstName:{
            type: String,
            required: true
        },
        

        LastName:{
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
        roles:{
            type: (Schema.Types.ObjectId),
            require: true,
            ref: "Role"
        }

        
    
    },
    {
        timestamps: true
    }
);

export default mongoose.model("User", UserSchema);