import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanityConfig";

const HeadingRow = ({ title, description, id }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured" && _id == $id]{
            ...,
            restaurants[]->{
              ...,
              dishes[]->,
              type->{
                name
              }
            },
          }[0]`,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, []);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUri={restaurant.image}
            address={restaurant.address}
            title={restaurant.name}
            rating={restaurant.rating}
            dishes={restaurant.dishes}
            description={restaurant.short_description}
            genre={restaurant?.type?.name}
            lat={restaurant.lat}
            long={restaurant.long}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HeadingRow;
