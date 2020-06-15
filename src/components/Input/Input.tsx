import React from 'react';


type Props = {
    name: string
}

const Input: React.FC<Props> = ({ name }) => {

    return (
        <div className="input">
            {name}
        </div>
    )
}

export default Input
