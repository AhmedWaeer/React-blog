import React from 'react'
import { Link } from "react-router-dom";




const Card = ({post})=>{

  const {title,body,createdBy,dateCreated,_id} = post
  
 const date = new Date(dateCreated).toLocaleDateString();

 
  return (
    <Link to={`/details/${_id}`}>
        <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          
            <div class="flex items-center px-6 py-3 bg-gray-900">

                <h1 class="mx-3 text-lg font-semibold text-white">{title}</h1>
            </div>

            <div class="px-6 py-4">
                <p class="py-2 text-gray-700 dark:text-gray-400">{body}</p>
            </div>
                  <div class="mt-4">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar"/>
                        <a href="#" class="mx-2 font-semibold text-gray-700 dark:text-gray-200">{createdBy.username}</a>
                    </div>
                    <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">{date}</span>
                </div>
            </div>
        </div>
        </Link>
     
        
           

  )
}



export default Card;