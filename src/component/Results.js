
import React from 'react'
import Card from '../component/Card'
import { useQuery } from 'react-query'
import axios from 'axios'

const Results = ()=> {

const {data,isLoading,isError} =useQuery('posts', () =>
    axios.get('https://techpostblog.herokuapp.com/').then((res) => res.data));
        if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error! </div>
    }
  return (
   <div className="grid grid-cols-4 gap-4 mt-20">
   {data.map((post)=>(
     <Card post={post} key={post._id}/>
   ))}
   
  </div>
  )
}



export default Results

 