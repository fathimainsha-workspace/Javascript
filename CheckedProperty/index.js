const checkBox = document.getElementById("myCheckBox1");
const visaBtn = document.getElementById("myRadioBtn1");
const masterCardBtn = document.getElementById("myRadioBtn2");
const submitBtn = document.getElementById("submit");
const subscribe = document.getElementById("subscribeResult");
const paymentDetails = document.getElementById("paymentResult");

submitBtn.onclick = function(){
    if(checkBox.checked)
    {
        subscribe.textContent = "You are subscribed to our newsletter.";
    }
    else
    {
        subscribe.textContent = "You are not subscribed to our newsletter.";
    }
}
visaBtn.onclick = function(){
    if(visaBtn.checked)
    {
        paymentDetails.textContent = "You have selected Visa as your payment method.";
    }
}
    masterCardBtn.onclick = function(){
    if(masterCardBtn.checked)
    {
        paymentDetails.textContent = "You have selected MasterCard as your payment method.";
    }
}
   