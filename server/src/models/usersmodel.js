import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

//Create a DB Connection.

const User=sequelize.define('users',{
user_id:{
    autoincrement:true,
    type:Sequelize.INTEGER,
    allowNull:true,
    primaryKey:true

},
emailaddress:{
    type:Sequelize.STRING(255),
    allowNull:false,

},firstname:{
    type:Sequelize.STRING(255),
    allowNull:false,

},lastname:{
    type:Sequelize.STRING(255),
    allowNull:false,

},age:{
    type:Sequelize.STRING(255),
    allowNull:false,

},lastname:{
    type:Sequelize.STRING(255),
    allowNull:false,

}, password:{
    type:Sequelize.STRING(255),
    allowNull:false,

}

},{
    sequelize,
    tableName:'users',
    timestamps:false,
    indexes:[{
        name:"PRIMARY",
        unique:true,
        fields:[
            {name:"user_id"}
        ]
    }]
})

export default User;