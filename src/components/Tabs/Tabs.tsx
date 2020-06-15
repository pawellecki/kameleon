import React, { useState } from 'react';

type Tab = {
    id: number,
    name: string
}

type Props = {
    config: Array<Tab>
    handleChooseTab: (id: number) => void
    // config: Tab[] second version
}

const Tabs: React.FC<Props> = ({ config, handleChooseTab }) => {
    const [chosenTab, setChosenTab] = useState(config[0].id)

    const setChosen = (id: number) => {
        handleChooseTab(id)
        setChosenTab(id)
    }

    return (
        <div className="tabs">
            <ul>
                {/* {config.map(el =>  */}
                {config.map( ({ id, name }) => 
                    <li
                        key={id}
                        className={`${chosenTab === id ? "active" : ''}`}
                        onClick={() => setChosen(id)}
                    >
                        {name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Tabs
