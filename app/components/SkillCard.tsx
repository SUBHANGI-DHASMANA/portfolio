'use client';

import { motion } from 'framer-motion';
import { Paper, Typography } from '@mui/material';

interface SkillCardProps {
  name: string;
  icon: string;
  index: number;
}

export default function SkillCard({ name, icon, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.05 }}
      viewport={{ once: true }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          height: '100%',
          backgroundColor: 'var(--card-bg)',
          color: 'var(--foreground)',
          borderRadius: '12px',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
          }
        }}
      >
        <div className="text-4xl" dangerouslySetInnerHTML={{ __html: icon }} />
        <Typography variant="body1" fontWeight={500}>
          {name}
        </Typography>
      </Paper>
    </motion.div>
  );
}
