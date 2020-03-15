class RoleAccess{
    static toSqlTable(){
        return `
        CREATE TABLE ${RoleAccess.tableName} (
        id_role          INTEGER REFERENCES Role(id_role),
        droit            varchar(80)
        )
        `
    }
}

/** @type {string}*/
RoleAccess.tableName = "RoleAccess"

 module.exports = RoleAccess