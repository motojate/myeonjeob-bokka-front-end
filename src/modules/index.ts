import { combineReducers } from 'redux'
import questionSlice from './question/questionSlice'

const rootReducer = combineReducers({
  questionReducer: questionSlice.reducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
