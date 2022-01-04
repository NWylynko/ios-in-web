
import appStore from "./app-store.svg"
import appleMusic from "./apple-music.svg"
import appleStore from "./apple-store.svg"
import appleTv from "./apple-tv.svg"
import books from "./books.svg"
import calculator from "./calculator.svg"
import camera from "./camera.svg"
import clips from "./clips.svg"
import clock from "./clock.svg"
import contacts from "./contacts.svg"
import facetime from "./facetime.svg"
import files from "./files.svg"
import findMy from "./find-my.svg"
import health from "./health.svg"
import home from "./home.svg"
import iMessage from "./ios-message.svg"
import mail from "./mail.svg"
import measure from "./measure.svg"
import shortcuts from "./my-shortcuts.svg"
import news from "./news.svg"
import notes from "./notes.svg"
import photos from "./photos.svg"
import podcasts from "./podcasts.svg"
import reminders from "./reminders.svg"
import safari from "./safari.svg"
import settings from "./settings.svg"
import stocks from "./stocks.svg"
import translate from "./translate.svg"
import voiceMemos from "./voice-memos.svg"
import wallet from "./wallet.svg"
import weather from "./weather.svg"

interface Icons {
  [name: string]: string;
}

export const defaultIcons: Icons = {
  "App Store": appStore,
  "Apple Music": appleMusic,
  "Apple Store": appleStore,
  "Apple TV": appleTv,
  "Books": books,
  "Calculator": calculator,
  "Camera": camera,
  "Clips": clips,
  "Clock": clock,
  "Contacts": contacts,
  "FaceTime": facetime,
  "Files": files,
  "Find My": findMy,
  "Health": health,
  "Home": home,
  "Messages": iMessage,
  "Mail": mail,
  "Measure": measure,
  "Shortcuts": shortcuts,
  "News": news,
  "Notes": notes,
  "Photos": photos,
  "Podcasts": podcasts,
  "Reminders": reminders,
  "Safari": safari,
  "Settings": settings,
  "Stocks": stocks,
  "Translate": translate,
  "Voice Memos": voiceMemos,
  "Wallet": wallet,
  "Weather": weather
}