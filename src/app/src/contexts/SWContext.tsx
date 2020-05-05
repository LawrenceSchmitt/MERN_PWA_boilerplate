import * as React from 'react';
import isOnline from 'is-online';

export const SWContext = React.createContext({});

export interface SWContextProviderProps {}

export interface SWContextProviderState {
  offline: boolean;
  success: boolean;
  updated: boolean;
}

export interface SWContextProviderProps {}

const SWContextProvider: React.SFC<SWContextProviderProps> = () => {
  const [Online, setOnline] = React.useState(navigator.onLine);
  const [Success, setSuccess] = React.useState(false);
  const [Update, setUpdate] = React.useState(false);

  const handleSW = (e) => {
    console.log(e.detail);
  };
  React.useEffect(() => {
    window.addEventListener('serviceWorker', handleSW, true);

    return () => {
      window.removeEventListener('serviceWorker', handleSW, true);
    };
  });

  React.useEffect(() => {
    async () => {
      setOnline(await isOnline());
    };
  }, [Online]);

  return (
    <SWContext.Provider value={{ online: Online, success: Success, update: Update }}>
      {this.children}
    </SWContext.Provider>
  );
};

export default SWContextProvider;
