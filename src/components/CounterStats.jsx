import { useState, useEffect } from "react";

const CounterStats = (props) => {
  const [counter, setCounter] = useState(0); // hook

  const { setTotal, total, stat } = props;

  // only activates when the page is reloaded
  useEffect(() => {
    const minusButtons = document.querySelector(`#minus-${stat}`);

    if (counter === 0) {
      minusButtons.classList.add('disabled');
    } else {
      minusButtons.classList.remove('disabled');
    }
  }, [counter, stat]); // inside [] we can pass a variable and if changes it will be called


  return (
    <div>
      <p><strong>{stat}</strong></p>
      <div className="d-flex justify-content-center">
        <button className="mx-3 col-2 btn btn-dark" id={`minus-${stat}`}
          onClick={()=>{
            if (counter > 0) {
              setCounter((prevCount)=>prevCount - 1);
              setTotal((prevTotal)=>prevTotal + 1);
            }
          }}>-
        </button>

        <p className="col-2">{counter}</p>

        <button className="mx-3 col-2 btn btn-dark add" id={`plus-${stat}`}
          onClick={()=> {
            if (total > 0) {
              setCounter((prevCount)=>prevCount + 1);
              setTotal((prevTotal)=>prevTotal - 1);
            }
          }}>+
        </button>
      </div>
    </div>
  )
};

export default CounterStats;
