import React from "react"
import twitter from "/images/twitter.png"
import facebook from "/images/facebook.svg"
import instagram from "/images/instagram.svg"
import github from "/images/github.svg"

export default function Footer() {
    return(
        <footer>
            <a href="">
                <img className="footer-icon"src={twitter} />
            </a>
            <a href="">
                <img className="footer-icon"src={facebook} />
            </a>
            <a href="">
                <img className="footer-icon"src={instagram} />
            </a>
            <a href="">
                <img className="footer-icon"src={github} />
            </a>
        </footer>
    )
}