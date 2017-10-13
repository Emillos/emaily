const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = Schema({
	googleId: String
});

mongoose.model('users', userSchema)