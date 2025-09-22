require('dotenv').config();
const mariadb = require('mariadb');

const pool = mariadb.createPool({
     host: process.env.DB_HOST, 
     user: process.env.DB_USER, 
     password: process.env.DB_PASSWORD,
     connectionLimit: 20,
     database: process.env.DB_NAME
});

module.exports = {
  
  async run(query) {
    
    return new Promise((resolve)=> {
       pool.getConnection()
            .then(conn => {
            
              conn.query(query)
                .then((rows) => {
                  resolve(rows);
                  
                })
                .catch(err => {
                  console.log(err); 
                  conn.end();
                  
                })
                
            }).catch(err => {
              //not connected
              
            });
    })
  }

}