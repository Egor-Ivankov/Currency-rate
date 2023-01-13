
async function currencyUsd () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const json = await response.json();
    const data = json.Valute.USD.Value.toFixed(2);
    renderUsd(data);
}
currencyUsd();

function renderUsd (data) {
    const usd = document.querySelector('#usd');
    usd.innerText = data;
}

async function currencyEuro () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const json = await response.json();
    const data2 = json.Valute.EUR.Value.toFixed(2);
    renderEuro(data2);
}
currencyEuro();

function renderEuro (data2) {
    const euro = document.querySelector('#euro');
    euro.innerText = data2;
}