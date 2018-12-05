let mongoose = require('mongoose');

const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

const connStr = `mongodb://@localhost:27017/uenr-passco`;

class Database {

    constructor() {
        this.connect()
    }

    // Connect to MongoDB database
    connect() {
        mongoose.connect(connStr, { useNewUrlParser: true})
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.log(err)
            })
    }
}
module.exports = new Database()