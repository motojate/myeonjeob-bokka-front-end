import { createSlice } from '@reduxjs/toolkit'

const questionSlice = createSlice({
  name: 'question',
  initialState: {
    count: 0,
  },
  reducers: {
    setQuestionCount: (state, action) => {
      state.count = action.payload
    },
  },
})

export const { setQuestionCount } = questionSlice.actions
export default questionSlice
