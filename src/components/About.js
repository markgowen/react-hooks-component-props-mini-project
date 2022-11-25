import React from "react";

function About(props) {
    if (!props.image) {
        return "https://via.placeholder.com/215"
    }

    return (
        <aside>
            <img src={props.image} alt="blog logo"/>
            <p>{props.about}</p>
        </aside>
    )
};

export default About;
