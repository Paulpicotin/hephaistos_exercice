class User{
    static toSqlTable(){
        return `
        CREATE TABLE ${User.tableName} (
        id_user          int         PRIMARY KEY,
        firstName   varchar(80),
        lastName    varchar(80),
        email       varchar(80),
        password    varchar(80) 
        )
        `
    }
}

/** @type {string}*/
User.tableName = "Users"

 module.exports = User