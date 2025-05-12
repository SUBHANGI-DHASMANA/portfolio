'use client';

import { motion } from 'framer-motion';
import { Typography, Box, Paper, Chip, useTheme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BrushIcon from '@mui/icons-material/Brush';

export default function Skills() {
  const theme = useTheme();

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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <CodeIcon />,
      skills: [
        'React', 'Next.js', 'TypeScript', 'JavaScript',
        'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI',
        'Redux', 'Framer Motion', 'Responsive Design'
      ]
    },
    {
      title: 'Backend Development',
      icon: <StorageIcon />,
      skills: [
        'Node.js', 'Express', 'Python', 'Go', 'Fast APIs', 'Flask', 'Authentication', 'Authorization', 'Middleware'
      ]
    },
    {
      title: 'Database & Cloud',
      icon: <CloudIcon />,
      skills: [
        'MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Google cloud platform', 'Jenkins', 'terraform', 'Docker', 'CI/CD Pipelines'
      ]
    },
    {
      title: 'Design & Tools',
      icon: <BrushIcon />,
      skills: [
        'Figma', 'Low-fidelity Prototyping', 'High-fidelity Prototyping', 'UI/UX Design', 'Git', 'GitHub', 'VS Code', 'Agile Methodology',
        'Jira', 'Notion'
      ]
    }
  ];

  return (
    <div className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center"
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 5
          }}
        >
          Tools & Skills
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: '800px', mx: 'auto', mb: 3 }}
        >
          My technical toolkit and areas of expertise
        </Typography>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
      >
        {skillCategories.map((category, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Box
              component={Paper}
              elevation={3}
              sx={{
                p: { xs: 5, md: 6 },
                height: '100%',
                borderRadius: '16px',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[6]
                }
              }}
            >
              <div className="flex items-center mb-6" style={{ marginBottom: '1.5rem' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: '12px',
                    backgroundColor: 'primary.main',
                    color: 'white',
                    mr: 2
                  }}
                >
                  {category.icon}
                </Box>
                <Typography variant="h5" component="h2" fontWeight={600}>
                  {category.title}
                </Typography>
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                {category.skills.map((skill, idx) => (
                  <Chip
                    key={idx}
                    label={skill}
                    sx={{
                      borderRadius: '8px',
                      py: 2,
                      fontWeight: 500,
                      backgroundColor: theme.palette.mode === 'dark'
                        ? 'rgba(107, 70, 193, 0.2)'
                        : 'rgba(107, 70, 193, 0.1)',
                      color: theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.9)'
                        : 'rgba(0, 0, 0, 0.8)',
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark'
                          ? 'rgba(107, 70, 193, 0.3)'
                          : 'rgba(107, 70, 193, 0.2)',
                      }
                    }}
                  />
                ))}
              </div>
            </Box>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
