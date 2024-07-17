import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
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

export const registerWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );

    const { uid, photoURL } = result.user;
    await updateProfile(FirebaseAuth.currentUser, { displayName }); //  funcion que loguea, en firebase

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    // aqui van las validaciones de los emsnajes de errro de firebase
    // console.error(error);
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );

    const { uid, photoURL } = result.user;

    return {
      ok: true,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    // aqui van las validaciones de los emsnajes de errro de firebase
    // console.error(error);
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};
