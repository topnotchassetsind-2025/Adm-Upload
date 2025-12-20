
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBw-GkA1uZIr0b8IzTrdADHZjUKCj2SpS4",
    authDomain: "topnotch-assets.firebaseapp.com",
    projectId: "topnotch-assets",
  };

  const app = initializeApp(firebaseConfig);
  window.db = getFirestore(app);

