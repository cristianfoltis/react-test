import { TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';

import Navigation from '../../components/Navigation';

function CreateCartoons() {
  const [formData, setFormData] = useState({ name: '', description: '' });

  const [title, setTitle] = useState('Create Cartoons');

  useEffect(() => {
    const newTitle = `Create Cartoon - ${formData.name}`;
    setTitle(newTitle);
  }, [formData.name]);

  useEffect(() => {
    setTitle('Create Cartoon');
    return () => {
      console.log('destroy');
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
      <Typography variant="h1" gutterBottom>
        {title}
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Grid container alignItems="center" justify="center" direction="column" spacing={1}>
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
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default CreateCartoons;
