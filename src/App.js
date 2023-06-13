import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { drawShape, updateShape, deleteShape } from './redux/whiteboardSlice';

const App = () => {
  const shapes = useSelector(state => state.whiteboard.shapes);
  const dispatch = useDispatch();

  const handleDraw = () => {
    const otherShapeProperties = {
      x: 100,
      y: 100,
      width: 200,
      height: 100,
      color: 'blue'
    };

    const shape = { id: shapes.length + 1, type: 'rectangle', ...otherShapeProperties };
    dispatch(drawShape(shape));
  };

  const handleUpdate = (shapeId, updatedProperties) => {
    const updatedShape = { id: shapeId, ...updatedProperties };
    dispatch(updateShape(updatedShape));
  };

  const handleDelete = (shapeId) => {
    dispatch(deleteShape(shapeId));
  };

  return (
    <div>
      <button onClick={handleDraw}>Draw Shape</button>
      <ul>
        {shapes.map(shape => (
          <li key={shape.id}>
            Type: {shape.type}, x: {shape.x}, y: {shape.y}, width: {shape.width}, height: {shape.height}, color: {shape.color}
            <button onClick={() => handleUpdate(shape.id, { width: shape.width + 50 })}>Increase Width</button>
            <button onClick={() => handleDelete(shape.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
