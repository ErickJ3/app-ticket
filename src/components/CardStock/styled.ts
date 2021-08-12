import styled from "styled-components/native";

interface PropsChange {
  variation?: number;
}

export const Wrapper = styled.TouchableOpacity`
  background-color: #0d0d0d;
  height: 100px;
  width: 190px;
  border-radius: 10px;
  margin: 7px;
`;

export const StockName = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  padding: 10px;
`;

export const ContenInfoStock = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const StockLastPrice = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 10px;
`;

export const StockPct = styled.Text<PropsChange>`
  color: ${(props) => (props.variation === 1 ? "#4ab09a" : "#f57f7f")};
  font-size: 16px;
  margin: 10px;
`;
