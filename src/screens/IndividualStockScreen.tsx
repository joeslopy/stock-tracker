import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { getApiRequests } from "../../ApiRequests";
import { useEffect } from "react";
import { registerRootComponent } from "expo";
import { thing } from "./tempData";
import { StockCell } from "../components/StockCell";
import { Search } from "../components/SearchBar";
import { Finance } from "../interfaces";

// bid, ask, open, high, low exchange, mkt cap, pe, 52h, 52l, vol, avg vol, yield, eps

export default function IndividualStockScreen({
  price,
  summaryDetail,
}: Finance.QuoteSummary) {}
