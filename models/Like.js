
const {db, DataTypes, Model} = require('../db/connection.js')

let Like = db.define('Like',{
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING
},
{
    sequlize: db,
    modelName: 'Like'
})
module.exports = Like;