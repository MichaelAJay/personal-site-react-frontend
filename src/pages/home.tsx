import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const navigateToSierpinski = () => {
        navigate('/sierpinski')
    }

    return (
        <div>
            Home
            <button onClick={navigateToSierpinski}>Sierpinski Triangle</button>
        </div>
    )
}

export default Home;