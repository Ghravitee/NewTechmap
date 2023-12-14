import { Footer } from 'flowbite-react';
import React from 'react';

const FooterComponent = () => {
  return (
    <Footer container className='dark:rounded-none'>
      <Footer.Copyright href="/" by="Techmap™" year={2023} />
      
    </Footer>
  );
}

export default FooterComponent;
