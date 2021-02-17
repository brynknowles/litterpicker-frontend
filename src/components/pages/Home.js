function Home() {
    return (
        <section>
            <h1>A Communal Space To Help You Clean Up Your World!</h1>
            <br />
            <div className="background-image">
                {/* <h1>Background Image</h1> */}
                {/* <img src="https://thumbs.dreamstime.com/b/people-cleaning-beach-cartoon-characters-collecting-trash-save-environment-vector-concepts-to-clean-garbage-trash-169003334.jpg" alt="clean up your world" /> */}
                {/* <img src="https://c1.vgtstatic.com/thumb/2/3/230799-v1-xl/prospect-park.jpg" alt="prospect park bird's eye view"/> */}
                <img className="background-image" src="https://images.unsplash.com/photo-1554265352-d7fd5129be15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="beach cleanup" width="100%"/>
            </div>
        </section>
    )
}

export default Home;