function createOperationCard(operations) {
    const card = document.createElement('div')
    card.classList.add('op__card');

    const operationId = operations.id;
    const id = document.createElement('h2')
    id.classList.add("operation__id")
    id.textContent = operationId

    const operationName = operations.nome;
    const nome = document.createElement('h2')
    
    nome.classList.add("operation__nome")
    nome.textContent = operationName
    

    const operationValue = operations.valor;
    const valor = document.createElement('h2')
    valor.classList.add("operation__valor")
    valor.textContent = operationValue


    const br = document.createElement("br")

    const textAux = document.createElement("h2")
    textAux.innerText = "Nome: "

    const textAux2 = document.createElement("h2")
    textAux2.innerText = "Valor R$: "

    const btn = document.createElement('button');
    btn.classList.add('operation__btn');
    btn.textContent = "Pago"

    card.append(id,textAux,nome,br,br,textAux2,valor,br,br,btn)
    document.querySelector('#operations__display').append(card)
}

async function getOperations() {
    const  response = await fetch('http://localhost:3000/operations')
    const  operations = await response.json();
    operations.forEach(createOperationCard)
}

getOperations()