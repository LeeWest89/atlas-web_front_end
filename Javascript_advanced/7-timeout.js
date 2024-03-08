// Using the 4 commands to achieve the desired output

console.log('Start of the execution queue');

setTimeout(function() {
    console.log('Final code block to be executed');
});

let i = 1

while (i <= 100) {
    console.log(i);
    i++;
}

console.log('End of the loop printing');