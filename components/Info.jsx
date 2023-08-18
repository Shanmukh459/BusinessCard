import React from "react"
import profile from "/images/profile.JPG"
import email from "/images/email.jpg"
import linkedIn from "/images/linkedIn.jpg"

export default function Info() {
    return(
        <section className="info-section">
            <img className="profile-image-info" src={profile}/>
            <div className="info-name">Shanmukh Krishna</div>
            <div className="info-title">Software Developer</div>
            <a className="info-site" href="https://shanmukh459.github.io/Portfolio/">Shanmukh.website</a>
            <div className="button-div">
                <a className="email-link" href="mailto:shanmukhkrishnab@gmail.com">
                    <button className="email-button">
                        <img className="email-icon-info" src={email} />
                        <p className="button-text">Email</p>
                    </button>
                </a>
                <a className="linkedin-link" href="https://www.linkedin.com/in/shanmukh-krishna/">
                    <button className="linkedIn-button">
                        <img className="linkedIn-icon-info" src={linkedIn} />
                        LinkedIn
                    </button>
                </a>
            </div>
            
        </section>
    )
}