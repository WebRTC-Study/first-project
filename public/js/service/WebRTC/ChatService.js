let chatContainer = document.querySelector(".chat__container");
let chatActivate = false;

function chatEnable() {
    chatContainer.classList.add("show");
    chatContainer.classList.forEach((list) => {
        if (list === "show") {
            chatContainer.style.setProperty("display", "flex");
        }
    });
}

function chatDisable() {
    chatContainer.classList.forEach((list) => {
        if (list.includes("show")) {
            chatContainer.classList.remove("show");
            chatContainer.style.setProperty("display", "none");
        }
    });
}

function handleChatContainer() {
    let chatBtn = document.querySelector("#chatBtn");

    chatBtn.addEventListener("click", () => {
        chatActivate = !chatActivate;
        chatActivate ? chatEnable() : chatDisable();
    });
}

const chatUtils = {
    handleChatContainer,
};

export default chatUtils;
