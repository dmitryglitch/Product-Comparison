import React from "react";

const ListUser = ({ listUsers }) => {
  const renderUsers = () => {
    if (listUsers !== null) {
      
  };

  return (
    <>
      <div className="review-list-user">
        <select id="">
          <option>По всем</option>
          {Object.keys(listUsers).forEach(user => {
        console.log(listUsers[user]);
        
        return <option>{listUsers[user]}</option>;
      })
    }}
        </select>
      </div>
    </>
  );
};

export default ListUser;
