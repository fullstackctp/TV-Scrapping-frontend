import React, { useState } from 'react';
import { useTheme } from 'react-jss';
import { slide as Menu } from 'react-burger-menu';  
import useSettings from 'hooks/useSettings';

const getMenuStyles = ({ theme,settings }) => {
    return (
        {
        bmBurgerButton: {
            position: 'absolute',
            width: 26,
            height: 20,
            left: 30,
            top: 40,
            zIndex: 19
        },
        bmBurgerBars: {
            // background: theme.color.veryDarkGrayishBlue
        },
        bmBurgerBarsHover: {
            background: theme.color.darkRed
        },
        bmCrossButton: {
            display: 'none'
        },
        bmCross: {
            background: theme.color.grayishBlue3
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%',
            width: 255,
            zIndex: 30
        },
        bmMenu: {
            // borderRight : '3px solid white',
            // background: theme.color.grayishBlue3
            // backgroundImage: `linear-gradient(98deg, #6AAAFF,${theme.color.grayishBlue3} 94%)`
            // backgroundImage: `linear-gradient(98deg, #EEF2F8,${theme.color.grayishBlue3} 94%)`
            // backgroundImage: `linear-gradient(98deg, #F6F8FB,${theme.color.grayishBlue3} 94%)`
            backgroundImage: settings.mode === 'light' ? `linear-gradient(98deg, #F6F8FB,#D6E0EF 94%)` : `linear-gradient(98deg,#092256,#092256 94%)`,
        },
        bmItem: {
            outline: 'none',
            '&:focus': {
                outline: 'none'
            }
        },
        bmMorphShape: {
            fill: theme.color.veryDarkGrayishBlue
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: 20
        }
    });
}


function MenuComponent({ children, isMobile }) {
    const theme = useTheme();
    const {settings} = useSettings()
    const menuStyles = getMenuStyles({ theme,settings });
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu
            isOpen={!isMobile || isOpen}
            noOverlay={!isMobile}
            disableCloseOnEsc   
            styles={menuStyles}
            onStateChange={(state) => setIsOpen(state.isOpen)}
        >
            {children}
        </Menu>
    );
}

export default MenuComponent;
