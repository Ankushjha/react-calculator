import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState("0");

  const handleButtonClick = (value) => {
    try {
      if (value === 'C' || value == "CE") {
        setInput("0");
        // console.log(input)
      } else if (value === "<" && input !== "0") {
        console.log(input)
        // setInput(input.slice(0, -1))
        input.length === 1 ? setInput("0") : setInput(input.slice(0, -1))
      } else if (value === "=") {
        setInput(eval(input).toString()) //eval() is a predefined function of js to change string with number and doo the given operator inside the string and toString will change back it to string
        // console.log(input)

        // another method using logic wil only works with 2 operand or given result for 1st operand only


      //   try{
      //   const operators = ["+", "-", "*", "/", "%"]
      //   let operator = null

      //   for (let i=0; i < input.length; i++) {
      //     if (operators.includes(input[i])) {
      //       operator = input[i];
      //       break;
      //     }
      //   }

      //   const [operand1, operand2] = input.split(operator).map(parseFloat);
      //   let result;

      //   switch (operator) {
      //     case "+":
      //       result = operand1 + operand2;
      //       break;
      //     case "-":
      //       result = operand1 - operand2;
      //       break;
      //     case "*":
      //       result = operand1 * operand2;
      //       break;
      //     case "/":
      //       result = operand1 / operand2;
      //       break;
      //     case "%":
      //       result = operand1 % operand2;
      //       break;
      //       default:
      //       throw new Error("Invalid operator")
      //   }
      //     console.log(result)
      //   setInput(result.toString())
      // } catch(error) {
      //   console.log(error)
      // }
      }
      else {
        input === "0" ? setInput(value) : setInput((prevValue) => prevValue + value)
        //  prevValue + value 
        // if (value.length !== 1 && input !== "0") value.slice(0, 1);
        // console.log(input)
      }
    } catch (error) {
      setInput("Error..Try again")
    }
  }
  return (
    <>
      <div className="center">
        <form name="forms" aria-readonly>
          <input type="text" id="display" name="display" value={input} />
          <div className="buttons">
            <input type="button" id="module" value="%" onClick={() => handleButtonClick('%')} />
            <input type="button" id="allclear" value="CE" onClick={() => handleButtonClick('CE')} />
            <input type="button" id="clear" value="C" onClick={() => handleButtonClick('C')} />
            <input type="button" id="back" value="<" onClick={() => handleButtonClick('<')} />

            <br />
            <input type="button" id="seven" value="7" onClick={() => handleButtonClick('7')} />
            <input type="button" id="eight" value="8" onClick={() => handleButtonClick('8')} />
            <input type="button" id="nine" value="9" onClick={() => handleButtonClick('9')} />
            <input type="button" id="add" value="+" onClick={() => handleButtonClick('+')} />

            <br />
            <input type="button" id="four" value="4" onClick={() => handleButtonClick('4')} />
            <input type="button" id="five" value="5" onClick={() => handleButtonClick('5')} />
            <input type="button" id="six" value="6" onClick={() => handleButtonClick('6')} />
            <input type="button" id="multi" value="*" onClick={() => handleButtonClick('*')} />
            <br />
            <input type="button" id="one" value="1" onClick={() => handleButtonClick('1')} />
            <input type="button" id="two" value="2" onClick={() => handleButtonClick('2')} />
            <input type="button" id="three" value="3" onClick={() => handleButtonClick('3')} />
            <input type="button" id="subs" value="-" onClick={() => handleButtonClick('-')} />
            <br />
            <input type="button" id="dot" value="." onClick={() => handleButtonClick('.')} />
            <input type="button" id="zero" value="0" onClick={() => handleButtonClick('0')} />
            <input type="button" id="doublezero" value="00" onClick={() => handleButtonClick('00')} />
            <input type="button" id="divide" value="/" onClick={() => handleButtonClick('/')} />
            <br />
            <input type="button" id="equal" value="=" onClick={() => handleButtonClick('=')} />
          </div>
        </form>
      </div>
    </>
  )
}

export default App
