const firebaseConfig = {
    apiKey: "AIzaSyA2xvBqzuFFtNfMbcRlLiOzn6xZn50iQqw",
    authDomain: "letschatwebpage-76fff.firebaseapp.com",
    projectId: "letschatwebpage-76fff",
    storageBucket: "letschatwebpage-76fff.appspot.com",
    messagingSenderId: "970307003943",
    appId: "1:970307003943:web:d11108c3232638fa021002"
  };

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("username").innerHTML="Welcome "+user_name+"!";
