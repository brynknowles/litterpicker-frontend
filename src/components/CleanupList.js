import CleanupCard from "./CleanupCard"

function CleanupList({ cleanups }) {
    const displayCleanups = cleanups.map((cleanup) => {
        return <CleanupCard key={cleanup.id} cleanup={cleanup} />
    })
    return (
        <section>
            <h1>Cleanup List</h1>
            <ul className="cards">{displayCleanups}</ul>
        </section>
    )
}

export default CleanupList
