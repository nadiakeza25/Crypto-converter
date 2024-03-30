import ExchangeRate from "./ExchangeRate";
import { useState } from "react";
import axios from 'axios'

const CurencyConverter = () => {


const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']

const [chosenPrimayCurrency, setChosenPrimaryCurrency] = useState('BTC');

const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');
const [amount, setAmount] = useState(1)

console.log(amount)

const convert = () => {

const option = {
  method: "GET",
  url: "https://alpha-vantage.p.rapidapi.com/query",
  params: {
    to_currency: chosenSecondaryCurrency,
    function: "CURRENCY_EXCHANGE_RATE",
    from_currency: chosenPrimayCurrency,
  },
  headers: {
    "X-RapidAPI-Key": "6f5bf0432amsh42066096739d5b2p19c3bajsn21b4224763f6",
    "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
  },
};


	axios.request(option).then((response) => {
	console.log(response.data);
}).catch((error) => {
	console.error(error);

})

}

  return (
    <>
      <div className="currency-converter">
        <h2>CurrencyConverter</h2>

        <div className="input-box">
          <table>
            <tbody>
              <tr>
                <td>Primary Currency:</td>
                <td>
                  <input type="number" 
                  name="currency-amount -1" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)}


                  />
                </td>
                <td>
                  <select>
                    value = {chosenPrimayCurrency}
                    name="currency-option-1" 
                    className="currency-options"
                    onChange = {(e) => setChosenPrimaryCurrency(e.target.value)}
                    {currencies.map((currency, _index) => (
                      <option key={_index}>{currency}</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Second Currency:</td>
                <td>
                  <input type="number" name="currency-amount -2" value={""} />
                </td>
                <td>
                  <select>
                    value={chosenSecondaryCurrency}
                    name="currency-option-2" className="currency-options"
                    onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                    {currencies.map((currency, _index) => (
                      <option key={_index}>{currency}</option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <button id= "convert-button" onClick={convert}> Convert </button>
        </div>
        <ExchangeRate />
      </div>
    </>
  );
};
export default CurencyConverter;
