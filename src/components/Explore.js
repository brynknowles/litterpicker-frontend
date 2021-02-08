// import React, { useState, useEffect } from 'react'
import CleanupList from "./CleanupList"
import SearchCleanups from "./SearchCleanups"

function Explore({ users, cleanups, searchTerm, setSearchTerm}) {

    const filteredCleanups = cleanups.filter((cleanup) => {
        // console.log("cleanup in search term filter: ", cleanup)
        return cleanup.location.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    console.log(cleanups)

    return (
        <section>
            <SearchCleanups searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CleanupList cleanups={filteredCleanups}/>
        </section>
    )
}

export default Explore;



// function CleanupContainer() {
//     const [cleanups, setCleanups] = useState([])
//     const [searchTerm, setSearchTerm] = useState("")

//     useEffect(() => {
//         fetch("http://localhost:3000/cleanups")
//         // fetch(`${process.env.REACT_APP_API_BASE_URL}/cleanups`)
//         .then(r => r.json())
//         .then(setCleanups)
//     }, [])

//     const filteredCleanups = cleanups.filter((cleanup) => {
//         // console.log("cleanup in search term filter: ", cleanup)
//         return cleanup.location.name.toLowerCase().includes(searchTerm.toLowerCase())
//     })

//     console.log(cleanups)


//     return (
//         <>
//             <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//             <CleanupForm />
//             <CleanupList cleanups={filteredCleanups}/>
//         </>
//     )
// }

// export default CleanupContainer;