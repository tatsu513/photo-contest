import FacebookProvider, { Login } from "react-facebook";

const FbLoginButton: React.VFC = () => {
  const handleResponse = (data) => {
    console.log(data);
  };
  const handleError = (error) => {
    console.log(error);
  };
  return (
    <div>
      <FacebookProvider appId="2995311247424073">
        <Login
          scope="email"
          onResponse={handleResponse}
          onError={handleError}
        >
          <span>Login via Facebook</span>
        </Login>
      </FacebookProvider>
    </div>
  );
};

export default FbLoginButton;
