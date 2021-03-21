function calculaIMC(peso, altura) {
    let imc = peso / (altura **2);
    return imc;
}

function verificaIMC( imc ) {
    let situacao = null

if(imc < 18.5) {
    situacao = 'Magreza';
} else if (imc >= 18.5 && imc <= 24.9) {
    situacao = 'normal';
} else if (imc > 24.9 && imc <= 30) {
    situacao = 'sobrepeso';
} else {
    situacao = 'obesidade';
    }
        return situacao;
    
}
function mostraPaciente( paciente ) {
    let imc = calculaIMC(paciente.peso, paciente.altura);
    let situacao = verificaIMC( imc );

    let spanNome = document.getElementById("nome");     //<span id="nome"></span>
spanNome.innerHTML = paciente.nome;

let spanPeso = document.getElementById("peso");     //<span id="peso"></span>
spanPeso.innerHTML = paciente.peso;

let spanAltura = document.getElementById("altura"); //<span id="altura"></span>
spanAltura.innerHTML = paciente.altura;

let spanImc = document.getElementById("imc");      //<span id="imc"></span>
spanImc.innerHTML = imc.toFixed(2);
let elSituacao = document.getElementById("situacao");
elSituacao.innerHTML = situacao;

}


function lePaciente() {
    let inputNome = document.getElementById("txtNome"); //<input type="text" id="txtNome"....
    let inputPeso = document.getElementById("numPeso"); //<input type="number" id="numPeso"....
    let inputAltura = document.getElementById("numAltura"); //<input type="number" id="numAltura"....

    let paciente = {
        nome : inputNome.value,
        peso : inputPeso.value,
        altura : inputAltura.value
    }

    return paciente;
}

function geraRelatorio( paciente ) {
    let listaNumerada = document.getElementById("listaNumerada");
    listaNumerada.innerHTML = ""; //apaga a lista

    paciente.forEach( (paciente) => {
        let imc = calculaIMC(paciente.peso, paciente.altura);
        let sit = verificaIMC( imc );
        listaNumerada.innerHTML += `<li> ${paciente.nome} - situacao: ${sit} </li>`;
                
    });
}