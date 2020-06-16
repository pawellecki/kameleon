import React from 'react';
import { useLocation, useHistory } from "react-router"

type Props = {
}

const KotList: React.FC<Props> = ({}) => {
    const location = useLocation()
    const history = useHistory()
    return (
        <div className="kot"> koto lista
        {console.log("location",location)}
        {console.log("history",history)}
        </div>
    )
}

export default KotList
