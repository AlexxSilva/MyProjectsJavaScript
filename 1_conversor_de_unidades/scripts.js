// Selecionar os elementos
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;
    const inputValue = parseFloat(inputElement.value);

    // Validar entrada
    if (isNaN(inputValue) || inputValue === 0) {
        messageElement.textContent = "Por favor, insira um valor válido.";
        outputElement.value = "";
        return;
    }

    // Se as unidades forem iguais, apenas copia o valor
    if (fromValue === toValue) {
        outputElement.value = inputValue.toFixed(2);
        messageElement.textContent = "";
        return;
    }

    // Conversão simples
    const conversionRates = {
        m: 1,
        km: 0.001,
        cm: 100,
        mm: 1000,
    };

    const fromRate = conversionRates[fromValue];
    const toRate = conversionRates[toValue];

    if (fromRate && toRate) {
        const result = inputValue * (toRate / fromRate);
        outputElement.value = result.toFixed(2);
        messageElement.textContent = "";
    } else {
        messageElement.textContent = "Conversão não suportada.";
        outputElement.value = "";
    }
}

// Adicionar evento ao botão
convertButton.addEventListener('click', convert);
