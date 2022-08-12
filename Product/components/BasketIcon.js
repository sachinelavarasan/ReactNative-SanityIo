import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import { basketSelector, selectTotalBasket } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(basketSelector);
  const basketTotal = useSelector(selectTotalBasket);
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate("Basket");
  };
  if (!items?.length) {
    return null;
  }
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1"
        onPress={handleOnPress}
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items?.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="INR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
