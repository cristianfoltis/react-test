import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import Cartoons from './containers/Cartoons/Cartoons';
import CreateCartoons from './containers/CreateCartoons/CreateCartoons';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cartoons" element={<Cartoons />} />
        <Route path="/create-cartoon" element={<CreateCartoons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
