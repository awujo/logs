const btn = document.getElementById('login');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email,password)
        .then(() => {
            alert("Login successful!");
            window.location.assign("dashboard.html");
        })
        .catch(err => window.alert(err.message));
})