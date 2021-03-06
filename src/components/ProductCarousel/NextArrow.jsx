import { makeStyles } from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import clsx from "clsx";

const useStyles = makeStyles({
    arrow: {
        width: "3rem",
        color: "green",
        display: "flex",
        height: "3rem",
        background: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        boxShadow: "0px 0px 6px 1px lightgrey",
        zIndex: 3,

        "&:hover": {
            background: "white"
        },

        "&::before": {
            display: "none"
        }
    }
})

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    const classes = useStyles()

    return (
        <div
            className={clsx(className, classes.arrow)}
            style={style}
            onClick={onClick}
        ><NavigateNextIcon /></div>
    );
}

export default NextArrow
