import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from './pages/Home/Home';
import { Voting } from './pages/Voting/Voting';
import { Breeds } from './pages/Breeds/Breeds';
import { Gallery } from './pages/Gallery/Gallery';
import { Category } from './pages/Category/Category';
import { SelectedBreed } from './pages/SelectedBreed/SelectedBreed';

export const App = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />}>
            <Route path="voting" element={<Voting />}></Route>
            <Route path="breeds" element={<Breeds />}></Route>
            <Route path="breeds/:breedId" element={<SelectedBreed />}></Route>
            <Route path="gallery" element={<Gallery />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
