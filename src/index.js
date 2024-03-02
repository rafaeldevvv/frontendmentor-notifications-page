const markAsReadBtn = document.querySelector(".js-mark-as-read-btn"),
   unreadHints = document.querySelectorAll(".js-unread-hint"),
   notifCount = document.querySelector(".js-unread-notif-count"),
   notifications = document.querySelectorAll(".js-notification");

markAsReadBtn.addEventListener("click", () => {
   unreadHints.forEach(uh => uh.remove());
   notifications.forEach(n => n.removeAttribute("data-unread"));
   notifCount.textContent = "0";
})
