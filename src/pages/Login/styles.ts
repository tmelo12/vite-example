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
    @media (max-width: 720px) {
        display: none;
    }
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
    justify-content: space-between;
`;

export const VisualIdent = styled.img`
    align-self: flex-end;
    width: 50%;
    @media (max-width: 720px) {
        display: none;
    }
`;

export const Welcome = styled.h4`
    font-size: 2.5rem;
    font-family: ${({ theme }) => theme.fonts.Roboto};
    color: ${({ theme }) => theme.colors.text_white};
    text-align: center;
`;

export const Form = styled.form`
    width: 100%;
    height: 100%;
`;

export const Input = styled.input`
    width: 25rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 0.3rem;
    padding: 1rem;
    @media (max-width: 720px) {
        width: 15rem;
        height: 2rem;
    }
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
    font-family: ${({ theme }) => theme.fonts.Roboto};
`;

export const ContentForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;

export const RememberGroup = styled.div`
    display: flex;
    gap: 1rem;
    align-self: center;
    flex-direction: column;
    .remember-checkbox{
        width: 1rem;
        height: 1rem;
    }
    .label-checkbox{
        color: ${({ theme }) => theme.colors.text_white};
        font-family: ${({ theme }) => theme.fonts.Roboto};
    }
`;

export const LogoGovAM = styled.div`
    display: flex;
    justify-content: center;
    align-self: flex-end;
    width: 100%;
    .img-logo-gov{
        width: 10rem;
        display: flex;
        @media (max-width: 1080px) {
            display: none;
        }
    }
`;