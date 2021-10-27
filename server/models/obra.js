import { User } from "models/user";
import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';
import Rdo from "./rdo.js";

const Obra = sequelize.define('obra',{
    idobra: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
     },
     name: {
        type: Sequelize.STRING
     },
     dtStart: {
        type: Sequelize.DATE,
        allowNull: false,
     },
     idContract: {
        type: Sequelize.INTEGER,
        allowNull: false,
     },
     deadline :{
         type : Sequelize.INTEGER,
         allowNull : false
     },
     dtEnd :{
      type : Sequelize.DATE
     },
     passDays :{
      type : Sequelize.INTEGER
     }
    });
    Obra.belongsTo(User, {
        foreignKey: "id",
        as: "idusers",
    });

    Obra.belongsToMany(Rdo, {
      through: "rdo_obra",
      as: "rdos",
      foreignKey: "idrdo",
    });
    
    export default Obra;