const PostgresStore = require ('../utils/PostgresStore.js')

class GroupeExercice{
    static toSqlTable(){
        return `
        CREATE TABLE ${GroupeExercice.tableName} (
        id_gpexos      int     PRIMARY KEY,
        id_module   INTEGER REFERENCES Module(id_module),
        name            varchar(80)
        )
        `
    }

    static async CreateGroupeExercise(GroupeExercice){
        const result = await PostgresStore.pool.query ({
            text: ` INSERT INTO ${GroupeExercice.tableName}
            (id_gexpos , id_module , name)
            VALUES ($,$2, $3) RETURNING * 
            `,
            values : [GroupeExercice.id_gpexos , GroupeExercice.id_module ,GroupeExercice.name]
        }) 
            return result.rows[0] 
    }
}

/** @type {string}*/
GroupeExercice.tableName = "Groupe_dexercice"

 module.exports = GroupeExercice