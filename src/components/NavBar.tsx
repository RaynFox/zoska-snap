"use client"; // Add this at the top

import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For Next.js routing
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const router = useRouter(); // Client-side routing

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          // Add navigation logic
          if (newValue === 0) router.push('/');
          if (newValue === 1) router.push('/profile');
          if (newValue === 2) router.push('/posts');
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleRoundedIcon />} />
        <BottomNavigationAction label="Add Post" icon={<AddCircleRoundedIcon />} />
      </BottomNavigation>
    </Box>
  );
}