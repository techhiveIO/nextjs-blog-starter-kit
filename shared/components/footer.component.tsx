import React, { FunctionComponent } from 'react';
import { COPYRIGHT_NAME } from '../../template'

type Props = {};
const Footer: FunctionComponent<Props> = ({}) => {
  const handleClickManageCookies = (e) => {
    e.preventDefault()
    // window && window.Metomic && window.Metomic('ConsentManager:show')
  }

  return (
    <footer className='lg:flex justify-between text-sm'>
      <div className='flex-shrink-0'>
        © {new Date().getFullYear()} {COPYRIGHT_NAME}. Mentioned product names and logos are the property of their respective owners.
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center justify-end lg:content-end lg:w-auto'>
        <a href='https://termsfeed.com/terms-conditions/957c85c1b089ae9e3219c83eff65377e' rel='nofollow' className='mr-5'>Terms</a>
        <a href='https://compliance.apideck.com/privacy-policy' rel='nofollow' className='mr-5'>Privacy Policy</a>
        <a href="#" onClick={(e) => handleClickManageCookies(e)} className='mr-5'>Manage cookies</a>
        <a href='https://apideck.gdprform.io/en' rel='nofollow' className='mr-5'>Data Requests</a>
      </div>
    </footer>
  );
};

export default Footer;
