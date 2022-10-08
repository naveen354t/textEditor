import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  min-height: 100vh;
`
export const TextEditContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: black;
  min-height: 80vh;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`
export const Image = styled.img`
  height: 320px;
  width: 220px;
  margin-bottom: 22px;
  @media screen and (min-width: 768px) {
    width: 320px;
  }
`
export const CustomButton = styled.button`
  font-weight: Bold;
  color: ${props => (props.isItalicActive ? '#faff00' : '#f1f5f9')};
  color: ${props => (props.underline ? '#faff00' : '#f1f5f9')};
  color: ${props => (props.BoldActive ? '#faff00' : '#f1f5f9')};
  background-color: #25262c;
  outline: none;
  cursor: pointer;
  margin: 12px;
  border: 0px;
`
export const Heading = styled.h1`
  color: #f1f5f9;
  font-size: 32;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 22px;
  background-color: #1b1c22;
  width: 65%;
  max-width: 1100px;
  margin-bottom: 22px;
  border: solid 2px #1b1c22;
`
export const TextBGContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
