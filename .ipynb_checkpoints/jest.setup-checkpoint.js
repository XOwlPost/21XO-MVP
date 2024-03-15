import '@testing-library/jest-dom';
import '@testing-library/jest-dom';

// Mock `@vercel/speed-insights/next` globally
jest.mock('@vercel/speed-insights/next', () => ({
  SpeedInsights: () => <div data-testid="speed-insight">Mock Speed Insight</div>,
}));

