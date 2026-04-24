// B. Perron
// 4/24/26
// EVIDENCE: JS Functions

const resultText = document.getElementById("result") // Used to display final answer

const greeting = 'Greetings, Earthling!';
console.log(greeting);


function setResultText(text, error) {
    if (error) {
        resultText.style.color = "red";
    } else {
        resultText.style.color = "black";
    }

    resultText.textContent = text;
} // setResultText End


function getBaseLength() {
    const baseLength = parseFloat(prompt("Enter the base length: (E.g. 5)"));
    
    if (baseLength < 0) { // Height cannot be below zero
        alert("Base length cannot be below zero!");
    }

    return baseLength
} // getBaseLength End


function getHeight() {
    const height = parseFloat(prompt("Enter the height: (E.g. 10)"));
    
    if (height < 0) { // Height cannot be below zero
        alert("Height cannot be below zero!");
    }

    return height;
} // getHeight End


function calcTriangleArea(base, height) {
    return (base * height) / 2;
} // calcTriangleArea End



const triangleArea = calcTriangleArea(getBaseLength(), getHeight());

if (triangleArea) {
    setResultText(`The area of your right triangle is ${triangleArea}`, false);
} else {
    setResultText(`The operation failed!`, true); // One of the numbers was probably empty
} 






