import React, { useState, useEffect } from 'react'
import SearchCleanups from "./SearchCleanups"
import CleanupCard from "./CleanupCard"

function CleanupList() {
    const [cleanups, setCleanups] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/cleanups`)
        // fetch(`${process.env.REACT_APP_API_BASE_URL}/cleanups`)
        .then(r => r.json())
        .then(setCleanups)
    }, [])

    const filteredCleanups = cleanups.filter((cleanup) => {
        // console.log("cleanup in search term filter: ", cleanup)
        return cleanup.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    const displayCleanups = filteredCleanups.map((cleanup) => {
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
