const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	console.log('user serialized');
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id)
		.then(user => {
			console.log('user deserialized');
			done(null, user);
		});
});

passport.use(
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: '/auth/google/callback',
		proxy:true
	}, 
	(accessToken, refreshToken, profile, done) => {
		User.findOne({ googleId: profile.id })
			.then((existingUser) => {
				if(existingUser){
					console.log('user Was found!');
					done(null, existingUser);
				}
				else{
					console.log('new user will be created');
					new User({ googleId: profile.id }).save()
						.then(user => done(null, user));
				}
			})
	})
);