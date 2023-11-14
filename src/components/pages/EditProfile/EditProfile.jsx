import Navbar from "../../Navbar";
import { useState, useEffect } from "react";
import { Container, ContainerInputs, Titulo, InputBox, InputBoxLabel, InputBoxInput, ContainerCampus, SelecaoCampus, ContainerInputsAll, InputTextArea, StyledButton } from "./EditProfileStyles";
import { BsFillMortarboardFill } from "react-icons/bs";
import axios from "axios";

const EditProfile = () => {

    const [userData, setUserData] = useState({
        userName: "",
        campus: "",
        sobre: "",
        linkedin: "",
        instagram: "",
        email: "",
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Substitua 'pato@gmail.com' pela variável ou lógica que determina o e-mail a ser pesquisado
                const emailteste = 'kenedy@gmail.com';
                const response = await axios.get(`http://localhost:8800/`);
                const user = response.data.find((user) => user.email === emailteste);

                if (user) {
                    setUserData({
                        userName: user.nome_usuario,
                        campus: user.campus,
                        sobre: user.sobre,
                        linkedin: user.linkedin,
                        instagram: user.instagram,
                        email: user.email,
                    });
                } else {
                    console.error("Usuário não encontrado.");
                }
            } catch (error) {
                console.error("Erro ao buscar dados do usuário:", error);
            }
        };

        fetchUserData();
    }, []);

    // fazer com que após a pesquisa no banco ocorra os dados sejam colcoados nos inputs

    return (
        <>
            <Navbar />
            <Container>
                <Titulo>Edição de perfil</Titulo>
                <ContainerInputsAll>
                    <ContainerInputs>
                        <InputBox>
                            <InputBoxLabel id="nameUserLabel" htmlFor="nameUser">
                                Nome de usuário
                            </InputBoxLabel>
                            <InputBoxInput
                                type="text"
                                id="nameUserid"
                                name="nameUser"
                                placeholder={userData.userName}

                            />
                        </InputBox>
                        <InputBox>
                            <InputBoxLabel htmlFor="campus">Campus</InputBoxLabel>
                            <ContainerCampus>
                                <BsFillMortarboardFill style={{ fontSize: '2rem' }} />
                                <SelecaoCampus>
                                    <option value="opcao1">Asa Norte</option>
                                    <option value="opcao2">Taguatinga</option>
                                    <option value="opcao3">Ambos</option>
                                </SelecaoCampus>
                            </ContainerCampus>
                        </InputBox>
                    </ContainerInputs>
                    <ContainerInputs>
                        <InputBox>
                            <InputBoxLabel id="nameUserLabel" htmlFor="">
                                Fale sobre você
                            </InputBoxLabel>
                            <InputTextArea rows="10" />

                        </InputBox>
                    </ContainerInputs>
                    <ContainerInputs>
                        <InputBox>
                            <InputBoxLabel htmlFor="linkedinLink">
                                Linkedin
                            </InputBoxLabel>
                            <InputBoxInput
                                type="text"
                                id="linkedinLinkid"
                                name="linkedinLink"

                            />
                        </InputBox>
                        <InputBox>
                            <InputBoxLabel htmlFor="instagramLink">
                                Instagram
                            </InputBoxLabel>
                            <InputBoxInput
                                type="text"
                                id="instagramLinkid"
                                name="instagramLink"

                            />
                        </InputBox>
                        <InputBox>
                            <InputBoxLabel htmlFor="email">
                                Email
                            </InputBoxLabel>
                            <InputBoxInput
                                type="email"
                                id="emailid"
                                name="email"

                            />
                        </InputBox>
                    </ContainerInputs>
                </ContainerInputsAll>
                <StyledButton>Salvar alterações</StyledButton>

            </Container>
        </>
    );
};

export default EditProfile;