import react, {useState} from 'react';

function MyComponent () {

const [name, setName] = useState("Guest");
const [age, setAge] = useState(0);
const [isStudent, setIsStudent] = useState(false);

const updateAge =() => {
    setAge(age + 1);
}

const updateName =() => {
    setName("Manoj")

}
const student = () =>{
    setIsStudent(!isStudent);

}
return (
    <>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <button onClick={updateName}>Set Name</button>
    <button onClick={updateAge}>Increment Age</button>
    <p>is he a student? : {isStudent ? "yes" : "no"} </p>
    <button onClick={student}>identify him/her</button>
    </>
);

}
export default MyComponent