let tanlanganMahsulot = null;

// Sahifa to'liq yuklangandan keyin ishga tushadigan start qismi
document.addEventListener("DOMContentLoaded", function() {
    // Eng birinchi bo'lib magazin ro'yxatini chiqaradi
    magazinniKorsat();
    
    // Telegram WebApp yuklanganini bildirish
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand(); // Oynani to'liq ekranga yoyish
    }
});

// 1. MAGAZIN (MAHSULOTLAR) FUNKSIYASI
function magazinniKorsat() {
    const panel = document.getElementById('mahsulotlar-paneli');
    if (!panel) return;

    const tovarlar = [
        { nom: "Sifatli Latta (Microfiber)", narx: "25,000", rasm: "https://images.uzum.uz/d05tp5ui4n37npaq86a0/original.jpg" },
        { nom: "Yumshoq Machalka", narx: "5,000", rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91BB7shjHMh_6VmGRXX3rIPWDDFp176AI9A&s" },
        { nom: "Balon Qoraytirgich", narx: "40,000", rasm: "https://images.uzum.uz/cgg7lnvhj8j9g69b2q40/original.jpg" },
        { nom: "Delfin Latta", narx: "10,000", rasm: "https://frankfurt.apollo.olxcdn.com/v1/files/bmsz3fj4wnx33-UZ/image" },
        { nom: "Delfin Sariq", narx: "15,000", rasm: "https://images.uzum.uz/d466g1tv2sjo4rvgphv0/t_product_low.jpg" },
        { nom: "Salon Asvijitel", narx: "25,000", rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesWBzMwGv2UB4y9Usye3BdsU9MclnrwNwIw&s" },
        { nom: "Sochiqli latta", narx: "70,000", rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwyq04CQ1R4UdHdPuaBKV9MblPSjhzDvGt4Q&s" },
        { nom: "Delfin", narx: "40,000", rasm: "https://images.uzum.uz/d1cic8q7s4fup34b8kag/original.jpg" },
        { nom: "Premium latta", narx: "55,000", rasm: "https://assets.asaxiy.uz/product/items/desktop/06aed2799ae790fba35a20b194c1315d2024051014363868647drF0jPNKk5.jpg.webp" },
        { nom: "Delfin qora", narx: "15,000", rasm: "https://images.uzum.uz/d02vgic7fd1idpht1f9g/original.jpg" }    
    ];

    panel.innerHTML = "";
    tovarlar.forEach(tovar => {
        panel.innerHTML += `
            <div class="kartochka">
                <img src="${tovar.rasm}" alt="${tovar.nom}">
                <h3>${tovar.nom}</h3>
                <p class="narx">${tovar.narx} so'm</p>
                <button class="sotib-olish" onclick="tolovOynasiniOch('${tovar.nom}', '${tovar.narx}')">Sotib olish</button>
            </div>
        `;
    });
}

// 2. XIZMATLAR FUNKSIYASI
function xizmatlarniKorsat() {
    const panel = document.getElementById('mahsulotlar-paneli');
    if (!panel) return;

    panel.innerHTML = "";
    const xizmatlar = [
        { nom: "Moshina yuvish xizmati", tavsif: "Professional xodim tomonidan sifatli yuvib berish xizmati", narx: "Kelishilgan holda", rasm: "https://afex.uz/wp-content/uploads/2020/04/2-300x200.png" },
        { nom: "Karcher Pilesos", tavsif: "Xammasi klientlar uchun", narx: "Xizmatlar bonus sifatida", rasm: "https://api.cabinet.smart-market.uz/uploads/images/ff80818162d1c36c19321e91" },
        { nom: "Kompressor", tavsif: "Xammasi klientlar uchun", narx: "Xizmatlar bonus sifatida", rasm: "https://afex.uz/wp-content/uploads/2021/12/evk-200-1.jpeg" },
        { nom: "Suxoy Tuman", tavsif: "Moshina saloni uchun xushboylantirgich", narx: "Xizmat narxi 20,000 so'm", rasm: "https://zavgar.ru/uploads/other/news/prewiew/suhoj-tuman.jpg" }
    ];

    xizmatlar.forEach(x => {
        panel.innerHTML += `
            <div class="kartochka">
                <img src="${x.rasm}" alt="${x.nom}">
                <h3>${x.nom}</h3>
                <p style="font-size: 14px; color: #555; min-height: 40px; margin: 5px 0;">${x.tavsif}</p>
                <p class="narx" style="color: #27ae60; font-weight: bold;">${x.narx}</p>
            </div>
        `;
    });
}

// 3. MANZIL FUNKSIYASI
function manzilniKorsat() {
    const panel = document.getElementById('mahsulotlar-paneli');
    if (!panel) return;

    panel.innerHTML = `
        <div class="kartochka" style="border: 2px solid #28a745; width: 100%; max-width: 500px; margin: 20px auto; padding: 20px; background: white; border-radius: 15px; text-align: center;">
            <img src="https://static-maps.yandex.ru/1.x/?lang=ru_RU&ll=67.2431,39.4055&z=14&l=map&size=450,300&pt=67.2431,39.4055,pm2gnm" alt="Xarita" style="width:100%; border-radius: 10px;">
            <h2 style="color: #28a745; margin: 15px 0;">📍 Bizning Manzil</h2>
            <div style="text-align: left; font-size: 16px; line-height: 1.6; color: black; margin-bottom: 15px;">
                <p><b>🏢 Joylashuv:</b> Samarqand viloyati, Urgut tumani</p>
                <p><b>6️⃣ Mo'ljal:</b> Kamardon Maxallasi, A. Qodiriy ko'chasi</p>
                <p><b>⏰ Ish vaqti:</b> 06:00 dan 23:00 gacha</p>
                <p><b>📞 Aloqa:</b> +998 91 545 75 35</p>
            </div>
            <a href="https://maps.google.com/?q=39.4055,67.2431" target="_blank" 
               style="background: #007bff; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; width: 80%;">
                🗺 Google Xaritada ko'rish
            </a>
        </div>
    `;
}

// ================= TO'LOV TIZIMI MODAL OYNASI MANTIQI =================

function tolovOynasiniOch(nom, narx) {
    tanlanganMahsulot = { nom, narx };
    const modal = document.getElementById('tolov-modal');
    const modalNomi = document.getElementById('modal-mahsulot-nomi');
    
    if (modal && modalNomi) {
        modal.style.display = 'flex';
        modalNomi.innerText = nom + " (" + narx + " so'm)";
    }
}

function tolovOynasiniYop() {
    const modal = document.getElementById('tolov-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function tolovniAmalgaOshir(tizim) {
    if (!tanlanganMahsulot) return;

    const buyurtma = {
        mahsulot: tanlanganMahsulot.nom,
        narx: tanlanganMahsulot.narx,
        tolov_tizimi: tizim
    };

    // Telegram botga ma'lumot uzatish
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.sendData(JSON.stringify(buyurtma));
    } else {
        alert(`Brauzer testi mofaqqiyatli!\nMahsulot: ${tanlanganMahsulot.nom}\nTo'lov turi: ${tizim}`);
    }
    tolovOynasiniYop();
}
