import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

class ForgotPasswordFirebase {
    static resetPassword = async (email) => {
        try {
            return await sendPasswordResetEmail(getAuth(), email);
        } catch (error) {
            console.log('Erro ao enviar e-mail de redefinição de senha:', error);
        }
    }
}

export default ForgotPasswordFirebase;
