import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../createAppSlice";
import { FeedbackSliceState } from "./types";

const feedbackInitialState: FeedbackSliceState = {
  likeCount: 0,
  dislikeCount: 0
}

export const feedbackSlice = createAppSlice({
  name: 'FEEDBACK',
  initialState: feedbackInitialState,
  reducers: create => ({
    //2-й аргумент в функции reducer - action (это объект, в свойстве payload которого храняться данные, 
    //которые мы можем передать из компонента в slice)
    addLike: create.reducer((state: FeedbackSliceState, action: PayloadAction<number>) => {
      state.likeCount = state.likeCount + action.payload
    }),
    addDislike: create.reducer((state: FeedbackSliceState) => { state.dislikeCount = state.dislikeCount + 1 }),
    //способ очистки состояния (возвращение к initialState)
    resetResults: create.reducer(() => feedbackInitialState)
  }),
  selectors: {
    like: (state: FeedbackSliceState) => state.likeCount,
    dislike: (state: FeedbackSliceState) => state.dislikeCount
  }
})

export const feedbackSliceActions = feedbackSlice.actions
export const feedbackSliceSelectors = feedbackSlice.selectors