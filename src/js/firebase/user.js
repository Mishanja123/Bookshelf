// import {endSession, getSession, isLoggedIn} from "./session";

// useEffect(() => {
//   if (!isLoggedIn()) {
//     navigate("/login");
//   }

//   let session = getSession();
//   setEmail(session.email);

//   console.log("Your access token is: " + session.accessToken);
// }, [navigate]);

// const onLogout = () => {
//   endSession();
//   navigate("/login");
// }