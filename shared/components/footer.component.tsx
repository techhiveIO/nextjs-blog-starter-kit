import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import { COPYRIGHT_NAME, FOOTER_LINKS } from '../../template';
declare const window: any;

type Props = {};
const Footer: FunctionComponent<Props> = ({}) => {
  const handleClickManageCookies = (e) => {
    e.preventDefault()
    window.Confirmic('ConsentManager:show')
  }

  return (
    <footer className='lg:flex justify-between text-sm'>
      <div className='flex-shrink-0'>
        © {new Date().getFullYear()} {COPYRIGHT_NAME}. Mentioned product names and logos are the property of their respective owners.
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center justify-end lg:content-end lg:w-auto'>
        <a href="#" onClick={(e) => handleClickManageCookies(e)} className='mr-5'>Manage cookies</a>
        {FOOTER_LINKS.map(item => <a href={item.href} key={item.key} className={classNames('ml-5', item.className)}>
          {item.label}
        </a>)}
      </div>
    </footer>
  );
};

export default Footer;
