import app from "./app";
import routes from "./routes/routes";
import connection from "./db_connection/mongodb/connection";
import config from "./config/config";
import errorMiddleware from "./middlewares/web_server/error-middleware";
import serverConfig from "./server";

// Routes for each endpoint
routes(app);

// Database connection
connection(config).connectToMongo();

// Use the error handling middleware
app.use(errorMiddleware);

// Start server
serverConfig(app, config).startServer();
