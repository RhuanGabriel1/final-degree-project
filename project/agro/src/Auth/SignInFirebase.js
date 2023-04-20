import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

class SignIn {
    static signInEmail(email, password) {
        // const auth = getAuth();
        return signInWithEmailAndPassword(getAuth(), email, password);
    }
}

export default SignIn;
