import React from "react";

import {
  Wrapper,
  Container,
  TitleStockTicket,
  ContentButton,
  ButtonSelection,
  TextButton,
  ContentInput,
  LabelInput,
  Input,
  ButtonConfirmContent,
  ButtonConfirm,
  ButtonText,
} from "./styled";

const Ticket = ({ title }) => {
  return (
    <Wrapper>
      <Container>
        <TitleStockTicket>{"Bitcoin"}</TitleStockTicket>
        <ContentButton>
          <ButtonSelection>
            <TextButton>Compra</TextButton>
          </ButtonSelection>
          <ButtonSelection>
            <TextButton>Venda</TextButton>
          </ButtonSelection>
        </ContentButton>
        <ContentInput>
          <LabelInput>Quantidade</LabelInput>
          <Input></Input>
          <LabelInput>Preco</LabelInput>
          <Input></Input>
        </ContentInput>
        <ButtonConfirmContent>
          <ButtonConfirm>
            <ButtonText>Confirmar</ButtonText>
          </ButtonConfirm>
        </ButtonConfirmContent>
      </Container>
    </Wrapper>
  );
};

export default Ticket;
