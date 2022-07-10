const btn = document.getElementById('submit');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(() => {
            alert("Account created!");
            window.location.assign("index.html");
        })
        .catch(err => window.alert(err.message));
})