import React from 'react';
import renderer from 'react-test-renderer';

import { navigationItem } from './NavigationItem';

describe('<NavigationItem />', () => {
   it('should render an li element and NavLink component to match the snapshot', () => {
      const tree = renderer.create(<navigationItem link="/test" >Test</navigationItem>).toJSON();
      expect(tree).toMatchSnapshot();
   });
});