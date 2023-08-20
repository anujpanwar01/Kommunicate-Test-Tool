import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OptionInterface, THEME_DROPDOWN } from '../Helper/Constant';

interface ThemeInterface {
  theme: OptionInterface;
}

const initialState: ThemeInterface = {
  theme: THEME_DROPDOWN[0],
};

const ThemeSlice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    updateTheme: (state, { payload }: PayloadAction<unknown>) => {
      if (payload === null) return state;
      const selectedOption = payload as OptionInterface;

      return { ...state, theme: selectedOption };
    },
  },
});

export const { updateTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
