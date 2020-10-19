import React from "react";

function User() {
    return (
        <>
            {/* {props.usersData ? ( */}
            <table className="User">

                {/* {props.usersData.map((user, i) => {
                        return 
                    })} */}
                <tr>
                    <th>Ячейка 1</th>
                    <th>Ячейка 2</th>
                    <th>Ячейка 3</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
            </table>
            {/* ) : null} */}
        </>
    );
}
export default User;