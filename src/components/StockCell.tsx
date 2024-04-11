import { View, Text, Dimensions } from "react-native";

export interface StockCellProps {
  ticker: string;
  name: string;
  price: number;
  marketCap: number;
  priceChangeFromOpen: number;
  priceChangePercentageFromOpen: number;
}

export function StockCell({
  ticker,
  name,
  price,
  priceChangeFromOpen,
  priceChangePercentageFromOpen,
}: StockCellProps) {
  const width = Dimensions.get("window").width;
  const sign = priceChangeFromOpen > 0 ? "+" : "-";
  const color = priceChangeFromOpen > 0 ? "green" : "red";

  return (
    <View>
      <View
        style={{
          borderColor: "transparent",
          borderBottomColor: "red",
          borderWidth: 1,
          marginLeft: 16,
        }}
      ></View>
      <View
        style={{
          width: width,
          flexDirection: "row",
          display: "flex",
          padding: 16,
          // marginTop: 4,
          // marginBottom: 4,
          // marginLeft: 8,
          // marginRight: 8,
          // borderRadius: 16,
        }}
      >
        <View style={{}}>
          <Text style={{ fontSize: 24 }}>{ticker}</Text>
          <Text>{name}</Text>
        </View>
        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <Text style={{ textAlign: "right" }}>
            {"$"}
            {price}
          </Text>
          <Text style={{ textAlign: "right", color }}>
            {sign}
            {Number(priceChangeFromOpen).toFixed(2)}{" "}
            {`(${sign}${Number(priceChangePercentageFromOpen * 100).toFixed(
              2
            )}%)`}
          </Text>
        </View>
      </View>
    </View>
  );
}
