'use client';

import { motion } from 'framer-motion';
import { Button, Typography, Box, Paper, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-[80vh] flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(90deg, #9c27b0 0%, #3f51b5 100%)'
                  : 'linear-gradient(90deg, #6a1b9a 0%, #303f9f 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              Subhangi Dhasmana
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              Software developer
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="body1" sx={{ my: 6, fontSize: '1.1rem', lineHeight: 1.8 }}>
            I am a dedicated developer with experience in artificial intelligence, cloud computing, and full-stack development. I&apos;ve keen interest in Cloud and Devops field. Experienced in programming languages such as Python, Go, and JavaScript, as well as libraries like React, Flask, and FastAPI, I enjoy playing with emerging technologies and crafting influential prototypes. Ranging from hackathon victories to reporting AI breakthroughs, I&apos;m inspired by curiosity and a solutions-focused attitude.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6 mt-8">
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              size="large"
              sx={{
                borderRadius: '28px',
                px: 4,
                py: 1.5,
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              Contact Me
            </Button>
            <Button
              component={Link}
              href="/projects"
              variant="outlined"
              size="large"
              sx={{
                borderRadius: '28px',
                px: 4,
                py: 1.5,
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-8"
            style={{ marginTop: '3rem' }}
          >
            <IconLink href="https://github.com/SUBHANGI-DHASMANA" icon={<GitHubIcon fontSize="large" />} />
            <IconLink href="https://linkedin.com/in/subhangidhasmana" icon={<LinkedInIcon fontSize="large" />} />
            <IconLink href="mailto:subhangi.dhasmana@gmail.com" icon={<EmailIcon fontSize="large" />} />
          </motion.div>
        </div>

        <div>
          <motion.div
            variants={itemVariants}
            className="relative w-[85%] h-[700px] flex justify-center"
          >
            <Box
              component={Paper}
              elevation={8}
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0,0,0,0.1)',
                  zIndex: 1
                }
              }}
            >
              <Image
                src="/hero-image.png"
                alt="Developer illustration"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function IconLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: 'rgba(107, 70, 193, 0.1)'
      }}
    >
      {icon}
    </motion.a>
  );
}
