import React, { useState, useEffect } from 'react'
import CleanupList from "./CleanupList"
import SearchBar from "./SearchBar"
import CleanupForm from "./CleanupForm"

function CleanupContainer() {
    const [cleanups, setCleanups] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/cleanups")
        // fetch(`${process.env.REACT_APP_API_BASE_URL}/cleanups`)
        .then(r => r.json())
        .then(setCleanups)
    }, [])

    const filteredCleanups = cleanups.filter((cleanup) => {
        // console.log("cleanup in search term filter: ", cleanup)
        return cleanup.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    console.log(cleanups)


    return (
        <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CleanupForm />
            <CleanupList cleanups={filteredCleanups}/>
        </>
    )
}

export default CleanupContainer