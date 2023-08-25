import { configureStore } from '@reduxjs/toolkit'
import settingReducer from "../features/setting/settingSlice";

const store = configureStore({
  reducer: {
    setting: settingReducer
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

export default store;