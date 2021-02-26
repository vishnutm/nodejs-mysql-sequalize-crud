
module.exports = {

    HOST: process.env.HOST,
    
    USER: process.env.DBUSER,
    
    PASSWORD: process.env.PASSWORD,
    
    DB:process.env.DB,
    
    dialect: process.env.dialect,
    
    pool: {
    
    max: 5, // maximum number of connections permissible in a pool
    
    min: 0, // minimum number of connections permissible in a pool
    
    acquire: 30000, //  maximum time, in terms of milliseconds, that the pool seeks to make the connection before an error message pops up on screen
    
    idle: 10000 // maximum time, in terms of milliseconds, that a connection can be held idly before being released
    
    }
    
    };