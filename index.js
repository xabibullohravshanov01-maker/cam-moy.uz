function magazinniKorsat() {
    const panel = document.getElementById('mahsulotlar-paneli');
    
    // Mahsulotlar ro'yxati
    const tovarlar = [
        { 
            nom: "Sifatli Latta (Microfiber)", 
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
            nom: "Sochiqli latta",
            narx: "70,000",
            rasm: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwyq04CQ1R4UdHdPuaBKV9MblPSjhzDvGt4Q&s"
        }

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
            tavsif: "Xammasi klientlar uchun", 
            narx: "Xizmatlar bonus sifatida ",
            rasm: "https://api.cabinet.smart-market.uz/uploads/images/ff80818162d1c36c19321e91"
        },
        { 
            nom: "Kompressor", 
            tavsif: "Xammasi klientlar uchun", 
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
};



