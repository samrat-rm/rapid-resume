//saving new item  -> we create using the createContainer

import {
  doc,
  setDoc,
  getDocs,
  getDoc,
  collection,
  query,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../../../firebase.config";

export const saveUser = async (id, userData) => {
  await setDoc(doc(firestore, "users", id), userData);
};

// tutorial 04:23:00

export const getAllUsers = async () => {
  const items = await getDocs(query(collection(firestore, "users")));
  return items.docs.map((doc) => doc.data());
};

// here id is the 'key'
// updateObject is the fields that needs updating
// in dashboard assign this fuction to save button
export const updateUser = async (id, updateObject) => {
  await updateDoc(doc(firestore, "users", id), updateObject);
};

export const findUser = async (id) => {
  const ref = doc(firestore, "users", id);
  let user;
  const recieve = async (data) => {
    user = data;
  };
  await getDoc(ref).then((doc) => {
    recieve(doc.data());
  });
  return user;
};
