import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})

/**
 * Usage
 *
 * const count = useSelector((state) => state.counter.value);
 * const dispatch = useDispatch();
 * ...
 * dispatch(increment());
 *
 * dispatch(decrement());
 *
 *
 */