import React from 'react';
import { any, arrayOf, func, string } from 'prop-types';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';
import CollapsibleContent from 'components/collapsible/CollapsibleContent';
import { useSidebar } from 'hooks/useSidebar';
import useSettings from 'hooks/useSettings';

const useStyles = createUseStyles({
    activeContainer: {
        // backgroundColor: '#1976d2;'
        backgroundImage: "linear-gradient(98deg, #6AAAFF, #1976d2 94%)",
        borderTopRightRadius: "100px",
        borderBottomRightRadius: "100px"
    },
    container: {
        display: 'flex',
        height: 56,
        cursor: 'pointer',
        // backgroundImage: "linear-gradient(98deg, #6AAAFF, #1976d2 94%)",
        borderTopRightRadius: "100px",
        borderBottomRightRadius: "100px",
        '&:hover': {
            backgroundColor: ({ theme }) => theme.color.paleBlueTransparent
        },
        paddingLeft: ({ level }) => 32 * level,
        transition: 'all 0.2s ease-in-out'
    },
    leftBar: {
        borderLeft: ({ theme, level }) =>
            level > 1 ? 'none' : `3px solid ${theme.color.darkGrayishBlue}`,
    },
    title: {
        fontSize: 16,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: ({ theme, isActive,settings }) => (isActive ? 'white' : settings.mode === 'light' ? 'black' : 'white'),
        // color: 'black',
        marginLeft: 24
    }
});

function MenuItemComponent({ children, icon: Icon, id, items = [], level = 1, onClick, title }) {
    const theme = useTheme();
    const { settings } = useSettings()
    const isCollapsible = children && children.length > 0;
    const { isExpanded, isActive,onItemClick } = useSidebar({
        isCollapsible,
        item: id,
        items
    });
    const classes = useStyles({ theme, level,settings, isActive });
    const classNameColumn = isActive ? classes.leftBar : '';
    const classNameContainer = [classes.container, isActive && classes.activeContainer].join(' ');
    const iconColor = isActive ? 'white' : settings.mode === 'light' ? 'black' : 'white';

    function onItemClicked(e) {
        if (onClick) {
            onClick(e);
        }
        onItemClick();
    }

    return (
        <Column key={id} className={classNameColumn}>
            <Row vertical='center' onClick={onItemClicked} className={classNameContainer}>
                <Icon fill={iconColor} opacity={!isActive} />
                <span className={classes.title}>{title}</span>
            </Row>
            {isCollapsible && (
                <CollapsibleContent expanded={isExpanded}>
                    {children.map((child) => child.type({ ...child.props }))}
                </CollapsibleContent>
            )}
        </Column>
    );
}

MenuItemComponent.defaultProps = {};

MenuItemComponent.propTypes = {
    children: any,
    icon: func,
    id: string,
    onClick: func,
    items: arrayOf(string),
    title: string
};

export default MenuItemComponent;
