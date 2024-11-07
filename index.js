const { Comment, Like, Post, Profile, User } = require("./models/index");

// Define your associations here

// A User has one profile and vice versa
User.hasOne(Profile);
Profile.hasOne(User);

// A user can have many post
// but a post may only have one user
Post.belongsTo(User);
User.hasMany(Post);

// A post can have many comments
// but a comment may only have one post
Comment.belongsTo(Post);
Post.hasMany(Comment);

// A user can have many likes and vice versa
User.belongsToMany(Like, {through: 'user-like'});
Like.belongsToMany(User, {through: 'user-like'});


module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}

