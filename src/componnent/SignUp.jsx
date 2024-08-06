import React, { useRef } from "react";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import UsePost from "../Hooks/Post";

const SignUp = () => {
    const [open, SetOpen] = React.useState(false);
    const [name, SetName] = React.useState("")
    const [email, SetEmail] = React.useState("")
    const [phone, SetPhone] = React.useState("")
    let NameRef = useRef('');
    let EmailRef = useRef('');
    let PhoneRef = useRef('');

    const Item = {
        // "name": name,
        // "email": email,
        // "phone":phone,
"name":{},
"email":{},
"phone":{},

    }
    const handleClickOpen = () => {
        SetOpen(true);
    };
    const handleCloseSave = () => {
        HandleAdd(Item)
        SetOpen(false);
    }
    const HandleAdd = (item) => {
        item.name=NameRef.current.value
        item.email=EmailRef.current.value
        item.phone=PhoneRef.current.value
        const Post = UsePost()
        console.log("item with ref", item);
        
        // Post("http://localhost:8000/stories", item)

        Post("http://localhost:8000/users", item)
    }
    const handleClose = () => {
        SetOpen(false);
    };
    return (
        <>
            <React.Fragment style={{ color: "gray" }}>
                <Button style={{ color: "gray", borderColor: "gray" }} variant="outlined" onClick={handleClickOpen}>
                    Sign Up
                </Button>
                <Dialog style={{ color: "gray" }} open={open} onClose={handleClose}>
                    <DialogTitle>הוספתכם למערכת</DialogTitle>
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
                            inputRef={NameRef}

                            // value={name}
                            // onChange={(e) => {
                                // SetName(e.target.value)
                                // console.log("name", name);
                            // }}
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
                            inputRef={EmailRef}

                            // value={email}
                            // onChange={(e) => {
                                // SetEmail(e.target.value)
                                // console.log("email", email);
                            // }}
                        />
                         <TextField
                            //phone
                            autoFocus
                            margin="dense"
                            id="phone"
                            label="phone"
                            type="text"
                            fullWidth
                            variant="standard"
                            inputRef={PhoneRef}

                            // value={phone}
                            // onChange={(e) => {
                                // SetPhone(e.target.value)
                                // console.log("phone", phone);
                            // }}
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
export default SignUp