// app/fonts/font.ts
import { 
  Inter, 
  Roboto, 
  Open_Sans,
  Dancing_Script,
  Satisfy 
} from 'next/font/google';
import localFont from 'next/font/local';

// Google Fonts
export const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans'
});

// Corrected variable font configuration
export const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  weight: 'variable' // Simple variable font loading
});

// Local Fonts
export const myCustomFont = localFont({
  src: [
    {
      path: './fonts/CustomFont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CustomFont-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-custom'
});

// Handwritten font
export const handwritten = Satisfy({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-handwritten'
});

// Export font variables
export const fontVariables = `
  ${inter.variable}
  ${roboto.variable}
  ${openSans.variable}
  ${dancingScript.variable}
  ${myCustomFont.variable}
  ${handwritten.variable}
`;