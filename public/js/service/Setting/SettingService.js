export class SettingService {

    constructor(mediaStream) {
        this.mediaStream = mediaStream;
        this.audioTrack = this.mediaStream.getAudioTracks()[0];
        this.videoTrack = this.mediaStream.getVideoTracks()[0];
    }

    /**
     * 오디오 볼륨 조정
     * 
     * @todo: 플레이어 볼륨 조정.  플레이어 직접 조작 필요
     */
    setAudioVolume() {
    }


    /* 오디오 재개 */
    resumeAudio() {
        this.audioTrack.enabled = true;
    }

    /* 비디오 재개 */
    resumeVideo() {
        this.videoTrack.enabled = true;
    }

    /* 오디오 중지 */
    stopAudio() {
        this.audioTrack.enabled = false;
    }

    /* 비디오 중지 */
    stopVideo() {
        this.videoTrack.enabled = false;
    }

    /* 오디오 음소거 상태 */
    get audioMuted() {
        return !this.audioTrack.enabled;
    }

    /* 비디오 중지 상태 */
    get videoActive() {
        return this.videoTrack.enabled;
    }
}

