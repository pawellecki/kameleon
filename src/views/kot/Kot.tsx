import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router"
import axios from 'axios'

type Props = {
    hero: number
}

const Kot: React.FC<Props> = ({hero}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setIsError] = useState(null)
    const [name, setName] = useState("")

    const location = useLocation()
    const id = location.pathname.split('/').pop()

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            
            .then(response => {
                // handle success
                setName(response.data.name)
            })
            .catch(({message}) => {
                // handle error
                // console.log("e",error.message);
                setIsError(message)
            })
            .then(() => {
                // always executed
                setIsLoaded(true)
            })
    }, [])

    

    return (
        <div className="kot">
            {error && <p>{error}</p>}
            
            {!error &&
                <>
                    {isLoaded ?
                            <p>{name}</p>
                            : <p>loadinf...</p>
                        }
                </>
            }
        </div>
    )
}

export default Kot
