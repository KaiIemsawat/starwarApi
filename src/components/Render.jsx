import React from "react";

export default function Render(props) {
    const { details, setDetails } = props;
    return (
        <div>
            <h1>{`${details.name}`}</h1>
        </div>
    );
}
