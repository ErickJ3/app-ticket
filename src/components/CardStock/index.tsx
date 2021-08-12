import React, { useState } from "react";
import {
  LightstreamerClient,
  Subscription,
} from "lightstreamer-client-web/lightstreamer-core.esm";
import { useNavigation } from "@react-navigation/native";
import { stockList, fields } from "../../utils/const";

import {
  Wrapper,
  StockName,
  ContenInfoStock,
  StockLastPrice,
  StockPct,
} from "./styled";
import { useEffect } from "react";

const CardStock = ({ stock }) => {
  const stockName = stock?.split(" ")[0];
  const [lastPrice, setLastPrice] = useState<number>(0);
  const [changePct, setChangePct] = useState<number>(0);
  const navigation = useNavigation();

  useEffect(() => {
    const client = new LightstreamerClient(
      "https://push.lightstreamer.com",
      "DEMO"
    );
    client.connect();

    for (var i = 1, items = []; i <= stockList.length; i++) {
      items[i - 1] = "item" + i;
    }

    const sub = new Subscription("MERGE", items, fields);

    sub.setDataAdapter("QUOTE_ADAPTER");

    sub.addListener({
      onItemUpdate: (obj) => {
        setLastPrice((prevState) =>
          obj.updateValues[2] === stock
            ? (prevState = obj.updateValues[3])
            : prevState
        );
        setChangePct((prevState) =>
          obj.updateValues[2] === stock
            ? (prevState = obj.updateValues[4])
            : prevState
        );
      },
    });
    client.subscribe(sub);
  }, []);

  return (
    <Wrapper onPress={() => navigation.navigate("Ticket")}>
      <StockName>{stockName}</StockName>
      <ContenInfoStock>
        <StockPct variation={Math.sign(changePct)}>{changePct} %</StockPct>
        <StockLastPrice>{lastPrice}</StockLastPrice>
      </ContenInfoStock>
    </Wrapper>
  );
};

export default CardStock;
