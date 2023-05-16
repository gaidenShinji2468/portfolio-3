import {createSlice} from "@reduxjs/toolkit";

export const themeColorSlice = createSlice({
  name: "themeColor",
  initialState: {
    type: "light",
    palette: {
      bg: "#fff",
      title: "#d9534f",
      subTitle: "#f0ad4e",
      paragraph: "#1a1a1a",
      component: "#343a40"
    }
  },
  reducers: {
    setThemeColor: (state, action) => action.payload
  }
});
export const {setThemeColor} = themeColorSlice.actions;
export default themeColorSlice.reducer;
