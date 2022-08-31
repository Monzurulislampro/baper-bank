// step one click handelar added
document.getElementById('btn-submit').addEventListener('click', function () {
    console.log('submit my button click');
})
const emailField = document.getElementById('user-email');
const email = emailField.value;
console.log(email);