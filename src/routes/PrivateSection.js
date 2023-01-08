import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Column, Row } from 'simple-flexbox';
import { SidebarComponent, SidebarContext } from 'components/sidebar';
import HeaderComponent from 'components/header/HeaderComponent';
import PrivateRoutes from './PrivateRoutes';
import SettingsProvider from 'context/settingsContext';
import { QrCode2 } from '@mui/icons-material';
import useSettings from 'hooks/useSettings';

const useStyles = createUseStyles({
    container: {
        height: '100%',
        minHeight: 850,
        // backgroundColor : "red"
        // backgroundColor:({theme,settings}) => {console.log(settings,'======++++++++++++++++==');  return settings?.mode === 'light' ? 'white' : 'black'},
        backgroundImage: ({theme,settings}) => {    
            let element = document.getElementsByTagName('body')[0]
            element.style.backgroundImage = settings?.mode === 'light' ? `linear-gradient(98deg, #F6F8FB,#D6E0EF 94%)` : `linear-gradient(98deg,#000004,#000004 94%)`
            // element.style.color = 'white'
            // console.log(element,'elemen tisheere')
            // return settings?.mode == 'light' ? `linear-gradient(98deg, #F6F8FB,#D6E0EF 94%)` : `linear-gradient(98deg,#092256,#092256 94%)`
        }
    },
    mainBlock: {
        marginLeft: 255,
        // backgroundColor :'red',
        padding: 30,
        '@media (max-width: 1080px)': {
            marginLeft: 0
        }
    },
    contentBlock: {
        marginTop: 54,
    }
});

function PrivateSection() {
    const theme = useTheme();
    const {settings} = useSettings()
    const classes = useStyles({ theme,settings });

    return (
            <SidebarContext>
                <Row className={classes.container}>
                    <SidebarComponent />
                    <Column flexGrow={1} className={classes.mainBlock}>
                        <HeaderComponent />
                        <div className={classes.contentBlock}>
                            <PrivateRoutes />
                        </div>
                    </Column>
                </Row>
            </SidebarContext>
    );
}

export default PrivateSection;


