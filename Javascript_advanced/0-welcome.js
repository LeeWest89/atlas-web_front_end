// displays 'Welcome' + firstName + lastName + !' when ran in consle after code and welcome(firstName, lastName) are entered

function welcome(firstName, lastName) {

    let fullName = firstName + ' ' + lastName;

    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }

    displayFullName();
}