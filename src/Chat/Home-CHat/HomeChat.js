import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

const HomeChat = ({ username, setUsername, room, setRoom, socket }) => {
  // const { onClose, selectedValue, open } = props;
  const [open, setOpen] = React.useState(false);
  // const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    // setSelectedValue(value);
    const handleClose = () => {
      setOpen(false)
    };
    const joinRoom = () => {
      if (room !== '' && username !== '') {
        socket.emit('join_room', { username, room });
      }

      navigate('/chat', { replacce: true });
    };

    return (
      <>
      <>hgffdsasdrfty</>
       <Button variant="outlined" onClick={handleClickOpen}>
      Open dialog
     </Button>
        <Dialog onClose={handleClose} open={open}>
          <List sx={{ pt: 0 }}>
            <div className={styles.container}>
              <div className={styles.formContainer}>
                <input
                  className={styles.input}
                  placeholder='Username...'
                  onChange={(e) => setUsername(e.target.value)}
                />
                <select
                  className={styles.input}
                  onChange={(e) => setRoom(e.target.value)}
                >
                  <option>--select Room--</option>
                  <option value='customers'>Customers</option>
                  <option value='management '>Management </option>
                  <option value='secretariat'>Secretariat</option>
                  <option value='self'>Self</option>
                </select>
                <button className='btn btn-secondary' style={{ width: '100%' }} onClick={() => joinRoom()}>Join Room</button>
              </div>
              {/* {SimpleDialogDemo()} */}
            </div>
          </List>
        </Dialog>
      </>
    );
  };}
  export default HomeChat







// const emails = ['username@gmail.com', 'user02@gmail.com'];

// function SimpleDialog(props) {
//   const { onClose, selectedValue, open } = props;

//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   const handleListItemClick = (value) => {
//     onClose(value);
//   };

//   return (
//     <Dialog onClose={handleClose} open={open}>
//       <List sx={{ pt: 0 }}>
//         {emails.map((email) => (
//           <ListItem disableGutters key={email}>
//             <ListItemButton onClick={() => handleListItemClick(email)}>
//               <ListItemAvatar>
//                 <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
//                   <PersonIcon />
//                 </Avatar>
//               </ListItemAvatar>
//               <ListItemText primary={email} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//         <ListItem disableGutters>
//           <ListItemButton
//             autoFocus
//             onClick={() => handleListItemClick('addAccount')}
//           >
//             <ListItemAvatar>
//               <Avatar>
//                 <AddIcon />
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary="Add account" />
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Dialog>
//   );
// }

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

//  function SimpleDialogDemo() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

//   return (
//     <div>
//       <Typography variant="subtitle1" component="div">
//         Selected: {selectedValue}
//       </Typography>
//       <br />
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open dialog
//       </Button>
//       <SimpleDialog
//         selectedValue={selectedValue}
//         open={open}
//         onClose={handleClose}
//       />
//     </div>
//   );
// }}
