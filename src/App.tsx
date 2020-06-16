import React, { useState } from 'react';
import './App.css';
import { Tabs, Input } from "./components"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom" //https://www.youtube.com/watch?v=CZeulkp1ClA
import { Kot, KotList } from "./views/kot"

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
    <Router>
      <aside className="sidebar">
        <div>
          <h1>to jest sidebar</h1>
          <ul>
            <li>
              <Link to={
                {
                  pathname: "/koty",
                  state: {
                    voice: "miauu"
                  }
                }
              }>
                wszystkie koty
              </Link>
            </li>
            <li>
              <Link to={
                {
                  pathname: `/koty/${chosenTab}`,
                  state: {
                    voice: "jeden kot miauu",
                    hero: {chosenTab}
                  }
                }
              }>
                jeden kot po id
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <main className="main">
        CHosen ONE!!!: {chosenTab}
        <Tabs
          config={config}
          handleChooseTab={chooseTab}
        />
        {chosenTab === 1 && <Input name='piesel' />}
        {chosenTab === 2 && <Input name='kura' />}
        {chosenTab === 3 && <Input name='doniczka' />}
        
        <Switch>
          <Route path="/koty/:id" component={Kot}/>
          <Route path="/koty" component={KotList}/>
          <Route path="/"/>
        </Switch>
      </main>
    </Router>
  )
}
  

export default App;
