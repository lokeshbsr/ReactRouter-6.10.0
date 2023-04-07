import React from 'react';

const Home = () => (
  <div>
    <h1>Welcome to the New Router6.10! features</h1>
    1.Data Fetching (loader, actions for Form)
    <br />
    2.ceating routes as an objects
    <br />
    3.Don't need 'Routes' component only Route is required will have a root
    'Outlet'
    <br />
    4.Routing Structure depends on the developer.
    <p>
      ***********************************************************************************
    </p>
    <div>
      <strong>Our Current React Version:</strong>
      <br />
      react-router-dom@6.2.2
      <br />
      react@17.0.2
      <br />
      react-dom@17.0.2
      <br />
    </div>
    <br />
    <div>
      <strong>Latest React Version:</strong>
      <br />
      react-router-dom@6.10.0
      <br />
      react@18.2.0
      <br />
      react-dom@18.2.0
      <br />
    </div>
    <p>
      *******************************************************************************************
    </p>
    <div>
      <strong>Migrating Points to remember:</strong>
      <br />
      1.Remove Redirect inside Switch to Route.
      <br />
      2.Remove history and place it with useNavigation
      <br />
      3.convert all your {`${'<Switch>'}`} elements to {`${'<Routes>'}`}
      <br />
      4.RegExp-style route paths are not valid in v6 <br />
      5.Pass state as a separate prop in {`${'<Link />'}`} and can get by using
      useLocation in the linked component.
      <br />
      6.useNavigate insatead of useHistory <br />
      7.Replace UseRouteMatch with useMatch <br />
    </div>
  </div>
);

export default Home;
