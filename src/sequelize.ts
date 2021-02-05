import { config } from './config/config';
import {Sequelize} from 'sequelize-typescript';

const c = config.dev;

export const sequelize = new Sequelize(c.database, c.username, c.password, {
    host: c.host,
    dialect: "mysql",
});
