import propTypes from "prop-types"
function Student (props) {

    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no"}</p>
        </div>
    );
}
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool,
}

Student.defaultProps = {
    name: "guest",
    age: 0,
    isStudent: false
}

export default Student

// app.jsx code

// return(
//     <>
//       <Student name = "Manoj Regmi" age = {22} isStudent = {true}/>
//       <Student name = "Hari Sharma" age = {34} isStudent ={false}/>
//       <Student name = "Sandesh Bhatta" age = {22} isStudent ={true}/>
//     </>
//   );
