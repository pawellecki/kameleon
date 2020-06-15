import React, { useState } from 'react';
import './App.css';
import { Tabs, Input } from "./components"

const App: React.FC<{}> = () => {

  const [chosenTab, setChosenTab] = useState(1)
  const config = [
    { id: 1, name: "KOT PIEwwszy"},
    { id: 2, name: "KOT drugi"},
    { id: 3, name: "kott czecii"}
  ]

  const chooseTab = (id: number) => {
    console.log("id:", id)
    setChosenTab(id)
  }


  return (
    <div className="App">
      CHosen ONE!!!: {chosenTab}
      <Tabs
        config={config}
        handleChooseTab={chooseTab}
      />
      {chosenTab === 1 && <Input name='piesel' />}
      {chosenTab === 2 && <Input name='kura' />}
      {chosenTab === 3 && <Input name='doniczka' />}
    </div>
  )
}
  

export default App;
