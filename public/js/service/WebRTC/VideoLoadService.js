const constraints = (window.constraints = {
    audio: false,
    video: true,
});

export async function init(e) {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
        e.target.disabled = true;
    } catch (e) {
        handleError(e);
    }
}

function handleSuccess(stream) {
    const video = document.createElement("video");
    const playerName = document.createElement("p");
    const videoSurfaceBox = document.createElement("div");
    const videoContainer = document.querySelector(".local__container");

    videoSurfaceBox.classList.add("video__SurfaceBox");
    playerName.classList.add("player__name");
    videoSurfaceBox.append(playerName, video);
    videoContainer.appendChild(videoSurfaceBox);

    const videoTracks = stream.getVideoTracks();
    console.log("Got stream with constraints:", constraints);
    console.log(`Using video device: ${videoTracks[0].label}`);
    window.stream = stream; // make variable available to browser console
    video.srcObject = stream;
    video.autoplay = true;
}

function handleError(error) {
    if (error.name === "OverconstrainedError") {
        const v = constraints.video;
        errorMsg(
            `The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`
        );
    } else if (error.name === "NotAllowedError") {
        errorMsg(
            "Permissions have not been granted to use your camera and " +
                "microphone, you need to allow the page access to your devices in " +
                "order for the demo to work."
        );
    }
    errorMsg(`getUserMedia error: ${error.name}`, error);
}

function errorMsg(msg, error) {
    const errorElement = document.querySelector("#errorMsg");
    errorElement.innerHTML += `<p>${msg}</p>`;
    if (typeof error !== "undefined") {
        console.error(error);
    }
}
