import Search from './Search'
import GitInfo from "./GitInfo";
import { useState } from 'react';
const Body = ()=>{
    const [searchText, setSearchText]= useState("")
    return(
        <>
        <Search setSearchText={setSearchText}/>
        <GitInfo searchText={searchText}/>
        </>
    )
}
export default Body;