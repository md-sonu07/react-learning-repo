import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "./Skeleton";

function CurrencyExchangeApp() {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [rates, setRates] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rotate, setRotate] = useState();


  useEffect(() => {
    axios.get("https://open.er-api.com/v6/latest/USD")
      .then((res) => {
        setRates(res.data.rates);
        setLoading(false);
      });
  }, []);

  const convert = () => {
    const amt = parseFloat(amount);
    if (!rates[fromCurrency] || !rates[toCurrency]) return setResult(null);
    setResult(((amt / rates[fromCurrency]) * rates[toCurrency]).toFixed(2));

  };

  const swap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    toCurrency === 'INR' ? setAmount(100) : setAmount(1);

    setRotate(true);
    setTimeout(() => setRotate(false), 1000);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat backdrop-blur-sm"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}>

      {loading ? (
        <Skeleton />
      ) : (

        <div className="flex flex-col items-center gap-4 p-6 bg-white/30 backdrop-blur-sm border-1 rounded-md text-white">
          <h1 className="text-3xl font-bold ">$ Currency Converter </h1>
          <p className='text-md font-semibold -mt-2 w-full pr-10 flex justify-end items-end'>Date: {new Date().toLocaleDateString()}</p>
          <div className='UPPER-DIV bg-white rounded-md text-black p-4 '>
            <div className='flex text-md pb-4 justify-between'>
              <p>From | Amount</p>
              <p>Currency Type</p>
            </div>
            <div className='flex justify-between gap-4'>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder='Enter Exchange Amount'
                className="p-2 w-60 rounded-md outline-none text-black border-1"
              />

              <div className="relative">
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="p-2 px-4 cursor-pointer appearance-none rounded outline-none border bg-gray-200 text-black pr-8">
                  {Object.keys(rates).map(rateValues => <option key={rateValues} value={rateValues}>{rateValues}</option>)}
                </select>
                <span className="absolute font-extrabold  right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-700">
                  ⇩
                </span>
              </div>
            </div>
          </div>
          <div className='DOWN-DIV bg-white rounded-md text-black p-4 '>
            <div className='flex text-md pb-4 justify-between'>
              <p>To | Rate</p>
              <p>Currency Type</p>
            </div>
            <div className='flex justify-between gap-4'>
              <input
                type="text"
                value={result}
                disabled
                placeholder='Exchange Result'
                className="p-2 w-60 rounded-md outline-none text-black border-1"
              />

              <div className="relative">
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="p-2 px-4 cursor-pointer appearance-none rounded outline-none border bg-gray-200 text-black pr-8">
                  {Object.keys(rates).map(rateValues => <option key={rateValues} value={rateValues}>{rateValues}</option>)}
                </select>
                <span className="absolute font-extrabold  right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-700">
                  ⇩
                </span>
              </div>
            </div>
          </div>

          <div className='flex w-full text-md justify-center gap-4'>
            <button
              onClick={convert}
              className="bg-blue-700 cursor-pointer w-full px-4 py-2 rounded-md hover:scale-102 duration-300 transition"
            >
              Convert
            </button>

            <button
              onClick={swap}
              className='bg-gray-600 gap-2 flex hover:bg-gray-500 cursor-pointer w-1/3 px-4 py-2 rounded-md text-nowrap'>
              <span className={rotate ? "animate-spin " : ""}>
                ↻
              </span>
              Swap
            </button>


          </div>
        </div>
      )}
    </div>
  )
}

export default CurrencyExchangeApp
