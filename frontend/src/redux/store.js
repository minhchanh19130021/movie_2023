import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import authSlice from './authSlice';

const persistAuthenticationConfig = {
    key: 'auth',
    storage,
    blacklist: ['authentication'],
};

const persistedAuthenticationReducer = persistReducer(persistAuthenticationConfig, authSlice);

export default configureStore({
    reducer: {
        authentication: persistedAuthenticationReducer,
    },
    middleware: [thunk],
});
