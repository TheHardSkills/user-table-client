const url = "http://localhost:3000/api/users/"
class RequestService{

  async getAllUsers(){
  let response = await fetch(url);
  //todo: try catch (response.ok)
    let json = await response.json();
    console.log("json", json);
    return json;
  }
}
export default RequestService;

// const getUserById=()=>{}

// const createUser =()=>{
//   const result = await fetch("http://localhost:8000/login", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ username, password }),
// });
// }

// const deleteUser =() =>{};
