import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { getApiRequests } from "../../ApiRequests";
import { useEffect, useState } from "react";
import { registerRootComponent } from "expo";
import { thing } from "./tempData";
import { StockCell } from "../components/StockCell";
import { Search } from "../components/SearchBar";
import { HStack } from "../components/HoritzontalTextStack";
import { Finance } from "../interfaces";
import { YahooFinanceAPI } from "../api";
import { StockSearchCell } from "../components/StockSearchCell";
import { Link } from "expo-router";
import { router } from "expo-router";
import { useRouter } from "expo-router";
export default function StockScreen() {
  const router = useRouter();
  const [searchData, setSearchData] = useState<Finance.Quote[]>();
  const [isSearching, setIsSearching] = useState<boolean>(false);

  useEffect(() => {
    console.log("YES");
  });

  async function searchStock(text: string) {
    setIsSearching(text != "");
    const searchData = await YahooFinanceAPI.search(text);
    const arr = searchData.data.quotes.filter(
      (q: any) => q.isYahooFinance == true
    );
    setSearchData(arr);
  }

  function asd() {
    router.push("/IndividualStockScreen");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Search search={searchStock}></Search>
      {isSearching ? (
        <FlatList
          data={searchData}
          renderItem={({ item }) =>
            StockSearchCell({
              ticker: item.symbol,
              name: item.longname,
              exchange: item.exchDisp,
              onPress: asd,
            })
          }
        />
      ) : (
        <FlatList
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
        />
      )}
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
