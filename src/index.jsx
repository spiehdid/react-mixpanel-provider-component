import { createContext, useContext } from 'react'
import mixpanel from 'mixpanel-browser'

export const MixPanelContext = createContext()
export default useMixPanel = () => useContext(MixPanelContext)

export const MixPanelProvider = ({ children }) => {

    return (
        <MixPanelContext.Provider value={mixpanel}>
            {children}
        </MixPanelContext.Provider>
    )
}
export const Mixpanel = mixpanel

