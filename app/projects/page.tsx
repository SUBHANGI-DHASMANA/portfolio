'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Typography,
  Box,
  Button,
  Chip,
  useTheme,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Image from 'next/image';

export default function Projects() {
  const theme = useTheme();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI Resume Tailor',
      description: 'AI-powered platform that helps job seekers quickly create personalized, ATS-optimized resumes. By simply uploading their existing resume and a job description, users can generate a tailored resume that aligns with the specific job requirements.',
      image: '/ai-resume-tailor.png',
      tags: ['Nextjs', 'flask', 'langchain', 'Python'],
      category: 'AI',
      github: 'https://github.com/SUBHANGI-DHASMANA/resume-tailor',
      demo: 'https://resume-tailor-delta.vercel.app'
    },
    {
      id: 2,
      title: 'Investing101',
      description: 'Web application that allows users to practice investing with dummy cash and real market data. It provides a risk-free environment for learning how to invest in the stock market.',
      image: '/cover_investing101.png',
      tags: ['Nextjs', 'flask', 'postgresql', 'material-ui', 'supabase'],
      category: 'fullstack',
      github: 'https://github.com/SUBHANGI-DHASMANA/investing101',
      demo: 'https://investing101-zeta.vercel.app/'
    },
    {
      id: 3,
      title: 'Q&A with Research paper',
      description: 'The Research Paper Q&A Assistant is an AI-powered application designed to help researchers, students, and academics efficiently extract insights from scientific papers.',
      image: '/research-paper-chat-app.png',
      tags: ['Python', 'AIML', 'Langchain', 'ChromaDB', 'Docker'],
      category: 'AI',
      github: 'https://github.com/SUBHANGI-DHASMANA/hybrid-search-cache-rag-app',
      demo: 'https://drive.google.com/file/d/1g5Sg_iXwkpkG_vjdwPJnOijpHlRJ8nki/view?usp=sharing'
    },
    {
      id: 4,
      title: 'Chat application',
      description: 'A real-time chat application, features a clean and intuitive user interface where users can view their chat history, select conversations, and send messages in real time.',
      image: '/cover-chat-app.png',
      tags: ['Nextjs', 'Supabase', 'PostgreSQL', 'Flask', 'Python'],
      category: 'fullstack',
      github: 'https://github.com/SUBHANGI-DHASMANA/chat-app',
      demo: 'https://chat-app-git-main-subhangidhasmanas-projects.vercel.app/login'
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 2
          }}
        >
          My Projects
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: '800px', mx: 'auto', mb: 3 }}
        >
          A showcase of my recent work and personal projects
        </Typography>

        <div className="flex justify-center gap-4">
          <Button
            variant={filter === 'all' ? 'contained' : 'outlined'}
            onClick={() => setFilter('all')}
            sx={{ borderRadius: '20px', px: 3, mb: 2 }}
          >
            All
          </Button>
          <Button
            variant={filter === 'AI' ? 'contained' : 'outlined'}
            onClick={() => setFilter('AI')}
            sx={{ borderRadius: '20px', px: 3, mb: 2 }}
          >
            Artificial Intelligence
          </Button>
          <Button
            variant={filter === 'fullstack' ? 'contained' : 'outlined'}
            onClick={() => setFilter('fullstack')}
            sx={{ borderRadius: '20px', px: 3, mb: 2 }}
          >
            Full Stack
          </Button>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: 20 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: theme.shadows[3],
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[6]
                  }
                }}
              >
                <Box sx={{ position: 'relative', height: 200 }}>
                  <CardMedia
                    component="div"
                    sx={{ height: '100%', position: 'relative' }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </CardMedia>
                </Box>
                <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 4 } }}>
                  <Typography variant="h5" component="h2" gutterBottom fontWeight={600}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 3 }}>
                    {project.tags.map((tag, index) => (
                      <Chip
                        key={index}
                        label={tag}
                        size="small"
                        sx={{
                          borderRadius: '8px',
                          backgroundColor: theme.palette.mode === 'dark'
                            ? 'rgba(107, 70, 193, 0.2)'
                            : 'rgba(107, 70, 193, 0.1)',
                          color: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.9)'
                            : 'rgba(0, 0, 0, 0.8)',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', px: { xs: 3, md: 4 }, pb: { xs: 3, md: 4 } }}>
                  <div>
                    <IconButton
                      aria-label="GitHub repository"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      aria-label="Live demo"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LaunchIcon />
                    </IconButton>
                  </div>
                  <Button
                    variant="outlined"
                    size="small"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ borderRadius: '20px' }}
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
