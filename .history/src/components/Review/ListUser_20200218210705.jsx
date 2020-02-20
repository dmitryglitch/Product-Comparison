import React from "react";

const ListUser = ({listUsers}) => {

  const renderUsers = () => {
    if (listUsers !== null) {
      console.log(listUsers);
      
      listUsers.forEach(user => {
        // console.log(user);
        
      });
    }
    console.log(listUsers);
  }

  return (
    <>
      <div className="review-list-user">
        <select id="">
          {renderUsers()}
          <option>По всем</option>
        </select>
      </div>
    </>
  );
};

export default ListUser;
