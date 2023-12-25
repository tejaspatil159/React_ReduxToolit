import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../user/userSlice";

const UserView = () => {
  const [display, setDisplay] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const showUsers = async () => {
    try {
      setDisplay(true);
      dispatch(fetchUsers());
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const hideUsers = () => {
    {
      setDisplay(false);
    }
  };

  return (
    <>
      <button onClick={showUsers}>Display Users</button>
      <button onClick={hideUsers}>Hide Users</button>
      {display && (
        <>
          {user.loading && <div>Loading...</div>}
          {user.error && <div>Error : {user.error}</div>}
          {user.data.length > 0 && (
            <ul>
              {user.data.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
};

export default UserView;
