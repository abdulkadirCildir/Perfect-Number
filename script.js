document.getElementById("query").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("check").click();
    }
});

document.getElementById("check").addEventListener("click", perfectNumber);

document.getElementById("hello").innerHTML = "Hello Everbody!!!";
    
function perfectNumber(){
    let number = document.getElementById("query").value;

    let sum = 0;

    if (number < 1 || number === "" || isNaN(number) ) {
        document.getElementById("answer").innerHTML =
          "Please Enter A Positive Number";
    } else {
        for (let i = 1; i < number; i++){
            if (number % i == 0){
                sum += i
            };
        }
          
        if (sum == number) {
            document.getElementById("answer").innerHTML = `${number} is a perfect number`;
        } else {
            document.getElementById("answer").innerHTML = `${number} is not a perfect number`;
        }
        document.getElementById("number").value = ""; 
        document.getElementById("number").focus();
    }
    
}