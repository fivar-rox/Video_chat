$(document).ready(function(){
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');
});


$('.login-reg-panel input[type="radio"]').on('change', function() {
    if($('#log-login-show').is(':checked')) {
        $('.register-info-box').fadeOut(); 
        $('.login-info-box').fadeIn();
        
        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');
        
    }
    else if($('#log-reg-show').is(':checked')) {
        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();
        
        $('.white-panel').removeClass('right-log');
        
        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');
    }
});

// set up firebase
const firebaseConfig = {
    apiKey: "AIzaSyAleq14mqAPtFgT5hwZhIlGOimcmHHDUkg",
    authDomain: "noob-meet.firebaseapp.com",
    projectId: "noob-meet",
    storageBucket: "noob-meet.appspot.com",
    messagingSenderId: "37247110429",
    appId: "1:37247110429:web:9951dc18d29c5ada95e5f4",
    measurementId: "G-XXS6DCYNMQ"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

let loginBtn = document.getElementById("loginBtn");
let signupBtn = document.getElementById("signupBtn");

// login
loginBtn.addEventListener("click", async(e) => {
    e.preventDefault();
    const email = document.getElementById('login_email').value;
    const password = document.getElementById('login_password').value;

    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        window.location.href = '/main';
    })
    .catch((error) => {
        document.getElementById('login_email').value = "";
        document.getElementById('login_password').value = "";
        alert(error);
    });

});

// signup 
signupBtn.addEventListener("click", async(e) => {
    e.preventDefault();
    const email = document.getElementById('signup_email').value;
    const username = document.getElementById('signup_username').value;
    const password = document.getElementById('signup_password').value;

    const snapshot = await firestore.collection('users').where('username', '==', username).get();
    if (snapshot.empty) {
    
        auth.createUserWithEmailAndPassword(email, password)
        .then( (userCredential) => {
            // store username email to the database
            const user = userCredential.user;
            const currentUser = firestore.collection('users').doc(`${user.uid}`);
            const snapshot = currentUser.get();
            if (!snapshot.exists) {
                try {
                    currentUser.set({ email, username, password });
                } 
                catch (error) {
                    console.log(error);
                }
            }
            
            setTimeout(() => { window.location.href = '/main'}, 2000);  
            document.getElementById('signup_email').value = "";
            document.getElementById('signup_username').value = "";
            document.getElementById('signup_password').value = "";

        })
        .catch((error) => {
            document.getElementById('signup_email').value = "";
            document.getElementById('signup_username').value = "";
            document.getElementById('signup_password').value = "";
            alert(error);
        });
    }
    else {
        document.getElementById('signup_email').value = "";
        document.getElementById('signup_username').value = "";
        document.getElementById('signup_password').value = "";
        alert('Username already in use');
    }    
       
});


