import { createContext, useContext } from 'react';

export const MixPanelContext = createContext();
export const useMixPanel = () => useContext(MixPanelContext);

export const MixPanelProvider = ({ children, mixpanel }) => <MixPanelContext.Provider value={mixpanel}>{children}</MixPanelContext.Provider>;

export default Mixpanel = mixpanel;
