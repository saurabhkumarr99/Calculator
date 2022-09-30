
function calculate(val) {

    inp1 = document.getElementById("firstInput").value;
    inp1 = Number(inp1);
    inp2 = document.getElementById("secondInput").value;
    inp2 = Number(inp2);
    let operation = val;
    let res;

    switch (operation) {
        case 'add':
            res = inp1 + inp2;
            break;

        case 'Subtract':
            res = inp1 - inp2;
            break;

        case 'Multiply':
            res = inp1 * inp2;
            break;

        case 'Divide':
            res = inp1 / inp2;
            break;

        case 'Remainder':
            res = inp1 % inp2;
            break;

        case 'Exponential':
            res = inp1 ** inp2;
            break;
    }

    document.getElementById("result").innerHTML = res;


}