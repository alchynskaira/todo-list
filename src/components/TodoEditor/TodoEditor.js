import React, { useState} from "react";
import '../../style.css';


const TodoEditor = ({onSubmit}) => {
    const [inputValue, setInputValue] = useState("");


    const handleChange = e => {
        setInputValue(e.currentTarget.value);

    };

    const handleSubmit = e => {
            e.preventDefault();
            if (!inputValue) return;
            onSubmit(inputValue);
            setInputValue('');

    };

   return (
       <form className="todoEditor" onSubmit={handleSubmit}>
           <textarea placeholder="Add todo here" className="todoList-input" value={inputValue} onChange={handleChange}>Some text</textarea>
           <button type="submit" className="editor-btn" onSubmit={onSubmit}>Save</button>
       </form>
   )

}

export default TodoEditor;