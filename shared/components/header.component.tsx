import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import classNames from 'classnames'
import { NAV_LINKS, LOGO } from '../../template'

type Props = {};
const Header: FunctionComponent<Props> = ({}) => {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href='/'>
          <a>
            <img src={LOGO} alt="logo" />
            {/* <span className="font-semibold text-xl tracking-tight">Blog</span> */}
          </a>
        </Link>
      </div>
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div> */}
      <div className="w-full lg:block text-sm flex-grow lg:flex lg:items-center justify-end lg:content-end lg:w-auto hidden">
        {NAV_LINKS.map(item => {
          if (item.type === 'button') {
            return <a href={item.href} key={item.key} className={classNames('inline-block px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0', item.className)}>{item.label}</a>
          } else {
            return <a href={item.href} key={item.key} className={classNames('block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white', item.className)}>
                {item.label}
              </a>
          }
        })}
      </div>
    </nav>
  );
};

export default Header;
