// Takes the number of students as an argument, then number of seats, then uses a closure to return the students array

function createClassRoom(numbersOfStudents) {

    function studentSeat(seat) {
        return function() {
            return (seat);
        };
    }
        const students = [];
        let i = 0;

        for (; i < numbersOfStudents; i++) {
            students.push(studentSeat(i + 1));
        }

        return (students);
}

let classRoom = createClassRoom(10);