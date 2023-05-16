import {configureStore} from "@reduxjs/toolkit";
import themeColor from "./slices/themeColor.slice";

export default configureStore({
  reducer: {
    themeColor
  }
});
