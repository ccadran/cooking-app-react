import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Recipes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
            .then((res) => setData(res.data.meals));
    }, []);

    return (
        <div className="recipes">
            <ul>
                {data.map((recipe, index) => {
                    return <Card key={index} recipe={recipe} />;
                })}
            </ul>
        </div>
    );
};

export default Recipes;
