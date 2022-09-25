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


export default function Photos() {

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
<h1 className="text-2xl">Recently Uploaded Photos</h1>
<section className="overflow-hidden text-gray-700 ">
  <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
        </div>
      </div>
    </div>
  </div>
</section>
        </div>


    </div>
  )
}
