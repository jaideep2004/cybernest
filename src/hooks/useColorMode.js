import { useContext } from 'react';
import { ColorModeContext } from '../context/ThemeContext';
import { useTheme } from '@mui/material/styles';

export const useColorMode = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  
  return {
    theme,
    colorMode,
    isDarkMode: theme.palette.mode === 'dark',
  };
}; 