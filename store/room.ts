import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Roomstate } from "../types/reduxState";
import { RoomType } from "../types/room";

//* 초기 상태
const initialState: Roomstate = {
  rooms: [],
};

const room = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRooms(state, action: PayloadAction<RoomType[]>) {
      state.rooms = action.payload;
    },
  },
});

export const roomActions = { ...room.actions };

export default room;
