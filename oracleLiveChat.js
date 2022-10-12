window.EESvcs = { 'eeid': 201909115355710 };
function fireOracleChatEvent() {
    console.log("Calling fireChatEvent");
    oit.fire(new oit.CustomEvent('inlay-oracle-chat-embedded-show', {
        detail: { id: 'inlay-oracle-chat-embedded' }
    }));
}

function checkOracleChatMinimized() {
    try {
        if (document.getElementById('inlay-oracle-chat-embedded')) {
            const oracleChat = document.getElementById('inlay-oracle-chat-embedded');
            if (oracleChat.getAttribute('data-oit-mode') === 'overlay-br-min') {
                return true;
            }
        }
    } catch (e) {}
    return false;
}

function hideOracleChat() {
    const elem = document.getElementById('inlay-oracle-chat-embedded');
    if (elem) {
        elem.setAttribute('data-oit-mode', 'hidden');
    }
}
