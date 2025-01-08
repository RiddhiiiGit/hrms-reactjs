import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn") === "true";
    console.log(storedLoginStatus);
    setIsLoggedIn(storedLoginStatus);
  }, []);

  const login = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };

// import { useEffect } from "react";
// import { createContext } from "react";
// import { useDispatch } from "react-redux";

// // Set Api service Token
// const setServiceToken = (serviceToken) => {
//   if (serviceToken) {
//     console.log(serviceToken);
//     localStorage.setItem("serviceToken", JSON.stringify(serviceToken));
//   } else {
//     localStorage.removeItem("serviceToken");
//   }
// };

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const init = async () => {
//       try {
//         const serviceToken = localStorage.getItem("serviceToken");
//         if (serviceToken) {
//           console.log(serviceToken);
//           dispatch({
//             type: LOGIN,
//             payload: {
//               isLoggedIn: true,
//             },
//           });
//         } else {
//           dispatch({
//             type: LOGOUT,
//           });
//         }
//       } catch (err) {
//         dispatch({
//           type: LOGOUT,
//         });
//       }
//     };

//     return () => {
//       init();
//     };
//   }, []);

//   // Login Function
//   const login = async (values) => {
//     await LoginApi(values)
//       .then((res) => {
//         if (res.status === 200 && res.data.status === true) {
//           localStorage.setItem("type", "login");
//           const { data } = res.data;
//           setServiceToken(data.token);
//           //   const access = data.user.role.permission_group;
//           //   const accessData = CheckPermissions(access);
//           //   const ClockOperation = data.time_sheet
//           //     ? data.time_sheet.clock
//           //       ? "Clock In"
//           //       : "Clock Out"
//           //     : null;
//           //   const BreakOperation = data.break
//           //     ? data.break.end_time == null && data.clock.start_time != null
//           //       ? "Break In"
//           //       : "Break Out"
//           //     : null;

//           //   dispatch({ type: MENU_OPEN, id: "dashboard" });
//           //   dispatch({
//           //     type: LOGIN,
//           //     payload: {
//           //       isLoggedInWithOtherUser: false,
//           //       isLoggedIn: true,
//           //       user: data.user,
//           //       access: accessData,
//           //       task: data.task == null ? {} : data.task,
//           //       clock: ClockOperation,
//           //       breakActive: BreakOperation,
//           //       time_sheet: data.time_sheet,
//           //       actualUserData: {},
//           //       company_logo: data.company_logo,
//           //     },
//           //   });
//         }
//       })
//       .catch((err) => {
//         console.error("AuthContext - login Error >>>", err);
//       });
//   };
//   return (
//     <AuthContext.Provider
//       value={{
//         login,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
// export default AuthContext;
