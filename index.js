function magazinniKorsat() {
    const panel = document.getElementById('mahsulotlar-paneli');
    
    // Mahsulotlar ro'yxati
    const tovarlar = [
        { 
            nom: "Yumshoq latta ", 
            narx: "25,000", 
            rasm: "https://images.uzum.uz/d05tp5ui4n37npaq86a0/original.jpg" 
        },
        { 
            nom: "Yumshoq Machalka", 
            narx: "5,000", 
            rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91BB7shjHMh_6VmGRXX3rIPWDDFp176AI9A&s" 
        },
        { 
            nom: "Balon Qoraytirgich", 
            narx: "40,000", 
            rasm: "https://images.uzum.uz/cgg7lnvhj8j9g69b2q40/original.jpg" 
        },
        {
            nom: "Delfin Latta",
            narx: "10,000",
            rasm: "https://frankfurt.apollo.olxcdn.com/v1/files/bmsz3fj4wnx33-UZ/image"

        },
        {
            nom: "Delfin Sariq",
            narx: "15,000",
            rasm: "https://images.uzum.uz/d466g1tv2sjo4rvgphv0/t_product_low.jpg"
        },
        {
            nom: "Salon Asvijitel",
            narx: "25,000",
            rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesWBzMwGv2UB4y9Usye3BdsU9MclnrwNwIw&s"
        },
        {
            nom: "Yumshoq sochiqli latta",
            narx: "70,000",
            rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwyq04CQ1R4UdHdPuaBKV9MblPSjhzDvGt4Q&s"
        },
        {
            nom: "Delfin",
            narx: "40,000",
            rasm: "https://images.uzum.uz/d1cic8q7s4fup34b8kag/original.jpg"
        },
        {
            nom: "Premium latta",
            narx: "55,000",
            rasm: "https://assets.asaxiy.uz/product/items/desktop/06aed2799ae790fba35a20b194c1315d2024051014363868647drF0jPNKk5.jpg.webp"
        },
        {
            nom: "Delfin qora",
            narx: "15,000",
            rasm: "https://images.uzum.uz/d02vgic7fd1idpht1f9g/original.jpg"

    ];

    
    panel.innerHTML = ""
    tovarlar.forEach(tovar => {
        panel.innerHTML += `
            <div class="kartochka">
                <img src="${tovar.rasm}" alt="${tovar.nom}">
                <h3>${tovar.nom}</h3>
                <p class="narx">${tovar.narx} so'm</p>
                <button class="sotib-olish">Sotib olish</button>
            </div>
            `
        
    })
}


function xizmatlarniKorsat() {
    const panel = document.getElementById('mahsulotlar-paneli');
    panel.innerHTML = ""

    const xizmatlar = [
        { 
            nom: "Moshina yuvish xizmati", 
            tavsif: "Professional xodim tomonidan sifatli yuvib berish xizmati", 
            narx: "Kelishilgan holda",
            rasm: "https://afex.uz/wp-content/uploads/2020/04/2-300x200.png"
        },
        { 
            nom: "Karcher Pilesos", 
            tavsif: "Xammasi mijozlarimiz uchun", 
            narx: "Xizmatlar bonus sifatida ",
            rasm: "https://api.cabinet.smart-market.uz/uploads/images/ff80818162d1c36c19321e91"
        },
        { 
            nom: "Kompressor", 
            tavsif: "Xammasi mijozlarimiz uchun", 
            narx: "Xizmatlar bonus sifatida",
            rasm: "https://afex.uz/wp-content/uploads/2021/12/evk-200-1.jpeg"
        },
        {
            nom: "Suxoy Tuman",
            tavsif: "Moshina saloni uchun xushboylantirgich",
            narx: "Xizmat narxi 20,000",
            rasm: "https://zavgar.ru/uploads/other/news/prewiew/suhoj-tuman.jpg"
        }
    ]

    xizmatlar.forEach(x => {
        panel.innerHTML += `
            <div class="kartochka">
                <img src="${x.rasm}" alt="${x.nom}">
                <h3>${x.nom}</h3>
                <p style="font-size: 14px; color: #555;">${x.tavsif}</p>
                <p class="narx" style="color: #27ae60; font-weight: bold;">${x.narx}</p>
            </div>
            `
        
    })
}

const panel = document.getElementById('mahsulotlar-paneli')
function manzilniKorsat() {
    panel.innerHTML = `
        <div class="kartochka" style="border: 2px solid #28a745; width: 100%; max-width: 500px; margin: 20px auto; padding: 15px; background: white; border-radius: 15px; text-align: center;">
            <img src="https://static-maps.yandex.ru/1.x/?lang=ru_RU&ll=67.2431,39.4055&z=14&l=map&size=450,300&pt=67.2431,39.4055,pm2gnm" alt="Xarita" style="width:100%; border-radius: 10px;">
            
            <h2 style="color: #28a745; margin: 15px 0;">📍 Bizning Manzil</h2>
            
            <div style="text-align: left; font-size: 18px; line-height: 1.6;">
                <p><b>🏢 Joylashuv:</b> Samarqand viloyati, Urgut tumani</p>
                <p><b>🛣 Mo'ljal:</b> Kamardon Maxallasi A Qodiriyksi</p>
                <p><b>⏰ Ish vaqti:</b> 06:00 dan 23:00 gacha</p>
                <p><b>📞 Aloqa:</b> +998 91 545 75 35</p>
            </div>

            <a href="https://www.google.com/maps?q=39.4055,67.2431" target="_blank" 
               style="background: #007bff; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; display: inline-block; margin-top: 15px; font-weight: bold;">
               🗺 Google Xaritada ko'rish
            </a>
        </div>
        `
    
};




