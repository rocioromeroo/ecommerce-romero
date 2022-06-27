import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOZkuGx2QjUZEHpWoD5zGmlnccu_mIKRo",
  authDomain: "coderhouse-ecommerse-442e8.firebaseapp.com",
  projectId: "coderhouse-ecommerse-442e8",
  storageBucket: "coderhouse-ecommerse-442e8.appspot.com",
  messagingSenderId: "1051436693772",
  appId: "1:1051436693772:web:5c67a70a674944c4f3b129"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const collectionsName = {
  products: 'products',
  orders: 'orders'
}