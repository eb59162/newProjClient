import React, { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Get, Delete, update, Add } from "../Redux/UserReducer";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/Card'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Input } from "@mui/material";
import axios from "axios";

const User = () => {
    const dispatch = useDispatch();
    dispatch(Get());
    // const arr = [{ name: "shoshi", email: "s3456@gmail.com", role: "user", phone: "0547863456" },
    // { name: "admin", email: "admin@gmail.com", role: "admin", phone: "0547863456" }
    // ]
    const arr = useSelector(a => a.UserSlice.ArrayUser);
    const [openEditandDelete, SetOpenEditandDelete] = React.useState(false);
    const [open, SetOpen] = React.useState(false);
    const [name, SetName] = React.useState("")
    let NameRef = useRef('');
    const [email, SetEmail] = React.useState("")
    const [phone, SetPhone] = React.useState("")
    const [updateEmail, SetUpdateEmail] = React.useState("")
    const Item = {
        "name": name,
        // "name":NameRef.current.value,
        "email": email,
        "phone": phone,
        "status": "on",
    }
    const HandleUpdate = (item) => {
        dispatch(update({ item: item }))
    }
    const handleClickOpen = () => {
        SetOpen(true);
    };
    const handleCloseSave = () => {
        HandleAdd(Item)
        SetOpen(false);
    }
    const HandleDelete = (email) => {
        dispatch(Delete({ email: email }))
    }
    const HandleAdd = async(item) => {
        console.log("HandleAdd", item);
        try {

            const response = await axios.post("http://localhost:8000/users", item)
           console.log("response", response);
        //    debugger
           if (response.status === 200) {
                // const token = response.request.response;
                // console.log("new token", response.request.response);
                // console.log("  :token", response.request.response);
                //Set the token in the cookie with expitation of 15 minutes
                // const expirationTime = new Date();
                // expirationTime.setTime(expirationTime.getTime() + 15 * 60 * 1000)//15 minutes 
                // setCookie('jwtToken', token)
                //   Redirected to home page or any protected route
console.log("yes response.status === 200");
            } else {
                // Handle login failure
                console.log("login failure");
            }
        } catch (error) {
            // Handle error 
            console.error("error in add user");
        }
        // dispatch(Add({ item: item }))
    }
    const handleClickOpenEdit = () => {
        SetOpenEditandDelete(true);
    };
    const handleClose = () => {
        SetOpen(false);
    };
    const handleCloseEditAndDelete = () => {
        SetOpenEditandDelete(false);
    };
    const handleCloseSaveEdit = () => {
        Item.email = email
        // alert("i want to update by this email:", email)
        // console.log("i want to update by this email:", email);
        debugger
        dispatch(update({email: email,item:Item }))
        SetOpenEditandDelete(false)
    }
    
//     const FormDialog = () => {
//         return (
//             <React.Fragment style={{ color: "gray" }}>
//                 <Button style={{ color: "gray", borderColor: "gray", backgroundColor: "lightgrey", padding: 15 }} variant="outlined" onClick={handleClickOpen}>
//                     Add a User
//                 </Button>
//                 <br />     <br />
//                 <Dialog style={{ color: "gray" }} open={open} onClose={handleClose}>
//                     <DialogTitle>הוספת שמכם</DialogTitle>
//                     <DialogContent>
//                         <DialogContentText>
//                             To add your user to this website, please enter your's details here. We
//                             will send updates occasionally.
//                         </DialogContentText>
//                         <TextField
//                             //name

//                             autoFocus
//                             margin="dense"
//                             id="name"
//                             label="name"
//                             type="text"
//                             // required="true"
//                             fullWidth
//                             variant="standard"
//                         //   ref={NameRef}
//                             value={name}
//                             onChange={(e) => {
//                                 SetName(e.target.value)
//                                 console.log("name", name);
//                             }}
//                         />
//                         <TextField
//                             //email
//                             autoFocus
//                             // required="true"
//                             margin="dense"
//                             id="email"
//                             label="email"
//                             type="email"
//                             fullWidth
//                             variant="standard"
//                             value={email}
//                             onChange={(e) => {
//                                 SetEmail(e.target.value)
//                                 console.log("email", email);
//                             }}
//                         />
//                         <TextField
//                             //phone
//                             autoFocus
//                             margin="dense"
//                             id="phone"
//                             label="phone"
//                             type="text"
//                             fullWidth
//                             variant="standard"
//                             value={phone}
//                             onChange={(e) => {
//                                 SetPhone(e.target.value)
//                                 console.log("phone", phone);
//                             }}
//                         />
//                     </DialogContent>
//                     <DialogActions>
//                         <Button style={{ color: "gray" }} onClick={handleClose}>Cancel</Button>
//                         <Button style={{ color: "gray" }} onClick={handleCloseSave}>Save</Button>
//                     </DialogActions>
//                 </Dialog>
//             </React.Fragment>

//         );
//         //try
// //    return(<>
// //    <input type="text" id="name" placeholder="name" value={name} onChange={(e)=>{SetName(e.target.value)
// //     console.log("name",name)}}/>
// //    <input autoFocus
                            
// //                             id="email"
// //                              placeholder="email"
// //                            type="email"
                             
// //                              value={email}
// //                              onChange={(e) => {
// //                               SetEmail(e.target.value)
// //                          console.log("email", email)}}/>
// //                            <input autoFocus
                            
// //                             id="phone"
// //                              placeholder="phone"
// //                            type="text"
                             
// //                              value={phone}
// //                              onChange={(e) => {
// //                               SetPhone(e.target.value)
// //                          console.log("phone", phone)}}/>
// //                           <Button style={{ color: "gray" }} onClick={handleClose}>Cancel</Button>
// //                          <Button style={{ color: "gray" }} onClick={handleCloseSave}>Save</Button>
// //    </>
   
    
// //    )
//     }
    //עריכה
    const EditAndDelete = (item) => {
        return (
            <>
                <React.Fragment style={{ color: "gray" }}>
                    <Button style={{ color: "gray", borderColor: "gray" }} variant="outlined" onClick={handleClickOpenEdit}>
                        Edit User
                    </Button>
                    <Dialog style={{ color: "gray" }} open={openEditandDelete} onClose={handleCloseEditAndDelete}>
                        <DialogTitle>עריכת שמכם</DialogTitle>
                        <DialogContent>
                            <TextField
                                //name
                                autoFocus
                                margin="dense"
                                id="name"
                                label="שם"
                                type="text"
                                required="true"
                                placeholder={item.name}
                                fullWidth
                                variant="standard"
                                value={name}
                                onChange={(e) => {
                                    SetName(e.target.value)
                                    console.log("name", name);
                                }}
                            />
                            {/* <TextField */}
                                {/* //email
                                // autoFocus
                                // required="true"
                                // margin="dense"
                                // id="email"
                                // label="מייל"
                                // placeholder={item.email}
                                // type="email"
                                // fullWidth
                                // variant="standard"
                                // value={updateEmail}
                                // onChange={(e) => {
                                    // SetUpdateEmail(e.target.value)
                                    // console.log("updateEmail", updateEmail);
                                // }}
                            // /> */}
                            <TextField
                                //phone
                                autoFocus
                                margin="dense"
                                id="phone"
                                placeholder={item.phone}
                                label="פלאפון"
                                type="text"
                                required="true"
                                fullWidth
                                variant="standard"
                                value={phone}
                                onChange={(e) => {
                                    SetPhone(e.target.value)
                                    console.log("phone", phone);
                                }}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button style={{ color: "gray" }} onClick={handleCloseEditAndDelete}>Cancel</Button>
                            <Button style={{ color: "gray" }} onClick={handleCloseSaveEdit}>Save</Button>
                        </DialogActions>
                    </Dialog>
                </React.Fragment>
            </>
        )
    }
    return (
        <>
            <h1 style={{ color: "gray" }}>Users</h1>
            {/*{FormDialog()}*/}
            {arr?.map((item) => {
                if (item.status !== "off") {
                    return (<>
                        <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "F3F7FB", color: "gray" }}>
                            <CardContent style={{ backgroundColor: "#F3F7FB", color: "gray" }}>
                                <Typography sx={{ fontSize: 17 }} color="gray" gutterBottom>
                                    User
                                </Typography>
                                <Typography >name {item.name}</Typography>
                                <Typography>phone {item.phone}</Typography>
                                <Typography>email {item.email}</Typography>
                                {EditAndDelete(item)}
                                <br />
                                <Button variant="outlined" onClick={()=>HandleDelete(item.email)}>
                                    Delete
                                </Button>
                            </ CardContent>
                            <hr />
                        </Card>
                    </>
                    )
                }
            })
            }
        </>
    )
}
export default User