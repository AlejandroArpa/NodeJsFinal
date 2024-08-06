import express from 'express';
import sequelize from './config/db';
import { config } from 'dotenv';
import {router} from './routes';
import { errorHandler } from './middlewares/errorHandler.middleware';
import swaggerUi from 'swagger-ui-express';
import  swaggerDocument from './swagger/swagger.json';

config();
const { PORT } = process.env;
const app = express();
app.use(express.json());
app.use("/api", router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(errorHandler);

const launchServer = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		
		app.listen(PORT, () => {
			console.log("Server running on port " + PORT);
		});
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

launchServer();