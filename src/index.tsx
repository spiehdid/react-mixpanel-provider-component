import React, { createContext, useContext, ComponentType, FunctionComponent, useEffect, ReactNode } from 'react';
import mixpanel, { Mixpanel } from 'mixpanel-browser';

interface WithMixPanel {
  mixpanel: Mixpanel;
}

const MixPanelContext = createContext({} as WithMixPanel);
const useMixPanel = () => useContext(MixPanelContext);

function withMixpanel<T>(Component: ComponentType<T>): FunctionComponent<T & WithMixPanel> {
  return (props: T) => <Component {...props} mixpanel={mixpanel} />;
}

const MixPanelProvider = ({ children, token = '' }: { children: ReactNode; token?: string }) => {
  useEffect(() => {
    if (!!token) {
      mixpanel.init(token);
    }
  }, []);
  return <MixPanelContext.Provider value={{ mixpanel }}>{children}</MixPanelContext.Provider>;
};

export { useMixPanel, withMixpanel, MixPanelContext };
export default MixPanelProvider;
