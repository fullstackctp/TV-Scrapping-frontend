import { createContext, useEffect, useState } from "react";


const initialSettings = {
    mode : 'light'
}

const storeSettings = (settings) => {
    const initSettings = Object.assign({},settings)
    window.localStorage.setItem('settings',initSettings)
}

const restoreSettings = () => {
    let settings = null
    try {
      const storedData = window.localStorage.getItem('settings')
      if (storedData) {
        settings = { ...JSON.parse(storedData) }
      } else {
        settings = initialSettings
      }
    } catch (err) {
      console.error(err)
    }
  
    return settings
  }

export const SettingsContext = createContext({
    saveSettings : () => null,
    settings : initialSettings
})

const SettingsProvider = ({children}) => {

    const [settings,setSettings] = useState(initialSettings)

    useEffect(() => {
        const restoredSettings = restoreSettings()
        if(restoreSettings()) {
            setSettings({...restoredSettings})
        }
    },[])

    const saveSettings = (updatedSettings) => {
        console.log(updatedSettings,'00000000000000000000000')
        storeSettings(updatedSettings)
        setSettings(updatedSettings)
    }


    return(
        <SettingsContext.Provider value={{settings,saveSettings}}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsProvider