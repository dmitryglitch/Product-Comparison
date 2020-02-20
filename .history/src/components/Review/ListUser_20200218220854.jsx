import React from "react";

const ListUser = ({ listUsers }) => {
  const renderUsers = () => {
    if (listUsers !== null && listUsers !== undefined) {
      return Object.keys(listUsers).map(user => {
        return <option key={user}>{listUsers[user]}</option>;
      });
    }
  };

  const handleChangeSelector = (e) => {
    console.log(e.target.value);
    
  };

  return (
    <>
      <div className="review-list-user">
        <select id="" onChange={handleChangeSelector}>
          <option>По всем</option>
          {renderUsers()}
        </select>
      </div>
    </>
  );
};

export default ListUser;
