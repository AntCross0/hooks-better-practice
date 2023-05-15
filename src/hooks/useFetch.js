import { useEffect, useState } from "react"



export const useFetch = ( url ) => {

    const[ state, setState] = useState({
        data:null,
        loading: true,
        error: null
    });
    

    useEffect( () => {
        setState( {
            data: null,
            loading: true,
            error: null
        })

        fetch( url).
        then (resp => resp.json()).
        then( ({id, name, sprites}) => {
            const sprite = sprites.front_default;

                setState( {
                    data: {id, name, sprite},
                    loading: false,
                    error: null
                });

            
        })
    }, [url]);

    return state;

}



