import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import HeadingRow from "../components/HeadingRow";
import sanityClient from "../sanityConfig";

const HomeScreen = () => {
  const [featuredRow, setFeaturedRow] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->
            }
          }`
      )
      .then((data) => setFeaturedRow(data));
  }, []);
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "menucategory"]`)
      .then((data) => setCategories(data));
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5 mb-36">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={require("../assets/avatar.jpg")}
          className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={25} color="#00CCBB" />
      </View>

      {/* Search*/}
      <View className="flex-row flex-1 space-x-2 mx-4 pb-2 items-center">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon size={25} color="#00CCBB" />
      </View>

      {/* Category*/}
      <ScrollView className="bg-gray-100">
        <Categories categories={categories} />
        {featuredRow?.map((item) => (
          <HeadingRow
            title={item.name}
            id={item._id}
            description={item.short_description}
            key={item._id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
