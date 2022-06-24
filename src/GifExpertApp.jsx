import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    const addCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        // Otra forma de hacerlo: setCategories(cat => [...categories, 'React'])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={addCategory}
            />
            {categories.map(category =>
                <GifGrid
                    key={category}
                    category={category}
                />
            )}
        </>
    )
}

export default GifExpertApp

