
import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import ColorTable from '../src/components/colorTable';

describe("<ColorTable />", function() {
  it("contains a table", function() {
    const wrapper = shallow(<ColorTable />);
    expect(wrapper.contains(<table><tbody /></table>)).to.equal(true);
  });
});
