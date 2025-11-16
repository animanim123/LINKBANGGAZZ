import { useEffect, useState } from 'react'
import React from 'react'

const belajarapi2 = () => {
    const endpoint = "https://jsonplaceholder.typicode.com/posts";
    const [ahay, setAhay] = useState([]);

    const Fecth = async () => {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(data);
        setAhay(data);
    }
    useEffect(() => {
        Fecth();
    }, []);

  return (
    <>
    {ahay.map((nana) => {
        return (
            <>
              <div className="" key={nana.id}>
                <p>{nana.body}</p>
              </div>
            </>
        )
    })}
    </>
  )
}

export default belajarapi2