import { Background, LogoDefesaAm, ContentLogo, ContentSignin, VisualIdent, Welcome, Form, Input, SubmitButton, ForgotLink, ContentForm, RememberGroup, LogoGovAM } from './styles';
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
                            <Input id="email" name="email" type='email' placeholder="Digite seu e-mail" />
                            <Input id="password" name="password" type='password' placeholder="Digite sua senha" />
                            <RememberGroup>
                                <div>
                                    <input type='checkbox' className='remember-checkbox' /> <label className='label-checkbox'>Lembrar-me do e-mail</label>
                                </div>
                                <div>
                                    <input type='checkbox' className='remember-checkbox' /> <label className='label-checkbox'>Manter conectado</label>
                                </div>
                            </RememberGroup>
                            <SubmitButton onClick={() => alert('aaaa')} type="submit">Entrar</SubmitButton>
                            <ForgotLink href=''>Esqueceu sua senha?</ForgotLink>
                            <LogoGovAM >
                                <img className='img-logo-gov' src='http://apstatic.homologacao.am.gov.br/images/logo_governo/logo-gov-vertical.svg' />
                            </LogoGovAM>
                        </ContentForm>
                    </Form>
                </Formik>
            </ContentSignin>
        </Background >
    )
}

export default Login;