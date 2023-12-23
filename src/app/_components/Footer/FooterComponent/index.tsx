'use client'

import React from 'react'

import { inclusions, noHeaderFooterUrls } from "../../../constants";
import { usePathname } from "next/navigation";
import { Gutter } from "../../Gutter";

import clases from '.index.module.scss'

const FooterComponent = () => {

  const pathname = usePathname()

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? 
    clases.hide: ''}>
      <Gutter>
        <ul className={clases.inclusions}></ul>
      </Gutter>
    </footer>
  )
}

export default FooterComponent