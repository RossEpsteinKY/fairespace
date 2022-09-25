/* This example requires Tailwind CSS v2.0+ */
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'



export default function Home() {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          RenfaireSpace
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          <h3 className="text-2xl">A place for all participants, patrons, and people
          to share in the magic of the <b>Renaissance Faire.</b></h3>
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          </div>
        </div>
      </div>
    </div>
  )
}
