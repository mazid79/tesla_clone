import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [ "Model S", "Model 3", "Model X", "Model Y" ]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {} // Add reducer functions here if needed. For example...
})

export const selectCars = state => state.car.cars

export default carSlice.reducer