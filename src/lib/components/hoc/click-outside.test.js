import React from 'react';
import { shallow } from 'enzyme';

import { ClickOutsideWrapper } from './click-outside';

const callback = jest.fn();

beforeEach(() => {
  callback.mockClear();
});

describe('ClickOutside', () => {
  test('clicking outside child should call callback prop', () => {
    const wrapper = shallow(
      <ClickOutsideWrapper callback={callback}>
        <div />
      </ClickOutsideWrapper>,
    );
    wrapper.instance().handleClickOutside();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('clicking outside child should not call callback prop when null', () => {
    const wrapper = shallow(
      <ClickOutsideWrapper>
        <div />
      </ClickOutsideWrapper>,
    );
    wrapper.instance().handleClickOutside();
    expect(callback).toHaveBeenCalledTimes(0);
  });
});
