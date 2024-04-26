import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setName } from "./userSlice";
import { selectUser, getName } from "./userSlice";

export function User() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // user 값이 바뀔 때마다 재실행되어야 하므로
  // 직접적으로 사용되지 않더라도 의존성 배열에 넣는다.
  const handlerOnClick = useCallback(() => {
    // dispatch(setName("polly"));
    dispatch(getName());
  }, [dispatch, user]);

  return (
    <>
      <p>User: {user.name}</p>
      <button onClick={handlerOnClick}>Set Name</button>
    </>
  );
}
