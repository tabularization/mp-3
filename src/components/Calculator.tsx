import { styled } from "styled-components";
import { useState } from "react";

const CalculatorContainer = styled.div`
  background: #6cadfe;
  border-radius: 12px;
  padding: 1.5vh 1.5vw;
  width: 90%;
  max-width: 320px;
  margin: 2vh;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1vh 1vw;
  margin: 0.5vh 0;
  font-size: calc(1.5vh + 2px);
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  color: #333;
  outline: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
`;

const StyledButton = styled.button`
  width: 30%;
  background: #3b82f6;
  color: white;
  font-size: calc(1.5vh + 2px);
  border: none;
  padding: 1vh 1.2vw;
  border-radius: 5px;
`;

export const Output = styled.p<{ color: string }>`
  background: #fff;
  border-radius: 5px;
  padding: 2vh 1vw;
  font-size: calc(1.5vh + 2px);
  color: ${(props) => props.color};
  margin-top: 1vh;
  border: 1px solid #ccc;
  height: 2vh;
  display: flex;
  align-items: center;
`;

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const setOutput = (res: number) => {
    setResult(res.toString());
  };

  const Addition = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    if (n1 && n2) {
      setOutput(n1 + n2);
    }
  };

  const Subtraction = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    if (n1 && n2) {
      setOutput(n1 - n2);
    }
  };
  const Multiplication = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    if (n1 && n2) {
      setOutput(n1 * n2);
    }
  };
  const Division = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    if (n1 && n2) {
      setOutput(n1 / n2);
    }
  };
  const Power = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    if (n1 && n2) {
      let acc = 1;
      for (let i = 0; i < n2; i++) {
        acc *= n1;
      }
      setOutput(acc);
    }
  };

  const Clear = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <CalculatorContainer>
      <h2>Calculator</h2>
      <StyledInput type="number" value={num1} placeholder="Enter number 1" onChange={(e) => setNum1(e.target.value)} />
      <StyledInput type="number" value={num2} placeholder="Enter number 2" onChange={(e) => setNum2(e.target.value)} />
      <ButtonContainer>
        <StyledButton onClick={Addition}>+</StyledButton>
        <StyledButton onClick={Subtraction}>-</StyledButton>
        <StyledButton onClick={Multiplication}>*</StyledButton>
        <StyledButton onClick={Division}>/</StyledButton>
        <StyledButton onClick={Power}>^</StyledButton>
        <StyledButton onClick={Clear}>Clear</StyledButton>
      </ButtonContainer>
      <Output color={Number(result) < 0 ? "red" : "black"}>{result}</Output>
    </CalculatorContainer>
  );
}
