import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirstApiActionList } from "../actions/FirstAction";
import { postCallActionList } from "../actions/FirstPostAction";
import { SecondApiActionList } from "../actions/SecondGetAction";

const Hero = () => {
  const dispatch = useDispatch();
  const postlist = useSelector((state) => state);
  console.log(postlist, "postlist");
  const firstApi = postlist.FirstReducrCase.data;
  const secondApi = postlist.SecondReducerCase.data;
  const [value, setValue] = useState({});
  const data = {
    userId: 5,
    date: "March",
    products: "Neha",
  };
  useEffect(() => {
    setValue(data);
    dispatch(FirstApiActionList());
    dispatch(SecondApiActionList());
    dispatch(postCallActionList(data));
  }, []);

  return (
    <div>
      <h1>API FIRST CONTENT</h1>
      {/* <div>
        <p>{firstApi.description && firstApi.description}</p>
        <p>
          {firstApi.images &&
            firstApi.images.map((obj) => <img src={obj} alt="obj" />)}
        </p>
      </div> */}
      <h1>API SECOND CONTENT</h1>
      <div>{secondApi && secondApi.map((obj) => <p>{obj}</p>)}</div>
      <h1>POST API CONTENT</h1>
      <p>{value.userId}</p>
      <p>{value.date}</p>
      <p>{value.products}</p>
    </div>
  );
};

export default Hero;
