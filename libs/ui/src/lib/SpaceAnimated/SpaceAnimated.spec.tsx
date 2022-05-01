import { render } from '@testing-library/react';

import SpaceAnimated from '.';

describe('SpaceAnimated', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SpaceAnimated />);
    expect(baseElement).toBeTruthy();
  });
});
