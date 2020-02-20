import React from "react";

const ListUser = ({listUsers}) => {
  const renderUsers = () => {
    console.log(listUsers);

  }

  return (
    <>
      <div className="review-list-user">
        <select id="">
          <option>По всем</option>
        </select>
      </div>
    </>
  );
};

export default ListUser;
