import { createSlice } from '@reduxjs/toolkit';

const whiteboardSlice = createSlice({
  name: 'whiteboard',
  initialState:{
    shapes : []
  },
  reducers: {
    drawShape: (state, action) => {
      state.shapes.push(action.payload);
    },
    updateShape: (state, action) => {
      const { id, ...updatedProperties } = action.payload;
      const shape = state.shapes.find(shape => shape.id === id);
      if (shape) {
        Object.assign(shape, updatedProperties);
      }
    },
    deleteShape: (state, action) => {
      const shapeId = action.payload;
      state.shapes = state.shapes.filter(shape => shape.id !== shapeId);
    }
  }
});

export const { drawShape, updateShape, deleteShape } = whiteboardSlice.actions;
export default whiteboardSlice.reducer;
