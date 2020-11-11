import * as React from "react";
import {useEffect, useState} from "react";

const Test = () => {
    const [x, setX] = useState(1);

    useEffect(() => {
        const k = 1 + x;
        setX(k);
    }, []);

    return <div>1</div>
};

export default Test;