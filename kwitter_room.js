
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnrGd9Rw1bV5i8MCyqF3wzf2GWOC4f3cI",
    authDomain: "kwitter-e71ec.firebaseapp.com",
    databaseURL: "https://kwitter-e71ec-default-rtdb.firebaseio.com",
    projectId: "kwitter-e71ec",
    storageBucket: "kwitter-e71ec.appspot.com",
    messagingSenderId: "1034126016143",
    appId: "1:1034126016143:web:7258762c603b30ac1cbafa"
  };
  
  firebase.initializeApp(firebaseConfig);

  // Initialize Firebase 
  //const app = initializeApp(firebaseConfig);
  // Import the functions you need from the SDKs you need
  //import { initializeApp } from "firebase/app";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  username=localStorage.getItem("username");
  document.getElementById("username").innerHTML = "";//"Welcome" + username + "!";
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
  console.log("roomname -" + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"
  document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
 
  
  
  
  function addroom() {
  
  roomname=document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(roomname).update({
    purpose: "adding room"
  });

  console.log("room added"); 
  localStorage.setItem("roomname", roomname);
  
  window.location = "kwitter_page.html"
  
  }
  
  function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomname", name);
  window.location ="kwitter_page.html"
  }
