import asyncio
import json
import logging
import urllib.parse
from aiogram import Bot, Dispatcher, F
from aiogram.types import Message, KeyboardButton, ReplyKeyboardMarkup, WebAppInfo

# ================= SOZLAMALAR =================
# 1. BotFather bergan API tokenni shu yerga qo'ying:
BOT_TOKEN = "8706570966:AAHi4bKCfMS1a8m3zV6NlbPdAG4MSOdalHg"

# 2. GitHub Pages'dagi jonli saytingiz linkini shu yerga qo'ying:
WEB_APP_URL = "https://xabibullohravshanov01-maker.github.io/cam-moy.uz/?v=2"

# To'lov tizimlari sozlamalari (Click va Payme test rejimi uchun)
CLICK_SERVICE_ID = "12345"
CLICK_MERCHANT_ID = "67890"
PAYME_MERCHANT_ID = "65a123bc45de678f"
# ==============================================

logging.basicConfig(level=logging.INFO)
bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()

# Botga /start yuborilganda WebApp tugmasini ko'rsatish
@dp.message(F.text == "/start")
async def start_cmd(message: Message):
    markup = ReplyKeyboardMarkup(
        keyboard=[
            [KeyboardButton(text="Do'konni ochish 🛒", web_app=WebAppInfo(url=WEB_APP_URL))]
        ],
        resize_keyboard=True
    )
    
    await message.answer(
        f"Assalomu alaykum, {message.from_user.full_name}!\n"
        f"**САМ-МОЙ-UZING-YUV** karcher botiga xush kelibsiz.\n\n"
        f"Xizmatlar va mahsulotlarni ko'rish uchun pastdagi tugmani bosing 👇",
        reply_markup=markup
    )

# Saytdan (WebApp) to'lov tugmasi bosilganda keladigan JSON ma'lumotni tutish
@dp.message(F.web_app_data)
async def web_app_data_handler(message: Message):
    try:
        data = json.loads(message.web_app_data.data)
        mahsulot = data.get("mahsulot")
        narx_str = data.get("narx").replace(",", "").strip()
        narx_tiyin = int(narx_str) * 100  # Payme tiyinda hisoblaydi
        tizim = data.get("tolov_tizimi")

        await message.answer(
            f"🛍 **Buyurtma qabul qilindi!**\n"
            f"📦 Mahsulot: {mahsulot}\n"
            f"💰 Narxi: {data.get('narx')} so'm\n"
            f"💳 To'lov turi: {tizim}\n\n"
            f"To'lovni yakunlash uchun havolani bosing 👇"
        )

        # TO'LOV LINKLARINI GENERATSIYA QILISH
        if tizim == "Click":
            click_url = f"https://my.click.uz/services/pay?service_id={CLICK_SERVICE_ID}&merchant_id={CLICK_MERCHANT_ID}&amount={narx_str}&transaction_param={message.from_user.id}"
            await message.answer(f"🔗 [CLICK BILAN TO'LASH]({click_url})", parse_mode="Markdown")

        elif tizim == "Payme":
            params = f"m={PAYME_MERCHANT_ID};ac.user_id={message.from_user.id};a={narx_tiyin}"
            encoded_params = urllib.parse.quote(params)
            payme_url = f"https://checkout.paycom.uz/{encoded_params}"
            await message.answer(f"🔗 [PAYME BILAN TO'LASH]({payme_url})", parse_mode="Markdown")
            
        elif tizim == "Xazna":
            xazna_url = f"https://xazna.uz/pay?merchant={PAYME_MERCHANT_ID}&amount={narx_str}"
            await message.answer(f"🔗 [XAZNA BILAN TO'LASH]({xazna_url})", parse_mode="Markdown")

    except Exception as e:
        await message.answer("❌ To'lov havolasini yaratishda xatolik yuz berdi.")
        logging.error(f"Xatolik: {e}")

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())