const User = require('./user.model.js')
const Role = require('./role.model.js')
const Module = require('./module.model.js')
const RoleAccess = require ('./roleAccess.model.js')
const ModuleUserRole = require('./module_user_role.model.js')
const GroupeExercice = require ('./groupeexercice.model.js')
const Exercie = require ('./exercice.model.js')
const Tentatives = require('./Tentatives.model.js')

module.exports = [
    User,
    Role,
    Module,
    RoleAccess,
    ModuleUserRole,
    GroupeExercice,
    Exercie,
    Tentatives
]