
const {db, DataTypes, Model} = require('./db/connection.js')

class Like extends Model{};

Like.init({
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING
},
{
    sequlize: db,
    modelName: 'Like'
})
module.exports = Like;