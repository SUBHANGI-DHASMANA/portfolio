'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMemo, useState, useEffect } from 'react';
import { deepPurple, amber } from '@mui/material/colors';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  // Update the theme only on the client
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setMode(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark');
    }
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? deepPurple[300] : deepPurple[500],
          },
          secondary: {
            main: mode === 'dark' ? amber[300] : amber[500],
          },
          background: {
            default: mode === 'dark' ? '#121212' : '#f5f5f5',
            paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',
          },
        },
        typography: {
          fontFamily: 'var(--font-geist-sans)',
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                scrollbarColor: mode === 'dark' ? '#6b46c1 #2d2d2d' : '#6b46c1 #e0e0e0',
                '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                  backgroundColor: mode === 'dark' ? '#2d2d2d' : '#e0e0e0',
                  width: '8px',
                },
                '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                  borderRadius: 8,
                  backgroundColor: mode === 'dark' ? '#6b46c1' : '#6b46c1',
                  minHeight: 24,
                },
              },
            },
          },
        },
      }),
    [mode],
  );

  // Prevent rendering with wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </NextThemesProvider>
  );
}
