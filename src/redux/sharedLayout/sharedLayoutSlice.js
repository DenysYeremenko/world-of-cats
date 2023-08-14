import { createSlice } from '@reduxjs/toolkit';

export const sharedLayoutSlice = createSlice({
  name: 'layout',
  initialState: { mainSectionShowed: true },
  reducers: {
    toogleMainSectionShowed(state, { payload }) {
      if (state.mainSectionShowed !== payload) {
        state.mainSectionShowed = payload;
      }
    },
  },
});

const { actions } = sharedLayoutSlice;
export const { toogleMainSectionShowed } = actions;
export default sharedLayoutSlice.reducer;

