import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { getApiRequests } from "../../ApiRequests";
import { useEffect } from "react";
import { registerRootComponent } from "expo";
import { thing } from "./tempData";
import { StockCell } from "../components/StockCell";
import { Search } from "../components/SearchBar";
import { HStack } from "../components/HoritzontalTextStack";
export default function StockScreen() {
  //getApiRequests();

  useEffect(() => {
    console.log("YES");
  });

  function searchStock(text: string) {
    console.log("COOL", text);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search search={searchStock}></Search>
      {/* <FlatList
        data={thing}
        renderItem={({ item }) =>
          StockCell({
            ticker: item.price.symbol,
            name: item.price.longName,
            price: item.price.regularMarketPrice,
            marketCap: item.price.marketCap,
            priceChangeFromOpen: item.price.regularMarketChange,
            priceChangePercentageFromOpen:
              item.price.regularMarketChangePercent,
          })
        }
      /> */}
      <HStack
        title1={"Bid"}
        title2={"Mkt cap"}
        textValue1={"24.24"}
        textValue2={"45.91B"}
      ></HStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

registerRootComponent(StockScreen);
