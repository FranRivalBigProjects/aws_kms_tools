function calc(){
let api=parseFloat(document.getElementById('a').value)||0;
let keys=parseFloat(document.getElementById('b').value)||0;
let ops=parseFloat(document.getElementById('c').value)||0;

// simplified model
let requestCost = api * 0.03;
let keyCost = keys * 1;
let opCost = ops * 0.000003;

let total = requestCost + keyCost + opCost;

let level = total < 10 ? "Low encryption cost ✅" :
            total < 100 ? "Moderate cost ⚖️" :
            "High cost ⚠️";

let insights = "";
if(api > 100) insights += "High API usage. Optimize calls.<br>";
if(keys > 50) insights += "Many keys. Consolidate if possible.<br>";
if(ops > 1000000) insights += "High encryption operations. Optimize usage.<br>";

document.getElementById('result').innerHTML =
"Total Cost: $" + total.toFixed(2) + "<br><br>" +
level + "<br><br>" + insights;
}
