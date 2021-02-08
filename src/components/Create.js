import CleanupForm from './CleanupForm'

function Create({ onCreateCleanup }) {
    return (
        <>
            <CleanupForm onCreateCleanup={onCreateCleanup} />
        </>
    )
}

export default Create;