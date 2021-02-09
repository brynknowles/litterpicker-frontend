import React, { useState, useEffect } from 'react'
import SearchCleanups from "./SearchCleanups"
import CleanupCard from "./CleanupCard"

function CleanupList({ cleanups, searchTerm, setSearchTerm }) {
    // const [cleanups, setCleanups] = useState([])
    // const [searchTerm, setSearchTerm] = useState("")

    console.log("cleanups in CleanupList: ", cleanups)

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_BASE_URL}/cleanups`)
    //     // fetch(`${process.env.REACT_APP_API_BASE_URL}/cleanups`)
    //     .then(r => r.json())
    //     .then(setCleanups)
    // }, [])

    const displayCleanups = cleanups.map((cleanup) => {
        return <CleanupCard key={cleanup.id} cleanup={cleanup} />
    })


    return (
        <section>
            <h1>Cleanup List</h1>
            <SearchCleanups searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ul className="cards">{displayCleanups}</ul>
        </section>
    )
}

export default CleanupList;
