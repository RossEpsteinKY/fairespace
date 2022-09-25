/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'


  // More people...
const groups = [
  {

      id:'1',
      name: 'Kentucky Performers',
      leaderName: 'Ross Epstein',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    dateJoined: '2020-01-07',
    href: '#',
    type: "Participant Only"
  },  {

      id:'2',
      name: 'Kentucky Performers',
      leaderName: 'Ross Epstein',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    dateJoined: '2020-01-07',
    href: '#',
    type: "Participant Only"
  }, {

      id:'3',
      name: 'Kentucky Performers',
      leaderName: 'Ross Epstein',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    dateJoined: '2020-01-07',
    href: '#',
    type: "Participant Only"
  },  {

      id:'3',
      name: 'Kentucky Performers',
      leaderName: 'Ross Epstein',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    dateJoined: '2020-01-07',
    href: '#',
    type: "Participant Only"
  },
]

export default function Groups() {

// friends placeholder

  return (
    <div className="bg-white">
<div className="overflow-hidden bg-white shadow-lg pt sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-500">
        {groups.map((group) => (
          <li key={group.id} className="pt-2">
            <a href="#" className="block hover:bg-gray-200">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm font-medium text-indigo-600">{group.name}</p>
                  <div className="ml-2 flex flex-shrink-0">
                    <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      {group.type}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <UsersIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      Admin Name: {group.leaderName}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      Date Joined: {group.dateJoined}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}
