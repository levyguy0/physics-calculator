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

//-----------------------------------------------------------------------------------------------------------------------------------------

//Motion: v^2 - u^2 = 2as
//v^2-2as = u^2
//a = v^2 - u^2/2s
//s = v^2-u^2/2a

let finalvinput = document.querySelector('.finalvinput')
let finalvbtn = document.querySelector('.submitfinalvelocity')
let initialvinput = document.querySelector('.initialvinput')
let initialvbtn = document.querySelector('.submitinitialvelocity')

let accelinput = document.querySelector('.accelerationinput')
let accelbtn = document.querySelector('.submitacceleration')
let motiondistanceinput = document.querySelector('.motiondistanceinput')
let motiondistancebtn = document.querySelector('.submitmotiondistance')

finalvbtn.addEventListener('click', () =>{
    finalvinput.value = (2 * parseInt(accelinput.value, 10) * parseInt(motiondistanceinput.value, 10)) + (parseInt(initialvinput ** 2, 10)) + "m/s"
})

initialvbtn.addEventListener('click', () =>{
    initialvinput.value = (parseInt(finalvinput.value ** 2, 10)) - (2 * parseInt(accelinput.value, 10) * parseInt(motiondistanceinput.value, 10)) + "m/s"
})


accelbtn.addEventListener('click', () =>{
    accelinput.value = (parseInt(finalvinput.value ** 2, 10) - parseInt(initialvinput.value **2, 10)) / (2 * parseInt(motiondistanceinput.value, 10)) + "m/s^2"
})

motiondistancebtn.addEventListener('click', () => {
    motiondistanceinput.value = (parseInt(finalvinput.value ** 2, 10) - parseInt(initialvinput.value **2, 10)) / (2 * parseInt(accelinput.value, 10)) + "m"
})

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Momentum: P = mv

let momentuminput = document.querySelector('.momentuminput')
let momentumbtn = document.querySelector('.submitmomentum')
let momentumMassInput = document.querySelector('.momentum-mass-input')
let momentumMassBtn = document.querySelector('.submit-momentum-mass')
let momentumVelocityInput = document.querySelector('.momentum-velocity-input')
let momentumVelocityBtn = document.querySelector('.submit-momentum-velocity')

momentumbtn.addEventListener('click', () => {
    momentuminput.value = parseInt(momentumMassInput.value, 10) * parseInt(momentumVelocityInput.value, 10)
})

momentumMassBtn.addEventListener('click', () =>{
    momentumMassInput.value = parseInt(momentuminput.value, 10) / parseInt(momentumVelocityInput.value, 10)
})

momentumVelocityBtn.addEventListener('click', () =>{
    momentumVelocityInput.value = parseInt(momentuminput.value, 10) / parseInt(momentumMassInput.value, 10)
})