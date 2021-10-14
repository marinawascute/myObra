import { Sequelize  } from "sequelize";

const sequelize = new Sequelize('myobradb','root','33261499',{
    dialect : 'mysql',
    host : 'localhost',
    define: {
        timestamps: false
    }
});

export default sequelize;