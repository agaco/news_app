import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import Container from '../index';

describe('<Container />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale='en'>
        <Container />
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
