import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAm_-art5yl9HCJTTSY6ZZ-qdBwMsCiKbA",
  authDomain: "rotarybonsventos-staging.firebaseapp.com",
  projectId: "rotarybonsventos-staging",
  storageBucket: "rotarybonsventos-staging.firebasestorage.app",
  messagingSenderId: "78434534965",
  appId: "1:78434534965:web:3678ed5e77444fd46c937c",
  measurementId: "G-BM9B7NM0LC"
};

const app = initializeApp(firebaseConfig);
export { app };
