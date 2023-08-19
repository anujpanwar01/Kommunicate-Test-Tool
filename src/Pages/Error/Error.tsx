import { useRouteError } from 'react-router-dom';
const Error = () => {
  let error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>error</h1>
    </div>
  );
};

export default Error;
