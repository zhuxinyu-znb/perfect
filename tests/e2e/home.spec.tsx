import * as React from 'react';
// react-test-renderer && enzyme
import { render, cleanup } from '@testing-library/react';
import Home from '@components/Home';

afterEach(cleanup);
describe('基础React单元测试', () => {
  it('index组件测试', () => {
    const { getByTestId } = render(<Home />);
    const [ul, nav] = [getByTestId('js-ul'), getByTestId('js-h2')];
    console.log('✨', expect(ul.children.length).toBe);
    expect(ul.children.length).toBe(2);
    expect(nav.textContent).toContain('京程一灯');
  });
});
