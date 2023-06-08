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
export default function OptionButton() {
  return (
    <span className="inline-flex rounded-md shadow-sm w-[500px]">
      <select
        id="message-type"
        name="message-type"
        className="-ml-px block w-full rounded-l-none rounded-r-md border-0 bg-white py-1.5 pl-3 pr-9 text-gray-700 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option>Unread messages</option>
        <option>Sent messages</option>
        <option>All messages</option>
      </select>
    </span>
  )
}
