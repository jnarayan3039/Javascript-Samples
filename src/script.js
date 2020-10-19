console.log('Start before furnciton');
function performAction(){
    event.preventDefault();
    console.log("Ibside function");
    var txtNumber = document.querySelector("#num");    
    var bodyElement = document.querySelector("#body");
    var posNegElement = document.querySelector("#par");
    var evenOddElement = document.querySelector("#parEvenOdd");
    if(posNegElement===null){
        posNegElement = document.createElement("p");
        posNegElement.setAttribute("id","par");
        bodyElement.appendChild(posNegElement);
        
    }
    if(evenOddElement===null){
        evenOddElement = document.createElement("p");
        evenOddElement.setAttribute("id","parEvenOdd");
        bodyElement.appendChild(evenOddElement);
    }
    
    if(txtNumber.value>0){
        posNegElement.textContent = "The number " + txtNumber.value + " is Positve";
        
    }else{
        posNegElement.textContent = "The number " + txtNumber.value + " is Negative";
    }

    if(txtNumber.value%2 === 0){
        evenOddElement.textContent = "The number " + txtNumber.value + " is Even";
        
    }else{
        evenOddElement.textContent = "The number " + txtNumber.value + " is Odd";
    }
}
function performAction2(){
    console.log("Inside perform action2");
}
console.log('Start after furnciton');