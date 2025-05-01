import { openDB, DBSchema, IDBPDatabase } from "idb";
import { User } from "../types";

interface UserDB extends DBSchema {
  users: {
    key: number;
    value: User;
  };
}

export const DB_NAME = "UserDB";
export const STORE_NAME = "users";
const DB_VERSION = 1;

// Initialize or open the database
export const initDB = async (): Promise<IDBPDatabase<UserDB>> => {
  return openDB<UserDB>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    },
  });
};

// Add multiple users
export const addUsers = async (users: User[]): Promise<void> => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  const store = tx.store;
  for (const user of users) {
    if (user.id === undefined || user.id === null) {
      return;
    } else {
      await store.put(user);
    }
  }
  await tx.done;
};

// Get all users
export const getAllUsers = async (): Promise<User[]> => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};

// Clear all users (optional for refresh)
export const clearUsers = async (): Promise<void> => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.store.clear();
  await tx.done;
};
