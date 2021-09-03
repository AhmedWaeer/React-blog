
import React from 'react'
import Nav from '../component/Nav'
import Results from '../component/Results'
import usePosts from '../Api/usePosts'
import { useState, useEffect, useContext } from "react";

const HomePage = () => {




  return (

    <div className="container mx-auto">
      <Nav />
      <Results />

    </div>
  )
}





export default HomePage