function foodPrice(){
    let weight = document.querySelector('#weight').value
    let price = document.querySelector('#price').value
    console.log('per kg ' + parseInt((price / weight * 1000)));
    let perKG = parseInt((price / weight * 1000))
    document.querySelector('#foodPriceResult').innerHTML = `Per kg: ${perKG} ` 
    
}


function TilesToSize(){
    let tilesSize = document.querySelector('#tilesSize').value
    let xRow = document.querySelector('#xRow').value
    let yColumn = document.querySelector('#yColumn').value
    console.log('per kg ' + parseInt((price / weight * 1000)));

    let squareFeet = parseInt((tilesSize * tilesSize / 12 / 12 * xRow * yColumn ))
    document.querySelector('#homeSize').innerHTML = `Home size: ${squareFeet} square feet` 
    
}

