require("dotenv").config();

module.exports = {
  mongoURI: `mongodb+srv://Maja:${process.env.DB_PASSWORD}@test1-ci6xu.mongodb.net/test?retryWrites=true&w=majority`
};
