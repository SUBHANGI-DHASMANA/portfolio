'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardActions, Button, Chip, Typography, Box } from '@mui/material';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card 
        elevation={4}
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          backgroundColor: 'var(--card-bg)',
          color: 'var(--foreground)',
          borderRadius: '16px',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
          }
        }}
      >
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 hover:scale-110"
          />
        </div>
        
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
            {title}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" paragraph>
            {description}
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
            {technologies.map((tech) => (
              <Chip 
                key={tech} 
                label={tech} 
                size="small" 
                sx={{ 
                  backgroundColor: 'var(--chip-bg)',
                  color: 'var(--chip-text)',
                  fontWeight: 500
                }} 
              />
            ))}
          </Box>
        </CardContent>
        
        <CardActions sx={{ p: 2, pt: 0 }}>
          {githubUrl && (
            <Button 
              size="small" 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ 
                color: 'var(--primary-color)',
                '&:hover': { backgroundColor: 'rgba(var(--primary-rgb), 0.08)' }
              }}
            >
              GitHub
            </Button>
          )}
          {liveUrl && (
            <Button 
              size="small" 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ 
                color: 'var(--primary-color)',
                '&:hover': { backgroundColor: 'rgba(var(--primary-rgb), 0.08)' }
              }}
            >
              Live Demo
            </Button>
          )}
        </CardActions>
      </Card>
    </motion.div>
  );
}
