/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function AddWorkout() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">

          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="workoutTitle" className="block text-sm font-medium leading-6 text-gray-900">
                Workout title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="workoutTitle"
                    id="workoutTitle"
                    autoComplete="workoutTitle"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>


            <div className="col-span-full">
              <label htmlFor="workoutDescription" className="block text-sm font-medium leading-6 text-gray-900">
                Workout description
              </label>
              <div className="mt-2">
                <textarea
                  id="workoutDescription"
                  name="workoutDescription"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a short description of a workout.</p>
            </div>

        
       

      

     

            <div className="col-span-full">
              <label htmlFor="workoutPhoto" className="block text-sm font-medium leading-6 text-gray-900">
                Workout photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>  

          <div className='mt-5 w-full sm:w-[260px] md:w-[275px]'>
                <label htmlFor="goal" className="block text-sm font-medium leading-6 text-gray-900">
                Goal
                </label>
                <div className="mt-2">
                    <select
                    id="goal"
                    name="goal"
                    autoComplete="goal-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                    <option>Lose weight</option>
                    <option>Gain weight</option>
                    <option>Gain muscle</option>
                    <option>Cardio build</option>
                    </select>
                </div>
            </div>

            <div className='mt-5 w-full sm:w-[260px] md:w-[275px]'>
                <label htmlFor="difficulty" className="block text-sm font-medium leading-6 text-gray-900">
                Difficulty
                </label>
                <div className="mt-2">
                    <select
                    id="difficulty"
                    name="difficulty"
                    autoComplete="difficulty-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                    </select>
                </div>
            </div>

        </div>
    </div>
    

    </form>
  )
}

<div className="sm:col-span-3">
<label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
  Country
</label>
<div className="mt-2">
  <select
    id="country"
    name="country"
    autoComplete="country-name"
    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
  >
    <option>United States</option>
    <option>Canada</option>
    <option>Mexico</option>
  </select>
</div>
</div>


