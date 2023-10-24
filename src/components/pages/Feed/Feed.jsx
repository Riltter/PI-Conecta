import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import style from "./Feed.module.css"

function Feed() {

    const { signout } = useAuth();
    const navigate = useNavigate();

    return ( 
        <>
        <h1>FEED</h1>
        <button className={style.btnSair} onClick={() => [signout(), navigate("/")]}>
            Sair
        </button>
        </>
     );
}

export default Feed;