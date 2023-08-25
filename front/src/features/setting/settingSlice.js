import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebar: false,
}

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
  },
})

// Action creators are generated for each case reducer function
export const {toggleSidebar} = settingSlice.actions

export default settingSlice.reducer