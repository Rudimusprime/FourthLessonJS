document.body.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    let color = "";
    if (x % 2 && y % 2 === 0)
        color = `rgb(255,0,0)`;

    if (x % 2 && y % 2 !==0)
        color = `rgb(0,0,255)`;

    if (x % 2 || y % 2 === 0)
        color = `rgb(0,255,0)`;

    document.body.style.backgroundColor = color;
})