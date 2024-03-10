import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let count = 0;
export const getName = createAsyncThunk("user/getName", async () => {
  // 비동기 처리 코드 작성
  const name = "polly";
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (count++ % 2 === 0) {
    throw new Error("Error");
  } else {
    return name;
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
  // 데이터 fetching, token 처리 등에 사용
  extraReducers: (builder) => {
    builder
      .addCase(getName.pending, (state) => {
        state.name = "pending...";
      })
      .addCase(getName.fulfilled, (state, action) => {
        state.name = action.payload;
      })
      .addCase(getName.rejected, (state) => {
        // 실제로는 sentry, datadog 등 에러 모니터링 도구를 이용하여 처리
        state.name = "rejected";
      });
  },
});

export const { setName } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
