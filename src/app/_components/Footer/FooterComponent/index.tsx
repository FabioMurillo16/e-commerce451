'use client'

import React from 'react'

import { inclusions, noHeaderFooterUrls } from "../../../constants";
import { usePathname } from "next/navigation";
import { Gutter } from "../../Gutter";

import clases from './index.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import { Footer, Media } from '../../../../payload/payload-types';
import { Button } from '../../Button';

const FooterComponent = ({footer}: {footer: Footer}) => {

  const pathname = usePathname()

  const navItems = footer?.navItems || []

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? 
    clases.hide: ''}>
      <Gutter>
        {/* here im exporting from inclusion all the data and 
        icons inside the tag ul and rendering using .map*/}
        <ul className={clases.inclusions}>
          {inclusions.map((inclusion, index) => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.description}
                width={36}
                height={36}
                className={clases.icon}
              />

              <h5 className={clases.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
        
      </Gutter>

      <div className={clases.footer}>

        <Gutter>
          <div className={clases.wrap}>
            <Link href='/link'>
              <Image src="/logo-white.svg" alt='logo' width={170} 
              height={70} />
            </Link>

            <p>{footer.copyright}</p>

            <div className={clases.socialLinks}>
              {navItems.map(item => {
                const icon = item?.link?.icon as Media

                return(
                  <Button
                    key={item.link.label}
                    el="link"
                    href={item.link.url}
                    newTab={true}
                    className={clases.socialLinksItem}
                  >
                    <Image 
                      src={icon?.url}
                      alt={item.link.label}
                      width={24}
                      height={24}
                      className={clases.socialIcon}
                    />
                  </Button>
                )
              })}
            </div>
            
          </div>
        </Gutter>

      </div>

    </footer>
  )
}

export default FooterComponent