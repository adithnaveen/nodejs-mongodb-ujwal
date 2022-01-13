import mongoose from 'mongoose';


const Schema = mongoose.Schema; 

export const EmployeeSchema = new Schema ( {
    firstName: {
        type:String, 
        required: "Please Enter first name"
    }, 
    lastName : {
        type:String, 
        required :"Please enter last name"
    }, 
    password:  String

});