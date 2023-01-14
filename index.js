let btnMoney = document.querySelector(".btn");

function sendMoney() {
  let valorInput = document.querySelector("#valor");
  let personMoney = document.querySelector("#person__money");
  let cash = parseInt(valorInput.value);
  cash++;
  personMoney.innerHTML = cash;
}

btnMoney.addEventListener("click", sendMoney);

let userName = document.querySelector("#home__name");
let actionBTN = document.querySelector(".home__btn");
let personName = document.querySelector("#person__name");

actionBTN.addEventListener("click", sendData);

function sendData() {
  personName.innerText = userName.value;
  userName.value = " ";
}

function createOperationCard(operations) {
  let card = document.createElement("div");
  card.classList.add("op__card");

  let operationId = operations.id;
  let id = document.createElement("h2");
  id.classList.add("operation__id");
  id.textContent = operationId;

  let operationName = operations.nome;
  let nome = document.createElement("h2");

  nome.classList.add("operation__nome");
  nome.textContent = operationName;

  let operationValue = operations.valor;
  let valor = document.createElement("h2");
  valor.classList.add("operation__valor");
  valor.textContent = operationValue;

  let br = document.createElement("br");

  let textAux = document.createElement("h2");
  textAux.innerText = "Nome: ";

  let textAux2 = document.createElement("h2");
  textAux2.innerText = "Valor R$: ";

  let btn = document.createElement("button");
  btn.classList.add("operation__btn");
  btn.textContent = "Pago";

  card.append(id, textAux, nome, br, br, textAux2, valor, br, br, btn);
  document.querySelector("#operations__display").append(card);
}

async function getOperations() {
  let response = await fetch("http://localhost:3000/operations");
  let operations = await response.json();
  operations.forEach(createOperationCard);
}

let form = document.querySelector("form");

form.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  let articleData = {
    nome: document.querySelector("#nome").value,
    valor: document.querySelector("#valor").value,
  };

  let res = await fetch("http://localhost:3000/operations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData),
  });

  let savedArticle = await res.json();
  form.reset();
  createOperationCard(savedArticle);
});

getOperations();
