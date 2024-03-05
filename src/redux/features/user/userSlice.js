import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Mahmud",
  email: "mahmud2gmail.com",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
