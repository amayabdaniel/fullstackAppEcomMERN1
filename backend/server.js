const app = require('./app');
const connectDatabase = require('./config/database');

const dotenv = require('dotenv')

// Setting config file
dotenv.config({path: 'backend/config/config.env'})

// Connect to database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})