import { Modal, Box, Typography } from '@mui/material';
import { useState } from 'react';

import Navigation from '../../components/Navigation';
import CartoonCard from './CartoonCard';

const cartoons = [
  { name: 'Sailor Moon', description: 'Whitw', image: 'https://picsum.photos/200' },
  { name: 'Tom and Jerry', description: 'Bluw', image: 'https://picsum.photos/200' },
  { name: 'Courage the Cowardly Dog', description: 'Black', image: 'https://picsum.photos/200' },
  { name: 'Cow and Chicken', description: 'Red', image: 'https://picsum.photos/200' },
  { name: 'Ben 10', description: 'Purple', image: 'https://picsum.photos/200' },
];

function Cartoons() {
  const [open, setOpen] = useState(false);

  const [currentCartoon, setCurrentCartoon] = useState({});
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = (title, image, description) => {
    setOpen(!open);
    setCurrentCartoon({ title, image, description });
  };

  return (
    <>
      <Navigation />
      <Typography variant="h1" gutterBottom>
        Cartoons
      </Typography>
      {cartoons.map((cartoon) => {
        return (
          <CartoonCard
            title={cartoon.name}
            image={cartoon.image}
            description={cartoon.description}
            key={cartoon.name}
            handleOpenModal={handleOpenModal}
          />
        );
      })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {currentCartoon.title}
          </Typography>
          <img src={currentCartoon.image} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {currentCartoon.description}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
export default Cartoons;
