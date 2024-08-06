import React from "react";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import UsePost from "../Hooks/Post";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Login = () => {
    const [open, SetOpen] = React.useState(false);
    const [name, SetName] = React.useState("")
    const navigate = useNavigate()
 
    const [email, SetEmail] = React.useState("")
    const Item = {
        "name": name,
        "email": email,
    }
    const handleClickOpen = () => {
        SetOpen(true);
    };
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    const handleCloseSave = () => {
        HandleAdd(Item)
        SetOpen(false);
    }
    const HandleAdd = async(Item) => {
        try {

            const response = await axios.post("http://localhost:8000/login", Item)
            if (response.status === 200) {
                const token = response.request.response;
                //Set the token in the cookie with expitation of 15 minutes
                const expirationTime = new Date();
                // expirationTime.setTime(expirationTime.getTime() + 15 * 60 * 1000)//15 minutes 
                setCookie('jwtToken', token)
                //   Redirected to home page or any protected route
            } else {
                // Handle login failure
                console.log("login failure");
            }
        } catch (error) {
            // Handle error 
            console.error("error in login");
        }
    }
    const handleClose = () => {
        SetOpen(false);
    };
    return (
        <>
            <React.Fragment style={{ color: "gray" }}>
                <Button style={{ color: "gray", borderColor: "gray" }} variant="outlined" onClick={handleClickOpen}>
                    Log In
                </Button>
                <Dialog style={{ color: "gray" }} open={open} onClose={handleClose}>
                    <DialogTitle>הכנסתכם למערכת</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To add your details to this website, please enter your's details here. We
                            will send updates occasionally.
                        </DialogContentText>
                        <TextField
                            //name
                            autoFocus
                            margin="dense"
                            id="name"
                            label="name"
                            type="text"
                            required="true"
                            fullWidth
                            variant="standard"
                            value={name}
                            onChange={(e) => {
                                SetName(e.target.value)
                                console.log("name", name);
                            }}
                        />
                        <TextField
                            //email
                            autoFocus
                            margin="dense"
                            id="email"
                            label="email"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={email}
                            onChange={(e) => {
                                SetEmail(e.target.value)
                                console.log("email", email);
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button style={{ color: "gray" }} onClick={handleClose}>Cancel</Button>
                        <Button style={{ color: "gray" }} onClick={handleCloseSave}>Save</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </>
    )
}
export default Login