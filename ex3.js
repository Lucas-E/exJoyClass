const {Sequelize} = require("sequelize")

const sequelize = new Sequelize({
    dialect: 'mariadb',
    host: '127.0.0.1',
    database: 'softex',
    username: 'root',
    password: 'root'
})

async function connect(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connect()