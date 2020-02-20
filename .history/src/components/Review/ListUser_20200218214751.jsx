import React from "react";

const ListUser = ({ listUsers }) => {
  const renderUsers = () => {
    console.log(listUsers);
    
    if (listUsers !== null) {
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
