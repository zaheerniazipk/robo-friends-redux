import React from "react";

const Card = (props) => {
    const { id, name, email } = props;
    return (
        <div className="dib bg-light-green tc pa3 ma2 bw2 br3 grow shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="Robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;