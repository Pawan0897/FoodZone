import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import Users from "./Reducer"
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore, persistReducer } from "redux-persist";

const store = configureStore({
    reducer: {
        user: persistReducer({
            key: "user",
            storage,
        },
            Users
        )
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})
const persistore = persistStore(store);
export { persistore, store }
