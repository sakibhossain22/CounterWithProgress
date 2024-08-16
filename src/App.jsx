import { useState } from 'react';
import AgeCalc from './AgeCalc';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);
  const [index, setIndex] = useState(0);
  const [unRedo, setUnRedo] = useState(0)

  const handleIncrement = () => {
    if (count < 150) {
      const newCount = count + 1;
      updateHistory(newCount);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      updateHistory(newCount);
    }
  };

  const updateHistory = (newCount) => {
    const newHistory = history.slice(0, index + 1);
    setHistory([...newHistory, newCount]);
    setIndex(newHistory.length);
    setCount(newCount);
  };

  const handleUndo = () => {
    if (count > 0) {
      setUnRedo(count)
      setCount(0)

    }
  };

  const handleRedo = () => {
    setCount(unRedo)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 lg:p-4">
      <div className='flex lg:flex-row flex-col lg:px-0 px-2 items-center justify-center gap-5 w-full'>
        <div className="bg-white rounded-lg shadow-lg p-6 lg:w-2/5 w-full text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Counter</h2>
          <div className="flex justify-between mb-4">
            <button
              onClick={handleDecrement}
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-red-600 transition duration-300"
            >
              -
            </button>
            <span className="text-4xl font-bold text-gray-800">{count}</span>
            <button
              onClick={handleIncrement}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-green-600 transition duration-300"
            >
              +
            </button>
          </div>
          <div className="relative w-full h-4 bg-gray-300 rounded-full overflow-hidden mb-4">
            <div
              className="absolute left-0 h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${(count / 150) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleUndo}
              className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-yellow-600 transition duration-300"
            >
              Undo
            </button>
            <button
              onClick={handleRedo}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Redo
            </button>
          </div>
        </div>
        <div className='lg:w-2/5 w-full'>
          <AgeCalc></AgeCalc>
        </div>
      </div>
    </div>
  );
};

export default Counter;
