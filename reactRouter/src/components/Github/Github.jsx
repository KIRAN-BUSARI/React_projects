import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    const data = useLoaderData()

    // const [data,setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/KIRAN-BUSARI')
    //     .then((response) => response.json())
    //         .then(data => {
    //             console.log("Data", data);
    //             setData(data)
    //     })
    // }, [])   

    return (
        <div className="text-3xl text-orange-600 m-4 bg-gray-400 text-center p-4">Github Followers: {data.followers}
            <h1>Github Following: {data.following }</h1>
            <h1>Repos Count: {data.public_repos }</h1>
            <img src={data.avatar_url} width={300} alt="" />
        </div>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const res= await fetch(`https://api.github.com/users/KIRAN-BUSARI`)
    return res.json()
}
