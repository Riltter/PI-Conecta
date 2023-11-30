
import Navbar from "../../Navbar";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router";

const ProjectPage = () => {

    const {signout} = useAuth();
    const navigation = useNavigate();

    const sair = () => {
        signout()
        navigation("/")
    }


    return (
        <>
            <Navbar></Navbar>
            <button onClick={() => sair()}>Sair</button>
        </>
    )
}
export default ProjectPage;