import Search from './Search'
import GitInfo from "./GitInfo";
import { useState } from 'react';
const Body = ()=>{
    const [searchText, setSearchText]= useState("")
    return(
        <>
        <div className=''>
        <Search setSearchText={setSearchText}/>
        <GitInfo searchText={searchText}/>
        </div>
        </>
    )
}
export default Body;