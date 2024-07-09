import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleAuthProvider = new GoogleAuthProvider();
export const singInWithGoogl = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleAuthProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    // console.error(error);
    const errorMessage = error.message;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

    return {
      ok: false,
      errorMessage,
      credential,
    };
  }
};
