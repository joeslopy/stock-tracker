import yahooFinance from "yahoo-finance2";

export async function getApiRequests() {
  console.log("HEEREREERERERERE");
  const result = await yahooFinance.search("AAPL");
  console.log(result);
}
