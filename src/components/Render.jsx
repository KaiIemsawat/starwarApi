import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Render(props) {
    const { select, id } = useParams();
    const [respBody, setRespBody] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${select}/${id}`).then((resp) => {
            setRespBody(resp.data);
            // console.log(respBody);
        });
    }, [select, id]);

    return (
        <div>
            <h1>{respBody.name}</h1>
        </div>
    );
}
