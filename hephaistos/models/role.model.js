class Role{
    static toSqlTable(){
        return `
        CREATE TABLE ${Role.tableName} (
        id_role          int         PRIMARY KEY,
        rolename         varchar(80)
        )
        `
    }
}

/** @type {string}*/
Role.tableName = "Role"

 module.exports = Role