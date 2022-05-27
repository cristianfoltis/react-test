import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const style = {
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 6,
};

function CartoonCard({ title, image, description, handleOpenModal, handleEditForm }) {
  const handleDetailsButton = () => {
    handleOpenModal(title, image, description);
  };

  const handleEditButton = () => {
    handleEditForm(title, image, description);
  };

  return (
    <>
      <Card sx={style}>
        <CardContent>
          <img src={image} alt="Here should be an img." />
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton color="primary" onClick={handleDetailsButton}>
              <RemoveRedEyeIcon></RemoveRedEyeIcon>
            </IconButton>
            <IconButton onClick={handleEditButton} aria-label="edit" color="primary">
              <EditIcon></EditIcon>
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
}

export default CartoonCard;
