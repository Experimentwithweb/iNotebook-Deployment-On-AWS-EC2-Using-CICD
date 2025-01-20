// Purpose.-Show the content for homepage.

import Notes from "./Notes";

//Importing the required modules from the react Library


const Home = (props) => {

  const {showAlert} = props
  return (
    <div>
     <h1> Welcome 2 iNotebook homepage </h1>
      <Notes showAlert={showAlert} /> 
    </div>
  );
};

export default Home;
