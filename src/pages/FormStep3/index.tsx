import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as C from "./styles";
import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";

export const FormStep3 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect (() => {
        if(state.name === ''){
            navigate('/')
        }else {        
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== '') {
            navigate('/step4')

        } else {
            alert("Preencha os dados");
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }
    
    return (
        <Theme>
            <C.Container>
                <p>Passo 3/4</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

                <hr />

                <label>
                    Qual seu e-mail?
                    <input
                        type="email" 
                        value={state.email} 
                        onChange={handleEmailChange}  
                    />
                </label>

                <label>
                    Qual seu GitHub?
                    <input
                        type="url" 
                        value={state.github} 
                        onChange={handleGithubChange}  
                    />
                </label>

                <Link to="/" className="backButtom">Voltar</Link>
                <button onClick={handleNextStep}>Confirmar Cadastro</button>
            </C.Container>
        </Theme>
    )
}