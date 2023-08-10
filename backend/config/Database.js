 import { Sequelize } from "sequelize";

 const db = new Sequelize('upload_db','ridea','admin',{
    host : 'localhost',
    dialect: "mysql"
 })

 export default db;