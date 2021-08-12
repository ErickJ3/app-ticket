import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: #1a1a1a;
`;

export const Container = styled.View`
  margin-top: 20%;
`;

export const TitleStockTicket = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin: 5px;
`;

export const ContentButton = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 8%;
`;

export const ButtonSelection = styled.TouchableOpacity`
  background-color: transparent;
  width: 45%;
  height: 50px;
  margin: 6px;
  border-radius: 2px;
  border: 2px solid #599962;
`;

export const TextButton = styled.Text`
  text-align: center;
  padding: 15px;
  color: #fff;
  font-weight: bold;
`;

export const ContentInput = styled.View`
  margin-top: 10%;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const LabelInput = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  border: 2px solid #599962;
  height: 50px;
  width: 93%;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

export const ButtonConfirmContent = styled.View`
  margin-top: 10%;
  justify-content: center;
  align-items: center;
`;

export const ButtonConfirm = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  background-color: #2f5233;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  padding: 6%;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
