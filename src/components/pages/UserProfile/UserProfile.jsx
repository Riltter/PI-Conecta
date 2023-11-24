import style from "./UserProfile.module.css";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import { BiLogoLinkedinSquare, BiLogoInstagram } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";


const campus = 'Asa Norte'

const sobreUserProfile = ''

const UserProfile = () => {
    const pageStyle = {
        backgroundColor: '#f5f5f5',
        margin: 0,
        padding: 0,
        minHeight: '91.2vh',
    };
    {/*para deixar como componente, é pra criar um arquivo separado? */ }

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
        <>
            <Navbar />
            <div style={pageStyle}>
                <div className={style.bodyUserProfile}>
                    <div className={style.capaUserProfile}>
                        <div className={style.fotoDePerfil}>
                            <img src="/assets/userProfile_fotoDePerfil.jpg" alt="Foto de Perfil" />
                        </div>
                        <div className={style.nomeDePerfil}>
                            <p>Maria_Fernanda</p>
                        </div>
                        <Link to="/editprofile">
                            <button className={style.btnEditProfile} type="button">
                                <MdOutlineEdit />
                            </button>
                        </Link>
                    </div>
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
                            <div className={style.retanguloCinza}>
                                <p>{sobreUserProfile}</p>
                            </div>
                        </div>
                        {/*Descobrir como colocar um pdf pra baixar no pc dos outros kkkk */}
                        <button className={style.btnUploadCurriculo} onClick={(e) => downloadFile()}>Download Arquivo</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;