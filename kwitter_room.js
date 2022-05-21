// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDSViFJ9VSploP3ZX1NDDrzyTjEoCW8A2o",
      authDomain: "kwitter-last-f141d.firebaseapp.com",
      databaseURL: "https://kwitter-last-f141d-default-rtdb.firebaseio.com",
      projectId: "kwitter-last-f141d",
      storageBucket: "kwitter-last-f141d.appspot.com",
      messagingSenderId: "137227252162",
      appId: "1:137227252162:web:0f4ce9eea2f4a83b9ea65b"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " +user_name+"!";
function addRoom (){
      room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}