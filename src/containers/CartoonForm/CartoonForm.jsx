import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { TextField, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

import Navigation from '../../components/Navigation';

function CartoonForm() {
  const [formData, setFormData] = useState({ name: '', description: '' });

  const navigate = useNavigate();

  const location = useLocation();

  const [title, setTitle] = useState('Create Cartoons');

  useEffect(() => {
    if (location.pathname !== '/edit-cartoon') {
      const newTitle = `Create Cartoon  ${formData.name}`;
      setTitle(newTitle);
    }
  }, [formData.name, location.pathname]);

  useEffect(() => {
    if (location.pathname === '/edit-cartoon') {
      setTitle('Edit Cartoon');
      const cartoon = JSON.parse(window.localStorage.getItem('currentCartoon'));
      if (cartoon === null) {
        navigate('/cartoons');
      } else {
        setFormData({ name: cartoon.title, description: cartoon.description });
      }
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    return function CleanUp() {
      window.localStorage.removeItem('currentCartoon');
    };
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', description: '' });
  };

  const handleFormChange = (e) => {
    const newFormData = { ...formData };

    newFormData[e.target.name] = e.target.value;

    setFormData(newFormData);
  };

  return (
    <>
      <Navigation />
      <Typography variant="h4" textAlign="center" gutterBottom>
        {title}
      </Typography>
      <Grid
        container
        boxShadow={20}
        alignItems="center"
        justifyContent="center"
        direction="column"
        spacing={1}
        backgroundColor="lightblue"
        sx={{
          p: 6,
          margin: 'auto',
          maxWidth: 400,
          flexGrow: 1,
        }}
      >
        <Grid item xs={6}>
          <form onSubmit={handleFormSubmit}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <TextField
                  id="name-input"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="description-input"
                  name="description"
                  type="text"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleFormChange}
                />
              </Grid>
              <Grid item textAlign="center">
                <Button variant="contained" color="primary" type="submit">
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default CartoonForm;
