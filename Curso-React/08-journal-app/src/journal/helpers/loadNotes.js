import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

export const loadNotes = async (uid = '') => {
  const notes = [];
  if (!uid) throw new Error('El UID edl usuario no existe');
  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);

  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });
  // console.log(notes);
  return notes;
};
