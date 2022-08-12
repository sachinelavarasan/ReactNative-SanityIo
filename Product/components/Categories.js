import { View, Text, ScrollView } from "react-native";

import CategoryCard from "./CategoryCard";

const Categories = ({ categories }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {categories?.map((category) => (
        <CategoryCard
          imgUri={category.image}
          title={category.name}
          key={category._id}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
