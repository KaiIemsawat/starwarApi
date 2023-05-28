import { useState } from "react";
import Input from "./components/Input";
import Render from "./components/Render";

export default function App() {
    const [details, setDetails] = useState({});
    return (
        <div>
            <Input details={details} setDetails={setDetails} />
            <Render details={details} setDetails={setDetails} />
        </div>
    );
}
