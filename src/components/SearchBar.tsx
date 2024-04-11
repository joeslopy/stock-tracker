import { SearchBar } from "@rneui/base";
import { useEffect, useState } from "react";
import { Platform } from "react-native";

export interface SearchProps {
  search(text: string): void;
}

export function Search({ search }: SearchProps) {
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {});

  function searchChanged(text: string) {
    setSearchText(text);
    search(text);
  }

  return (
    <SearchBar
      platform={Platform.OS == "ios" ? "ios" : "android"}
      placeholder="Search"
      value={searchText}
      onChangeText={searchChanged}
    ></SearchBar>
  );
}
