import React, { useState, useEffect } from 'react';
import { Button } from '@learn-bit-react/base-ui.ui.button';

export function ThemeToggler() {
  const [theme, setTheme] = useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  return (
    <Button
      onClick={() => setTheme(nextTheme)}
      secondary
    >{`${nextTheme} mode`}
    </Button>
  );
}
