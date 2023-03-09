import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Recipes = () => {
    const [mealsData, setMealsData] = useState([]);

    const [inputSearch, setInputSearch] = useState("");

    useEffect(() => {
        axios
            .get(
                "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
                    inputSearch
            )
            .then((res) => setMealsData(res.data.meals));
    }, [inputSearch]);
    return (
        <div className="main">
            <div className="search">
                <input
                    type="text"
                    id="search"
                    placeholder="Entrez le nom d'un aliment (en anglais)"
                    onChange={(e) => setInputSearch(e.target.value)}
                />
            </div>
            <div className="recipes">
                <ul>
                    {mealsData.map((recipe, index) => {
                        return <Card key={index} recipe={recipe} />;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Recipes;
