const PostgresStore = require ('../utils/PostgresStore.js')

class Module{
    static toSqlTable(){
        return `
        CREATE TABLE ${Module.tableName} (
        id_module         int         PRIMARY KEY,
        name              varchar(80),
        creation_date      DATE,
        id_user           INTEGER REFERENCES Users(id_user)
        )
        `
    }
    static async CreateModule(module){
        const result = await PostgresStore.pool.query ({
            text: ` INSERT INTO ${Module.tableName}
            (name, creation_date)
            VALUES ($1, $2) RETURNING *
            `,
            values : [module.name, module.creation_date ]
        }) 
            return result.rows[0] 
    }
}

/** @type {string}*/
Module.tableName = "Module"

 module.exports = Module