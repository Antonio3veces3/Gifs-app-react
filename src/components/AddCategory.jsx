import { useState } from "react"


export const AddCategory= ({onNewCategory})=> {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = ({target})=>{
    setInputValue(target.value);
  }

  const onSubmit= (event)=>{
    event.preventDefault();
    let inputCleaned = inputValue.trim();
    if(inputCleaned.length <=1) return;
    onNewCategory(inputCleaned);
    setInputValue('');
  }
  return (
    <form onSubmit={onSubmit}>
      <input 
          type="text" 
          value={inputValue}
          placeholder="Search Gifs"
          onChange={onInputChange}
      />
    </form>
  )
}
