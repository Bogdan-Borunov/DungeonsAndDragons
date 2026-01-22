const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();
g
document.getElementById("btn").onclick = () => {
    tg.showAlert(`Привет, ${tg.initDataUnsafe.user.first_name}`);
};
