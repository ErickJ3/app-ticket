import React from "react";

import CardStock from "./src/components/CardStock";

import { stockList } from "./src/utils/const";

import { Wrapper, Contatent } from "./index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Ticket from "./src/components/Ticket";

const Stack = createStackNavigator();

const StockList = () => {
  return (
    <Wrapper>
      <Contatent>
        {stockList.map((stock) => (
          <CardStock stock={stock} key={stock} />
        ))}
      </Contatent>
    </Wrapper>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Stock" component={StockList} />
        <Stack.Screen name="Ticket" component={Ticket} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
