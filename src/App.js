import logo from './logo.svg';
import './App.css';
import Random from './Example/Random'
import Checked from './Example/Checked';
import Todos from './Example/Todos'
import ShowHide from './Example/ShowHide'
import UseEffectReact from './Example/UseEffectReact';
import ReSize from './Example/ReSize';
import Timer from './Example/Timer';
import Avatar from './Example/Avatar';
import ChatApp from './Example/ChatApp';
import Ref from './Example/Ref';
import { useState } from 'react';

function App() {

  const [info, setInfo] = useState({
    name: 'thinh',
    age: 20,
    address: 'Ha Noi'
  })
  const [counter, setCounter] = useState(1)

  const handleIncrease = () => {
    setInfo({
      ...info,
      bio: 2000000
    })
    setCounter(counter + 1)
  }
  const handleDiscount = () => {
    if (counter === 0) {
      return
    }
    setCounter(counter - 1)

  }

  const [toggle, setToggle] = useState(false)

  return (
    <div className="App">
      <header className="App-header" style={{ padding: 20 }}>
        <img src={logo} className="App-logo" alt="logo" />
        <div>{counter}</div>
        <div>{JSON.stringify(info)}</div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDiscount}>Discount</button>
        <button style={{ marginTop: 10 }} onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <Ref />}
        {/* <Random />
        <Checked /> */}
        {/* <Todos />
        <ShowHide />
        <UseEffectReact /> */}
        {/* <ReSize /> */}
        {/* <Timer />
        <Avatar /> */}

      </header>
    </div>
  );
}

export default App;
