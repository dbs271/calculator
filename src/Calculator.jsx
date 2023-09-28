import React, { useState } from "react";
import styled from "styled-components";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const getNumber = (e) => {
    setCalc((prev) => prev + e.target.value);

    console.log(calc);
  };
  const getCalc = (e) => {
    setCalc(e.target.value);
    console.log(calc);
  };
  const getReset = (e) => {
    setCalc((e.target.value = ""));
  };
  const getDelete = () => {
    let str = String(calc).slice(0, -1);
    setCalc(str);
  };
  return (
    <S.CalcWrapper>
      <S.CalcContainer>
        <S.InputBox>
          <S.Input readOnly value={calc} />
          <S.Input readOnly value={calc} />
        </S.InputBox>
        <S.ButtonBox>
          <S.NumberButton onClick={getReset}>AC</S.NumberButton>
          <S.NumberButton onClick={getDelete}>C</S.NumberButton>
          <S.NumberButton value={"/"} onClick={getCalc}>
            /
          </S.NumberButton>
          <S.NumberButton value={"x"} onClick={getCalc}>
            x
          </S.NumberButton>
          <S.NumberButton value={7} onClick={getNumber}>
            7
          </S.NumberButton>
          <S.NumberButton value={8} onClick={getNumber}>
            8
          </S.NumberButton>
          <S.NumberButton value={9} onClick={getNumber}>
            9
          </S.NumberButton>
          <S.NumberButton value={"+"} onClick={getCalc}>
            +
          </S.NumberButton>
          <S.NumberButton value={4} onClick={getNumber}>
            4
          </S.NumberButton>
          <S.NumberButton value={5} onClick={getNumber}>
            5
          </S.NumberButton>
          <S.NumberButton value={6} onClick={getNumber}>
            6
          </S.NumberButton>
          <S.NumberButton value={"-"} onClick={getCalc}>
            -
          </S.NumberButton>
          <S.NumberButton value={1} onClick={getNumber}>
            1
          </S.NumberButton>
          <S.NumberButton value={2} onClick={getNumber}>
            2
          </S.NumberButton>
          <S.NumberButton value={3} onClick={getNumber}>
            3
          </S.NumberButton>
          <S.NumberButton
            style={{
              gridRow: "span 2", // 수직으로 2칸 차지
            }}
          >
            =
          </S.NumberButton>
          <S.NumberButton
            value={0}
            onClick={getNumber}
            style={{
              gridColumn: "span 2", // 수평으로 2칸 차지
            }}
          >
            0
          </S.NumberButton>
          <S.NumberButton value={"."}>.</S.NumberButton>
        </S.ButtonBox>
      </S.CalcContainer>
    </S.CalcWrapper>
  );
};

export default Calculator;

const S = {};

S.CalcWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.CalcContainer = styled.div`
  width: 360px;
  height: 550px;
  background-color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 20px;
  flex-direction: column;
`;

S.InputBox = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  width: 300px;
  height: 150px;
`;

S.Input = styled.input`
  width: 100%;
  height: 50%;
  outline: none;
  font-size: 18px;
  text-align: right;
  border: none;
`;

S.ButtonBox = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(50px, auto);
`;

S.NumberButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ccc;
  }
`;
