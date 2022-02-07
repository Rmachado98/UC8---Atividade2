//Cadastro de evento

let data_atual = '12/01/22'
let data_evento = '22/01/22'

if (data_evento > data_atual) {
    console.log("Data de evento aceita")
}
   
else { 
    console.log("Data inválida")
}

let idade = 18

if (idade >= 18) {
    console.log("Idade permitida")
}

else {
    Console.log ("Idade inválida, o participante deve ter maioridade")
}

let QtdDeParticipantes = 50

if (QtdDeParticipantes >= 50) {
    console.log("Quantidade permitida")
    console.log("Evento cadastrado no banco de dados")
}

else {
    console.log("Quantidade inválida de partcipantes, devem ter 50 ou mais participantes para o cadastro do evento")
}

