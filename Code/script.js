document.addEventListener("DOMContentLoaded", function () {
    const directBtn = document.getElementById("direct-btn");
    const groupsBtn = document.getElementById("groups-btn");
    const chatList = document.getElementById("chat-list");

    // Sample chat data
    const directChats = [
        { title: "James", text: "Why am i such a femboy😔?" },
        { title: "Benjamin Selwood", text: "I think i like boys" },
        { title: "Chris", text: "My car door just broke😔" }
    ];

    const groupChats = [
        { title: "Rufus Appreciation", text: "Max: Burgess Hill anyone?" },
        { title: "Ben Lovers", text: "Noah: I love Ben sooooo much😍" },
        { title: "Gooners", text: "Dan: Who wants to see my Katana?" }
    ];

    function loadChats(chats) {
        chatList.innerHTML = ""; // Clear existing chats
        chats.forEach(chat => {
            const chatItem = document.createElement("div");
            chatItem.classList.add("chat-item");
            chatItem.innerHTML = `
                <h2 class="chat-title">${chat.title}</h2>
                <p class="chat-text">${chat.text}</p>
            `;
            chatList.appendChild(chatItem);
        });
    }

    // Default to Direct Chats on load
    loadChats(directChats);

    // Button Click Events
    directBtn.addEventListener("click", function () {
        directBtn.classList.add("active");
        groupsBtn.classList.remove("active");
        loadChats(directChats);
    });

    groupsBtn.addEventListener("click", function () {
        groupsBtn.classList.add("active");
        directBtn.classList.remove("active");
        loadChats(groupChats);
    });
});