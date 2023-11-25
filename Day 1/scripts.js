// let value_from_input = prompt('Nhập điểm của bạn vào đây');
// let h2 = document.createElement('h2');

// if (isNaN(value_from_input)) {
//     h2.textContent = 'Sai dữ liệu đầu vào';
//     h2.style.color = 'purple';
// } else {
//     value_from_input = Number(value_from_input);
//     if (value_from_input == 10) {
//         h2.textContent = 'Điểm tuyệt đối';
//         h2.style.color = 'green';
//     } else if (value_from_input < 10 && value_from_input >= 0) {
//         h2.textContent = 'Điểm chưa tuyệt đối';
//         h2.style.color = 'orange';
//     } else {
//         h2.textContent = 'Điểm sai khoảng';
//         h2.style.color = 'red';
//     }
// }

// document.body.appendChild(h2);

// let person = {
//     name: "Duong Nam Phong",
//     age: 13,
//     hobbies: ["reading", "gaming", "coding"],
// };

// console.log(person);

// let ul = document.createElement('ul');

// for (let i = 0; i < person.hobbies.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = person.hobbies[i];
//     ul.appendChild(li);
// }

// document.body.appendChild(ul);

// Function to prompt user for input and validate it
function promptAndValidate(message) {
    let userInput;
    for (;;) {
        userInput = prompt(message);
        if (userInput !== null && /^-?\d+$/.test(userInput)) {
            break;
        }
    }
    return parseInt(userInput);
}

// Function to perform addition
function performAddition() {
    let a = promptAndValidate("Nhập giá trị a:");
    let b = promptAndValidate("Nhập giá trị b:");

    let sum = a + b;

    document.getElementById("sum").innerText = sum;
}

// Function to perform subtraction
function performSubtraction() {
    let a = promptAndValidate("Nhập giá trị a:");
    let b = promptAndValidate("Nhập giá trị b:");

    let difference = a - b;

    document.getElementById("difference").innerText = difference;
}

// Function to perform multiplication
function performMultiplication() {
    let a = promptAndValidate("Nhập giá trị a:");
    let b = promptAndValidate("Nhập giá trị b:");

    let product = a * b;

    document.getElementById("product").innerText = product;
}

// Function to perform division
function performDivision() {
    let a = promptAndValidate("Nhập giá trị a:");
    let b = promptAndValidate("Nhập giá trị b:");

    if (b === 0) {
        alert("Không thể chia cho 0");
        return;
    }

    let quotient = a / b;

    document.getElementById("quotient").innerText = quotient;
}

// Attach event listeners to buttons
document.getElementById("plus").addEventListener("click", performAddition);
document.getElementById("minus").addEventListener("click", performSubtraction);
document.getElementById("multiply").addEventListener("click", performMultiplication);
document.getElementById("divide").addEventListener("click", performDivision);
