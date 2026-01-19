import { useState } from "react";
const Search = ({setSearchText})=>{
    const[text, setText]=useState("")
    return(
        <>
        <div className="search">
        <input type="text" placeholder="Username" value={text} onChange={(e)=>{
            setText(e.target.value)
        }}/>
        <button onClick={()=>{
            setSearchText(text)
            setText('')
        }
        }>Search</button>
        </div>
        </>
    )
}
export default Search;