import React from "react";
import AddUser from "./AddUser";
import UsersList from "./UsersList";
import { UserType } from "./UsersList/index";

type UsersProps = {};

const Users: React.FC<UsersProps> = () => {
  const [users, setUsers] = React.useState<UserType[]>([]);

  return (
    <React.Fragment>
      <AddUser setUsers={setUsers} />
      {users.length > 0 && <UsersList users={users} />}
    </React.Fragment>
  );
};

export default Users;
