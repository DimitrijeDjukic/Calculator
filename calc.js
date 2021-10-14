const lis = document.querySelectorAll("ul li")
const body = document.querySelector("body")
const calc1 = document.querySelector(".normal")
const calc2 = document.querySelector(".pro")
const result = document.querySelector(".result")

var change = document.querySelector(".click")
var change2 = document.querySelector(".click2")
var counter = 0;

function addClicks2(event) {
    switch(counter) {
        case 1:
            // body.style.backgroundColor = "blue";
            calc1.style.display = "none";
            calc2.style.display = "initial";
            counter = counter - 1;
            result.innerText = "";
        case 0:
            // body.style.backgroundColor = "red";
            calc1.style.display = "initial";
            calc2.style.display = "none";
            counter = counter + 1;   
            result.innerText = "";
        }
        console.log(counter + " times");
        
        
};
function addClicks(event) {
            
    switch(counter) {
        case 0:
            // body.style.backgroundColor = "red";
            calc1.style.display = "initial";
            calc2.style.display = "none";
            counter = counter + 1;
            result.innerText = "";
            
        case 1:
            // body.style.backgroundColor = "blue";
            calc1.style.display = "none";
            calc2.style.display = "initial";
            counter = counter - 1;
            result.innerText = "";
            
        }
        console.log(counter + " times")
        
        
};


change.addEventListener('click', addClicks);
change2.addEventListener('click', addClicks2);

lis.forEach((node) => {
    node.addEventListener('mousedown', function(event) {
        const value = node.innerText
        const result = document.querySelector(".nor")
        const resultText = result.innerText;

        if(resultText == '0' || resultText == 'change' || 
        resultText == 'undefined' || resultText == 'Infinity' || 
        resultText == 'NaN' || resultText == 'changechange') {
            result.innerText = '0';
        }

        if(value == '=') {
            let solution = eval(resultText)
            result.innerText = solution;
            return true;
        }
        if(value.toUpperCase() == 'C') {
            result.innerText = '';
            return true
        }
      
        result.append(value);

    })
})

lis.forEach((node) => {
    node.addEventListener('mousedown', function(event) {
        const value = node.innerText
        const result = document.querySelector(".programmable")
        const resultText = result.innerText;

        if(resultText == '0' || resultText == 'change' || resultText == 'undefined' || resultText == 'Infinity' || resultText == 'NaN') {
            result.innerText = '';
        }

        if(value == '=') {
            let solution = eval(resultText)
            result.innerText = solution;
            return true;
        }
        if(value.toUpperCase() == 'C') {
            result.innerText = '';
            return true
        }
        switch(value) {
            case 'B-Dez':
                result.innerText = parseInt(resultText, 2)
                return true;
            case 'B-Oct':
                result.innerText = parseInt(resultText, 2).toString(8)
                return true;
            case 'B-Hex':
                result.innerText = parseInt(resultText, 2).toString(16).toUpperCase()
                return true;

            case 'D-Bin':
                result.innerText = parseInt(resultText, 10).toString(2)
                return true;
            case 'D-Oct':
                result.innerText = parseInt(resultText, 10).toString(8)
                return true;
            case 'D-Hex':
                result.innerText = parseInt(resultText, 10).toString(16).toUpperCase()
                return true; 


            case 'O-Bin':
                result.innerText = parseInt(resultText,8).toString(2)
                return true;
            case 'O-Dez':
                result.innerText = parseInt(resultText, 8)
                return true;
            case 'O-Hex':
                result.innerText = parseInt(resultText, 8).toString(16).toUpperCase()
                return true;

            case 'H-Bin':
                result.innerText = parseInt(resultText, 16).toString(2)
                return true;
            case 'H-Dez':
                result.innerText = parseInt(resultText, 16)
                return true;
            case 'H-Oct':
                result.innerText = parseInt(resultText, 16).toString(8)
                return true;
                
                
        }
      
 
        result.append(value);

    })
})
