import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomeView } from './pages/HomeView/HomeView';
import { lazy } from 'react';
import { LikesView } from './pages/LikesView/LikesView';
import { FavouritesView } from './pages/FavouritesView/FavouritesView';
import { DislikesView } from './pages/DislikesView/DislikesView';

const SharedSearchBar = lazy(() => import('./SharedSearchBar/SharedSearchBar'));
const VotingView = lazy(() => import('./pages/VotingView/VotingView'));
const BreedsView = lazy(() => import('./pages/BreedsView/BreedsView'));
const SelectedBreedView = lazy(() =>
  import('./pages/SelectedBreedView/SelectedBreedView')
);
const GalleryView = lazy(() => import('./pages/GalleryView/GalleryView'));
const SearchView = lazy(() => import('./pages/SearchView/SearchView'));

export const App = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeView />} />
          <Route path="category" element={<SharedSearchBar />}>
            <Route path="voting" element={<VotingView />} />
            <Route path="likes" element={<LikesView />} />
            <Route path="favourites" element={<FavouritesView />} />
            <Route path="dislikes" element={<DislikesView />} />
            <Route path="breeds" element={<BreedsView />} />
            <Route path="breeds/:breedId" element={<SelectedBreedView />} />
            <Route path="gallery" element={<GalleryView />} />
            <Route path="search" element={<SearchView />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
