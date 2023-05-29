import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Render(props) {
    const { select, id } = useParams();
    const [respBody, setRespBody] = useState({});
    const [code, setCode] = useState();
    const [homeWorldData, setHomeWorldData] = useState({});

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/${select}/${id}`)
            .then((resp) => {
                console.log(resp.status);
                setCode(resp.status);
                console.log(resp.data);
                setRespBody(resp.data);
                // console.log(respBody);
                {
                    if (select === "people") {
                        axios.get(resp.data.homeworld).then((homeWorldResp) => {
                            console.log(homeWorldResp.data);
                            setHomeWorldData(homeWorldResp.data);
                        });
                    }
                }
            })
            .catch((err) => {
                console.log(err.response.status);
                setCode(err.response.status);
            });
    }, [select, id]);

    return (
        <div>
            {code === 200 ? (
                select === "people" ? (
                    <div>
                        <h1>{respBody.name}</h1>
                        <br />
                        <h3>Height : </h3>
                        <p>{respBody.height}</p>
                        <h3>Hair Color : </h3>
                        <p>{respBody.hair_color}</p>
                        <h3>Eye Color : </h3>
                        <p>{respBody.eye_color}</p>
                        <h3>Skin Color : </h3>
                        <p>{respBody.skin_color}</p>
                        <h3>Home World : </h3>
                        <p>{homeWorldData.name}</p>
                    </div>
                ) : (
                    <div>
                        <h1>{respBody.name}</h1>
                        <br />
                        <h3>Climate : </h3>
                        <p>{respBody.climate}</p>
                        <h3>Terrain : </h3>
                        <p>{respBody.terrain}</p>
                        <h3>Surface Water : </h3>
                        <p>{respBody.surface_water}</p>
                        <h3>Population : </h3>
                        <p>{respBody.population}</p>
                    </div>
                )
            ) : (
                <>
                    <h1>These aren't the droids you're looking for</h1>
                    <img
                        src="https://cdn.marvel.com/u/prod/marvel/i/mg/c/70/62f3e87ab6da3/clean.jpg"
                        alt="Obi-Wan"
                        style={{ width: "200px" }}
                    />
                </>
            )}

            {/* <h1>{respBody.name}</h1> */}
        </div>
    );
}
