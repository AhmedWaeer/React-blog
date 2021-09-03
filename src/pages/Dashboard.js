import React from 'react'
import Nav from '../component/Nav'
import Card from '../component/Card'
import Post from '../component/Post'
import EditPost from '../component/EditPost'
import NewPost from '../component/NewPost'




const Dashboard = ()=> {

  return(
<div className="container mx-auto">
   <Nav/>
<EditPost/>
<NewPost/>
  </div>
  )
}



export default Dashboard