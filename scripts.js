// seleciona os elementos do formulario.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

// seleciona os elementos da lista

const expenseList = document.querySelector("ul");

// so aceitar numeros
amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "");

  // Transforma o valor em  centavos ( exemplo : 150/100 = 1.50)
  value = Number(value) / 100;

  // Atualiza o valor do input
  amount.value = formatCurrency(value);
};

function formatCurrency(value) {
  // função para formatar o valor em reais
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return value;
}
// Captura o evento de submit do formulario para obter os valores.
form.onsubmit = (event) => {
  // Previne o comportamento padrão de fazer recarregar a pagina
  event.preventDefault();

  // Cria um novo objeto com o detalhes da despesa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  };
  // Chama a função para adicionar o item na lista
  expenseAdd(newExpense);
};

function expenseAdd(newExpense) {
  try {
    // Cria o elemento  para adicionar o item (li) na lista (ul)
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense"); //classe q quero que repite no html

    // cria o icone da categoria
    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name)

    // adiciona as informações no item.
    expenseItem.append(expenseIcon);

    // adiciona o item na lista
    expenseList.append(expenseItem);

  } catch (error) {
    alert("Não foi possivel atualizar a lista de despesas");
    console.log(error);
  }
}
