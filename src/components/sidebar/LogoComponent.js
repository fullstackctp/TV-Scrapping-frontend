import React from 'react';
import { Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import { IconLogo } from 'assets/icons';
import useSettings from 'hooks/useSettings';

const useStyles = createUseStyles({
    container: {
        // marginLeft: 32,
        marginRight: 45
    },
    title: {
        // ...theme.typography.cardTitle,
        color:({theme,settings}) => settings?.mode === 'light' ? 'black' : 'white',
        // opacity: 0.7,
        marginLeft: 12
    }
});

function LogoComponent() {
    const theme = useTheme();
    const {settings} = useSettings()
    const classes = useStyles({ theme , settings});
    return (
        <Row className={classes.container} horizontal='center' vertical='center'>
            <IconLogo />
            <span className={classes.title}>Dashboard </span>
        </Row>
    );
}

export default LogoComponent;
