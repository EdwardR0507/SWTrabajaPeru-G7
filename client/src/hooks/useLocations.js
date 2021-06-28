import { useState, useEffect } from 'react';

const useLocationsMid = locations => {
    const [myLocations, setLocations] = useState([]);

    useEffect(() => {
        fetch(locations,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
)
        .then(res => res.json())
        .then(data => setLocations(data));
    }, []);

    return myLocations;
}

const useLocations = () => {
    return({
        departamentos: useLocationsMid("data/departamentos.json"),
        provincias: useLocationsMid("data/provincias.json"),
        distritos: useLocationsMid("data/distritos.json")
    })
}

export default useLocations;