import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CartoonCard({ title, image, description, handleOpenModal }) {
  const handleDetailsButton = () => {
    handleOpenModal(title, image, description);
  };
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <img src={image} />
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleDetailsButton}>
            Details
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CartoonCard;
