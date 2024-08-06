import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Get, Delete, update, Add } from "../Redux/StoryReducer";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Card, Checkbox, Tab, Tabs, Tooltip } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import HomeChat from "../Chat/Home-CHat/HomeChat";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import axios from "axios";

const Story = () => {
    const dispatch = useDispatch();
    dispatch(Get());
    const arr = useSelector(a => a.StorySlice.ArrayStory);
    const [openEditandDelete, SetOpenEditandDelete] = React.useState(false);
    const [open, SetOpen] = React.useState(false);
    const [name, SetName] = React.useState("")
    const [clock, SetClock] = React.useState({})
    const [aouthor, SetAouthor] = React.useState("")
    const [nav, SetNav] = React.useState("")
    const [category, SetCategory] = React.useState("")
    const [like, SetLike] = React.useState(false)
    const [userStory, SetUserStory] = React.useState("")
    const [value, setValue] = React.useState('one');
    const [email, SetEmail] = React.useState("")
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const Item = {
        "name": name,
        "clock": clock,
        "author": aouthor,
        "email": email,
        "nav": {},
        "category": category,
        "like": like,
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
        console.log("HandleDelete", email);
        dispatch(Delete({ email: email }))
    }
    // const HandleAdd = (item) => {
    //     console.log("userStory",userStory );
    //     item.Nav = userStory
    //     dispatch(Add({ item: item }))
    // }
    const HandleAdd = async (item) => {
        item.nav = userStory
        console.log("HandleAdd", item);
        console.log("name", item.name);
        console.log("clock ", item.clock);
        console.log("author", item.aouthor);
        console.log("email", item.email);
        console.log("nav", item.nav);
        console.log("category", item.category);
        console.log("like", item.like);
        console.log("status", item.status);
        try {
            const response = await axios.post("http://localhost:8000/stories", item)
            console.log("response", response);
            //    debugger
            if (response.status === 200) {
                console.log("yes response.status === 200");
            } else {
                // Handle login failure
                console.log("add failure");
            }
        } catch (error) {
            // Handle error 
            console.error("error in add story");
        }
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
        dispatch(update({ item: Item }))
        handleClose()
    }
    const handleCheckboxChange = (event) => {
        event.stopPropagation();
        SetLike(!like);
        dispatch(update({ item: Item }))
    };
    const FormDialog = () => {
        return (
            <React.Fragment>
                <Button style={{ color: "gray", borderColor: "gray" }} variant="outlined" onClick={handleClickOpen}>
                    Add a Story
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>הוספת סיפורכם</DialogTitle>
                    <DialogContent style={{ color: "gray" }}>
                        <DialogContentText style={{ color: "gray" }}>
                            To add your story to this website. please enter your story's details. We
                            will send updates occasionally.
                            thank you!
                        </DialogContentText>
                        <TextField
                            //name
                            required
                            autoFocus
                            margin="dense"
                            id="name"
                            label="name's story"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={name}
                            onChange={(e) => {
                                SetName(e.target.value)
                                console.log("name", name);
                            }}
                        />
                        <TextField
                            //user story file
                            autoFocus
                            margin="dense"
                            id="userStory"
                            label="add your story"
                            type="file"
                            fullWidth
                            variant="standard"
                            value={userStory}
                            onChange={(e) => {
                                SetUserStory(e.target.value)
                                console.log("userStory", userStory);
                            }}
                        />
                        <TextField
                            // clock
                            autoFocus
                            margin="dense"
                            id="clock"
                            label="date & time"
                            type="datetime-local"
                            fullWidth
                            variant="standard"
                            value={clock}
                            onChange={(e) => {
                                SetClock(e.target.value)
                                console.log("clock", clock);
                            }}
                        />
                        <TextField
                            // aouthor
                            autoFocus
                            margin="dense"
                            id="aouthor"
                            label="aouthor"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={aouthor}
                            onChange={(e) => {
                                SetAouthor(e.target.value)
                                console.log("aouthor", aouthor);
                            }}
                        />
                        <TextField
                            //email
                            autoFocus
                            required="true"
                            margin="dense"
                            id="email"
                            label="email' author"
                            type="email"
                            fullWidth
                            variant="standard"
                            value={email}
                            onChange={(e) => {
                                SetEmail(e.target.value)
                                console.log("email", email);
                            }}
                        />

                        <TextField
                            //category
                            required
                            autoFocus
                            margin="dense"
                            id="category"
                            label="category"
                            type="text"
                            placeholder="From The Party / family"
                            fullWidth
                            variant="standard"
                            value={category}
                            onChange={(e) => {
                                SetCategory(e.target.value)
                                console.log("category", category);
                            }}
                        />
                        <Tooltip name="האם הסיפור ריגש אתכם?" >
                            <Checkbox title="ריגש?"
                                like={like}
                                onChange={handleCheckboxChange}
                            />
                        </Tooltip>
                    </DialogContent>
                    <DialogActions>
                        <Button style={{ color: "gray" }} onClick={handleClose}>Cancel</Button>
                        <Button style={{ color: "gray" }} onClick={handleCloseSave}>Save</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        );
    }
    const CategoryView = () => {
        return (<>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="gray"
                    indicatorColor="gray"
                    aria-label="secondary tabs example"
                >
                    <nav style={{ margin: 'auto' }}>
                        <Link to={family} style={{ margin: '2%' }}>
                            <Tab value="one" label="משפחות" >
                            </Tab></Link>
                        <Link to={area} style={{ margin: '2%' }}>
                            <Tab value="two" label="משטח המלחמה" />
                        </Link>
                    </nav>
                </Tabs>
            </Box>
        </>)
    }
    const area = (item) => {
        return (<>

        <div style={{ color: "gray" }}>
            <h5>Story</h5>
            <br />
            <br />
            <span>nav </span>
            <br />
            <span>clock {item.clock}</span>
            <br />
            <span>aouthor {item.aouthor}</span>
            <br />
            <span>like? {item.like}</span>
            <br />
            <button onClick={() => {
                HandleUpdate(item)
                handleClickOpenEdit()
            }} >Update</button>
            <Button variant="outlined" onClick={HandleDelete(item.id)}>
                Delete
            </Button>
        </div></>)
    }
    const family = (item) => {
        return (<><div style={{ color: "gray" }}>
            <h3>Story</h3>
            <span>name {item.name}</span>
            <br />
            <span>clock {item.clock}</span>
            <br />
            <span>aouthor {item.aouthor}</span>
            <br />
            <span>like? {item.like}</span>
            <br />
            {/* <button onClick={() => {                                HandleUpdate(item)
            handleClickOpenEdit()
         }} >Update</button>  */}
            <Button variant="outlined" onClick={HandleDelete(item.id)}>
                Delete
            </Button>
            {/* {EditAndDelete()} */}
        </div></>)
    }
    const EditAndDelete = (item) => {
        return (
            <>
                <React.Fragment style={{ color: "gray" }}>
                    <Button style={{ color: "gray", borderColor: "gray", backgroundColor: "lightblue" }} variant="outlined" onClick={handleClickOpenEdit}>
                        Edit Story
                    </Button>
                    <Dialog style={{ color: "gray" }} open={openEditandDelete} onClose={handleCloseEditAndDelete}>
                        <DialogTitle>עריכת סיפורכם</DialogTitle>
                        <DialogContent>
                            <TextField
                                //name
                                autoFocus
                                margin="dense"
                                id="name"
                                label="name's story"
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
                            <TextField
                                //user story file
                                autoFocus
                                margin="dense"
                                id="userStory"
                                label="add your story"
                                type="file"
                                placeholder={userStory}
                                fullWidth
                                variant="standard"
                                value={userStory}
                                onChange={(e) => {
                                    SetUserStory(e.target.value)
                                    console.log("userStory", userStory);
                                }}
                            />

                            <TextField
                                // clock
                                autoFocus
                                margin="dense"
                                id="clock"
                                placeholder={item.clock}
                                label="date & time"
                                type="datetime-local"
                                fullWidth
                                variant="standard"
                                value={clock}
                                onChange={(e) => {
                                    SetClock(e.target.value)
                                    console.log("clock", clock);
                                }}
                            />
                            <TextField
                                // aouthor
                                autoFocus
                                margin="dense"
                                id="aouthor"
                                label="aouthor"
                                type="text"
                                placeholder={item.aouthor}
                                fullWidth
                                variant="standard"
                                value={aouthor}
                                onChange={(e) => {
                                    SetAouthor(e.target.value)
                                    console.log("aouthor", aouthor);
                                }}
                            /><TextField
                                //email
                                autoFocus
                                margin="dense"
                                id="email"
                                label="email's author"
                                type="email"
                                placeholder={item.email}
                                fullWidth
                                variant="standard"
                                value={email}
                                onChange={(e) => SetEmail(e.target.value)}
                            />

                            <TextField
                                //category
                               unique
                                required
                                autoFocus
                                margin="dense"
                                id="category"
                                label="category"
                                type="text"
                                placeholder={item.category}
                                fullWidth

                                variant="standard"
                                value={category}
                                onChange={(e) => {
                                    SetCategory(e.target.value)
                                    console.log("category", category);
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
            <h1 style={{ color: "gray" }}>Stories</h1>
            <br />
            {FormDialog()}
            {/* {CategoryView()} */}
            {
                arr?.map((item) => {
                    if (item.status !== "off") {
                        return (<>
                            {console.log("item", item)}
                            {console.log("name", item.name)}
                            {console.log("clock ", item.clock)}
                            {console.log("author", item.aouthor)}
                            {console.log("email", item.email)}
                            {console.log("nav", item.nav)}
                            {console.log("category", item.category)}
                            {console.log("like", like)}
                            {console.log("status", item.status)}
                            <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "F3F7FB", color: "gray" }}>
                                {// item.category === "From The Party" ? area(item) :
                                    //     item.category === "family" ? family(item) : <></>
                                }
                                <div style={{ color: "gray" }}>
                                    <h3>Story</h3>
                                    <br />
                                    <span>name {item.name}</span>
<br />
<span>nav {item.nav}</span><br />
                                    <span>clock {item.clock}</span>
                                    <br />
                                    <span>author {item.author}</span>
                                    <br />
                                    <span>author's email {item.email}</span>
                                    <br />
                                    <span>status {item.status}</span>
                                    <br />
                                   {item.like==true?<><span>liked</span><br /></>:<></>}
                                    {EditAndDelete(item)}
                                    <Button variant="outlined" style={{ backgroundColor: "lightgray" }} onClick={() => HandleDelete(item.email)}>
                                        Delete
                                    </Button>
                                </div>
                            </Card></>)
                    }
                }
                )
            }
            {/* <div></div> */}
            {/* <button onClick={()=> navigate('/HomeCHat',{replacce:true})}>לשיתוף או לשתף</button> */}

        </>
    )
}
//מסתבך עם קטגוריות

export default Story