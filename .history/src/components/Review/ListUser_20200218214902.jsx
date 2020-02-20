import React from "react";

const ListUser = ({ listUsers }) => {
  const renderUsers = () => {
    if (listUsers !== null && listUsers !== undefined) {
      return Object.keys(listUsers).map(user => {        
        return <option>{listUsers[user]}</option>;
      });
    }
  };

  return (
    <>
      <div className="review-list-user">
        <select id="">
          <option>По всем</option>
          {renderUsers()}
        </select>
      </div>
    </>
  );
};

export default ListUser;
