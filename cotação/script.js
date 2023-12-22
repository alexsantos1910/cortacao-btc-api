
const url = "https://economia.awesomeapi.com.br/last/BTC-BRL,USD-BRL"


setInterval(() => {
    fetch(url).then(resposta => resposta.json())
    .then(corpo=> document.querySelector('#cotacao-btc').innerHTML = Intl.NumberFormat('pt-BR', {style:'currency',currency: 'BRL'}).format(corpo.BTCBRL.bid))

    fetch(url).then(resposta => resposta.json()).then(corpo=> document.querySelector("#cotacao-dolar").innerHTML = Intl.NumberFormat('pt-BR', {style:'currency',currency: 'BRL'}).format(corpo.USDBRL.bid))
},1000);