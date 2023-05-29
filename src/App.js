import { useState } from "react";
import Input from "./components/Input";
import Render from "./components/Render";
import { Route, Routes, Link } from "react-router-dom";

export default function App() {
    const [details, setDetails] = useState({});
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <Input details={details} setDetails={setDetails} />
            <Routes>
                <Route path="/:select/:id" element={<Render />} />
            </Routes>
            {/* <Render details={details} setDetails={setDetails} /> */}
        </div>
    );
}
