import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import { pressNum, setOperation, equal, clear } from "../actions";

const Calculator = ({ displayValue, pressNum, setOperation, equal, clear }) => (
  <div>
    <div id="result">{displayValue}</div>
    <div id="buttons">
      <Button onClick={() => pressNum(7)}>7</Button>
      <Button onClick={() => pressNum(8)}>8</Button>
      <Button onClick={() => pressNum(9)}>9</Button>
      <Button onClick={() => setOperation("/")}>/</Button>
      <Button onClick={() => pressNum(4)}>4</Button>
      <Button onClick={() => pressNum(5)}>5</Button>
      <Button onClick={() => pressNum(6)}>6</Button>
      <Button onClick={() => setOperation("*")}>*</Button>
      <Button onClick={() => pressNum(1)}>1</Button>
      <Button onClick={() => pressNum(2)}>2</Button>
      <Button onClick={() => pressNum(3)}>3</Button>
      <Button onClick={() => setOperation("-")}>-</Button>
      <Button onClick={() => pressNum(0)}>0</Button>
      <Button onClick={() => equal()}>=</Button>
      <Button onClick={() => setOperation("+")}>+</Button>
      <Button onClick={() => clear()}>C</Button>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  displayValue: state.calculator.displayValue,
});

export default connect(mapStateToProps, { pressNum, setOperation, equal, clear })(Calculator);
