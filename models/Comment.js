
const {db, DataTypes, Model} = require('../db/connection')


let Comment = db.define("Comment",{
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
},
{
    sequlize: db,
    modelName: 'Comment'
})
module.exports = Comment;