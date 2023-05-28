import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Input(props) {
    const { details, setDetails } = props;
    // const [subject, setSubject] = useState("people");
    const subjects = ["people", "planets", "starships"];
    const [select, setSelect] = useState(subjects[0]);
    const [id, setId] = useState(1);

    const submitHandler = (e) => {
        e.preventDefault();
        setSelect(subjects[0]);
        setId(1);
    };

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${select}/${id}`)
            // .then((resp) => console.log(resp.data))
            .then((resp) => {
                setDetails(resp.data);
                // console.log(JSON.stringify(details, null, 2)); // <--- to check if details is assigned
                // console.log(resp.data); // < --- Check detail(s)
                console.log(details);
            })
            .catch((err) => console.log("Obi-Wan"));
    }, [select, id]);
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Select Subject : </label>
                <select
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}>
                    {subjects.map((value, key) => (
                        <option value={value} key={value}>
                            {value}
                        </option>
                    ))}
                </select>
                <label>ID : </label>
                <input
                    type="number"
                    onChange={(e) => setId(e.currentTarget.value)}
                    value={id}
                />
                <button>Search</button>
            </form>
        </div>
    );
}
