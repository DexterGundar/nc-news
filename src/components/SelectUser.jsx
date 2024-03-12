import { useEffect, useState, useContext } from "react";

import Loading from "./Loading";
import { UserContext } from "../UserContext";
import { getUsers } from "../api";

export default function SelectUser() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    getUsers()
      .then((allUsers) => {
        setUsers(allUsers);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  return (
    <>
      <h4>
        To vote on article, read or leave a comment please choose your username.
        Thank you!
      </h4>

      <ul>
        {users.map(({ username, name, avatar_url }) => {
          return (
            <li className="user-card" key={username}>
              <div onClick={() => setCurrentUser({ username, name })}>
                <img id="very-small-image" src={avatar_url} alt="" />
                {username}
                <br />
                {name}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
