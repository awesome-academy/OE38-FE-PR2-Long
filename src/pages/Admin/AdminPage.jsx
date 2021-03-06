import { Box, CssBaseline, makeStyles } from "@material-ui/core"
import clsx from "clsx"
import { useState } from "react"
import { Route } from "react-router-dom"
import AdminNav from "./components/AdminNav"
import AdminOrders from "./components/AdminOrders"
import AdminProducts from "./components/AdminProducts"
import AdminUsers from "./components/AdminUsers"

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        width: "100%",
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const AdminPage = props => {
    const [open, setOpen] = useState(false);
    const classes = useStyles()

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return <div className={classes.root}>
        <CssBaseline />
        <AdminNav
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose} />
    </div>
}

export default AdminPage
