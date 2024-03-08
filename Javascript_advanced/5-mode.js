//

function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const p = document.createElement('p');
    p.innerText = 'Welcome Holberton!';
    document.body.append(p);

    const sButton = document.createElement('button');
    sButton.innerText = 'Spooky';
    sButton.addEventListener('click', spooky);
    document.body.append(sButton);

    const darkButton = document.createElement('button');
    darkButton.innerText = 'Dark mode';
    darkButton.addEventListener('click', darkMode);
    document.body.append(darkButton);

    const screamButton = document.createElement('button');
    screamButton.innerText = 'Scream mode';
    screamButton.addEventListener('click', screamMode);
    document.body.append(screamButton);
}

main();