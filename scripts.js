// seleciona os elementos do formulario.
const amount = document.getElementById("amount")

// so aceitar numeros
amount.oninput = () => {
   let value = amount.value.replace(/\D/g, "")

   // Transforma o valor em  centavos ( exemplo : 150/100 = 1.50)
   value = Number(value) / 100

   // Atualiza o valor do input 
   amount.value = formatCurrency(value)
}

function formatCurrency(value) {
    // função para formatar o valor em reais
value = value.toLocaleString("pt-BR", {
   style: "currency",
   currency: "BRL",
})

return value
}
