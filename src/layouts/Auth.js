import Navbar from "../components/Navbar";

function Auth({ children }) {
  return (
    <div>
      <Navbar /> Authentication {children}
    </div>
  );
}

export default Auth;
