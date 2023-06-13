import { configureStore } from "@reduxjs/toolkit";
import whiteboardReducer from './whiteboardSlice';

const store = configureStore({
    reducer: {
      whiteboard: whiteboardReducer
    }
  });

export default store