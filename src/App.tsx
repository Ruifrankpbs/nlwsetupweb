import './styles/global.css';

import { Habit } from "./Components/Habit";


function App() {
  return (
    <div>
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={2} />
    </div>
  )
}

export default App
