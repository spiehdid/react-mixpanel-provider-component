import React, { createContext, useContext } from 'react';
import mixpanel from 'mixpanel-browser';

export const MixPanelContext = createContext();
export const useMixPanel = () => useContext(MixPanelContext);

export const MixPanelProvider = ({ children }) => (
  <MixPanelContext.Provider value={mixpanel}>{children}</MixPanelContext.Provider>
);

const Mixpanel = mixpanel;

export default Mixpanel;
