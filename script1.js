function volm(){
	var totalIntrest;
	var amount=document.getElementById('amount').value;
	var time=document.getElementById('time').value;
	var rate=document.getElementById('rate').value;
	totalIntrest = (amount*time*rate)/100;
	totalIntrest = totalIntrest.toFixed(1);
	document.getElementById('TI').value = totalIntrest;
	var totalPay;
	totalPay=(amount+((amount*time*rate)/100));
	// totalPay = totalPay.toFixed(1);
	document.getElementById('TP').value = totalPay;

	return false;

}
// function clear1(){
//         document.getElementById("display").innerHTML = "";
//        }

document.getElementById('myForm').onsubmit = volm;