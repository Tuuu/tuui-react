import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Icon from '../icon';

describe('icon tests', () => {
  it('svg render', function() {
    const iconJson = renderer.create(<Icon name="apple" />).toJSON();
    expect(iconJson).toMatchSnapshot();
  });
  it('svg onClick', function() {
    const clickCallback = jest.fn(); //声明一个函数
    const click = mount(<Icon name="android" onClick={clickCallback} />);
    click.find('svg').simulate('click');
    expect(clickCallback).toBeCalled(); // 期待函数调用
  });
});
