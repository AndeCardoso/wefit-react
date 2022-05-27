import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from 'models/todo.model';

const initialState = [] as ITodo[];

const todoStore = createSlice({
  name: 'client',
  initialState,
  reducers: {
    create(state: ITodo[], action: PayloadAction<string>) {
      state.push({
        id: state.length,
        description: action.payload
      });
    },
    remove(state: ITodo[], action: PayloadAction<number>) {
      const position = state.findIndex(item => item.id === action.payload);
      state.length === 1 ? state.pop() : state.splice(position, 1);
    }
  }
});

export const { create, remove } = todoStore.actions;
export default todoStore.reducer;