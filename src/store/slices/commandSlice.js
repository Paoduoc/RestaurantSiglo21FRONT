import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allCommands: [],
  modal: {
    isOpen: false,
  },
  selectedCommand: {},
}

export const commandSlice = createSlice({
  name: 'command',
  initialState,
  reducers: {
    setAllCommands: (state, action) => {
      state.allCommands = action.payload
    },
    setModalOpen: (state, action) => {
      state.modal.isOpen = action.payload
    },
    setSelectedCommand: (state, action) => {
      state.selectedCommand = action.payload
    },
    resetSelectedCommand: (state) => {
      state.selectedCommand = initialState.selectedCommand
    },
  },
})

export const {
  setAllCommands,
  setModalOpen,
  setSelectedCommand,
  resetSelectedCommand,
} = commandSlice.actions

export default commandSlice.reducer