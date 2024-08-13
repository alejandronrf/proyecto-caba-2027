import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                  </svg>
                </Link>
              </div>
              <div className="text-gray-400">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Web Studio</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">DynamicBox Flex</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Programming Forms</Link>
                  </li>
                </ul>
              </div> */}

              {/* 3rd block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                </ul>
              </div> */}

              {/* 4th block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                </ul>
              </div> */}

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="https://x.com/juanif17" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://www.youtube.com/@juanignaciofernandez" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="YouTube">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 15 8 C 15.414 9.013 17.402 13.381141 18 14.994141 L 18 19 L 20 19 L 20 15 L 23 8 L 20.599609 8 L 19 12 L 17.400391 8 L 15 8 z M 25 11 C 23.994 11 23.228969 11.275313 22.667969 11.945312 C 22.234969 12.440312 22.001953 13.23425 22.001953 14.28125 L 22 15.726562 C 22 16.767563 22.205672 17.487516 22.638672 17.978516 C 23.200672 18.645516 24.111 19 25 19 C 25.889 19 26.815906 18.645562 27.378906 17.976562 C 27.804906 17.486562 28 16.767562 28 15.726562 L 28 14.275391 C 28 13.227391 27.758031 12.440312 27.332031 11.945312 C 26.770031 11.275313 25.889 11 25 11 z M 29 11 L 29 16.837891 C 29 17.497891 29.098281 17.946375 29.238281 18.234375 C 29.468281 18.707375 29.928844 18.949703 30.589844 18.970703 C 31.500844 19.000703 32.185 18.41 33 17.625 L 33 19 L 35 19 L 35 11 L 33 11 L 33 16.375 C 32.545 16.914 32.021375 17.392578 31.609375 17.392578 C 31.336375 17.392578 31.05 17.267 31 17 L 31 11 L 29 11 z M 25 12.619141 C 25.552 12.619141 26 13.076625 26 13.640625 L 26 16.447266 C 26 17.010266 25.552 17.46875 25 17.46875 C 24.448 17.46875 24 17.011266 24 16.447266 L 24 13.640625 C 24 13.077625 24.448 12.619141 25 12.619141 z M 24.990234 22 C 24.990234 22 18.280781 22.000312 13.800781 22.320312 C 13.170781 22.390313 11.809844 22.400391 10.589844 23.650391 C 9.6298437 24.590391 9.3203125 26.75 9.3203125 26.75 C 9.3203125 26.75 9 28.280547 9 30.810547 L 9 33.179688 C 9 35.709688 9.3203125 37.240234 9.3203125 37.240234 C 9.3203125 37.240234 9.6298438 39.399609 10.589844 40.349609 C 11.809844 41.589609 13.409141 41.549688 14.119141 41.679688 C 16.679141 41.919688 25 42 25 42 C 25 42 31.719219 41.989922 36.199219 41.669922 C 36.829219 41.599922 38.190156 41.589844 39.410156 40.339844 C 40.370156 39.399844 40.679688 37.240234 40.679688 37.240234 C 40.679688 37.240234 41 35.709688 41 33.179688 L 41 30.810547 C 41 28.280547 40.679688 26.75 40.679688 26.75 C 40.679688 26.75 40.370156 24.590391 39.410156 23.650391 C 38.190156 22.400391 36.829219 22.390312 36.199219 22.320312 C 31.719219 22.000312 25.009766 22 25.009766 22 L 24.990234 22 z M 12 26 L 18 26 L 18 28 L 16 28 L 16 38 L 14 38 L 14 28 L 12 28 L 12 26 z M 25 26 L 27 26 L 27 30.380859 C 27.75 29.500859 28.149141 28.99 29.119141 29 C 29.879141 29.01 30.490234 29.440703 30.740234 30.220703 C 30.870234 30.640703 31 31.390859 31 32.380859 L 31 35.130859 C 30.99 36.010859 30.899297 36.400313 30.779297 36.820312 C 30.529297 37.600313 29.879141 38 29.119141 38 C 28.449141 38 27.63 37.53 27 36.75 L 27 38 L 25 38 L 25 26 z M 18 29 L 20 29 L 20 35.890625 C 20.05 36.180625 20.259531 36.289062 20.519531 36.289062 C 20.919531 36.289062 21.56 35.849531 22 35.269531 L 22 29 L 24 29 L 24 38 L 22 38 L 22 36.630859 C 21.21 37.490859 20.269062 38 19.539062 38 C 18.899062 38 18.450469 37.720937 18.230469 37.210938 C 18.100469 36.890937 18 36.409453 18 35.689453 L 18 29 z M 35.029297 29 C 36.019297 29 36.809375 29.319922 37.359375 29.919922 C 37.769375 30.359922 38 31.040469 38 31.980469 L 38 34 L 34 34 L 34 35.800781 C 34 36.260781 34.45 36.640625 35 36.640625 C 35.55 36.640625 36 36.260781 36 35.800781 L 36 35 L 38 35 C 38 35.51 37.939687 35.939609 37.929688 36.099609 C 37.859687 36.449609 37.700938 36.770781 37.460938 37.050781 C 36.920938 37.690781 36.110078 38 35.080078 38 C 34.040078 38 33.259453 37.699609 32.689453 37.099609 C 32.269453 36.669609 32 36.010078 32 35.080078 L 32 32.019531 C 32 31.079531 32.239922 30.359922 32.669922 29.919922 C 33.239922 29.319922 34.019297 29 35.029297 29 z M 35 30.449219 C 34.45 30.449219 34 30.819062 34 31.289062 L 34 32.609375 L 36 32.609375 L 36 31.289062 C 36 30.819063 35.55 30.449219 35 30.449219 z M 28.220703 30.75 C 28.065703 30.75 27.839531 30.827813 27.613281 30.945312 C 27.500156 31.004062 27.386406 31.072422 27.28125 31.146484 C 27.176094 31.220547 27.08 31.300859 27 31.380859 L 27 35.75 C 27.08 35.83 27.176094 35.904063 27.28125 35.96875 C 27.596719 36.162813 27.988203 36.279297 28.220703 36.279297 C 28.423203 36.279297 28.581836 36.22998 28.703125 36.111328 C 28.743555 36.071777 28.780625 36.024062 28.8125 35.96875 C 28.87625 35.858125 28.922187 35.714609 28.953125 35.533203 C 28.984063 35.351797 29 35.131641 29 34.869141 L 29 32.130859 C 29 31.868359 28.984063 31.649297 28.953125 31.470703 C 28.89125 31.113516 28.767187 30.913047 28.570312 30.818359 C 28.471875 30.771016 28.355703 30.75 28.220703 30.75 z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="juan.fernandez17@gmail.com" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Email">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z" />
                  </svg>
                </Link>
              </li>
              {/* <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li> */}
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Alejandro N. Rama Fernandez. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
