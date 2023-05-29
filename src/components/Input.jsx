import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Input(props) {
    const { details, setDetails } = props;
    const subjects = ["people", "planets", "starships"];
    const [select, setSelect] = useState(subjects[0]);
    const [id, setId] = useState(1);
    const navi = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(details.name);
        // setSelect(subjects[0]); // <--- comment since I want to keep it at the selected value
        // setId(1); // <--- comment since I want to keep it at the selected value
        navi(`/${select}/${id}`);
    };

    // useEffect(() => {
    //     axios
    //         .get(`https://swapi.dev/api/${select}/${id}`)
    //         .then((resp) => setDetails(resp.data))
    //         .catch((err) => console.log("Obi-Wan"));
    // }, [select, id]);
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Select Subject : </label>
                <select
                    onChange={(e) => setSelect(e.target.value)}
                    value={select}>
                    {subjects.map((value, key) => (
                        <option key={value}>{value}</option>
                    ))}
                </select>
                <label>ID : </label>
                <input
                    type="number"
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                />
                <button>Search</button>
            </form>
        </div>
    );
}
