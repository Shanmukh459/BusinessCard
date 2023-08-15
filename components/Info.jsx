import React from "react"
import profile from "/images/profile.JPG"

export default function Info() {
    return(
        <>
            <img src={profile}/>
            <div>Shanmukh Krishna</div>
            <div>Software Developer</div>
            <a href="https://shanmukh459.github.io/Portfolio/">Shanmukh.website</a>
        </>
    )
}