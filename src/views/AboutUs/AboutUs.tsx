import { Box, Stack, styled } from '@mui/material';
import { red } from '@mui/material/colors';
import Button from 'components/Button/Button';
import Tabs from 'components/Tabs/Tabs';

const tabsContent = [
  {
    value: 1,
    content: 'First Tab',
  },
  {
    value: 2,
    content: 'Second Tab',
  },
  {
    value: 3,
    content: 'Third Tab',
  },
];

const AboutUs = () => {
  const Container = styled(Stack)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.secondary.main,
    }),
    [theme.breakpoints.down('lg')]: {
      backgroundColor: red[500],
    }
  }));

  return (
    <Container spacing={10}>
      <Button>Mui Button</Button>
      <Box
        sx={{
          bgcolor: 'primary.main',
        }}
      >
        Mui Box
      </Box>
      <Tabs selectedValue={1} tabsContent={tabsContent} />
    </Container>
  );
};

export default AboutUs;
