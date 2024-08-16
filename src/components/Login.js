// // import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import './Design.css';
// // import TextField from '@mui/material/TextField';
// // import { Link as RouterLink, useNavigate } from 'react-router-dom';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // import Button from '@mui/material/Button';
// // import axios from 'axios';
// // import { useState } from 'react';

// // export default function FormPropsTextFields() {
// //   const navigate = useNavigate();
// //   const [name, setName] = useState('');
// //   const [pass, setPass] = useState('');
// //   const [error, setError] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault(); // Prevent default form submission

// //     try {
// //       const response = await axios.get('http://localhost:3000/users');
// //       const user = response.data.find((user) => user.username === name);

// //       if (user) {
// //         if (user.password === pass) {
// //           alert("Login successful");
// //           navigate('/home'); // Redirect to home on successful login
// //           setError(false);
// //         } else {
// //           setError(true);
// //         }
// //       } else {
// //         setError(true);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //       // Handle other errors if needed
// //     }
// //   };

// //   return (
// //     <div className='login'>
// //       <Box
// //         className='aa'
// //         sx={{
// //           '& .MuiTextField-root': { m: 1, width: '35ch' },
// //         }}
// //         noValidate
// //         autoComplete="off"
// //       >
// //         <div className='icon'>
// //           <AccountCircleIcon sx={{ fontSize: "80px", color: '' }} />
// //           <h3>Sign In</h3>
// //         </div>
// //         <div id="a">
// //           <form onSubmit={handleSubmit}>
// //             <TextField
// //               required
// //               id="outlined-required"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //               label="Username or Email Id"
// //             />
// //             <br />
// //             <TextField
// //               required
// //               id="outlined-password-input"
// //               label="Password"
// //               value={pass}
// //               onChange={(e) => setPass(e.target.value)}
// //               type="password"
// //               autoComplete="current-password"
// //             />
// //             <br />
// //             {error && <p>Invalid Username or Password</p>}
// //             <Button
// //               variant="contained"
// //               color='inherit'
// //               className='abc'
// //               type='submit'
// //               align="center"
// //             >
// //               Sign In
// //             </Button>
// //             <br /><br />
// //             <h4>Don't have an Account? 
// //               <RouterLink to="/registration"> Create New Account</RouterLink>
// //             </h4>
// //           </form>
// //         </div>
// //       </Box>
// //     </div>
// //   );
// // }
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import './Design.css';
// import TextField from '@mui/material/TextField';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Button from '@mui/material/Button';
// import axios from 'axios';
// import { useState } from 'react';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';

// const StyledDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiPaper-root': {
//     padding: theme.spacing(3),
//     borderRadius: theme.spacing(1.5),
//     textAlign: 'center',
//   },
// }));

// const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   '& .MuiSvgIcon-root': {
//     fontSize: '3rem',
//     color: theme.palette.success.main,
//     marginRight: theme.spacing(1),
//   },
// }));

// const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   marginBottom: theme.spacing(2),
// }));

// export default function FormPropsTextFields() {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [pass, setPass] = useState('');
//   const [error, setError] = useState(false);
//   const [open, setOpen] = useState(false); 

//   const handleSubmit = async (e) => {
//     e.preventDefault(); 

//     try {
//       const response = await axios.get('http://localhost:3004/users');
//       const user = response.data.find((user) => user.username === name);

//       if (user) {
//         if (user.password === pass) {
//           setOpen(true);
//           setError(false);
//         } else {
//           setError(true);
//         }
//       } else {
//         setError(true);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//     navigate('/home');
//   };

//   return (
//     <div className='login'>
//       <Box
//         className='aa'
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '35ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div className='icon'>
//           <AccountCircleIcon sx={{ fontSize: "80px", color: '' }} />
//           <h3>Sign In</h3>
//         </div>
//         <div id="a">
//           <form onSubmit={handleSubmit}>
//             <TextField
//               required
//               id="outlined-required"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               label="Username or Email Id"
//             />
//             <br />
//             <TextField
//               required
//               id="outlined-password-input"
//               label="Password"
//               value={pass}
//               onChange={(e) => setPass(e.target.value)}
//               type="password"
//               autoComplete="current-password"
//             />
//             <br />
//             {error && <p>Invalid Username or Password</p>}
//             <Button
//               variant="contained"
//               color='inherit'
//               className='abc'
//               type='submit'
//               align="center"
//             >
//               Sign In
//             </Button>
//             <br /><br />
//             <h4>Don't have an Account? 
//               <RouterLink to="/registration" style={{ color: '#9e9e9e' }}> Create New Account</RouterLink>
//             </h4>
//           </form>
//         </div>
//       </Box>

//       <StyledDialog
//         open={open}
//         onClose={handleClose}
//       >
//         <StyledDialogTitle>
//           <CheckCircleIcon />
//           Login Successful
//         </StyledDialogTitle>
//         <StyledDialogContent>
//           <DialogContentText>
//             Welcome back !!!
//           </DialogContentText>
//         </StyledDialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary" variant="contained">
//             Continue
//           </Button>
//         </DialogActions>
//       </StyledDialog>
//     </div>
//   );
// }





// import * as React from 'react';
// import Box from '@mui/material/Box';
// import './Design.css';
// import TextField from '@mui/material/TextField';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import Button from '@mui/material/Button';
// import axios from 'axios';
// import { useState } from 'react';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';

// const StyledDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiPaper-root': {
//     padding: theme.spacing(3),
//     borderRadius: theme.spacing(1.5),
//     textAlign: 'center',
//   },
// }));

// const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   '& .MuiSvgIcon-root': {
//     fontSize: '3rem',
//     color: theme.palette.success.main,
//     marginRight: theme.spacing(1),
//   },
// }));

// const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   marginBottom: theme.spacing(2),
// }));

// export default function Login() {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [pass, setPass] = useState('');
//   const [error, setError] = useState(false);
//   const [open, setOpen] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.get('http://localhost:3009/users');
//       const user = response.data.find((user) => user.name === name);

//       if (user) {
//         if (user.pass === pass) {
//           setOpen(true);
//           setError(false);
//         } else {
//           setError(true);
//         }
//       } else {
//         setError(true);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//     navigate('/home');
//   };

//   return (
//     <div className='login'>
//       <Box
//         className='aa'
//         sx={{
//           '& .MuiTextField-root': { m: 1, width: '35ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <div className='icon'>
//           <AccountCircleIcon sx={{ fontSize: "80px", color: '' }} />
//           <h3>Sign In</h3>
//         </div>
//         <div id="a">
//           <form onSubmit={handleSubmit}>
//             <TextField
//               required
//               id="outlined-required"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               label="Username or Email Id"
//             />
//             <br />
//             <TextField
//               required
//               id="outlined-password-input"
//               label="Password"
//               value={pass}
//               onChange={(e) => setPass(e.target.value)}
//               type="password"
//               autoComplete="current-password"
//             />
//             <br />
//             {error && <p>Invalid Username or Password</p>}
//             <Button
//               variant="contained"
//               color='inherit'
//               className='abc'
//               type='submit'
//               align="center"
//             >
//               Sign In
//             </Button>
//             <br /><br />
//             <h4>Don't have an Account? 
//               <RouterLink to="/registration" style={{ color: '#9e9e9e' }}> Create New Account</RouterLink>
//             </h4>
//           </form>
//         </div>
//       </Box>

//       <StyledDialog
//         open={open}
//         onClose={handleClose}
//       >
//         <StyledDialogTitle>
//           <CheckCircleIcon />
//           Login Successful
//         </StyledDialogTitle>
//         <StyledDialogContent>
//           <DialogContentText>
//             Welcome back !!!
//           </DialogContentText>
//         </StyledDialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary" variant="contained">
//             Continue
//           </Button>
//         </DialogActions>
//       </StyledDialog>
//     </div>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import './Design.css';
import TextField from '@mui/material/TextField';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1.5),
    textAlign: 'center',
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .MuiSvgIcon-root': {
    fontSize: '3rem',
    color: theme.palette.success.main,
    marginRight: theme.spacing(1),
  },
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3010/login', {
        name,
        pass
      });

      console.log('Login successful:', response.data);
      setOpen(true);
      setError(false);
    } catch (error) {
      console.error('Error logging in:', error.response?.data || error.message);
      setError(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/home');
  };

  return (
    <div className='login'>
      <Box
        className='aa'
        sx={{
          '& .MuiTextField-root': { m: 1, width: '35ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className='icon'>
          <AccountCircleIcon sx={{ fontSize: "80px", color: '' }} />
          <h3>Sign In</h3>
        </div>
        <div id="a">
          <form onSubmit={handleSubmit}>
            <TextField
              required
              id="outlined-required"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Username or Email Id"
            />
            <br />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              autoComplete="current-password"
            />
            <br />
            {error && <p>Invalid Username or Password</p>}
            <Button
              variant="contained"
              color='inherit'
              className='abc'
              type='submit'
              align="center"
            >
              Sign In
            </Button>
            <br /><br />
            <h4>Don't have an Account? 
              <RouterLink to="/registration" style={{ color: '#9e9e9e' }}> Create New Account</RouterLink>
            </h4>
          </form>
        </div>
      </Box>

      <StyledDialog
        open={open}
        onClose={handleClose}
      >
        <StyledDialogTitle>
          <CheckCircleIcon />
          Login Successful
        </StyledDialogTitle>
        <StyledDialogContent>
          <DialogContentText>
            Welcome back !!!
          </DialogContentText>
        </StyledDialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Continue
          </Button>
        </DialogActions>
      </StyledDialog>
    </div>
  );
}
