

function Picture () {
const imgUrl = "../src/assets/profilepic.jpeg";
const handleClick = (e) => e.target.style.display = "none";


return (<img onClick={(e) => handleClick(e)} src={imgUrl} /> );
}
export default Picture