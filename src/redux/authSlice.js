const initialState = {
    userData: null,  // Initialize with null to avoid undefined errors
    // other state properties
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setUserData(state, action) {
        state.userData = action.payload;
      },
      // other reducers
    },
  });
  
  export const { setUserData } = authSlice.actions;
  export default authSlice.reducer;
  