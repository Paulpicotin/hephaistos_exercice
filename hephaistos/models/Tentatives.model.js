class Tentatives{
    static toSqlTable(){
        return `
        CREATE TABLE ${Tentatives.tableName} (
        sequence_id   INTEGER REFERENCES Exercice(sequence_id),
        id_user INTEGER REFERENCES Users(id_user),
        reussite    bool,
        date        date 
        )
        `
    }
}

/** @type {string}*/
Tentatives.tableName = "Tentatives"

 module.exports = Tentatives