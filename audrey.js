console.log('Hello, World!');

const audrey = document.getElementById("audrey");
const container = document.getElementById('container');
console.log(audrey);
console.log(container);

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function (event) {
    let widthParam = (window.scrollY / 3) * 5;
    let heightParam = (window.scrollY / 4) * 5;
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    if (widthParam >= 50) {
        audrey.style.width = `${widthParam}px`;
    }
    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
    if (heightParam >= 100) {
        audrey.style.height = `${heightParam}px`;
    }
})