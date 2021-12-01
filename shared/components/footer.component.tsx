import { COPYRIGHT_NAME, FOOTER_LINKS } from '../../template';
import React, { FunctionComponent } from 'react';

import classNames from 'classnames';
declare const window: any;

type Props = {};
const Footer: FunctionComponent<Props> = ({}) => {
  const handleClickManageCookies = e => {
    e.preventDefault();
    window.Metomic('ConsentManager:show');
  };

  return (
    <footer className="justify-between text-sm lg:flex">
      <div className="flex-shrink-0">
        © {new Date().getFullYear()} {COPYRIGHT_NAME}. Mentioned product names
        and logos are the property of their respective owners.
      </div>
      <div className="justify-end flex-grow block w-full lg:flex lg:items-center lg:content-end lg:w-auto">
        <a href="#" onClick={e => handleClickManageCookies(e)} className="mr-5">
          Manage cookies
        </a>
        {FOOTER_LINKS.map(item => (
          <a
            href={item.href}
            key={item.href}
            className={classNames('ml-5', item.className)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
