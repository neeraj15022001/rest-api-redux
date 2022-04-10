import {createSlice, createAsyncThunk, createSelector} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {countries: [], status: "idle", error: null}
export const fetchCountries = createAsyncThunk('/countries/fetchCountries', async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    return response.data;
})
const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder
            .addCase(fetchCountries.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.countries = state.countries.concat(action.payload);
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.status = "failed"
                state.error = "Error while loading countries";
            })
    })
});
//Selectors
export const selectAllCoutries = state => state.countries.countries;
export const selectCountryByName = createSelector(
    [selectAllCoutries, (state, countryName) => countryName],
    (countries, countryName) => countries.find(country => country.name.common === countryName)
)
export default countriesSlice.reducer;