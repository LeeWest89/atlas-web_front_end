function welcome(firstName, lastName) {

    var name = firstName + ' ' + lastName;

    function displayFullName() {
        alert('Welcome ' + name + '!');
    }

    displayFullName();
}