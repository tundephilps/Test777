import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";

const AuthLayout = ({ children }) => {
  return <section>{children}</section>;
};

export default AuthLayout;
