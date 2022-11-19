let weightinput = document.querySelector('input')
let weightbtn = document.querySelector('.submitweight')
let weightmassinput = document.querySelector('.mass')
let weightgravityinput = document.querySelector('.gravity')

weightbtn.addEventListener('click', () => {
    weightinput.value = parseInt(weightmassinput.value, 10) * parseInt(weightgravityinput.value,10)
})

let massinput = document.querySelector('.mass')
let massbtn = document.querySelector('.submitmass')
let weightweightinput = document.querySelector('.weightinput')

massbtn.addEventListener('click', () => {
    massinput.value = parseInt(weightweightinput.value, 10) / parseInt(weightgravityinput.value,10)
})

let gravityinput = document.querySelector('.gravity')
let gravitybtn = document.querySelector('.submitgravity')

gravitybtn.addEventListener('click', () => {
    gravityinput.value = parseInt(weightweightinput.value,10) / parseInt(weightmassinput.value,10)
})

