import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'antd';

import H1 from 'components/H1';

function NewsList() {
  return (
    <div>
      <Helmet>
        <title>News</title>
        <meta
          name='description'
          content='Feature page of React.js Boilerplate application'
        />
      </Helmet>
      <H1>jhjkhhhh</H1>
      <p>
        <Button type='danger'>Danger ~!!</Button>
      </p>
    </div>
  );
}
export default NewsList;
