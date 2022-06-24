import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const inputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder="Buscar GIF"
                value={inputValue}
                onChange={inputChange}
            />
        </form>
    )
}

