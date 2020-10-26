import React from 'react';
import routes from '@routes/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRootData } from 'web/tools/useRootData';
import { RecoilRoot } from 'recoil';
console.log(456);
const App = () => {
  const token = useRootData((store) => store.home.token);
  return (
    // <StoreProvider>
    <RecoilRoot>
      <Router basename="/">{routes(token)}</Router>
    </RecoilRoot>
  );
};
export default App;
