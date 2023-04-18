import React from "react";

const UserInfoList = ({ userInfo }) => {
  return (
    <div className="ml-8">
      {userInfo.length === 0 ? null : (
        <table className="table-auto border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200 text-amber-900">
              <th className="px-4 py-2">Firstname</th>
              <th className="px-4 py-2">Lastname</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            {userInfo?.map((el) => (
              <tr key={el.id} className="border-b border-gray-400">
                <td className="px-4 py-2 text-center">{el.firstName}</td>
                <td className="px-4 py-2 text-center">{el.lastName}</td>
                <td className="px-4 py-2 text-center">{el.email}</td>
                <td className="px-4 py-2 text-center">
                  {el.mobileNum ? el.mobileNum : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserInfoList;
