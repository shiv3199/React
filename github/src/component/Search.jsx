import { useState } from "react";
const Search = ()=>{
    const[search, setSearch]=useState([])
    return(
        <>
        <div className="search">
        <input type="text" placeholder="Username" value={text}/>
        <button>Search</button>
        </div>
        </>
    )
}
export default Search;