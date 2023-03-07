import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getproduit = createAsyncThunk("produit/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5005/produit/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addproduit = createAsyncThunk("produit/add", async (newproduit) => {
  try {
    let result = axios.post("http://localhost:5005/produit/add", newproduit);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deleteproduit = createAsyncThunk("produit/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5005/produit/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editproduit = createAsyncThunk("produit/edit", async ({ id, edit }) => {
  try {
    let result = axios.put(`http://localhost:5005/produit/${id}`, edit);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
    produitList: null,
  status: null,
};

export const produitslice = createSlice({
  name: "produit",
  initialState,
  reducers: {},
  extraReducers: {
    [getproduit.pending]: (state) => {
      state.status = "pending";
    },
    [getproduit.fulfilled]: (state, action) => {
      state.status = "success";
      state.produitList = action.payload.data.produits;
    },
    [getproduit.rejected]: (state) => {
      state.status = "fail";
    },
    [addproduit.pending]: (state) => {
      state.status = "pending";
    },
    [addproduit.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addproduit.rejected]: (state) => {
      state.status = "fail";
    },
    [deleteproduit.pending]: (state) => {
      state.status = "pending";
    },
    [deleteproduit.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteproduit.rejected]: (state) => {
      state.status = "fail";
    },
    [editproduit.pending]: (state) => {
      state.status = "pending";
    },
    [editproduit.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editproduit.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default produitslice.reducer;