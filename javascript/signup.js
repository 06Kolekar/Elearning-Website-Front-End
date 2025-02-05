function showLogin(){
    event.preventDefault();
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registrationForm').classList.add('hidden');
}

function showRegistration(){
    event.preventDefault();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registrationForm').classList.remove('hidden');
}

function isPhoneNumber(event){
    const char = String.fromCharCode(event.which);
    const regex = /^[0-9]+$/;
    return regex.test(char);
}