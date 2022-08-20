import { init } from "../service/WebRTC/VideoLoadService.js";
import chatUtil from "../service/WebRTC/ChatService.js";

window.addEventListener("DOMContentLoaded", init, false);
window.addEventListener("DOMContentLoaded", chatUtil.handleChatContainer);
