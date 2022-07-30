import { Footer, Header } from './layoutComponents';

import React from 'react';
import RouterList from '../router/RouteList';

function DefaultLayout() {
   return (
      <div className='max-w-7xl min-h-screen px-2 sm:px-3 md:px-4 lg:px-6 mx-auto'>
         <Header />
         <RouterList/>
         <Footer />
      </div>
   );
}

export default DefaultLayout;