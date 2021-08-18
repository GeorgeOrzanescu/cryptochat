
import CryptoData from "./components/cryptodata";
import Header from "./components/header";

import './App.css'



import { auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';




function App() {

  // const [user] = useAuthState(auth);  // returns true or false value 

  return (
    <div className="App">
      <Header></Header>
      <CryptoData></CryptoData>
    </div>
  );
}

export default App;
