import {useMemo} from "react";
import rootReducer from "./reducers/rootReducer";
import {applyMiddleware, compose, createStore} from "redux";

let store

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


function initStore(preloadedState = initialState) {
    return createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(applyMiddleware())
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        store = undefined
    }

    if (typeof window === 'undefined') return _store
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}