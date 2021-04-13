import { FiBookOpen } from 'react-icons/fi';


const Header = () => {
  return (
    <div className="header">
      <FiBookOpen color= "red" size="34px" margin-top="5px"/>
      <h2 style={{ marginTop: "0"}}>Books</h2>
    </div>
  );
}

export default Header;
