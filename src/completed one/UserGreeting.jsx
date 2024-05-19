

function UserGreeting (props) {
    const welcomeMessage = <h2>Welcome {props.userName}</h2>
    const loginPrompt = <h2>You need to login to enter</h2>


    return (props.isLoggedIn ? welcomeMessage : loginPrompt 
    );

}

export default UserGreeting

// app.jsx file
// return(
//     <>
//     <UserGreeting isLoggedIn = {false} userName = "Manoj Regmi"/>
//     </>
//   );