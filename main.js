let num1 = 0
let num2 = 0

const elem1 = document.querySelector(".btn1")
const elem2 = document.querySelector(".btn2")
const elem3 = document.querySelector(".btn3")

let zero1 = document.querySelector(".one")
let zero2 = document.querySelector(".three")

elem1.addEventListener("click", () => {
    num1 = num1 + 1
    zero1.textContent = num1
})

elem2.addEventListener("click", () => {
    num2 = num2 + 1
    zero2.textContent = num2
} )

elem3.addEventListener("click", () => {

    console.log("0")

    num1 = 0
    num2 = 0
    zero1.textContent = num1
    zero2.textContent = num2

})