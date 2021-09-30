import React from 'react';
import { Provider } from 'react-redux';
// import Bucket from '../components/moleculs/bucket';
// import Diskusi from '../components/moleculs/diskusi';
import store from '../config/redux';
import Routes from '../config/routes';


function App() {
  return (
    <Provider store = {store}>
      <Routes/>
    </Provider>
  );
}
export default App;
