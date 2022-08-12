import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secundary: string;

            background: string;
            text_white: string;
            text_black: string;
            button_submit: string;
        },

        fonts: {
            Roboto: string;
        }
    }
}