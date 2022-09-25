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


export default function Friends() {

// friends placeholder
const friends = [
  {
    name: 'Friend Placeholder Name',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },  {
    name: 'Friend Placeholder Name',
    role: 'Senior Designer',
    imageUrl:
      'https://randomuser.me/api/portraits/women/8.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },  {
    name: 'Friend Placeholder Name',
    role: 'Senior Designer',
    imageUrl:
      'https://randomuser.me/api/portraits/men/2.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },  {
    name: 'Friend Placeholder Name',
    role: 'Senior Designer',
    imageUrl:
      'https://randomuser.me/api/portraits/men/22.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },  {
    name: 'Friend Placeholder Name',
    role: 'Senior Designer',
    imageUrl:
      'https://randomuser.me/api/portraits/women/12.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },  {
    name: 'Friend Placeholder Name',
    role: 'Senior Designer',
    imageUrl:
      'https://randomuser.me/api/portraits/women/90.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },  {
    name: 'Friend Placeholder Name',
    role: 'Senior Designer',
    imageUrl:
      'https://randomuser.me/api/portraits/women/99.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]
// profile placeholder data
const profile =
  {
    name: 'Emma Dorsey',
    role: 'Booth Worker',
    imageUrl:
      'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">

          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
            >
                <li key={profile.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="rounded-lg object-cover shadow-lg" src={profile.imageUrl} alt="" />
                    </div>
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{profile.name}</h3>
                      <p className="text-indigo-600">{profile.role}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">{profile.bio}</p>
                    </div>


                  </div>
                </li>

            </ul>

          </div>
<div className="col-span-2 space-y-2 sm:space-y-4">
                                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{profile.name} Profile</h2>
                                  <p className="text-xl text-gray-500">
                                    Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum
                                    vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.
                                  </p>
                                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Friends</h2>
                                  <ul role="list" className="space-y-1 sm:grid sm:grid-cols-1 sm:gap-4  lg:grid-cols-4 ">
                                              {friends.map((friend) => (
                                                <li key={friend.name} className=" rounded-full py-4 bg-gray-800  text-center px-4 xl:text-center">
                                                  <div className="xl:mx-auto">
                                                    <img className=" mx-auto xl:object-center rounded-full xl:h-20 xl:w-20" src={friend.imageUrl} alt={friend.name + " Profile"} />
                                                    <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                                                      <div className="space-y-1 text-lg  font-medium leading-4">
                                                        <h3 className="text-white ">{friend.name}</h3>
                                                      </div>


                                                    </div>
                                                  </div>
                                                </li>
                                              ))}
                                            </ul>
                        </div>
        </div>

      </div>
    </div>
  )
}
