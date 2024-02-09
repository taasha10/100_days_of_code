
//todo 1.function to read and store the values
//todo 2.function to display the progress the values
//todo 3.function to read and store the values
//todo 4.function to calculate the total operation
//todo 5. function to handle mouse listeners
//todo 5. function to handle key listeners
//todo 6. function to handle invalid input
function checkInvalid(input){
    var stack = []
    const operators = ['+','-','/','*',')','=','(']
    var numbers = []
    var top = -1
    var result = 0
    if(input.length){
        stack.push(input[0]);
        top+=1;
        var i=0;
        while(top>=0){
            if(input[i] in operators){
                if(input[i]==')'){
                    while(top!=-1 and stack[top]!='(' and numbers.length>=2){
                        const num1 = numbers.pop()
                        const op = stack.pop()
                        const num2 = numbers.pop()
                        const curr_res = operation(num1,op,num2)
                        if(curr_res!="inf"){
                            result+=curr_res
                        }
                        else{
                            return false;
                        }
                    }
                    if(top==-1 || numbers.length<2){
                        return false;
                    }
                    else{
                        stack.pop();
                    }
                }
                else{
                    stack.push(input[i])
                    top+=1
                }

            }
            else{
                numbers.push(input[i])
            }
        }
    }

}

function operation(num1,op,num2){
    switch(op){
        case '+': return parseInt(num1)+parseInt(num2)
        case '-': return parseInt(num2)-parseInt(num1)
        case '*': return parseInt(num2)*parseInt(num1)
        case '/': return num1==0?"inf":parseInt(num2)/parseInt(num1)
    }
}
