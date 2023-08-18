// Initialize Firebase
const firebaseConfig = {
    apiKey: "26f86758182b40c4bd654c4fde1f89f8",
    authDomain: "fir-assessment-67948.firebaseapp.com",
    projectId: "fir-assessment-67948",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  function signIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User signed in
        console.log(userCredential.user);
        window.location.href = "main.html";
      })
      .catch((error) => {
        // Handle sign-in error
        console.log(error);
      });
  }
  function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User signed up
        console.log(userCredential.user);
        window.location.href = "main.html";
      })
      .catch((error) => {
        // Handle sign-up error
        console.log(error);
      });
  }
  
  