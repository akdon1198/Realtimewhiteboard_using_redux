import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { drawShape, updateShape, deleteShape } from './redux/whiteboardSlice'
import rectangleImage from './images/rectangle.png'
import circleImage from './images/circle.png'
import lineImage from './images/line.png'

const App = () => {
  const shapes = useSelector(state => state.whiteboard.shapes);
  const dispatch = useDispatch();

  const handleDraw = (type) => {
    let shape;
    switch (type) {
      case 'rectangle':
        shape = {
          id: shapes.length + 1,
          type: 'rectangle',
          x: 100,
          y: 100,
          width: 200,
          height: 100,
          color: 'blue'
        };
        break;
      case 'circle':
        shape = {
          id: shapes.length + 1,
          type: 'circle',
          x: 200,
          y: 200,
          radius: 50,
          color: 'red'
        };
        break;
      case 'line':
        shape = {
          id: shapes.length + 1,
          type: 'line',
          x1: 100,
          y1: 100,
          x2: 300,
          y2: 300,
          color: 'green'
        };
        break;
      default:
        return;
    }
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
      <div>
        <button onClick={() => handleDraw('rectangle')}>
          Draw Rectangle
          <img src={rectangleImage} alt="Rectangle" />
        </button>
        <button onClick={() => handleDraw('circle')}>
          Draw Circle
          <img src={circleImage} alt="Circle" />
        </button>
        <button onClick={() => handleDraw('line')}>
          Draw Line
          <img src={lineImage} alt="Line" />
        </button>
      </div>
      <ul>
        {shapes.map(shape => (
          <li key={shape.id}>
            Type: {shape.type}
            {shape.type === 'rectangle' && (
              <div>
                <span>Width: {shape.width}</span>
                <span>Height: {shape.height}</span>
              </div>
            )}
            {shape.type === 'circle' && (
              <div>
                <span>Radius: {shape.radius}</span>
              </div>
            )}
            {shape.type === 'line' && (
              <div>
                <span>X1: {shape.x1}</span>
                <span>Y1: {shape.y1}</span>
                <span>X2: {shape.x2}</span>
                <span>Y2: {shape.y2}</span>
              </div>
            )}
            <button onClick={() => handleUpdate(shape.id, { width: shape.width + 50 })}>
              Increase Width
            </button>
            <button onClick={() => handleDelete(shape.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
