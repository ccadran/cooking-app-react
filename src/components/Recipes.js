import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Recipes = () => {
    const [data, setData] = useState([]);

    function mealSearch(e) {
        const search = e.target.value;

        axios
            .get(
                "https://www.themealdb.com/api/json/v1/1/search.php?s=" + search
            )

            .then((res) => setData(res.data.meals));
    }
    return (
        <div className="main">
            <div className="search">
                <input
                    type="text"
                    id="search"
                    placeholder="Entrez le nom d'un aliment (en anglais)"
                    onChange={mealSearch}
                />
            </div>
            <div className="recipes">
                <ul>
                    {data.map((recipe, index) => {
                        return <Card key={index} recipe={recipe} />;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Recipes;
