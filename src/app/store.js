import {configureStore} from '@reduxjs/toolkit';
import themeSlice from "../features/theme/themeSlice";
import countriesSlice from "../features/countries/countriesSlice";

export const store = configureStore({
    reducer: {
        theme: themeSlice,
        countries: countriesSlice,
    },
});
