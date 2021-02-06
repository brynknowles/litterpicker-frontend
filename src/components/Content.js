import React, { useState, useEffect} from 'react'
import CleanupContainer from "./CleanupContainer"
import ProfileContainer from './ProfileContainer'

function Content() {

    return (
        <>
            {/* <div className="background-image">
                <img src="https://c1.vgtstatic.com/thumb/2/3/230799-v1-xl/prospect-park.jpg" alt="prospect park bird's eye view"/>
            </div> */}
            <ProfileContainer />
            <CleanupContainer />
        </>
    )
}

export default Content;