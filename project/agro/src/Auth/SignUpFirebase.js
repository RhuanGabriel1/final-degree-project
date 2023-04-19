import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

class SignUp {
    static signUp(email, password) {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password);
    }
}

export default SignUp;
