import { render, screen } from '@testing-library/react';
import MySpeedInsightComponent from '../MySpeedInsightComponent';

describe('MySpeedInsightComponent', () => {
  test('renders without crashing', () => {
    render(<MySpeedInsightComponent />);
    expect(screen.getByTestId('speed-insight')).toBeInTheDocument();
  });
});

