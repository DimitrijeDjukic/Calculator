const lis = document.querySelectorAll("ul li")

lis.forEach((node) => {
    node.addEventListener('mousedown', function(event) {
        const value = node.innerText
        const result = document.querySelector(".result")
        const resultText = result.innerText;

        if(resultText == '0' || resultText == 'undefined' || resultText == 'Infinity') {
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

        if(value == 'Binar to Dezimal') {
            result.innerText = parseInt(resultText, 2)
            return true
        }

      

      
        result.append(value);

        


 


        
    })
})
