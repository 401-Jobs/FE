import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../redux/slices/sampleSlice";

export const LandingPage = () => {
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchUsers());
  //   }, []);

  return <div>LandingPage</div>;
};
