import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SERVER, ServerInterface } from '../Helper/Constant';

interface EnvInterface {
  currentServer: ServerInterface;
}

const initialState: EnvInterface = {
  currentServer: SERVER[0],
};

const EnvSlice = createSlice({
  name: 'Environment',
  initialState,
  reducers: {
    setCurrentServer: (state, action: PayloadAction<ServerInterface>) => {
      return { ...state, currentServer: action.payload };
    },
  },
});

export const { setCurrentServer } = EnvSlice.actions;
export default EnvSlice.reducer;
