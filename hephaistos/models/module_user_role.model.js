class ModuleUserRole{
    static toSqlTable(){
        return `
        CREATE TABLE ${ModuleUserRole.tableName} (
        id_user     INTEGER REFERENCES Users(id_user),
        id_module   INTEGER REFERENCES Module(id_module),
        id_role     INTEGER REFERENCES Role(id_role)         
        )
        `
    }
}

/** @type {string}*/
ModuleUserRole.tableName = "Module_User_Role"

 module.exports = ModuleUserRole