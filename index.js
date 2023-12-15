function foodPrice() {
    let weight = document.querySelector('#weight').value
    let price = document.querySelector('#price').value

    let perKG = parseInt((price / weight * 1000))
    document.querySelector('#foodPriceResult').innerHTML = `Per kg: ${perKG} `

}


function TilesToSize() {
    let tilesSize = document.querySelector('#tilesSize').value
    let xRow = document.querySelector('#xRow').value
    let yColumn = document.querySelector('#yColumn').value


    let squareFeet = parseInt((tilesSize * tilesSize / 12 / 12 * xRow * yColumn))
    document.querySelector('#homeSize').innerHTML = `Home size: ${squareFeet} square feet`

}

let exchangeRate;
let foreignCurrency;
function F2L() {
    exchangeRate = document.querySelector('#exchangeRate').value;

    foreignCurrency = document.querySelector('#foreignCurrency').value;

    let soYouNeed = (1 / exchangeRate * foreignCurrency);

    document.querySelector('#localCurrency').value = `${soYouNeed}`


}

let localCurrency;
function L2F() {
    exchangeRate = document.querySelector('#exchangeRate').value;

    localCurrency = document.querySelector('#localCurrency').value;

    let soYouNeed = (localCurrency * exchangeRate);

    document.querySelector('#foreignCurrency').value = `${soYouNeed}`

}

