import Artyom from 'artyom.js';
import React from 'react';
import styled from 'styled-components';

const SpeakerIcon = styled.div`
  background-color: #fff;
  border: 4px solid black;
  height: 75px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 75px;
  cursor: pointer;
`;

class Speech extends React.Component<{}> {
  constructor(props) {
    super(props);

    if (!props.artyom) {
      throw 'Expecting Artyom instance in props';
    }

    this.artyom = props.artyom || new Artyom();
    this.speakingCallback = props.speakingCallback || function(text) {};
    this.state = {
      enabled: false
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.text && newProps.text !== this.props.text) {
      this.speak(newProps.text);
    }
  }

  speak(text) {
    // Let parent know this component is speaking
    if (this.state.enabled) {
      let speakConfig = {
        onStart: () => {
          this.speakingCallback(true);
        },
        onEnd: () => {
          this.speakingCallback(false);
        }
      };
      this.artyom.say(text, speakConfig);
    }
  }

  toggleSpeech() {
    if (this.state.enabled) {
      this.icon.innerHTML = 'volume_mute';
      this.setState({ enabled: false });
    } else {
      this.icon.innerHTML = 'volume_up';
      this.setState({ enabled: true });
    }
  }

  render() {
    return (
      <div className="col s2">
        <SpeakerIcon
          className="valign-wrapper"
          onClick={this.toggleSpeech.bind(this)}
        >
          <i
            className="center-align medium material-icons"
            style={{ width: '100%' }}
            ref={ele => (this.icon = ele)}
          >
            volume_mute
          </i>
        </SpeakerIcon>
        <div>
          <p>Click here to enable speech</p>
        </div>
      </div>
    );
  }
}

export default Speech;
