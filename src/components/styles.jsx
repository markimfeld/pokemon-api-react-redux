import styled from "styled-components";

export const Card = styled.li`
  -webkit-box-shadow: 0px 0px 4px 2px rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.3);
  display: flex;
  flex: 1 1 200px;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: #1f1f1f;
  border-radius: 6px;
  color: white;
  font-family: sans-serif;
  font-size: 20px;
  margin: 10px;
  list-style: none;
  text-decoration: none;
`;

export const Container = styled.div`
  background-color: #000;
  height: 100vh;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#bb86fc" : "#03DAC5")};
  padding: 10px 15px;
  margin: 2px;
  border: none;
  font-size: 15px;
  border-radius: 4px;
`;

export const List = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TransparentButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
`;
