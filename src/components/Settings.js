// // import React, { useState } from 'react';

// // const lightTheme = {
// //     backgroundColor: '#f4f4f4',
// //     color: '#333',
// // };

// // const darkTheme = {
// //     backgroundColor: '#333',
// //     color: '#f4f4f4',
// // };

// // const containerStyle = {
// //     padding: '20px',
// //     maxWidth: '600px',
// //     margin: '0 auto',
// // };

// // const sectionStyle = {
// //     marginBottom: '20px',
// // };

// // const labelStyle = {
// //     display: 'block',
// //     marginBottom: '8px',
// // };

// // const inputStyle = {
// //     marginBottom: '12px',
// // };

// // const buttonStyle = {
// //     padding: '10px 20px',
// //     backgroundColor: '#007bff',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// // };

// // const buttonHoverStyle = {
// //     backgroundColor: '#0056b3',
// // };

// // const Settings = () => {
// //     const [theme, setTheme] = useState('light');
// //     const [name, setName] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [notifications, setNotifications] = useState(true);

// //     const handleThemeChange = () => {
// //         setTheme(theme === 'light' ? 'dark' : 'light');
// //     };

// //     const handleProfileSave = () => {
// //         // Logic to save profile settings
// //         alert('Profile settings saved!');
// //     };

// //     const handleNotificationsChange = () => {
// //         setNotifications(!notifications);
// //     };

// //     return (
// //         <div style={{ ...containerStyle, ...(theme === 'light' ? lightTheme : darkTheme) }}>
// //             <h1>Settings</h1>

// //             {/* Theme Switcher */}
// //             <div style={sectionStyle}>
// //                 <label htmlFor="theme-toggle" style={labelStyle}>Dark Mode</label>
// //                 <input
// //                     type="checkbox"
// //                     id="theme-toggle"
// //                     checked={theme === 'dark'}
// //                     onChange={handleThemeChange}
// //                 />
// //             </div>

// //             {/* Profile Settings */}
// //             <div style={sectionStyle}>
// //                 <h2>Profile Settings</h2>
// //                 <label htmlFor="name" style={labelStyle}>Name</label>
// //                 <input
// //                     type="text"
// //                     id="name"
// //                     value={name}
// //                     onChange={(e) => setName(e.target.value)}
// //                     style={inputStyle}
// //                 />
// //                 <label htmlFor="email" style={labelStyle}>Email</label>
// //                 <input
// //                     type="email"
// //                     id="email"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     style={inputStyle}
// //                 />
// //                 <button
// //                     onClick={handleProfileSave}
// //                     style={buttonStyle}
// //                     onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
// //                     onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
// //                 >
// //                     Save Profile
// //                 </button>
// //             </div>

// //             {/* Notification Settings */}
// //             <div style={sectionStyle}>
// //                 <h2>Notification Settings</h2>
// //                 <label htmlFor="notifications-toggle" style={labelStyle}>Enable Notifications</label>
// //                 <input
// //                     type="checkbox"
// //                     id="notifications-toggle"
// //                     checked={notifications}
// //                     onChange={handleNotificationsChange}
// //                 />
// //             </div>
// //         </div>
// //     );
// // };

// // export default Settings;


import React from 'react';
import { useTheme } from './ThemeContext';

// Define your styles
const lightTheme = {
    backgroundColor: '#f4f4f4',
    color: '#333',
};

const darkTheme = {
    backgroundColor: '#333',
    color: '#f4f4f4',
};

const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
};

const sectionStyle = {
    marginBottom: '20px',
};

const labelStyle = {
    display: 'block',
    marginBottom: '8px',
};

const inputStyle = {
    marginBottom: '12px',
};

const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const buttonHoverStyle = {
    backgroundColor: '#0056b3',
};

const Settings = () => {
    const { theme, toggleTheme } = useTheme();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [notifications, setNotifications] = React.useState(true);

    const handleProfileSave = () => {
        alert('Profile settings saved!');
    };

    const handleNotificationsChange = () => {
        setNotifications(!notifications);
    };

    return (
        <div style={{ ...containerStyle, ...(theme === 'light' ? lightTheme : darkTheme) }}>
            <h1>Settings</h1>

            {/* Theme Switcher */}
            <div style={sectionStyle}>
                <label htmlFor="theme-toggle" style={labelStyle}>Dark Mode</label>
                <input
                    type="checkbox"
                    id="theme-toggle"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                />
            </div>

            {/* Profile Settings */}
            <div style={sectionStyle}>
                <h2>Profile Settings</h2>
                <label htmlFor="name" style={labelStyle}>Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                />
                <label htmlFor="email" style={labelStyle}>Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                />
                <button
                    onClick={handleProfileSave}
                    style={buttonStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                >
                    Save Profile
                </button>
            </div>

            {/* Notification Settings */}
            <div style={sectionStyle}>
                <h2>Notification Settings</h2>
                <label htmlFor="notifications-toggle" style={labelStyle}>Enable Notifications</label>
                <input
                    type="checkbox"
                    id="notifications-toggle"
                    checked={notifications}
                    onChange={handleNotificationsChange}
                />
            </div>
        </div>
    );
};

// export default Settings;

// import React from 'react';
// import { useTheme } from './ThemeContext';

// const Settings = () => {
//     const { theme, toggleTheme } = useTheme();

//     return (
//         <div style={{ padding: '20px', backgroundColor: theme === 'light' ? '#f4f4f4' : '#333', color: theme === 'light' ? '#333' : '#f4f4f4' }}>
//             <h1>Settings</h1>
//             <div>
//                 <label htmlFor="theme-toggle">Dark Mode</label>
//                 <input
//                     type="checkbox"
//                     id="theme-toggle"
//                     checked={theme === 'dark'}
//                     onChange={toggleTheme}
//                 />
//             </div>
//         </div>
//     );
// };

// export default Settings;
