import {Component} from 'react'

import './index.css'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  TextEditContainer,
  TextBGContainer,
  Image,
  Heading,
  CustomButton,
  InputContainer,
} from './styledComponents'

class TextEditor extends Component {
  state = {textInput: ''}

  onChangeCommentInput = event => {
    this.setState({
      textInput: event.target.value,
      isBoldActive: false,
      isItalicActive: false,
      isUnderlineActive: false,
    })
  }

  onChangeBold = () => {
    this.setState(prevState => ({isBoldActive: !prevState.isBoldActive}))
  }

  onChangeUnderLine = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  onChangeItalic = () => {
    this.setState(prevState => ({isItalicActive: !prevState.isItalicActive}))
  }

  render() {
    const {
      textInput,
      isBoldActive,
      isItalicActive,
      isUnderlineActive,
    } = this.state
    return (
      <AppContainer>
        <TextEditContainer>
          <TextBGContainer>
            <Heading>Text Editor</Heading>
            <Image src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png" />
          </TextBGContainer>
          <InputContainer>
            <CustomButton
              data-testid="bold"
              onClick={this.onChangeBold}
              BoldActive={isBoldActive}
              type="button"
            >
              <VscBold size={25} />
            </CustomButton>
            <CustomButton
              data-testid="italic"
              onClick={this.onChangeItalic}
              type="button"
              isItalicActive={isItalicActive}
            >
              <GoItalic size={25} />
            </CustomButton>
            <CustomButton
              data-testid="underline"
              onClick={this.onChangeUnderLine}
              type="button"
              underline={isUnderlineActive}
            >
              <AiOutlineUnderline size={25} />
            </CustomButton>
          </InputContainer>
          <textarea
            className="comment-input"
            value={textInput}
            onChange={this.onChangeCommentInput}
            rows="6"
          />
        </TextEditContainer>
      </AppContainer>
    )
  }
}

export default TextEditor
