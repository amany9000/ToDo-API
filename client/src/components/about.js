import React from 'react';

const About = () => {

    setTimeout(() => {
        window.location.href = "https://www.github.com/amany9000"
    }, 8000)

    return (
        <div classname="container">
            <h4 className="center">About</h4>
            <p className="container"> I'm just a blockchain dev, trying to make some sense of react.</p>
            <p className="container"> You are going to be directed to my github, feel free to follow, adios.</p>
        </div>
    )
}

export default About;