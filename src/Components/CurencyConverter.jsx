import ExchangeRate from "./ExchangeRate";
import { useState } from "react";
import axios from "axios";

const CurencyConverter = () => {
  const primaryCurrencies = ["BTC", "ETH", "XRP", "LTC", "ADA"];
  const secondraryCurrencies = ["USD", "JPY","EU"];
  const [chosenPrimayCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [newAmount,setnewAmount]=useState(66783)

  const convert = async () => {
    const option = {
      method: "GET",
      url: "https://www.alphavantage.co/query",
      params: {
        to_currency: chosenSecondaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        from_currency: chosenPrimayCurrency,
        apikey:"B1V4C7CROIXPM8OM"
      }
    };
    const req = await axios
      .request(option)
      .then((response) => {
        const dd=response.data['Realtime Currency Exchange Rate']
        setnewAmount(amount*dd['5. Exchange Rate'])
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
<div className="currency-converter">
        <h2>CurrencyConverter</h2>
    <div >
        <table>
          <tbody>
              <tr>
                <td>Primary Currency:</td>
                <td>
                  <input
                    type="number"
                    name="currency-amount -1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </td>
                <td>
                  <select
                  name="currency-option-1"
                  value = {chosenPrimayCurrency}
                  className="currency-options" 
                  onChange={(e)=>{
                     setChosenPrimaryCurrency(e.target.value)
                  }} 
                  >
                    {primaryCurrencies.map((currency, _index) => (
                      <option key={_index}>{currency}</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Results :</td>
                <td>
                  <input type="number" value={newAmount} name="currency-amount -2"  readOnly />
                </td>
                <td>
                  <select
                    value={chosenSecondaryCurrency}
                    name="currency-option-2" className="currency-options"
                    onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                  >
                    {secondraryCurrencies.map((currency, _index) => (
                      <option key={_index}>{currency}</option>
                    ))}
                  </select>
                </td>
              </tr>
          </tbody>
          </table>
          <button id="convert-button" onClick={convert}>
            Convert
          </button>
       </div>
    <div>
</div>
</div>
    </>
  );
};
export default CurencyConverter;



