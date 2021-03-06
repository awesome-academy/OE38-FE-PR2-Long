import { Drawer, makeStyles } from "@material-ui/core"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui-slice"
import CartDrawerHeader from "./CartDrawerHeader"
import CartDrawerProducts from "./CartDrawerProducts"
import CartDrawerSummary from "./CartDrawerSummary"
import Confirmation from "../Confirmation/Confirmation"
import CustomizedSnackbar from "../CustomizedSnackbar/CustomizedSnackbar"

const useStyles = makeStyles({
    root: {
        "& .MuiDrawer-paper": {
            width: "28%",
            padding: "0"
        }
    }
})

const CartDrawer = props => {
    const dispatch = useDispatch()
    const cartDrawerShowing = useSelector(state => state.ui.cartDrawerShowing)
    const { localStorageCart, setLocalStorageCart } = props
    const [deleteItemConfirmShowing, setDeleteItemConfirmShowing] = useState(false)
    const [deleteItemSnackbarShowing, setDeleteItemSnackbarShowing] = useState(false)
    const [deleteProduct, setDeleteProduct] = useState()
    const classes = useStyles()

    const onDeleteIconClicked = product => {
        setDeleteItemConfirmShowing(true)
        setDeleteProduct(product)
        setTimeout(() => {
            setDeleteItemConfirmShowing(false)
        }, 2500)
    }

    const onItemDelete = () => {
        let { products, total } = localStorageCart
        // Delete item have same id and same size with the deleted one
        products = products.filter(p => {
            const pId = p.item.id
            const pSize = p.item.size
            const dId = deleteProduct.item.id
            const dSize = deleteProduct.item.size
            return ((pId !== dId) || (pId === dId && pSize !== dSize))
        })
        total -= deleteProduct.item.price * +deleteProduct.quantity

        setLocalStorageCart({ products, total })
        setDeleteItemSnackbarShowing(true)
    }

    return <Drawer
        className={classes.root}
        display="flex"
        anchor="right"
        open={cartDrawerShowing}
        onClose={() => dispatch(uiActions.setCartDrawerShowing(false))}>
        <CartDrawerHeader noItems={localStorageCart.products.length} />

        <CartDrawerProducts
            onDeleteIconClicked={onDeleteIconClicked}
            localStorageCart={localStorageCart}
            setLocalStorageCart={setLocalStorageCart} />

        <CartDrawerSummary total={localStorageCart.total} />

        {/* ADDITIONAL */}
        <Confirmation
            title="X??a s???n ph???m"
            content="B???n ch???c ch???n mu???n x??a s???n ph???m kh???i gi??? ch????"
            confirm="Ti???p t???c"
            cancel="H???y"
            confirmActions={onItemDelete}
            confirmationShowing={deleteItemConfirmShowing}
            setConfirmationShowing={setDeleteItemConfirmShowing}
        />
        <CustomizedSnackbar
            message="X??a s???n ph???m th??nh c??ng"
            severity="success"
            showing={deleteItemSnackbarShowing}
            setShowing={setDeleteItemSnackbarShowing} />
    </Drawer >
}

export default CartDrawer
