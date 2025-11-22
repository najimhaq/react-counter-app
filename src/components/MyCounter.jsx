import { useState } from 'react';

const MyCounter = () => {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount(prevCount => Math.max(prevCount - 1, 0));
  };

  const handleMinusFive = () => {
    setCount(prevCount => Math.max(prevCount - 5, 0));
  };

  const handlePlus = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handlePlusFive = () => {
    setCount(prevCount => prevCount + 5);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className='first-div'>
      <div className='second-div'>
        <h1 className='head-h1'>Counter</h1>
        <div className='mb-6 flex items-center justify-between'>
          <button onClick={handleMinus} className='btn-minus' type='button'>
            -
          </button>
          <div className='text-4xl font-bold text-slate-900 tabular-nums'>
            {count}
          </div>
          <button onClick={handlePlus} className='btn-plus' type='button'>
            +
          </button>
        </div>
        <div className='flex gap-3'>
          <button onClick={handleMinusFive} className='btn-primary'>
            -5
          </button>
          <button onClick={handleReset} className='btn-reset'>
            Reset
          </button>
          <button onClick={handlePlusFive} className='btn-primary'>
            +5
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCounter;
