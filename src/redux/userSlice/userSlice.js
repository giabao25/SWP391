import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  sampleTestCurrent: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setSampleTesCur: (state, action) => {
      state.sampleTestCurrent = action.payload;
    },
  },
});

export const { setEmail, setPassword, setSampleTesCur } = userSlice.actions;

export default userSlice.reducer;
