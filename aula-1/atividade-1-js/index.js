const calculate = (num1, num2, operator) => {
  if(operator === "+"){
    result = num1 + num2
  } else if(operator === "-") {
    result = num1 - num2
  } else {
    console.log("invalid operator")
  } 

  console.log(result)
}

calculate(1,2,"+")