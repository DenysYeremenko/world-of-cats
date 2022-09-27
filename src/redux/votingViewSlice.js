import { createSlice } from '@reduxjs/toolkit';
import { getTimeNow } from 'services/getTimeNow';

export const votingViewSlice = createSlice({
  name: 'votings',
  initialState: { likes: [], favourites: [], dislikes: [], history: [] },
  reducers: {
    addLike: (state, { payload: { url, id } }) => {
      if (!state.likes.find(like => like.image.url === url)) {
        state.likes.push({
          image: { url: url },
          id: id,
        });
        state.history.unshift({ type: 'Likes', id: id, time: getTimeNow() });
      }
    },
    deleteLike: (state, { payload }) => {
      state.likes = state.likes.filter(like => like.id !== payload);
      state.history = state.history.filter(like => like.id !== payload);
    },
    addFavourite: (state, { payload: { url, id } }) => {
      if (!state.favourites.find(favourite => favourite.image.url === url)) {
        state.favourites.push({
          image: { url: url },
          id: id,
        });
        state.history.unshift({
          type: 'Favourites',
          id: id,
          time: getTimeNow(),
        });
      }
    },
    deleteFavourite: (state, { payload }) => {
      state.favourites = state.favourites.filter(
        favourite => favourite.id !== payload
      );
      state.history = state.history.filter(like => like.id !== payload);
    },
    addDislike: (state, { payload: { url, id } }) => {
      if (!state.dislikes.find(dislike => dislike.image.url === url)) {
        state.dislikes.push({
          image: { url: url },
          id: id,
        });
        state.history.unshift({ type: 'Dislikes', id: id, time: getTimeNow() });
      }
    },
    deleteDislike: (state, { payload }) => {
      state.dislikes = state.dislikes.filter(dislike => dislike.id !== payload);
      state.history = state.history.filter(like => like.id !== payload);
    },
  },
});

export const {
  addLike,
  deleteLike,
  addFavourite,
  deleteFavourite,
  addDislike,
  deleteDislike,
} = votingViewSlice.actions;
export default votingViewSlice.reducer;
