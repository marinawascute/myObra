import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';

const User = sequelize.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
     },
     email: {
        type: Sequelize.STRING,
        allowNull: false,
     },
     name: {
        type: Sequelize.STRING,
     },
     password: {
        type: Sequelize.STRING,
        allowNull: false,
     },
     cpf :{
         type : Sequelize.INTEGER,
         allowNull : false
     },
     isAdmin:{
      type: Sequelize.STRING,
      defaultValue: false,
      allowNull : false
     }
    });
    export default User;