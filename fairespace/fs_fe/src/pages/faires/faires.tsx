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

  // More people...


export default function Faires() {

// friends placeholder
const faires = [
  {
    name: 'Kentucky Highland Renaissance Festival',
    location: 'Eminence, KY',
    link: 'https://www.kyrenfaire.com/',
    userAttends: 'Yes',
    userWorks: 'Yes'
  },
  {
    name: 'Ohio Renaissance Festival',
    location: 'Mason, OH',
    link: 'https://www.renfestival.com/',
    userAttends: 'Yes',
    userWorks: 'No'
  },  {
    name: 'Kentucky Highland Renaissance Festival',
    location: 'Eminence, KY',
    link: 'https://www.kyrenfaire.com/',
    userAttends: 'Yes',
    userWorks: 'Yes'
  },
  {
    name: 'Ohio Renaissance Festival',
    location: 'Mason, OH',
    link: 'https://www.renfestival.com/',
    userAttends: 'Yes',
    userWorks: 'No'
  },  {
    name: 'Kentucky Highland Renaissance Festival',
    location: 'Eminence, KY',
    link: 'https://www.kyrenfaire.com/',
    userAttends: 'Yes',
    userWorks: 'Yes'
  },
  {
    name: 'Ohio Renaissance Festival',
    location: 'Mason, OH',
    link: 'https://www.renfestival.com/',
    userAttends: 'Yes',
    userWorks: 'No'
  },  {
    name: 'Kentucky Highland Renaissance Festival',
    location: 'Eminence, KY',
    link: 'https://www.kyrenfaire.com/',
    userAttends: 'Yes',
    userWorks: 'Yes'
  },
  {
    name: 'Ohio Renaissance Festival',
    location: 'Mason, OH',
    link: 'https://www.renfestival.com/',
    userAttends: 'Yes',
    userWorks: 'No'
  },

]

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
              <ul role="list" className="space-y-1 sm:grid sm:grid-cols-1 sm:gap-4  lg:grid-cols-4 ">
                                              {faires.map((faire) => (
                                              <a href={faire.link}>
                                                <li key={faire.name} className="rounded-full py-4 bg-gray-800 text-center px-10 xl:text-center">
                                                  <div className="xl:mx-auto">

                                                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                                      <div className="space-y-1 text-lg  font-medium leading-4">
                                                        <h3 className="text-white ">{faire.name}</h3>
                                                        <h3 className="text-slate-50 italic">{faire.location}</h3>
                                                        <h4 className="text-blue-400 italic">Attend Here: {faire.userAttends}</h4>
                                                        <h4 className="text-blue-300 italic">Work Here: {faire.userWorks}</h4>
                                                      </div>



                                                    </div>
                                                  </div>
                                                </li>
                                                </a>
                                              ))}
                                            </ul>

      </div>
    </div>
  )
}
