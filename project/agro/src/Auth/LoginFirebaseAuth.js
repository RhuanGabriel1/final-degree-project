import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

class Auth {
    static signIn(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    static signUp(email, password) {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password);
    }
}

export default Auth;
