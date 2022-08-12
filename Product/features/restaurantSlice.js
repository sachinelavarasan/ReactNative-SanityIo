import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    id: null,
    imgUri: null,
    address: null,
    title: null,
    rating: null,
    dishes: null,
    description: null,
    genre: null,
    lat: null,
    long: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

export const restaurantSelector = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
