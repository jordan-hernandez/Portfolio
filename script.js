let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick= () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

document.querySelector("form")
.addEventListener("submit",e=>{
    e.preventDefault()
    const data= Object.fromEntries()
    new FormData(e.target)
})