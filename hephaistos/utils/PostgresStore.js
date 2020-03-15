const pgtools = require('pgtools')
const pg = require('pg')
const config = require('../server.config.js')
const myfile = require('./sample_exercises.json')
class PostgresStore {

    init() {
        this.pool = new pg.Pool(config.postgres)
    }
    close() {
        if (this.pool) this.pool.close()
        this.pool = null
    }
    async reset() {
        this.init()
        const conf = {
            user: config.postgres.user,
            host: config.postgres.host,
            password: config.postgres.password
        }
        try {
            await pgtools.dropdb(conf, config.postgres.database)
        } catch (err) {
            console.log("error but don't care", err)
        }
        await pgtools.createdb(conf, config.postgres.database)
        await this.buildTables()
        console.log('bravo! ça marche')
    }
    async buildTables() {
        const models = require('../models/model-by-name.js')
        for (const model of models) {
            const q = model.toSqlTable()
            if (Array.isArray(q)) {
                for (const query of q) {
                    console.log(query)
                    await this.pool.query(query)
                }
            } else {
                console.log(q)
                await this.pool.query(q)
            }
        }
    }
    async CreateSampleModulde() {
        const Module = require('../models/module.model.js')
        await Module.CreateModule("jean pierre pernot")
    }
    async CreateSampleGrupOfExercice() {
        const GroupeExercise = require('../models/groupeexercice.model.js')
        for (let i=0 ; i < myfile.length; i++){                 
            await GroupeExercise.CreateGroupeExercise(myfile[i])

        }
    }
    async CreateSampleExercices() {
        const Exercise = require('../models/exercice.model.js')
        for (let i=0; i<myfile.length; i++){
            for (let j= 0 ; j < myfile[i].exercises[j]; j++ ){
        await Exercise.CreateExercice(myfile[i].exercises[j].title)
            }
        }
    }
}
module.exports = new PostgresStore()
