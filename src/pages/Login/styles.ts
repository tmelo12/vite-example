import styled from 'styled-components'

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(#E97211, #F1944A );

    display: flex;
`;

export const LogoDefesaAm = styled.img`
    width: 18rem;
    height: 18rem;
`;

export const ContentLogo = styled.div`
    flex: 2;

    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(#E97211, #F1944A );
`;

export const ContentSignin = styled.div`
    flex: 1;

    background-color: #101A37;
    border-bottom-left-radius: 2.5rem;
    border-top-left-radius: 2.5rem;
    display: flex;
    flex-direction: column;
`;

export const VisualIdent = styled.img`
    align-self: flex-end;
    width: 50%;
`;

export const Welcome = styled.h4`
    font-size: 2.5rem;
    font-family: ${({ theme }) => theme.fonts.Roboto_bold};
    color: ${({ theme }) => theme.colors.text_white};
    text-align: center;
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;
`;

export const Input = styled.input`
    width: 25rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 0.3rem;
    padding: 1rem;
`;

export const SubmitButton = styled.button`
    width: 5rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 0.3rem;
    border-color: ${({ theme }) => theme.colors.background};
`;

export const ForgotLink = styled.a`
    color: ${({ theme }) => theme.colors.text_white};
    font-family: ${({ theme }) => theme.fonts.Roboto_bold};
`;

export const ContentForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const CheckRemember = styled.input.attrs({ type: 'checkbox' })`
    width: 1rem;
    height: 1rem;
    accent-color: ${({ theme }) => theme.colors.button_submit};
`;

export const LabelRemember = styled.label`
    color: ${({ theme }) => theme.colors.text_white};
    font-family: ${({ theme }) => theme.fonts.Roboto_medium};
`;

export const RememberGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
`;