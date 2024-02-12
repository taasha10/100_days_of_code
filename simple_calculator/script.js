// js to handle the calculator logic and event listeners

var expr = ''
// function to read and store the values
function readInput(input){
    if (input=='clr-all'){
        expr=''
    }
    else if (input=='del'){
        var has_op = false
        for(digit in expr){
            if(expr[digit] == ['(',')','+','-','*','/']){
                expr = expr.substr(0,expr.length-1)
                has_op = true
                break
            }
        }
        //   if the number has more than 1 digit, then remove the entire number
        if(!has_op){
            expr = ''
        }
    }
    else if (input=='='){
        try{
            expr = eval(expr).toString()
        }
        catch(e){
            expr = "Invalid"
        }
    }
    else{
        expr+=input
    }
    display(expr)

}
//function to display the progress of the values
function display(data){
    document.getElementById("id-display").value = data
}

//todo 5. function to handle key listeners

//function to calculate the total operation
function operation(num1,op,num2){
    switch(op){
        case '+': return parseInt(num1)+parseInt(num2)
        case '-': return parseInt(num2)-parseInt(num1)
        case '*': return parseInt(num2)*parseInt(num1)
        case '/': return num1==0?"inf":parseInt(num2)/parseInt(num1)
    }
}
