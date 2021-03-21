const botaoCalcular = document.getElementById('calcular'); // <button type="button" id="calcular" ...
botaoCalcular.addEventListener('click', () => {
  const paciente = [];
  const pacienteNovo = lePaciente(); // lê e retorna o objeto
  paciente.push(pacienteNovo);
  mostraPaciente(pacienteNovo);
  const botaoRelatorio = document.getElementById('relatorio');
  botaoRelatorio.addEventListener('click', () => {
    geraRelatorio(paciente);
  });
});
//mostraPaciente( paciente );
/*
console.log(nome);
console.log(`Peso: ${peso} - Altura: ${altura}`);
console.log(`Cálculo do IMC: ${imc.toFixed(2)}`);
*/



