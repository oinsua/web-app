import { useNavigate } from 'react-router-dom';

type props = {
    url: string;
};

function Logout({url}: props) {

    const navigate = useNavigate();

    const handleClick = () => {
         navigate(url)
    };

  return (
    <button onClick={handleClick} style={{margin: "2rem"}}>Logout</button>
  )
}

export default Logout