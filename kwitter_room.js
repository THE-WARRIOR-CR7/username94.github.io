

 var firebaseConfig = {
      apiKey: "AIzaSyAj3lwkdSWYjMkH1V82kADz-EgJQWxVP3o",
      authDomain: "notebook-project-916a6.firebaseapp.com",
      databaseURL: "https://notebook-project-916a6-default-rtdb.firebaseio.com",
      projectId: "notebook-project-916a6",
      storageBucket: "notebook-project-916a6.appspot.com",
      messagingSenderId: "144298200368",
      appId: "1:144298200368:web:f428059d83a5fe17004cf5",
      measurementId: "G-P0ZC3KVYRJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
