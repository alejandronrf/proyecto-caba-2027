import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '@/public/images/LogoJuani.png'

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
                <Link href="/" aria-label="Cruip">
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Logo} width={75} height={75} alt="Logo" />
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
                    <path d="M0 0 C1.06734375 -0.00257812 2.1346875 -0.00515625 3.234375 -0.0078125 C4.91273437 0.00378906 4.91273437 0.00378906 6.625 0.015625 C7.74390625 0.00789062 8.8628125 0.00015625 10.015625 -0.0078125 C11.08296875 -0.00523438 12.1503125 -0.00265625 13.25 0 C14.23226563 0.00225586 15.21453125 0.00451172 16.2265625 0.00683594 C18.625 0.265625 18.625 0.265625 20.625 2.265625 C20.88378906 4.6640625 20.88378906 4.6640625 20.890625 7.640625 C20.89449219 9.24164062 20.89449219 9.24164062 20.8984375 10.875 C20.89070313 11.99390625 20.88296875 13.1128125 20.875 14.265625 C20.88273437 15.38453125 20.89046875 16.5034375 20.8984375 17.65625 C20.89585938 18.72359375 20.89328125 19.7909375 20.890625 20.890625 C20.88836914 21.87289063 20.88611328 22.85515625 20.88378906 23.8671875 C20.625 26.265625 20.625 26.265625 18.625 28.265625 C16.2265625 28.52441406 16.2265625 28.52441406 13.25 28.53125 C12.18265625 28.53382812 11.1153125 28.53640625 10.015625 28.5390625 C8.33726563 28.52746094 8.33726563 28.52746094 6.625 28.515625 C5.50609375 28.52335937 4.3871875 28.53109375 3.234375 28.5390625 C2.16703125 28.53648438 1.0996875 28.53390625 0 28.53125 C-0.98226563 28.52899414 -1.96453125 28.52673828 -2.9765625 28.52441406 C-5.375 28.265625 -5.375 28.265625 -7.375 26.265625 C-7.63378906 23.8671875 -7.63378906 23.8671875 -7.640625 20.890625 C-7.64320312 19.82328125 -7.64578125 18.7559375 -7.6484375 17.65625 C-7.63683594 15.97789063 -7.63683594 15.97789063 -7.625 14.265625 C-7.63273438 13.14671875 -7.64046875 12.0278125 -7.6484375 10.875 C-7.64585938 9.80765625 -7.64328125 8.7403125 -7.640625 7.640625 C-7.63836914 6.65835937 -7.63611328 5.67609375 -7.63378906 4.6640625 C-7.10415251 -0.24456913 -4.21168741 0.00967251 0 0 Z M-2.375 13.265625 C-2.375 13.595625 -2.375 13.925625 -2.375 14.265625 C-0.725 14.265625 0.925 14.265625 2.625 14.265625 C2.955 16.245625 3.285 18.225625 3.625 20.265625 C3.955 18.945625 4.285 17.625625 4.625 16.265625 C5.285 16.265625 5.945 16.265625 6.625 16.265625 C6.625 15.605625 6.625 14.945625 6.625 14.265625 C7.285 14.265625 7.945 14.265625 8.625 14.265625 C8.625 14.925625 8.625 15.585625 8.625 16.265625 C11.595 16.760625 11.595 16.760625 14.625 17.265625 C14.955 18.915625 15.285 20.565625 15.625 22.265625 C15.955 22.265625 16.285 22.265625 16.625 22.265625 C16.89432521 17.61509628 16.89432521 17.61509628 15.625 13.265625 C9.685 13.265625 3.745 13.265625 -2.375 13.265625 Z M-3.375 15.265625 C-3.64432521 19.91615372 -3.64432521 19.91615372 -2.375 24.265625 C3.565 24.265625 9.505 24.265625 15.625 24.265625 C15.295 23.605625 14.965 22.945625 14.625 22.265625 C6.705 22.760625 6.705 22.760625 -1.375 23.265625 C-1.375 20.955625 -1.375 18.645625 -1.375 16.265625 C-2.035 15.935625 -2.695 15.605625 -3.375 15.265625 Z " />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="mailto:juan.fernandez17@gmail.com" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Email">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M0 0 C10.56 0 21.12 0 32 0 C32 7.92 32 15.84 32 24 C21.44 24 10.88 24 0 24 C0 16.08 0 8.16 0 0 Z " />
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
