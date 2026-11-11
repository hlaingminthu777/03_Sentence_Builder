# Sentence Builder Practice App V1.7

G1–G12 English practice: ပုံကြည့်ပြီး စာလုံးစီ (Word) + ဝါကျစီ (Sentence)။ EN / မြန်မာ UI။ Offline PWA။

## GitHub Pages မှာ တင်နည်း
1. GitHub မှာ repository အသစ်ဖွင့် (ဥပမာ `sentence-builder`)
2. ဒီ folder ထဲက file အားလုံး (`index.html`, `manifest.webmanifest`, `sw.js`, `icons/`) ကို upload တင်
3. Settings → Pages → Branch: `main` / root → Save
4. `https://<username>.github.io/sentence-builder/` ကို ဖုန်း/tablet/PC မှာ ဖွင့်
5. Chrome: ⋮ → **Install app / Add to Home screen** · iPhone Safari: Share → **Add to Home Screen**
6. တစ်ခါ online ဖွင့်ပြီးရင် offline သုံးလို့ ရပြီ။ တင်ထားတဲ့ လေ့ကျင့်ခန်း (ပုံတွေပါ) ကို device ထဲမှာ သိမ်းထားတယ်။

> Version အသစ် တင်တိုင်း `sw.js` ထဲက `VERSION` ကို ပြောင်းပါ (sb-v1.7.0 → sb-v1.7.1)၊ မဟုတ်ရင် အဟောင်းပဲ ပြနေမယ်။

## လေ့ကျင့်ခန်း File Format (.csv / .xlsx)
ပထမ row = header။ Column နာမည်တွေ:

| Column | လို/မလို | ရေးနည်း |
|---|---|---|
| Type | ရွေးချယ် | `word` = ပုံ+letters စီ · `sentence` = ဝါကျစီ · ဗလာဆို space မပါရင် word၊ ပါရင် sentence |
| Sentence | **လိုတယ်** | အဖြေမှန်။ `|` ခံရင် အဲဒီမှာ block ခွဲ (`ap|ple`, `There are| three cats`)။ မခံရင် word = letter တစ်လုံးချင်း၊ sentence = စကားလုံးတစ်လုံးချင်း |
| AlsoCorrect | ရွေးချယ် | တခြား အဖြေမှန်။ များရင် `||` နဲ့ ခွဲ |
| Image | ရွေးချယ် | zip ထဲက ပုံ file နာမည် (`cat.png`၊ `.png` မပါလည်း ရ) · https link (online မှသာ) · emoji `🍎` |
| Hint | ရွေးချယ် | မြန်မာ အဓိပ္ပာယ် / clue |

* ဝါကျ အစ capital letter ကို ရေးထားတဲ့အတိုင်း ပြတယ် (v1.5 bug ပြင်ပြီး)။
* "Challenge" ဖွင့်ရင် ပထမစာလုံး အကြီးကို ဖျောက်တယ်၊ ဒါပေမယ့် `I` နဲ့ နာမည်တွေ (ဝါကျ အလယ်မှာ အကြီးနဲ့ ပေါ်ဖူးတဲ့ စကားလုံး – Maung, Yangon…) ကို အကြီးအတိုင်း ထားတယ်။ ဒီလို မသိနိုင်တဲ့ နာမည် (`Mya` တစ်ခါပဲ ပါ) ဆို ရှေ့မှာ `*` ခံ: `*Mya| is reading| a book.`
* v1.5 ရဲ့ Sentence / AlsoCorrect file ဟောင်းတွေ ဒီအတိုင်း သုံးလို့ ရတယ်။

## ပုံပါတဲ့ ZIP
```
my-lesson.zip
├── practice.csv   (သို့ practice.xlsx – တစ်ခုတည်း)
└── images/        (folder ထဲထည့်လည်း၊ မထည့်လည်း ရ)
    ├── cat.png
    └── sun.jpg
```
ပုံ type: png, jpg, jpeg, gif, webp, svg။ ပုံကို 400–800px လောက် ချုံ့ထားရင် ဖုန်းမှာ မြန်တယ်။
`sample-picture-pack.zip` ကို နမူနာ အဖြစ် ကြည့်ပါ။

## V1.7 မှာ အသစ်ပါလာတာ

အသံကို နားထောင်ပြီး Sentence blocks သို့ Word letters စီနိုင်ပါပြီ။ Audio မပါတဲ့ lesson ရဲ့ theme နဲ့ ကစားနည်း မပြောင်းပါ။ Play/Pause၊ Replay၊ segment progress နဲ့ 0.75× ခလုတ် ပါပါတယ်။ Mute က မှန်/မှား sound effects ကိုပဲ ပိတ်တာပါ။ Lesson audio ကို Play/Pause နဲ့ သီးခြားထိန်းပါ။

## Audio / Start / End

| Column | ဥပမာ | အဓိပ္ပာယ် |
|---|---|---|
| Audio | lesson.wav / LESSON / folder/lesson.wav | ZIP ထဲက အသံဖိုင်၊ extension နဲ့ folder မထည့်လည်းရ |
| Start | 12 / 12.5 / 0:12 | စတင်မည့် media time |
| End | 1:05 / 1:05.250 | ရပ်မည့် media time |

Column order ပြောင်းလို့ရပြီး အကြီး/အသေး မရွေးပါ။ Audio aliases: sound, mp3, listen, recording။ Start aliases: from, begin။ End aliases: to, until, stop။ `Start (mm:ss)` ကိုလည်း လက်ခံပါတယ်။
Time formats: `12`, `12.5` seconds; `0:12`, `1:05`, `1:05.250`; `0:01:05` (h:mm:ss)။ Start ဗလာ = 0၊ End ဗလာ = အသံဆုံးချိန်။ Audio ရှိပြီး အချိန်ဗလာဆို ဖိုင်အပြည့်ဖွင့်ပါမယ်။ သုံးခုလုံး ဗလာဆို player မပေါ်ပါ။ End က duration ထက်ကျော်ရင် ဖိုင်ဆုံးချိန်မှာ ရပ်ပါမယ်။

### နည်းလမ်း ၁ — အသံတစ်ဖိုင် + Start/End

```text
lesson.zip
├── practice.csv
└── audio/lesson.wav
```
```csv
Type,Sentence,Start,End
sentence,We| like| music.,0.5,1.5
sentence,We| read| books.,2,3
```
Audio cell ဗလာနဲ့ အချိန်ထည့်ရင် ZIP ထဲမှာ အသံတစ်ဖိုင်တည်း ရှိရပါမယ်။

### နည်းလမ်း ၂ — အသံဖိုင်များ + Audio

```text
lesson.zip
├── practice.csv
└── audio/
    ├── first.wav
    └── second.wav
```
```csv
Type,Sentence,Audio
sentence,We| like| music.,first.wav
sentence,We| read| books.,second.wav
```

### နည်းလမ်း ၃ — အသံတစ်ဖိုင် + Audio + Start/End

```text
lesson.zip
├── practice.csv
└── lesson.wav
```
```csv
Type,Sentence,Audio,Start,End
sentence,We| like| music.,lesson.wav,0.5,1.5
sentence,We| read| books.,lesson.wav,2,3
```

## Excel နဲ့ ဖိုင်အရွယ်အစား

Start/End ကို Excel မှာ **Text** format ထားပြီး `0:12` ရေးတာ အလွယ်ဆုံးပါ။ Time-formatted cells ရဲ့ ပြထားတဲ့အချိန်ကိုလည်း ဖတ်ပါတယ်။ ပုံမှန် numeric 0.5 ကိုတော့ 0.5 seconds လို့ယူပါတယ်။ Plain CSV/XLSX တင်လို့ရပေမယ့် audio ရဖို့ lesson နဲ့အသံကို ZIP တစ်ခုထဲ ထည့်ပါ။ Header ပါတဲ့ template နဲ့ Type ကို တိတိကျကျ ရေးထားတာ အကောင်းဆုံးပါ။ မူလ headerless delimiter/mode ခန့်မှန်းပုံ မပြောင်းပါ။
MP3 mono 64–96 kbps ကို အကြံပြုပါတယ်။ ZIP ကို သင်ခန်းစာတိုတို ခွဲထားပါ။ 100 MiB ထက်ကြီးရင် အကြံပြုစာပဲ ပြမယ်၊ hard size limit မရှိပါ။ MP3, WAV, M4A, AAC, OGG, OGA, OPUS, FLAC, WEBA ကို ခွဲသိပေမယ့် တကယ်ဖွင့်နိုင်မှုက browser codec ပေါ် မူတည်ပါတယ်။

## 0.75× နဲ့ Practise missed

0.75× ကိုနှိပ်ရင် အသံနှေးပြီး pitch မနိမ့်အောင် ထိန်းပေးပါတယ်။ ထပ်နှိပ်ရင် 1× ပြန်ဖြစ်ပါတယ်။ ဖွင့်နေစဉ်ပြောင်းနိုင်ပြီး item၊ round နဲ့ reload ပြီးလည်း ရွေးထားတာ မှတ်ထားပါတယ်။ အချိန်ပြတာက media time ဖြစ်လို့ နာရီအချိန်နဲ့ မတူနိုင်ပါ။
Practise missed မှာ item တစ်ခုချင်းစီရဲ့ အသံနဲ့ segment ကို ထိန်းထားပါတယ်။ Audio မပါတဲ့ missed item မှာ player မပေါ်ပါ။ Item ပြောင်းတာ၊ Load File ဖွင့်တာ၊ app ကို background ပို့တာမှာ အသံရပ်ပါတယ်။ ကိုယ်တိုင် Play နှိပ်မှ ဖွင့်ပါမယ်။

## နမူနာ

`samples/sample-single-audio.zip` နဲ့ `sample-multi-audio.zip` ကို တင်စမ်းပါ။ CSV တွေလည်း ပါပါတယ်။ အသံတွေက ကိုယ်တိုင်ဖန်တီးထားတဲ့ 16 kHz mono WAV tone sequences ဖြစ်ပြီး လူပြောအသံ မဟုတ်ပါ။ စမ်းသပ်ရေးအတွက် လွတ်လပ်စွာ ကူးသုံးနိုင်ပါတယ်။ မူလ sample-picture-pack.zip မပြောင်းပါ။

## ပြဿနာဖြေရှင်းနည်း

| ပြဿနာ | စစ်ရန် |
|---|---|
| Audio မပေါ် | ZIP ထဲက ဖိုင်နာမည်နဲ့ Load File ထဲက row warning စစ်ပါ။ သုံးကော်လံလုံး ဗလာဆို မပေါ်တာ ပုံမှန်ပါ။ |
| Time လက်မခံ | အနှုတ်မထည့်ပါနှင့်။ seconds/minutes 60 အောက်ဖြစ်ရမယ်။ End > Start၊ Start < duration ဖြစ်ရမယ်။ |
| ZIP ကြီးလွန်း | Lesson ခွဲပြီး MP3 mono သုံးပါ။ ဖုန်း memory နည်းရင် WAV ရှည်ရှည် ရှောင်ပါ။ |
| iPhone မှာ မကြား | Play ကိုနှိပ်ပါ။ Media volume၊ silent switch နဲ့ Bluetooth output စစ်ပါ။ တကယ့်ဖုန်းပေါ် စမ်းသပ်ရန် လိုသေးပါတယ်။ |
| Codec မရ | MP3 သို့ WAV ပြောင်းစမ်းပါ။ Browser တိုင်း codec အကုန်မရပါ။ |

## Update တင်နည်း

မူလ GitHub Pages လုပ်နည်းအတိုင်း files အားလုံးတင်ပါ။ နောက် update မှာ `sw.js` ရဲ့ `VERSION` ကို မြှင့်ပါ — `sb-v1.7.0` → `sb-v1.7.1`။ Upload ပြီး hard refresh သို့ app ကို ပိတ်ဖွင့်လုပ်ပါ။ Service-worker caching ပုံစံ မပြောင်းပါ။ Google Fonts ကို cache မရသေးရင် offline မှာ system fallback font သုံးပါတယ်။

## Changelog

- V1.7 — ZIP audio၊ segment playback၊ 0.75×၊ missed-round audio၊ new columns/templates နဲ့ warnings ထည့်ထားသည်။
- V1.6 — မူလ Sentence/Word practice၊ picture ZIP၊ local save နဲ့ PWA shell ကို ဆက်ထိန်းထားသည်။
