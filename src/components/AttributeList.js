import { useState, useEffect } from 'react';
import CounterStats from './CounterStats';

const AttributeList = () => {
  const [total, setTotal] = useState(18);

  const stats = ['ATK', 'DEF', 'SPD', 'DEX', 'INT', 'LUK'];


  // only activates when the page is reloaded
  useEffect(() => {
    const plusButtons = document.querySelectorAll('.add');

    if (total === 0) {
      plusButtons.forEach((button)=>button.classList.add('disabled'));
    } else {
      plusButtons.forEach((button)=>button.classList.remove('disabled'));
    }
    if (total < 0) {
      alert('Not enough points');
    }
  }, [total]); // inside [] we can pass a variable and if changes it will be called

  return (
    <div>
      <h1 className='my-4'>Remaining: {total}p</h1>
      <hr />
      <div className="d-flex flex-column justify-content-center">
        { stats.map((stat) => <CounterStats setTotal={setTotal} total={total} stat={stat} key={stat}/>)}
      </div>
    </div>
  );
}

export default AttributeList;
