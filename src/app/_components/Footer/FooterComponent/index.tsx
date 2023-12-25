'use client'

import React from 'react'

import { inclusions, noHeaderFooterUrls } from "../../../constants";
import { usePathname } from "next/navigation";
import { Gutter } from "../../Gutter";

import clases from './index.module.scss'
import Image from 'next/image';

const FooterComponent = () => {

  const pathname = usePathname()

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? 
    clases.hide: ''}>
      <Gutter>
        {/* here im exporting from inclusion all the data and 
        icons inside the tag ul and rendering using .map*/}
        <ul className={clases.inclusion}>
          {inclusions.map((inclusion, index) => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.description}
                width={36}
                height={36}
                className={clases.icon}
              />
            </li>
          ))}
        </ul>
      </Gutter>
    </footer>
  )
}

export default FooterComponent