
const {db, DataTypes, Model} = require('./db/connection.js')

class Comment extends Model{};

Comment.init({
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
},
{
    sequlize: db,
    modelName: 'Comment'
})
module.exports = Comment;