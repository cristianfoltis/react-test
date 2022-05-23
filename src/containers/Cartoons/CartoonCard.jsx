import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CartoonCard({ title }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>{title}</CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}

export default CartoonCard;
