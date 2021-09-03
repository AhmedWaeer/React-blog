import  React from 'react';
import { useQuery } from 'react-query'
import axios from 'axios'
import { useParams } from "react-router-dom";


const Post = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery('post', () =>
    axios.get(`https://techpostblog.herokuapp.com/post/${id}`).then((res) => res.data));
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error! </div>
  }

  return (
    <div>
      <div class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mb-20">
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-600 dark:text-gray-400">{new Date(data.dateCreated).toLocaleDateString()}</span>
        </div>

        <div class="mt-2">
          <a href="#" class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{data.title}</a>
          <p class="mt-2 text-gray-600 dark:text-gray-300">{data.body}</p>
        </div>
      </div>

      {data.comments.map((comment) => (
        <div key={comment._id} class="max-w-2xl max-w-sm px-4 py-3 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <div>
            <h1 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">Unknown User</h1>

            <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">{comment.body}</p>
          </div>

          <div>

          </div>
        </div>
      ))}
    </div>
  )
}


export default Post;