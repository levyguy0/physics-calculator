/*Weight = mg*/

let weightinput = document.querySelector('input')
let weightbtn = document.querySelector('.submitweight')
let weightmassinput = document.querySelector('.mass')
let weightgravityinput = document.querySelector('.gravity')

weightbtn.addEventListener('click', () => {
    weightinput.value = parseInt(weightmassinput.value, 10) * parseInt(weightgravityinput.value,10) + "N"
})

let massinput = document.querySelector('.mass')
let massbtn = document.querySelector('.submitmass')
let weightweightinput = document.querySelector('.weightinput')

massbtn.addEventListener('click', () => {
    massinput.value = parseInt(weightweightinput.value, 10) / parseInt(weightgravityinput.value,10) + "kg"
})

let gravityinput = document.querySelector('.gravity')
let gravitybtn = document.querySelector('.submitgravity')

gravitybtn.addEventListener('click', () => {
    gravityinput.value = parseInt(weightweightinput.value,10) / parseInt(weightmassinput.value,10) + "m/s^2"
})

/*-------------------------------------------------------------------------------------------------------*/

/*Moments*/

let momentinput = document.querySelector('.momentinput')
let momentbtn = document.querySelector('.submitmoment')
let momentforceinput = document.querySelector('.force')
let momentdistanceinput = document.querySelector('.distance')

momentbtn.addEventListener('click', () => {
    momentinput.value = parseInt(momentforceinput.value, 10) * parseInt(momentdistanceinput.value,10) + "Nm"
})

let forceinput = document.querySelector('.force')
let forcebtn = document.querySelector('.submitforce')

forcebtn.addEventListener('click', () => {
    forceinput.value = parseInt(momentinput.value, 10) / parseInt(momentdistanceinput.value,10) + "N"
})

let distanceinput = document.querySelector('.distance')
let distancebtn = document.querySelector('.submitdistance')

distancebtn.addEventListener('click', () => {
    distanceinput.value = parseInt(momentinput.value,10) / parseInt(momentforceinput.value,10) + "m"
})