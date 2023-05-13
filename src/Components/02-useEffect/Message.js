import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });

    const {x,y} = coords;

    useEffect( (e)=> {

        window.addEventListener('mousemove', (e) => {
            const coords = {
                x: e.x,
                y: e.y
            }
            setCoords(coords);
        })

        return () => {
            window.removeEventListener('mousemove', (e) => {
                console.log('Event Removed');
            });
        }


    },[]);



  return (
    <div>
        <p>X: { x }  Y: { y }</p>
    </div>
  )
}
