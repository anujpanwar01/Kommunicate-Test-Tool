import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LoginInterface {
  value: string;
}

const initialState: LoginInterface = {
  value: '',
};

export const LoginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    inputChange: (state, action: PayloadAction<string>) => {
      return { ...state, value: action.payload };
    },
  },
});

export const { inputChange } = LoginSlice.actions;

export default LoginSlice.reducer;
