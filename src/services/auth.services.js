import passport from 'passport';
import User from "../modules/users/user.model";
import LocalStrategy from 'passport-local';
const localOpts = {
    usernameField:'email',
};

const localStrategy = new LocalStrategy(localOpts, 
    async(email,password,done)=>{
    try{
        const user = await User.findOne({email});
        if(!user){
            return done(null, false)
        }else if(!user.authenticateUser(password)){
            return done(null,false)
        }
        return done(null,"successfully Login");
    }catch(e){
        return done(e,false)
    }

    
})


passport.use(localStrategy);

export const authLocal = passport.authenticate('local', {session:false})