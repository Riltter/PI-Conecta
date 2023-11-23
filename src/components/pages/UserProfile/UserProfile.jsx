import styled from "styled-components";
import style from "./UserProfile.css";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import { BiLogoLinkedinSquare, BiLogoInstagram } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { RiGraduationCapLine } from "react-icons/ri";


const campus = 'Aqui ficará a lógica para mostrar a sessão "Campus"'

const sobreUserProfile = 'Aqui ficará a lógica para mostrar a sessão "Sobre"'

const UserProfile = () => {

    function downloadFile() {
        var fileUrl = "../assets/Curriculo.jpg"; 
        // ver como vai fazer pra puxar no banco o arquivo do curriculo
        var link = document.createElement('a');
        
        link.href = fileUrl;
        link.download = 'Curriculo.jpg';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div>
            {/*{<Navbar />}*/}
            <div className={style.bodyUserProfile}>
                <div className={style.coluna1UserProfile}>
                    <Link to="/PaginaMeusProjetos">
                        <button className={style.btnMeusProjetos} type="button">
                            Meus projetos
                        </button>
                    </Link>
                    <div className={style.linhaDeRedirecionamentoExterno}>
                        <a href="/url linkedin ou api?">
                            <button className={style.btnLinkedIn} type="button">
                                <BiLogoLinkedinSquare />
                            </button>
                        </a>
                        <a href="/url linkedin ou api?">
                            <button className={style.btnInstagram} type="button">
                                <BiLogoInstagram />
                            </button>
                        </a>
                        <a href="/url linkedin ou api?">
                            <button className={style.btnGMail} type="button">
                                <CgMail />
                            </button>
                        </a>
                    </div>
                    <div className={style.Campus}>
                        <RiGraduationCapLine />
                        <p>{campus}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="sobre">Sobre</label>
                        <p>{sobreUserProfile}</p>
                    </div>
                        {/*Descobrir como colocar um pdf pra baixar no pc dos outros kkkk */}
                        <button className={style.btnUploadCurriculo} onClick={(e) => downloadFile()}>Download Arquivo</button>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;