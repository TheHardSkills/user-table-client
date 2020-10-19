import React from "react";
import User from "./User";

function UserTable(props) {
    // console.log("props", props);
    const usersInfo = props.usersInfo;
    console.log("usersInfo", usersInfo);
    return (
        <>
            {props.usersData ? (
                <div className="UserTable">
                    {/* {props.usersData.map((user, i) => { */}
                    <p>{props.usersData}</p>
                    <User />
                    {/* user={user.username}  */}
                    {/* })} */}
                </div>
            ) : null}
        </>
    );
}
export default UserTable;