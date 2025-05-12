'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, useMediaQuery } from '@mui/material';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileOpen) setMobileOpen(false);
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 4 : 0}
      sx={{ 
        background: scrolled 
          ? 'rgba(var(--background-rgb), 0.8)' 
          : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        boxShadow: scrolled 
          ? '0 4px 20px rgba(0, 0, 0, 0.1)' 
          : 'none',
        color: 'var(--foreground)'
      }}
    >
      <Toolbar className="max-w-7xl mx-auto w-full justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-xl cursor-pointer"
          onClick={() => scrollToSection('#home')}
        >
          Portfolio
        </motion.div>

        {isMobile ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ThemeToggle />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </IconButton>
            </Box>

            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              sx={{
                '& .MuiDrawer-paper': { 
                  width: '70%', 
                  backgroundColor: 'var(--background)',
                  color: 'var(--foreground)'
                },
              }}
            >
              <List className="pt-16">
                {navItems.map((item) => (
                  <ListItem 
                    key={item.name} 
                    onClick={() => scrollToSection(item.href)}
                    className="py-4 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium text-lg">{item.name}</span>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <AnimatePresence>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="cursor-pointer relative group"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.name}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"
                    whileHover={{ width: '100%' }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
            <ThemeToggle />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
