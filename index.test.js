const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require('./db/connection.js');

describe('Social Sequelzie Test', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the test suite is run
        await sequelize.sync({ force: true });
    })

    // Write your tests here
    
    test("Can Create User", async function() {
        const testUser = await User.create({username: 'jalynguy', email: 'james.nguyen@fiserv.com' })
        expect(testUser.username).toBe(jalynguy);
    })

})