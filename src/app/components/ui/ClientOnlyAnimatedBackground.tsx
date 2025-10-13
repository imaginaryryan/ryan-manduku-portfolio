'use client';

import dynamic from 'next/dynamic';
import { ComponentProps } from 'react';

// Dynamically import AnimatedBackground with no SSR
const AnimatedBackground = dynamic(() => import('./AnimatedBackground'), {
  ssr: false,
  loading: () => <div className="absolute inset-0" /> // Placeholder during loading
});

interface ClientOnlyAnimatedBackgroundProps extends ComponentProps<typeof AnimatedBackground> {}

const ClientOnlyAnimatedBackground: React.FC<ClientOnlyAnimatedBackgroundProps> = (props) => {
  return <AnimatedBackground {...props} />;
};

export default ClientOnlyAnimatedBackground;