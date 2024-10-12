

function ProfilePicture()
{
    const image ='./src/assets/hello.jpg';

    const handleClick = (e) => e.target.style.display="none";

    return(
        <img onClick ={(e) => handleClick(e)}src={image} alt="Hello.jpg" className="i1"></img>
    );
}

export default ProfilePicture;