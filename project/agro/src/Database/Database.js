import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

export const insertData = async (newData, collectionName) => {
    try {
        const db = getFirestore();
        const collectionReference = collection(db, collectionName);
        await addDoc(collectionReference, newData);
        console.log('Documento adicionado com sucesso');
    } catch (error) {
        console.error('Erro ao adicionar documento: ', error);
        throw error;
    }
};

export const listenToData = async (collectionName) => {
    try {
        const db = getFirestore();
        const collectionReference = collection(db, collectionName);
        const snapshot = await getDocs(collectionReference);
        const data = snapshot.docs.map((doc) => doc.data());
        return data;
    } catch (error) {
        console.error('Erro ao obter documentos: ', error);
        throw error;
    }
};

export const stopListeningToData = (stop) => {
    stop();
};
