async function loadPlayerCount() {
    const div = document.getElementById("onlineText");
    if (!div) return;

    try {
        const response = await fetch("https://api.mcsrvstat.us/3/node3.hexaverse.hu:9773");
        const data = await response.json();

        if (data.online) {
            const playerCount = data.players?.online ?? 0;
            // div.textContent = playerCount + " online játékos";
            div.textContent = playerCount;
        } else {
            div.textContent = "A szerver offline.";
        }

    } catch (error) {
        div.textContent = "Hiba történt.";
        console.error(error);
    }
}

// első betöltés
loadPlayerCount();

// frissítés 30 másodpercenként
setInterval(loadPlayerCount, 30000);


