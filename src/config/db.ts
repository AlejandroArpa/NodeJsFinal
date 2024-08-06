import { Sequelize } from "sequelize-typescript";
import { config } from "dotenv";
import { Products, Users, Carts, Orders, Permissions, ProductsCarts, Roles } from '../models'

config();
const { DB_NAME, DB_USER, DB_HOST} = process.env;

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: DB_HOST,
    username: DB_USER,
    // password: 'Rlwl2023.',
    database: DB_NAME,
    port:3306,
    models: [Products, Users, Carts, Orders, Permissions, ProductsCarts, Roles],
    define: {
        underscored: true
    }
});

export default sequelize;