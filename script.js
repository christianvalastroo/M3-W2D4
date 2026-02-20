document.addEventListener("DOMContentLoaded", () => {
  // 1) Anno automatico nel footer
  const yearEl = document.getElementById("year")
  if (yearEl) yearEl.textContent = new Date().getFullYear()

  // Helper: mostra un Toast Bootstrap
  function showToast(message) {
    const toastEl = document.getElementById("appToast")
    const msgEl = document.getElementById("toastMsg")
    if (!toastEl || !msgEl) return

    msgEl.textContent = message
    const toast = bootstrap.Toast.getOrCreateInstance(toastEl)
    toast.show()
  }

  // 2) Copia promo code
  const copyBtn = document.getElementById("copyPromo")
  const promoInput = document.getElementById("promoCode")

  if (copyBtn && promoInput) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(promoInput.value)
        copyBtn.textContent = "Copiato!"
        showToast("Codice promo copiato negli appunti ✅")

        setTimeout(() => (copyBtn.textContent = "Copia"), 1200)
      } catch (err) {
        showToast("Impossibile copiare. Seleziona e copia manualmente.")
      }
    })
  }

  // 3) Bottone Mostra/Nascondi: cambia testo in base allo stato della collapse
  const weeklyCollapse = document.getElementById("weeklyCollapse")
  const btnWeeklyToggle = document.getElementById("btnWeeklyToggle")

  if (weeklyCollapse && btnWeeklyToggle) {
    weeklyCollapse.addEventListener("shown.bs.collapse", () => {
      btnWeeklyToggle.textContent = "Nascondi"
    })
    weeklyCollapse.addEventListener("hidden.bs.collapse", () => {
      btnWeeklyToggle.textContent = "Mostra"
    })
  }

  // 4) Prenota: toast su click
  const prenotaBtns = document.querySelectorAll(".js-prenota")
  prenotaBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      showToast("Perfetto! Ti stiamo portando alla prenotazione ✈️")
    })
  })
})