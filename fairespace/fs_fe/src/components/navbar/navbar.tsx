/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from 'react';

const navigation = [
  { name: 'Friends', href: '/friends' },
  { name: 'Photos', href: '/photos' },
  { name: 'Groups', href: '/groups' },
  { name: 'Faires', href: '/faires' },
  { name: 'Profile', href: '/profile', },
]



function Navbar() {
const [loggedIn, setLoggedIn ] = useState(false);
  return (
    <header className="bg-indigo-600">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only">Your Company</span>
              <b><h2 className="text-white text-2xl text-base">FaireSpace</h2></b>
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>


<div className="ml-10 space-x-4">




               {loggedIn == false &&
               (  <a
                              href="#"
                              className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                            >
                    <h1>Sign In</h1>
                    </a>
                )
              }
                {loggedIn == true &&
                             (
<a
                              href="#"
                                className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                            >

                    <h1>Sign Out</h1>
                    </a>
                              )
                }
            <a
              href="#"
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
export default Navbar;
