import Button from 'components/Button/Button';
import { useEffect, useState } from 'react';
import { IThemeProvider } from './IThemeProvider';
import { THEME } from './constants';

const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<THEME>(THEME.light);

  useEffect(() => {
    if (document) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEME.light ? THEME.dark : THEME.light));
  };

  return (
    <>
      <Button onClick={toggleTheme}>THEME: {theme}</Button>
      {children}
    </>
  );
};

export default ThemeProvider;
