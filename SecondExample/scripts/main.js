document.body.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const color = getColor(event);

    document.body.style.backgroundColor = color;
})

const getColor = (e) => {
    if (e.x % 2 === 0) {
        if (e.y % 2 === 0) {
            return "red";
        } else {
            return "green";
        }

    } else {
        if (e.y % 2 === 0) {
            return "green"
        } else {
            return "blue";
        }
    }
}