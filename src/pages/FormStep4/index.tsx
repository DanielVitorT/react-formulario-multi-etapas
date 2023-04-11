import { useNavigate, Link } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import * as C from "./styles";
import { useEffect } from "react";

export const FormStep4 = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useForm();

    useEffect (() => {
        if(state.name === '' && state.email === '' && state.github === ''){
            navigate('/')
        }else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== ''  && state.email !== '' && state.github !== '') {
            console.log(state)
        } else {
            if(state.name === ''){
                navigate('/')
            }else {
                navigate('/step3')
            }
        }
    }


    return (
        <Theme>
            <C.Container>
                <p>Passo 4/4</p>
                <h1>Finalizar</h1>
                <p>{state.name}, confirme se os seu dados estão corretos.</p>

                <hr />

                <p>Nome: {state.name}</p>
                <p>Nível: {state.level === 0 ? 'Sou iniciante' : 'Sou programador' }</p>
                <p>E-mail: {state.email}</p>
                <p>GitHub: {state.github}</p>
                <Link to="/" className="backButtom">Editar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}