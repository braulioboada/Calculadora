function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById('result').innerHTML = "Resultado: " + result;
    document.getElementById('clear').style.display = 'block'; // Mostrar el botón de limpiar
}

function clearResult() {
    document.getElementById('result').innerHTML = ""; // Limpiar el resultado
    document.getElementById('clear').style.display = 'none'; // Ocultar el botón de limpiar
    document.getElementById('num1').value = ""; // Limpiar el campo de entrada num1
    document.getElementById('num2').value = ""; // Limpiar el campo de entrada num2
}
