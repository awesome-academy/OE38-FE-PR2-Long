import { Box, Container, Drawer, Grid, makeStyles } from "@material-ui/core"
import Logo from "../Logo/Logo"
import TrendingKeywords from "./TrendingKeywords";
import SearchDrawerInput from "./SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const useStyles = makeStyles({
    root: {
        "& .MuiDrawer-paper": {
            paddingBlock: "1rem",
            gap: "2rem"
        }
    }
})

const SearchDrawer = props => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const searchDrawerShowing = useSelector(state => state.ui.searchDrawerShowing)

    return <Drawer
        className={classes.root}
        display="flex"
        anchor="top"
        open={searchDrawerShowing}
        onClose={() => dispatch(uiActions.setSearchDrawerShowing((false)))}>
        <Logo></Logo>
        <Container maxWidth="md">
            {/* SEARCH INPUT + RESULTS */}
            <Box position="relative">
                <SearchDrawerInput></SearchDrawerInput>
            </Box>
            {/* SEARCH INPUT + CAROUSEL */}
            <Box py={5}>
                <Grid container>
                    {/* TRENDING KEYWORDS */}
                    <Grid item sm={4}>
                        <TrendingKeywords></TrendingKeywords>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Drawer >
}

export default SearchDrawer