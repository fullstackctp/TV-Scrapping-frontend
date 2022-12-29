import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import TodayTrendsComponent from './TodayTrendsComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';
import DashboardForm from 'components/dashboard/DashboardForm';

// mui
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

// redux
import { useSelector } from 'react-redux';
import { Card, Grid } from '@mui/material';
import DashboardTable from 'components/dashboard/DashboardTable';


const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    }
});

function DashboardComponent() {
    const classes = useStyles();
    const dashboardData = useSelector(state => state.dashboardDataReducer)
    console.log(dashboardData,'dashboardDatalksadfj')
    return (
        <>
        {!dashboardData?.data?.current ? 
            <Column>
                <Row
                className={classes.cardsContainer}
                wrap
                flexGrow={1}
                horizontal='space-between'
                breakpoints={{ 768: 'column' }}
                >
                    <DashboardForm />
                </Row>
            </Column> 
            : <Column>
                <Row
                    className={classes.cardsContainer}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 768: 'column' }}
                >
                    <Row
                        className={classes.cardRow}
                        wrap
                        flexGrow={1}
                        horizontal='space-between'
                        breakpoints={{ 384: 'column' }}
                    >
                        <MiniCardComponent
                            current={dashboardData?.data.current}
                            className={classes.miniCardContainer}
                            title='Unresolved'
                            value='60'
                        />
                    </Row>
                
                </Row>
                
                {/* <Row
                    horizontal='space-between'
                    className={classes.lastRow}
                    breakpoints={{ 1024: 'column' }}
                > */}
                <Grid container item xs={12} sx={{overflow:'auto'}}>
                <Card sx={{width:'100%'}}>
                    <DashboardTable rows={dashboardData?.data?.data}/>
                </Card>
                </Grid>
                {/* </Row> */}
            </Column>
        }
            {/* <Column>
                <Row
                    className={classes.cardsContainer}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 768: 'column' }}
                >
                    <Row
                        className={classes.cardRow}
                        wrap
                        flexGrow={1}
                        horizontal='space-between'
                        breakpoints={{ 384: 'column' }}
                    >
                        <MiniCardComponent
                            className={classes.miniCardContainer}
                            title='Unresolved'
                            value='60'
                        />
                        <MiniCardComponent
                            className={classes.miniCardContainer}
                            title='Overdue'
                            value='16'
                        />
                    </Row>
                    <Row
                        className={classes.cardRow}
                        wrap
                        flexGrow={1}
                        horizontal='space-between'
                        breakpoints={{ 384: 'column' }}
                    >
                        <MiniCardComponent
                            className={classes.miniCardContainer}
                            title='Open'
                            value='43'
                        />
                        <MiniCardComponent
                            className={classes.miniCardContainer}
                            title='On hold'
                            value='64'
                        />
                    </Row>
                </Row>
                <div className={classes.todayTrends}>
                    <TodayTrendsComponent />
                </div>
                <Row
                    horizontal='space-between'
                    className={classes.lastRow}
                    breakpoints={{ 1024: 'column' }}
                >
                    <UnresolvedTicketsComponent containerStyles={classes.unresolvedTickets} />
                    <TasksComponent containerStyles={classes.tasks} />
                </Row>
            </Column> */}
        </>
    );
}

export default DashboardComponent;
