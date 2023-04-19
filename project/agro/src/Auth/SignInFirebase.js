import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

class SignIn {
    static signInEmail(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }
}

export default SignIn;
