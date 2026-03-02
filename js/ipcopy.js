document.querySelectorAll(".ipcim").forEach(div => {
    div.addEventListener("click", async function () {

        // Ha már másolva van, ne csináljon semmit
        if (this.classList.contains("ipcim-kimasolva")) {
            return;
        }

        const eredetiSzoveg = this.textContent.trim();

        try {
            await navigator.clipboard.writeText(eredetiSzoveg);

            this.classList.add("ipcim-kimasolva");
            this.textContent = "Kimásolva!";

            setTimeout(() => {
                this.classList.remove("ipcim-kimasolva");
                this.textContent = eredetiSzoveg;
            }, 2000);

        } catch (err) {
            console.error("Nem sikerült másolni:", err);
        }
    });
});