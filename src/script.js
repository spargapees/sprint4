function go(){
    let sum = document.getElementById('sum');
    let x = document.getElementById('val');
    let index = x.selectedIndex;
    if(index == 0){
        document.getElementById('kzt').innerHTML = "-";
        document.getElementById('usd').innerHTML = (sum.value / 431).toFixed(2);
        document.getElementById('eur').innerHTML = (sum.value / 509).toFixed(2);
    }
    if(index == 1){
        document.getElementById('eur').innerHTML = "-";
        document.getElementById('kzt').innerHTML = (sum.value * 507).toFixed(2);
        document.getElementById('usd').innerHTML = (sum.value * 1.176).toFixed(2);
    }
    if(index == 2){
        document.getElementById('usd').innerHTML = "-";
        document.getElementById('kzt').innerHTML = (sum.value * 429).toFixed(2);
        document.getElementById('eur').innerHTML = (sum.value * 0.843).toFixed(2);
    }
}