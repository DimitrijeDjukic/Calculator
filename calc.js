const lis = document.querySelectorAll("ul li")

lis.forEach((node) =>{
    node.addEventListener('mousedown', function(event) {
        const value = node.innerText
        const result = document.querySelector(".result")
        const resultText = result.innerText;


        if(value == '=') {
            let solution = eval(resultText)
            result.innerText = solution;
        }



        if(value.toUpperCase() == 'C') {
            result.innerText = '';
            return true
        }

      
        result.append(value);


 


        
    })
})
