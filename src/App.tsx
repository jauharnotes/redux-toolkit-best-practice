import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, decremented, amountAdded } from './features/counter/counter-slice'
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';
import logo from './logo.svg'
import './App.css'

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispacth = useAppDispatch();

  const [numDogs, setNumDogs] = useState(5);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);
  console.log(data);
  

  const handleIncrement = () => {
    dispacth(incremented());
  }

  const handleDecrement = () => {
    dispacth(decremented());
  }

  const handleAmount = () => {
    dispacth(amountAdded(3));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={handleIncrement}>
            +
          </button>
          <span>count is: {count}</span>
          <button onClick={handleDecrement}>
            -
          </button>
          <button onClick={handleAmount}>+3</button>
        </p>
        <p>
          <div>
            <p>Dog to fect:</p>
            <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='20'>20</option>
            </select>
          </div>
          <div>
            <p>Number of dogs fetched: {data.length}</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Picture</th>
                </tr>
              </thead>
              <tbody>
                {data.map((breed) => (
                  <tr key={breed.id}>
                    <td>{breed.name}</td>
                    <td>
                      <img src={breed.image.url} alt={breed.name} height={250} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
