import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-32 text-5xl">
      <h2>404</h2>
      <h2> not found page..!</h2>
      <Link to="/" className="btn btn-primary">
        Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
