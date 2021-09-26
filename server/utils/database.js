import { Sequelize  } from "sequelize";

const sequelize = new Sequelize('myobradb','root','33261499',{
    dialect : 'mysql',
    host : 'localhost'
});

export default sequelize;