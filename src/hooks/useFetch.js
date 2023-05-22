import { useEffect, useRef, useState } from "react"



export const useFetch = ( url ) => {
    

    const isMounted = useRef(true);
    const[ state, setState] = useState({
        data:null,
        loading: true,
        error: null
    });


    useEffect(()=>{
        isMounted.current = false;
    },[])

    

    useEffect( () => {
        setState( {
            data: null,
            loading: true,
            error: null
        })

        fetch( url).
        then (async resp => await resp.json()).
        then( ({id, name, sprites}) => {
            const sprite = sprites.front_default;
            if( isMounted ){
                setState( {
                    data: {id, name, sprite},
                    loading: false,
                    error: null
                });
            }
            
        })
    }, [url]);

    return state;

}



