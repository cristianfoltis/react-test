import { Modal, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Navigation from '../../components/Navigation';
import CartoonCard from './CartoonCard';

const cartoons = [
  {
    name: 'Sailor Moon',
    description: 'Sailor Moon is a Japanese series written and illustrated by Naoko Takeuchi.',
    image: 'https://picsum.photos/id/1038/200/200',
  },
  {
    name: 'Tom and Jerry',
    description:
      'Tom and Jerry is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera',
    image: 'https://picsum.photos/id/1012/200/200',
  },
  {
    name: 'Rick and Morty',
    description:
      'An animated series that follows the exploits of a super scientist and his not-so-bright grandson.',
    image: 'https://picsum.photos/id/1032/200/200',
  },
  {
    name: 'Family Guy',
    description:
      'Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.',
    image: 'https://picsum.photos/id/1035/200/200',
  },
  {
    name: 'Ben 10',
    description:
      'Ten-year-old Ben Tennyson discovers a mysterious device, the Omnitrix, on a family vacation.',
    image: 'https://picsum.photos/id/1022/200/200',
  },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

function Cartoons() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [currentCartoon, setCurrentCartoon] = useState({});
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = (title, image, description) => {
    setOpen(!open);
    setCurrentCartoon({ title, image, description });
  };

  const handleEditForm = (title, image, description) => {
    window.localStorage.setItem(
      'currentCartoon',
      JSON.stringify({ title: title, image: image, description: description }),
    );
    navigate('/edit-cartoon');
  };

  return (
    <>
      <Navigation />
      <Typography variant="h3" gutterBottom>
        Cartoons
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container display="flex" spacing={2} flexDirection="row" justifyContent="center">
          {cartoons.map((cartoon) => {
            return (
              <Grid item key={cartoon.name} textAlign="center" lg={3} md={6} xs={12}>
                <CartoonCard
                  title={cartoon.name}
                  image={cartoon.image}
                  description={cartoon.description}
                  handleOpenModal={handleOpenModal}
                  handleEditForm={handleEditForm}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {currentCartoon.title}
          </Typography>
          <img src={currentCartoon.image} alt="Here should be an img." />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {currentCartoon.description}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
export default Cartoons;
