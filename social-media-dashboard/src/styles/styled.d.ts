import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        themeName: string

        colors: {
            toggle: string
            positiveFollowers: string
            negativeFollowers: string
    
            facebook: string
            twitter: string
            instagram: string
            youtube: string
    
            bodyBackground: string
            backgroundTop: string
            cardBackground: string
            cardBackgroundHover: string;
            primary: string
            secondary: string
        }
    }
}