import { useState } from "react";
const Search = ({setSearchText})=>{
    const[text, setText]=useState("")
    return(
        <>
        <div className="flex justify-center p-3">
        <input className="border rounded-2xl px-3 " type="text" placeholder="Username" value={text} onChange={(e)=>{
            setText(e.target.value)
        }}/>
        <button className="mx-2 bg-amber-300 p-2 rounded-2xl cursor-pointer font-light hover:bg-amber-200 hover:border-2" onClick={()=>{
            setSearchText(text)
            setText('')
        }
        }>Search</button>
        </div>
        </>
    )
}
export default Search;