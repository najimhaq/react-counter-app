import { useState } from 'react';

export default function CounterApp() {
  const [count, setCount] = useState(0);
  
  const handleDecrease = () => {
    setCount(prevCount => {
      if (prevCount > 0) {
        return prevCount - 1;
      } else {
        return 0;
      }
    });
  };
  const handleCountDecrese = ()=>{
    setCount(prevCount =>{
        if(prevCount > 0){
            return prevCount -5
        }else{
            return 0
        }
    })
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-600'>
      <div className='w-full max-w-sm rounded-xl bg-white p-6 shadow-lg'>
        <h1 className='mb-4 text-2xl font-semibold text-slate-800'>Counter</h1>

        <div className='mb-6 flex items-center justify-between'>
          <button
            className='rounded-lg bg-slate-200 px-4 py-2 text-slate-700 transition hover:bg-slate-300 active:scale-95'
            onClick={handleDecrease}
            aria-label='Decrease'
          >
            −
          </button>

          <div className='text-4xl font-bold text-slate-900 tabular-nums'>
            {count}
          </div>

          <button
            className='rounded-lg bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-700 active:scale-95'
            onClick={() => setCount(c => c + 1)}
            aria-label='Increase'
          >
            +
          </button>
        </div>

        <div className='flex gap-3'>
          <button
            className='rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-500 active:scale-95'
            onClick={handleCountDecrese} /* () => setCount(c => c - 5) */
          >
            -5
          </button>
          <button
            className='flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-700 transition hover:bg-slate-50 active:scale-95'
            onClick={() => setCount(0)}
          >
            Reset
          </button>

          <button
            className='rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-500 active:scale-95'
            onClick={() => setCount(c => c + 5)}
          >
            +5
          </button>
        </div>
      </div>
    </div>
  );
}
