import classNames from 'classnames';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { LOGO, NAV_LINKS } from '../../template';

type Props = {};
const Header: FunctionComponent<Props> = ({}) => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-6">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <Link href="/">
          <a>
            <img src={LOGO} alt="logo" />
            {/* <span className="text-xl font-semibold tracking-tight">Blog</span> */}
          </a>
        </Link>
      </div>
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div> */}
      <div className="justify-end flex-grow hidden w-full text-sm lg:block lg:flex lg:items-center lg:content-end lg:w-auto">
        {NAV_LINKS.map(item => {
          if (item.type === 'button') {
            return (
              <a
                href={item.href}
                key={item.href}
                className={classNames(
                  'inline-block px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 hover:text-ui-800 hover:no-underline',
                  item.className
                )}
              >
                {item.label}
              </a>
            );
          } else {
            return (
              <a
                href={item.href}
                key={item.href}
                className={classNames(
                  'block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white',
                  item.className
                )}
              >
                {item.label}
              </a>
            );
          }
        })}
      </div>
    </nav>
  );
};

export default Header;
