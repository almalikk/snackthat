function send() {
  var nameCust = document.getElementById('lname');
  var tudungCode = document.getElementById('lcode');
  var phoneCust = document.getElementById('lphone');
  var bilOrder = document.getElementById('lorder');
  var locationCust = document.getElementById('llocation');
  var descriptionCust = document.getElementById('ldescription');
  rand =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var val = Math.floor(1000 + Math.random() * 9000);
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  } 
  if (mm < 10) {
    mm = '0' + mm;
  } 
  var today = dd + mm + yyyy;
  url = ("https://api.telegram.org/bot656012095:AAFp8_t_Ojw5lvnXWvmRZgJkOue2UmAykOc/sendMessage?chat_id=211150896&text="+"Nama : "+nameCust.value+"%0D%0AGender : "+tudungCode.value+"%0D%0ANoPhone : "+phoneCust.value+"%0D%0ABilanganOrder : "+bilOrder.value+"%0D%0ALocation : "+locationCust.value+"%0D%0AReceiptID : "+today+time+val+"%0D%0ADescription : "+descriptionCust.value);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {

    if (xhr.readyState === 4) {
        alert("Thank you for your purchase.\nOur staff will contact you ASAP!.\n\nReceipt id : "+today+time+val+"\n\nPlease keep this receipt for references"+"\n"+"If you want make a diiferent order , please reload page , TQ");
      }
    }
    xhr.open('get', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.send();
    }

/*
function send(){
$(document).ready(function(){
  var nameCust = document.getElementById('lname');
  var tudungCode = document.getElementById('lcode');
  var phoneCust = document.getElementById('lphone');
  var bilOrder = document.getElementById('lorder');
  var locationCust = document.getElementById('llocation');
  var descriptionCust = document.getElementById('ldescription');
  rand =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var val = Math.floor(1000 + Math.random() * 9000);
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  } 
  if (mm < 10) {
    mm = '0' + mm;
  } 
  var today = dd + mm + yyyy;
  url = ("https://api.telegram.org/bot656012095:AAFp8_t_Ojw5lvnXWvmRZgJkOue2UmAykOc/sendMessage?chat_id=211150896&text="+"Nama : "+nameCust.value+"%0D%0AGender : "+tudungCode.value+"%0D%0ANoPhone : "+phoneCust.value+"%0D%0ABilanganOrder : "+bilOrder.value+"%0D%0ALocation : "+locationCust.value+"%0D%0ADescription : "+descriptionCust.value+"%0D%0AReceiptID : "+today+time+val);
  $("button").click(function(){
    $.get( url, function(data, status){
      alert("Terima Kasih Kerana membeli dengan kami,anda akan dihubungi sebentar lg :)\nReceipt id : "+today+time+val+"\nPlease keep this receipt for references"+"\n\n"+"If you want make a diiferent order , please reload page , TQ");
    });
  });
});
}
*/
