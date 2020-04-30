import styled from 'styled-components/native'

export const FooterButton = styled.View`

    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-color: #427386;
    width: ${({ focused }) => focused ? '110px' : '35px'};
    height: ${({ focused }) => focused ? '35px' : '35px'};
    border-radius: ${({ focused }) => focused ? '19px' : '25px'};
    border-width: 0.2px;
    background-color: ${({ focused }) => focused ? '#fdfdfd' : '#427386'};
    color: ${({ focused }) => focused ? '#427386' : '#fdfdfd'};
`
export const FooterText = styled.Text`
    color: #234d5e;
    font-weight: 600;
    margin-left: ${({focused }) => focused ? '8px' : '0px'};
`