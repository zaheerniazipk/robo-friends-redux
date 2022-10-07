import React from "react";

const Card = (props) => {
    const { id, name, email } = props;
    return (
        <div>
            <img src={`https://robohash.org/${id}?200x200`} alt="Robots" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;