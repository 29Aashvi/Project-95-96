const firebaseConfig = {
      apiKey: "AIzaSyBe-vtO9glUeV9Ti0i2-M_Pbv7bFU3P-fs",
      authDomain: "kwitter-6eb64.firebaseapp.com",
      databaseURL: "https://kwitter-6eb64-default-rtdb.firebaseio.com",
      projectId: "kwitter-6eb64",
      storageBucket: "kwitter-6eb64.appspot.com",
      messagingSenderId: "681946603770",
      appId: "1:681946603770:web:5d342d33a90c69f7bda943",
      measurementId: "G-B631YHQ2YE"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //ADD YOUR FIREBASE LINKS HERE
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
         
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr> <br>";
    document.getElementById("output").innerHTML=row;
    
          //End code
          });});}
    getData();
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    
    function addRoom(){
          room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding room name"
          });
    
          localStorage.setItem("room_name", room_name);
          window.location="chat_page.html";
    }
    
    function redirectToRoomName(name){
    localStorage.setItem("room_name", name);
    window.location="chat_page.html";
    }
    
    function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="login.html";
    }