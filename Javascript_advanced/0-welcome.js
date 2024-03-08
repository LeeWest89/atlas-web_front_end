// displays 'Welcome' + firstName + lastName + !' when ran in consle after code and welcome(firstName, lastName) are entered

function welcome(firstName, lastName) {

    let name = firstName + ' ' + lastName;

    function displayFullName() {
        alert('Welcome ' + name + '!');
    }

    displayFullName();
}