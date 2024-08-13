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
                    <path d="M13.3473 1.25H2.34729C1.79501 1.25 1.34729 1.69772 1.34729 2.25V13.25C1.34729 13.8023 1.79501 14.25 2.34729 14.25H13.3473C13.8996 14.25 14.3473 13.8023 14.3473 13.25V2.25C14.3473 1.69772 13.8996 1.25 13.3473 1.25Z" stroke="#000001" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.3373 11.3099V7.47989C6.34009 7.42103 6.35729 7.36376 6.38738 7.3131C6.41748 7.26244 6.45955 7.21994 6.5099 7.18933C6.56025 7.15873 6.61735 7.14095 6.67617 7.13756C6.735 7.13417 6.79376 7.14527 6.8473 7.16989L10.1673 9.07989C10.2211 9.11302 10.2655 9.15936 10.2962 9.21449C10.327 9.26963 10.3432 9.33174 10.3432 9.39489C10.3432 9.45804 10.327 9.52014 10.2962 9.57528C10.2655 9.63042 10.2211 9.67676 10.1673 9.70989L6.8473 11.6299C6.79283 11.6523 6.73382 11.6613 6.67515 11.6563C6.61648 11.6513 6.55985 11.6324 6.50998 11.6011C6.4601 11.5698 6.41841 11.527 6.38838 11.4764C6.35834 11.4257 6.34083 11.3687 6.3373 11.3099V11.3099Z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="mailto:juan.fernandez17@gmail.com" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Email">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1.75H2C1.44772 1.75 1 2.19772 1 2.75V11.25C1 11.8023 1.44772 12.25 2 12.25H13C13.5523 12.25 14 11.8023 14 11.25V2.75C14 2.19772 13.5523 1.75 13 1.75Z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://juanifernandez.com/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Pagina">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.525 13.657l2.652-2.652.707.707-2.652 2.652c-1.269 1.27-3.327 1.27-4.596 0-1.27-1.27-1.27-3.327 0-4.596l2.652-2.652.707.707-2.652 2.652c-.879.879-.879 2.303 0 3.182.879.879 2.303.879 3.182 0zm6.187-4.773l-.707-.707 2.652-2.652c.879-.879.879-2.303 0-3.182-.879-.879-2.303-.879-3.182 0L7.823 4.995l-.707-.707 2.652-2.652c1.269-1.27 3.327-1.27 4.596 0 1.27 1.27 1.27 3.327 0 4.596l-2.652 2.652zm-5.45 1.62l4.242-4.242-.766-.766-4.242 4.242.766.766z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Alejandro N. Rama Fernandez. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
