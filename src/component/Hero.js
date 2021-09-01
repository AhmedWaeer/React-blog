import React from 'react'



const Hero = ()=>{

  return (
    

     <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                    <h1 class="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">Find your premium new glasses exported from US</h1>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">We work with the best remunated glasses dealers in US to find your new glasses.</p>
                    <div class="grid gap-6 mt-8 sm:grid-cols-2">
                        <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>Premium selection</span>
                        </div>

                        <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>Insurance</span>
                        </div>

                        <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>All legal documents</span>
                        </div>

                        <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>From US glasses dealers</span>
                        </div>

                        <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>Payment Security</span>
                        </div>

                        <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>

                            <span>Fast shipping (+ Express)</span>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                <img class="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="glasses photo"/>
            </div>
        </div>

  )
}



export default Hero;