import { ReactNode } from 'react';

export interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  staggerFrom?: string;
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  exit?: Record<string, unknown>;
  staggerDuration?: number;
  splitLevelClassName?: string;
  transition?: Record<string, unknown>;
  rotationIn?: number;
  rotationOut?: number;
  rotationInterval?: number;
  className?: string;
}

declare const RotatingText: React.FC<RotatingTextProps>;
export default RotatingText;
