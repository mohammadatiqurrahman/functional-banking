document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const  userPassword = passwordField.value;

    if(userEmail == 'atikcse42@gmail.com' && userPassword == 'Secret'){
        window.location.href = 'transaction.html'
    }
    // console.log('btn click!');
})

