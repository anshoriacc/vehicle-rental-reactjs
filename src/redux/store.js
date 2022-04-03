import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import rpm from 'redux-promise-middleware';
import storage from "redux-persist/lib/storage";

import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const enhancers = applyMiddleware(rpm, logger);
export const store = createStore(persistedReducer, enhancers);
export const persistor = persistStore(store);
