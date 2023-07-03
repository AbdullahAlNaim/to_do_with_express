const add = document.querySelector('#add')
let num = 0;
add.addEventListener('click', () => {
    num += 1;
    console.log(`pressed the button ${num} times.`);
})