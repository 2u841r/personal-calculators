// Food price 

function foodPrice() {
    let weight = document.querySelector('#weight').value
    let price = document.querySelector('#price').value

    let perKG = parseInt((price / weight * 1000))
    document.querySelector('#foodPriceResult').innerHTML = `Per kg: ${perKG} `

}



// Investment 

let cssAuto; 
function invest(){
    event.preventDefault()
    const initialPrice = document.querySelector('#initialPrice').value;
    const unit = document.querySelector('#unit').value;
    const currentprice = document.querySelector('#currentPrice').value;
    let totalInvestment = document.querySelector('#totalInvestment');
    let ResultOfInvest = document.querySelector('#ResultOfInvest');
    let currentValueField = document.querySelector('#currentValue');
    ResultOfInvest.classList.remove(cssAuto)


    let totalInvest = (initialPrice * unit)
    totalInvestment.value = totalInvest;
    totalInvestment.readOnly = true;
    let currentStatus = (currentprice * unit)
    let currentValue = (unit * currentprice)
    let finalResult = currentStatus - totalInvest;
    let extraText = finalResult <= 0 ? 'loss' : 'profit'
    cssAuto = finalResult <= 0 ? 'bad' : 'good'

    ResultOfInvest.value = `${finalResult} ${extraText} `; 
    currentValueField.value = currentValue; 
    let fulltext = ''
    // if (finalResult < 0) {
    //     fulltext = `<p style='color: #721c24;
    //     background-color: #f8d7da;
    //     border-color: #f5c6cb;
    //     padding: 5px;
    //     border-radius: 5px;'>
    //     Your in in loss of ${finalResult} </p>`
    // } else {
    //     fulltext = `<p style='color: #155724;
    //     background-color: #d4edda;
    //     border-color: #c3e6cb;
    //     padding: 5px;
    //     border-radius: 5px;'> 
    //         You are in Profit of ${finalResult}</p>`;
    // }
    
    console.log(finalResult);

    const investResult =  document.getElementById('investResult')
    investResult.innerHTML = fulltext;
    ResultOfInvest.classList.add(cssAuto)


}

function clearInput(){
    document.getElementById('investResult').innerHTML = ''
}





// Home size
let xRow = document.querySelector('#xRow')
let yColumn = document.querySelector('#yColumn')
let homeSize = document.querySelector('#homeSize'); 
let tilesSizeField = document.querySelector('#tilesSize')
let totalField= document.querySelector('#totalTiles')

function TilesToSize() {
    let tilesSize = tilesSizeField.value
    let xRowValue = xRow.value
    let yColumnValue = yColumn.value
    // ternary operator is best
    totalField.value = xRowValue * yColumnValue === 0 ? '' : xRowValue * yColumnValue; 
    let squareFeet = parseInt((tilesSize * tilesSize / 12 / 12 * xRowValue * yColumnValue))
    homeSize.innerHTML = `Home size: ${squareFeet} square feet`

}

function allTiles(){
    let tilesSizeValue = tilesSizeField.value
    let total = totalField.value

    xRow.value = ''
    yColumn.value = ''

    let squareFeet = parseInt((tilesSizeValue * tilesSizeValue / 12 / 12 * total))

    homeSize.innerHTML = `Home size: ${squareFeet} square feet`
}





// Money exchange


let exchangeRate;
let foreignCurrency;
function F2L() {
    exchangeRate = document.querySelector('#exchangeRate').value;

    foreignCurrency = document.querySelector('#foreignCurrency').value;

    if(foreignCurrency){
        let soYouNeed = (1 / exchangeRate * foreignCurrency).toFixed(2);

        document.querySelector('#localCurrency').value = `${soYouNeed}`
    }
}

let localCurrency;
function L2F() {
    exchangeRate = document.querySelector('#exchangeRate').value;

    localCurrency = document.querySelector('#localCurrency').value;

    let soYouNeed = (localCurrency * exchangeRate).toFixed(2);

    document.querySelector('#foreignCurrency').value = `${soYouNeed}`

}



let fc100;
let ihave; 
function fx100(){
    fc100 = document.querySelector('#fc100').value;
    ihave = document.querySelector('#IhaveLC').value;
   document.querySelector('#YouWillGet').innerHTML = (ihave / (fc100/100)).toFixed(2)
    
}




// CountDown

let selectedRadio;
document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('myForm');

    form.addEventListener('change', function () {
        selectedRadio = document.querySelector('input[name="occasion"]:checked').id;

        function timeUntil(targetDate) {
            const targetTime = new Date(targetDate).getTime();

            const currentTime = new Date().getTime();

            const timeDifference = targetTime - currentTime;

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

            return {
                days,
                hours,
                minutes
            };
        }

        const targetDates = {
            newYear: "2024-02-26T00:00:00",
            ramadan: "2024-03-11T18:00:00",
            eid: "2024-04-09T18:00:00",
            mdbd: "2024-04-17T18:00:00" 
        };

        const remainingTime = timeUntil(targetDates[selectedRadio]);

        const result = `${remainingTime.days} days, ${remainingTime.hours} hours, and ${remainingTime.minutes} minutes remaining.`;

        let resultElement = document.getElementById('resultText');

        resultElement.textContent = result;


    });

    form.dispatchEvent(new Event('change'));

});



