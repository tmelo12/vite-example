import { Background, LogoDefesaAm, ContentLogo, ContentSignin, VisualIdent, Welcome, Form, Input, SubmitButton, ForgotLink, ContentForm, CheckRemember, LabelRemember, RememberGroup } from './styles';
import LogoDefesa from '../../assets/logos/dc.svg';
import VisualGov from '../../assets/images/visual-gov.png';
import { Formik } from 'formik';

interface MyFormValues {
    email: string;
    password: string;
};

function Login() {
    const initialValues: MyFormValues = { email: '', password: '' };

    return (
        <Background>
            <ContentLogo>
                <LogoDefesaAm src={LogoDefesa} />
            </ContentLogo>
            <ContentSignin>
                <VisualIdent src={VisualGov} />
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        console.log({ values, actions });
                        alert(JSON.stringify(values));
                        actions.setSubmitting(false);
                    }}
                >
                    <Form>
                        <ContentForm>
                            <Welcome>Bem Vindo(a)</Welcome>
                            <Input id="email" name="email" placeholder="Digite seu e-mail" />
                            <Input id="password" name="password" placeholder="Digite sua senha" />
                            <RememberGroup>
                                <CheckRemember type="checkbox" /><LabelRemember>Permanecer conectado</LabelRemember>
                            </RememberGroup>
                            <RememberGroup>
                                <CheckRemember type="checkbox" /><LabelRemember>Lembra-me do e-mail</LabelRemember>
                            </RememberGroup>
                            <SubmitButton onClick={() => alert('aaaa')} type="submit">Entrar</SubmitButton>
                            <ForgotLink href=''>Esqueceu sua senha?</ForgotLink>
                        </ContentForm>
                    </Form>
                </Formik>
            </ContentSignin>
        </Background >
    )
}

export default Login;