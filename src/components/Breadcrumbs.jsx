import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumbs, Link } from '@mui/material';

function BreadcrumbsComponent() {
  const location = useLocation();

  const [pathArray, setPathArray] = useState([]);

  useEffect(() => {
    setPathArray(location.pathname.split('/').slice(1));
  }, [location.pathname]);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        Homepage
      </Link>
      {pathArray.map((path, i) => {
        return (
          <Link key={i} underline="hover" color="inherit" href={`/${path}`}>
            {path}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
//breadcrumbs tutorial
//fix this
export default BreadcrumbsComponent;
