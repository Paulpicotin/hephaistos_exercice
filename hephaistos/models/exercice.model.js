const PostgresStore = require ('../utils/PostgresStore.js')

class Exercice{
    static toSqlTable(){
        return `
        CREATE TABLE ${Exercice.tableName} (
        sequence_id     int     PRIMARY KEY,
        id_gpexos   INTEGER REFERENCES Groupe_dexercice(id_gpexos),
        title           varchar (80),
        lang            varchar(80),
        instructions    text,
        tests           text,
        solution        text
        )        
        `
    }    
    static async CreateExercice(exercice){        
        const result = await PostgresStore.pool.query ({
            text: ` INSERT INTO ${Exercice.tableName}
            (sequence_id, id_gexpos, title, lang, instructions, tests, solution)
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
            `,
            values : [exercice.sequence_id ,exercice.id_gexpos,exercice.title, exercice.lang, exercice.instructions, exercice.tests, exercice.solution]
        }) 
            return result.rows[0] 
    }
}


/** @type {string}*/
Exercice.tableName = "Exercice"

 module.exports = Exercice