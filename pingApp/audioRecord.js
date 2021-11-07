import { Component } from 'react';
import AudioRecorderPlayer, {
    AVEncoderAudioQualityIOSType,
    AVEncodingOption,
    AudioEncoderAndroidType, 
    AudioSet,
    AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';

class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggingIn: false,
            recordSecs: 0,
            recordTime: '00:00:00',
            currentPositionsSec: 0,
            currentDurationSec: 0,
            playTime: '00:00:00',
            duration: '00:00:00',
        };
        this.AudioRecorderPlayer = new AudioRecorderPlayer();
        this.AudioRecorderPlayer.setSubscriptionDuration(0.09);
    }
}

onStartRecord = async () => {
    const path = 'distress.m4a';
    const audioSet = {
        AudioEncoderAndriod: AudioEncoderAndroidType.AAC,
        AudioSourceAndroid: AudioSourceAndroidType.MIC,
        AVEncoderAudioQualityIOS: AVEncoderAudioQualityIOSType.high,
        AVNumberOfChannelsKeyIOS: 2,
        AVFormatIDKeyIOS: AVEncodingOption.aac,
    };
    console.log('audioSet, audioSet');
    const uri = await this.AudioRecorderPlayer.startRecorder(path, audioSet);
    this.AudioRecorderPlayer.addRecordBackListener((e) => {
        this.setState({
            recordSecs: e.current_position,
            recordTime: this.AudioRecorderPlayer.mmssss(
                Math.floor(e.current_position),
            ),
        });
    });
    console.log('uri: ${uri}');
};

onStopRecord = async () => {
    const result = await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState({
      recordSecs: 0,
    });
    console.log(result);
  };