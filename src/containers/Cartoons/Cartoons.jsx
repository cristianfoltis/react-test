import Navigation from '../../components/Navigation';
import CartoonCard from './CartoonCard';

const cartoons = [
  { name: 'Sailor Moon', description: 'White', image: 'https://picsum.photos/200' },
  { name: 'Tom & Jerry', description: 'Blues', image: 'https://picsum.photos/200' },
  { name: 'Curaj-Caine Fricos', description: 'Black', image: 'https://picsum.photos/200' },
  { name: 'Rick and Morty', description: 'Orange', image: 'https://picsum.photos/200' },
  { name: 'Cow and chicken', description: 'Purple', image: 'https://picsum.photos/200' },
];

function Cartoons() {
  return (
    <>
      <Navigation />
      Cartoons
      {cartoons.map((cartoon) => {
        return <CartoonCard title={cartoon.name} />;
      })}
    </>
  );
}

export default Cartoons;
