import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PortfolioProvider } from '../context/PortfolioContext';
import Projects from './Projects/Projects';
import About from './About/About';

afterEach(cleanup);

test('flagship repositories remain visible and AI filtering works', async () => {
  render(<PortfolioProvider><Projects /></PortfolioProvider>);
  expect(screen.getByRole('link', { name: 'Open Detection Forge on GitHub' })).toHaveAttribute('href', 'https://github.com/BahaMelki0/Detection-Forge');
  expect(screen.getByRole('link', { name: 'Open APK Sentinel on GitHub' })).toBeInTheDocument();
  await userEvent.click(screen.getByRole('button', { name: /^AI/ }));
  expect(screen.getByRole('link', { name: 'Open JobForge on GitHub' })).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'Open Detection Forge on GitHub' })).not.toBeInTheDocument();
});

test('graduate biography and ongoing certification are rendered', async () => {
  render(<PortfolioProvider><About /></PortfolioProvider>);
  expect(screen.getByText(/Recently graduated Telecommunications Engineer specialized/)).toBeInTheDocument();
  await userEvent.click(screen.getByRole('button', { name: 'Certifications' }));
  expect(screen.getByText('SC-200')).toBeInTheDocument();
  expect(screen.getByText('CPTS (ongoing)')).toBeInTheDocument();
});
