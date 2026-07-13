const itineraryData = [
  {
    day: 1,
    date: "2025-07-03",
    title: "Gyeongju — Arrival & Tomb Complex",
    distance: "~380km (Airport Limousine Bus)",
    time: "~2h45m transit",
    sights: "<b>Daereungwon Tomb Complex (대릉원).</b><br><br>The 23 massive grass tumuli of the Silla kingdom. These are not ruins but smooth, intact mounds, each 12–22m high, rising from the suburban streetscape. The interior of Cheonmachong (천마총) is open to visitors — a royal tomb filled with extraordinary gold artifacts discovered in 1973. Walk the full perimeter (approx. 1–1.5 hrs). Very flat, very relaxing.<br><br><b>Hwangridan-gil Street (황리단길).</b> The commercial alley just east of the tombs has good coffee shops and hanok-style boutiques. Great for late afternoon wandering at your own pace.<br><br><b>Donggung Palace & Wolji Pond (동궁과 월지).</b> The ancient royal retreat beautifully illuminated across the water. Spectacular at night — a 10–15 min walk from Hwangridan-gil. Free entry.",
    accommodation: "Gyeongju Hanok Guesthouse (e.g., Gyeongju Ran Hanok or similar). Traditional hanok compound with ondol rooms, steps from Daereungwon.<br><a href='https://www.trip.com/' target='_blank'>Trip.com Booking</a>",
    food: "<b>Lunch:</b> Grab snacks at Incheon Airport T1 departures or arrivals hall — there are plenty of options. Eat on the bus.<br><b>Dinner:</b> Hwangnam-ppang (황남빵) at Choi Yeonghwa Ppang — the original red bean bun shop. Buy warm ones to eat while walking.",
    practical: "Get a T-money card at Incheon Airport. Top up ₩50,000.<br><b>Getting to Gyeongju by bus:</b> After clearing immigration and collecting bags, follow signs to 'Intercity Bus' at Incheon Airport Terminal 1. Take the free shuttle bus (shuttle runs every 10–15 min, ~5 min ride) to the Airport Intercity Bus Terminal (located between T1 and T2). Buy a ticket to 'Gyeongju' at the counter or self-service machine — look for '경주' (Gyeongju). Buses depart roughly every 30–60 min. The journey takes ~2h15m and costs ₩22,000–28,000. You can also buy tickets at the counter in English (bring your passport). The bus drops you at Gyeongju Express Bus Terminal — from there, take a taxi (~₩8,000–12,000, 15 min) to your guesthouse in central Gyeongju.<br>Alternative: AREX to Seoul Station + subway Line 2 to Express Bus Terminal (동서울터미널) + bus to Gyeongju. This is more complex with luggage but gives you flexibility on timing.<br>Gyeongju has no subway. Use local city buses (Naver Maps handles Korean bus routing well) or taxis, which are inexpensive.<br>Daereungwon is only a 10–15-minute walk from most guesthouses in central Gyeongju.",
    spots: [
      { name: "Incheon Airport (인천공항)", type: "waypoint", lat: 37.4602, lng: 126.4407 },
      { name: "Daereungwon Tomb Complex (대릉원)", type: "sight", lat: 35.8297, lng: 129.2264 },
      { name: "Hwangridan-gil Street (황리단길)", type: "sight", lat: 35.8320, lng: 129.2310 },
      { name: "Donggung Palace & Wolji Pond (동궁과 월지)", type: "sight", lat: 35.8270, lng: 129.2240 },
      { name: "최영화빵 (Choi Yeonghwa Ppang)", type: "restaurant", lat: 35.8310, lng: 129.2280 },
      { name: "Gyeongju Hanok Guesthouse", type: "hotel", lat: 35.8280, lng: 129.2270 }
    ]
  },
  {
    day: 2,
    date: "2025-07-04",
    title: "Gyeongju → Busan — UNESCO Sites & Market Culture",
    distance: "~130km (Intercity Bus)",
    time: "~2h transit",
    sights: "<b>Morning: Wonjo Kongguk Breakfast → Seokguram Grotto → Bulguksa Temple.</b><br><br><b>9:00 AM — Wonjo Kongguk (원조 콩국수).</b> Walk 5 min from your hanok guesthouse. Order warm soybean soup (kongguk) with sticky rice balls to share, plus a pajeon (scallion pancake). Fast, comforting fuel before the temples.<br><br><b>9:40 AM — Bus to Bulguksa.</b> Catch Bus No. 10 or 11 east toward the mountains (~30–40 min).<br><br><b>10:30 AM — Shuttle to Seokguram Grotto.</b> At the Bulguksa bus stop, do NOT enter the temple yet. Immediately line up for Bus No. 12 (shuttle runs once per hour, usually at the bottom of the hour).<br><br><b>11:00 AM – 12:00 PM — Seokguram Grotto.</b> Beautiful shaded 15-min walk through forest to the grotto. Small glass-enclosed stone chamber with an 8th-century Buddha statue — no photos allowed. Lines form fast in July; you get about 10 minutes inside. Walk back to parking lot, catch Bus No. 12 down (usually leaves top at :15 past the hour).<br><br><b>12:30 PM – 2:00 PM — Bulguksa Temple.</b> Now explore at your own pace. Walk up to see the iconic double-staircase stone bridges (Cheongungyo and Baegungyo) — UNESCO-listed, most famous photo spot. Main courtyard (Daeungjeon): two massive contrasting pagodas — Dabotap (ornate, look for the single remaining stone lion at the base; Japanese stole three during occupation) and Seokgatap (minimalist, austere). Behind the main hall in Geungnakjeon area: look for the famous wooden pig carving hidden under the eaves, then rub the golden pig statue in the courtyard for good luck!<br><br><b>2:00 PM — Bus back to city.</b> Catch Bus 10 or 11 into central Gyeongju.<br><br><b>2:40 PM — Pick up luggage</b> at your hanok guesthouse.<br><br><b>3:00 PM — Head to Busan.</b> Taxi to Gyeongju Intercity Bus Terminal (~₩8,000–12,000).<br><br><b>Afternoon: Toyoko Inn Jungang Station check-in.</b><br><br><b>Jagalchi Market (자갈치시장).</b> Korea's largest seafood market. Walk the multi-level building, watch live fish and shellfish being sold, see the auction floor. Have your selection cooked to order at restaurants on upper floors.<br><br><b>BIFF Square (비프광장).</b> Historic square with street food, movie posters from Busan International Film Festival. Try the ssiat hotteok (sweet seed-filled pancakes).<br><br><b>Gukje Market.</b> Directly across from BIFF Square, right behind the street food stalls. Sprawling maze-like traditional market — vintage clothing, electronics, Korean homewares. Fantastic for getting lost and souvenir shopping.<br><br><b>Busan Tower / Yongdusan Park (After Dinner).</b> Look up from Nampo-dong — Busan Tower glows on the hill above. Take the giant covered outdoor escalator up from the main shopping street to Yongdusan Park (~8:00–8:30 PM). Beautiful quiet park with sweeping night views of the harbor. Pay to go up the tower or enjoy free views from the park base.",
    accommodation: "Toyoko Inn Busan Jungang Station (東京堂인釜山中央駅). Right on Line 1 subway station. Clean, reliable Japanese chain — no-frills but functional and well-located for transit.<br><a href='https://www.trip.com/' target='_blank'>Trip.com Booking</a>",
    food: "<b>Breakfast:</b> Wonjo Kongguk (원조 콩국수) — warm soybean soup with sticky rice balls + pajeon scallion pancake. Opens 9 AM, walk from guesthouse.<br><b>Lunch:</b> Quick lunch in Gyeongju after Bulguksa (~1:00 PM).<br><b>Dinner:</b> Seafood at Jagalchi Market (cooked to order) + ssiat hotteok at BIFF Square.",
    practical: "<b>Gyeongju → Busan transit:</b> Taxi from guesthouse to Gyeongju Express Bus Terminal (경주터미널) ~₩8,000–12,000 (15 min). Buy ticket to 'Busan' (부산) — look for '부산종합버스터미널'. Buses every 30–60 min, ~1h45m–2h journey, ₩10,000–15,000. Bus drops you at Dong-Busan Terminal (동부산터미널) — take subway Line 1 westbound toward Jagalchi (3 stops, ~8 min) to Toyoko Inn Jungang Station area.<br><b>Temple bus strategy:</b> Bus 10 or 11 from central Gyeongju to Bulguksa stop. From there, Bus No. 12 shuttle goes up to Seokguram (runs hourly). Do Seokguram FIRST, then Bulguksa — biggest mistake is doing Bulguksa first and missing the shuttle.<br><b>Busan transit:</b> Excellent subway. Jungang Station (Line 1) is directly at your hotel — Jagalchi Market is 2 stops, BIFF Square/Gukje Market area is nearby.<br><b>Yongdusan escalator:</b> Giant covered outdoor escalator on main Nampo-dong shopping street takes you straight up to Yongdusan Park — no hiking needed.",
    spots: [
      { name: "Wonjo Kongguk (원조 콩국수)", type: "restaurant", lat: 35.8290, lng: 129.2260 },
      { name: "Gyeongju Express Bus Terminal (경주터미널)", type: "waypoint", lat: 35.8300, lng: 129.2200 },
      { name: "Bulguksa Temple (불국사)", type: "sight", lat: 35.8082, lng: 129.3337 },
      { name: "Seokguram Grotto (석굴암)", type: "sight", lat: 35.8297, lng: 129.3460 },
      { name: "Jagalchi Market (자갈치시장)", type: "sight", lat: 35.1480, lng: 129.0600 },
      { name: "BIFF Square (비프광장)", type: "sight", lat: 35.1470, lng: 129.0580 },
      { name: "Gukje Market (국제시장)", type: "sight", lat: 35.1460, lng: 129.0570 },
      { name: "Busan Tower / Yongdusan Park", type: "sight", lat: 35.1400, lng: 129.0600 },
      { name: "Toyoko Inn Busan Jungang", type: "hotel", lat: 35.1470, lng: 129.0560 }
    ]
  },
  {
    day: 3,
    date: "2025-07-05",
    title: "Busan → Seoul — Coastal Walk, Puffer Fish & Evening Bus to COEX",
    distance: "~380km (Intercity Bus)",
    time: "~4h transit (~7pm–11pm)",
    sights: "<b>Morning: Haedong Yonggungsa Temple (해동용궁사).</b><br><br>One of the few temples in Korea built right on the coastline. The main hall sits on a rocky outcrop with waves crashing below — stunning views and peaceful atmosphere.<br><br>Take Bus 132 from Jungang Station area (~30 min). Arrive by 9:30 to beat the crowds.<br><br><b>Afternoon: Haeundae Beach Walk (해운대해수욕장).</b> Flat, easy stroll along Busan's most famous beach. Crystal clear water in July. Walk the full length of the beach promenade — no hiking, no stairs, no cable car or train needed. Refreshing dip if you dare (it's cold!).<br><br>Continue to <b>Mipo → Cheongsapo Coastal Boardwalk (미포→청사포 해안 산책로).</b> Gorgeous, easy 2–3 km cliffside path with ocean views the whole way. No hiking, no stairs.<br><br><b>Cheongsapo (청사포).</b> Explore the village — twin lighthouses (Cheongsapo Light) and ocean-view cafes. Relaxed, artsy vibe.<br><br><b>Evening: Puffer Fish Dinner (복어 전문점).</b> Head to Nampo-dong/Jagalchi area — several dedicated puffer fish restaurants nearby. Puffer fish (bokeo) is typically served as sashimi (회), grilled (구이), or in hot pot (전골). Prices: ₩30,000–80,000 per person depending on restaurant and preparation. Search \"복어전문점\" on Naver Maps near Jagalchi Market.<br><br><b>Intercity Bus to Seoul.</b><br><br>Your 7:00 PM bus from Busan to Seoul Express Bus Terminal (서울남부터미널 / Seoul Nambu Terminal). Arrive ~11:00 PM. From the terminal, take subway Line 3 (express) to COEX (Yeoksam Station, Line 2) — about 30 min. Or take a taxi (~₩25,000–35,000, 40 min) directly to Grand Intercontinental COEX.",
    accommodation: "Grand Intercontinental Seoul COEX (그랜드 인터컨티넨탈 서울 코엑스). Right at the conference venue. Ultra-convenient for ICML days.<br><a href='https://www.trip.com/' target='_blank'>Trip.com Booking</a>",
    food: "<b>Breakfast:</b> Toyoko Inn Japanese-style buffet (included in room rate) — rice, miso soup, pickles, tamagoyaki.<br><b>Lunch:</b> Haeundae Beach area — seafood restaurants along the coast.<br><b>Dinner:</b> Puffer fish (복어) at a specialty restaurant near Jagalchi Market/Nampo-dong.",
    practical: "Breakfast at Toyoko Inn (included in room rate). Leave luggage at front desk or in room — no need for coin lockers.<br><b>Haedong Yonggungsa:</b> Take Bus 132 from Jungang Station area (~30 min). Arrive by 9:30 to beat crowds.<br><b>Haeundae Beach walk:</b> Flat promenade, no cable car or train needed. Allow 2–3 hours for full beach + Mipo→Cheongsapo boardwalk (~5 km total).<br><b>Puffer fish (복어):</b> Search \"복어전문점\" on Naver Maps near Jagalchi Market. Look for 4.0+ stars with Korean reviews. Typical dishes: sashimi (회), grilled (구이), hot pot (전골). ₩30,000–80,000 per person.<br><b>Bus to Seoul (7:00 PM):</b> You already have this ticket. Head to Busan Express Bus Terminal (부산종합버스터미널) — take subway Line 1 from Jungang Station to Busan Station (2 stops), the terminal is connected. Arrive at terminal by 6:30 PM for boarding.",
    spots: [
      { name: "Haedong Yonggungsa Temple (해동용궁사)", type: "sight", lat: 35.1640, lng: 129.1820 },
      { name: "Haeundae Beach (해운대해수욕장)", type: "sight", lat: 35.1680, lng: 129.1640 },
      { name: "Mipo → Cheongsapo Boardwalk", type: "sight", lat: 35.1580, lng: 129.1450 },
      { name: "Jagalchi Market / Puffer Fish Restaurants", type: "restaurant", lat: 35.1480, lng: 129.0600 },
      { name: "Busan Express Bus Terminal (부산종합버스터미널)", type: "waypoint", lat: 35.1540, lng: 129.0570 },
      { name: "Seoul Nambu Bus Terminal (서울남부터미널)", type: "waypoint", lat: 37.5540, lng: 127.0060 },
      { name: "Grand Intercontinental COEX", type: "hotel", lat: 37.5126, lng: 127.0590 }
    ]
  },
  {
    day: 4,
    date: "2025-07-06",
    title: "ICML Day 1 — Temple Lunch Escape",
    distance: "Subway to Gangnam",
    time: "Conference day",
    sights: "<b>COEX Convention Centre (코엑스 컨벤션센터).</b><br><br>Monday 7 – Thursday 10 July — ICML Conference at COEX, Gangnam. Technical sessions and networking.<br><br><b>Lunch Break Escape: Bongeunsa Temple (봉은사).</b> Across Yeongdong-daero from COEX, 5-min walk. The 23m standing Maitreya Buddha in stone, the cedar forest path behind the main halls. Free entry.<br><br><b>Evening: Ikseon-dong (익선동).</b> Narrow alleys behind Changdeokgung Palace, converted hanok buildings housing craft tea shops, makgeolli (rice wine) bars, and small restaurants. Very atmospheric at dusk.",
    accommodation: "Grand Intercontinental Seoul COEX (continued)",
    food: "<b>Lunch:</b> COEX underground mall — naengmyeon (cold noodles) or bibimbap options.<br><b>Dinner:</b> Makgeolli + pancakes (makgeolli + bindaetteok) at an Ikseon-dong hanok bar.",
    practical: "Subway Line 2 from COEX area to Ikseon-dong (Anguk Station) takes ~30 min. Book in advance via Korail — July is peak season.<br>Naver Maps is essential for Seoul navigation. Kakao Maps also excellent.",
    spots: [
      { name: "COEX Convention Centre", type: "sight", lat: 37.5126, lng: 127.0590 },
      { name: "Bongeunsa Temple (봉은사)", type: "sight", lat: 37.5048, lng: 127.0396 },
      { name: "Ikseon-dong Makgeolli Bars", type: "restaurant", lat: 37.5740, lng: 126.9950 },
      { name: "Grand Intercontinental COEX", type: "hotel", lat: 37.5126, lng: 127.0590 }
    ]
  },
  {
    day: 5,
    date: "2025-07-07",
    title: "ICML Day 2 — Temple Lunch Escape",
    distance: "Subway to Gangnam",
    time: "Conference day",
    sights: "<b>COEX Convention Centre (코엑스 컨벤션센터).</b><br><br>Monday 7 – Thursday 10 July — ICML Conference at COEX, Gangnam. Technical sessions and networking.<br><br><b>Lunch Break Escape: Bongeunsa Temple (봉은사).</b> Across Yeongdong-daero from COEX, 5-min walk. The 23m standing Maitreya Buddha in stone, the cedar forest path behind the main halls. Free entry.",
    accommodation: "Grand Intercontinental Seoul COEX (continued)",
    food: "<b>Lunch:</b> COEX underground mall — naengmyeon (cold noodles) or bibimbap options.<br><b>Dinner:</b> COEX area or Apgujeong-dong.",
    practical: "Subway Line 2 from COEX area. Naver Maps is essential for Seoul navigation.",
    spots: [
      { name: "COEX Convention Centre", type: "sight", lat: 37.5126, lng: 127.0590 },
      { name: "Bongeunsa Temple (봉은사)", type: "sight", lat: 37.5048, lng: 127.0396 },
      { name: "Grand Intercontinental COEX", type: "hotel", lat: 37.5126, lng: 127.0590 }
    ]
  },
  {
    day: 6,
    date: "2025-07-08",
    title: "ICML Day 3 — Temple Lunch Escape",
    distance: "Subway to Gangnam",
    time: "Conference day",
    sights: "<b>COEX Convention Centre (코엑스 컨벤션센터).</b><br><br>Monday 7 – Thursday 10 July — ICML Conference at COEX, Gangnam. Technical sessions and networking.<br><br><b>Lunch Break Escape: Bongeunsa Temple (봉은사).</b> Across Yeongdong-daero from COEX, 5-min walk. The 23m standing Maitreya Buddha in stone, the cedar forest path behind the main halls. Free entry.",
    accommodation: "Grand Intercontinental Seoul COEX (continued)",
    food: "<b>Lunch:</b> COEX underground mall — naengmyeon (cold noodles) or bibimbap options.<br><b>Dinner:</b> COEX area or Apgujeong-dong.",
    practical: "Subway Line 2 from COEX area. Naver Maps is essential for Seoul navigation.",
    spots: [
      { name: "COEX Convention Centre", type: "sight", lat: 37.5126, lng: 127.0590 },
      { name: "Bongeunsa Temple (봉은사)", type: "sight", lat: 37.5048, lng: 127.0396 },
      { name: "Grand Intercontinental COEX", type: "hotel", lat: 37.5126, lng: 127.0590 }
    ]
  },
  {
    day: 7,
    date: "2025-07-09",
    title: "ICML Day 4 — Temple Lunch Escape",
    distance: "Subway to Gangnam",
    time: "Conference day",
    sights: "<b>COEX Convention Centre (코엑스 컨벤션센터).</b><br><br>Monday 7 – Thursday 10 July — ICML Conference at COEX, Gangnam. Technical sessions and networking.<br><br><b>Lunch Break Escape: Bongeunsa Temple (봉은사).</b> Across Yeongdong-daero from COEX, 5-min walk. The 23m standing Maitreya Buddha in stone, the cedar forest path behind the main halls. Free entry.",
    accommodation: "Grand Intercontinental Seoul COEX (continued)",
    food: "<b>Lunch:</b> COEX underground mall — naengmyeon (cold noodles) or bibimbap options.<br><b>Dinner:</b> COEX area or Apgujeong-dong.",
    practical: "Subway Line 2 from COEX area. Naver Maps is essential for Seoul navigation.",
    spots: [
      { name: "COEX Convention Centre", type: "sight", lat: 37.5126, lng: 127.0590 },
      { name: "Bongeunsa Temple (봉은사)", type: "sight", lat: 37.5048, lng: 127.0396 },
      { name: "Grand Intercontinental COEX", type: "hotel", lat: 37.5126, lng: 127.0590 }
    ]
  },
  {
    day: 8,
    date: "2025-07-10",
    title: "ICML Final Day — Wrap-Up",
    distance: "Subway to Gangnam",
    time: "Conference day",
    sights: "<b>COEX Convention Centre (코엑스 컨벤션센터).</b><br><br>Final conference day. Wrap sessions, collect luggage — your COEX hotel can store bags while you finish.<br><br><b>Starfield Library (스타필드 코엑스 아카이브).</b> Inside COEX mall. The iconic multi-story bookshelf. Free, photogenic, 15 minutes.<br><br><b>COEX Underground Mall.</b> Final food shopping and last-minute souvenir browsing.",
    accommodation: "Grand Intercontinental Seoul COEX (final night at COEX)",
    food: "<b>Lunch:</b> COEX underground mall.<br><b>Dinner:</b> Upscale Korean in Apgujeong-dong or COEX area.",
    practical: "This is a lighter day — conference wraps early. Use the afternoon for final sightseeing or shopping.<br>COEX underground mall connects directly to the subway — useful for quick lunch runs.",
    spots: [
      { name: "COEX Convention Centre", type: "sight", lat: 37.5126, lng: 127.0590 },
      { name: "Starfield Library (스타필드 코엑스)", type: "sight", lat: 37.5120, lng: 127.0580 },
      { name: "Grand Intercontinental COEX", type: "hotel", lat: 37.5126, lng: 127.0590 }
    ]
  },
  {
    day: 9,
    date: "2025-07-11",
    title: "Seoul — Rest & Recovery Day",
    distance: "Walking / Subway",
    time: "Free day",
    sights: "<b>Rest & Recovery.</b><br><br>A lighter day after 4 conference days. Sleep in, enjoy the hotel amenities, or take a gentle walk around COEX/Starfield Mall.<br><br><b>Optional: Gangnam District Exploration.</b> Apgujeong-dong for high-end shopping, Cheongdam-dong for K-beauty stores and cafes. Or stay local — COEX has excellent dining and the Starfield Library is worth another visit.",
    accommodation: "Grand Intercontinental Seoul COEX (continued)",
    food: "<b>Breakfast:</b> Hotel buffet or COEX dining.<br><b>Lunch:</b> COEX underground mall or Apgujeong-dong.<br><b>Dinner:</b> Upscale Korean in Gangnam area.",
    practical: "This is a recovery day — no fixed schedule. Use it to rest, explore Gangnam at your own pace, or prepare for the move north of the river tomorrow.<br>Check out of COEX on Jul 12 morning.",
    spots: [
      { name: "COEX Convention Centre", type: "sight", lat: 37.5126, lng: 127.0590 },
      { name: "Apgujeong-dong (압구정동)", type: "sight", lat: 37.5270, lng: 127.0280 },
      { name: "Grand Intercontinental COEX", type: "hotel", lat: 37.5126, lng: 127.0590 }
    ]
  },
  {
    day: 10,
    date: "2025-07-12",
    title: "Seoul — Hotel Junoh Check-in & Han River Evening",
    distance: "Walking / Subway",
    time: "~3h transit (COEX → Jongno)",
    sights: "<b>Check-in: Hotel Junoh.</b><br><br>Drop your bags and settle in.<br><br><b>Late Afternoon: Local Exploration.</b> Walk around Hotel Junoh's area. Look for local cafes, convenience stores (CU, GS25), and any nearby parks or streets with character.<br><br><b>Evening: Han River Park (한강공원).</b> Head to the nearest Han River park — Yeouido Hangang Park or Banpo Hangang Park are great options. Rent a bike, grab street food from vendors along the riverbank, and enjoy the skyline views. This is a beloved Seoul pastime — locals picnic, play frisbee, and grill soondae-guk (blood sausage soup) by the water at sunset.",
    accommodation: "Hotel Junoh (July 12–14)",
    food: "<b>Breakfast:</b> COEX hotel or nearby cafe.<br><b>Lunch:</b> Light meal in Gangnam before moving north.<br><b>Dinner/Snack:</b> Han River Park — street food vendors (tteokbokki, hotteok, fried chicken) + soondae-guk.",
    practical: "Check out of COEX by 10:00 AM. Take subway/taxi to Hotel Junoh (~30–45 min). Drop bags.<br>Get a T-money card if you don't have one already (convenience stores sell them for ₩2,500 + ₩25,000 credit).<br>Han River Park: Yeouido (Line 9 to Yeouinaru) or Banpo (Line 3/7 to Banpo). Bike rentals ~₩1,000–2,000/hour.",
    spots: [
      { name: "Hotel Junoh", type: "hotel", lat: 37.5665, lng: 126.9780 },
      { name: "COEX Convention Centre", type: "sight", lat: 37.5126, lng: 127.0590 },
      { name: "Yeouido Hangang Park (여의도한강공원)", type: "sight", lat: 37.5240, lng: 126.9240 },
      { name: "Banpo Hangang Park (반포한강공원)", type: "sight", lat: 37.5140, lng: 126.9830 }
    ]
  },
  {
    day: 11,
    date: "2025-07-13",
    title: "Seoul — Namsan Tower & Myeongdong Shopping",
    distance: "Walking / Subway",
    time: "Full day",
    sights: "<b>Morning: Namsan Seoul Tower (N서울타워).</b><br><br>Take the Namsan Cable Car up for panoramic views of Seoul. The tower itself has observation decks and love locks. Allow 2–3 hours total.<br><br><b>Afternoon: Myeongdong Shopping District.</b> Korea's premier shopping area — cosmetics, fashion, street food. Great for last-minute souvenirs.<br><br><b>Evening: Myeongdong Street Food.</b> Try the famous street food stalls — egg bread, tteokbokki, mandu (dumplings).",
    accommodation: "Hotel Junoh (July 12–14)",
    food: "<b>Breakfast:</b> Hotel Junoh or nearby cafe.<br><b>Lunch:</b> Light meal near Namsan or Myeongdong.<br><b>Dinner:</b> Myeongdong street food or nearby restaurant.",
    practical: "Namsan Cable Car: Take subway to Chungmuro Station (Lines 3/4), walk up or take the cable car. ~₩12,000–15,000 round trip.<br>Myeongdong: Line 4 to Myeongdong Station. Allow 2–3 hours for shopping and food.",
    spots: [
      { name: "Namsan Seoul Tower", type: "sight", lat: 37.5514, lng: 126.9882 },
      { name: "Myeongdong Shopping District", type: "sight", lat: 37.5630, lng: 126.9850 },
      { name: "Hotel Junoh", type: "hotel", lat: 37.5665, lng: 126.9780 }
    ]
  },
  {
    day: 12,
    date: "2025-07-14",
    title: "Seoul — Secret Garden & Departure Prep",
    distance: "Walking / Subway",
    time: "Full day",
    sights: "<b>10:30 AM – 1:00 PM: Gyeongbokgung Palace — Huwon (Secret Garden).</b><br><br>Guided tour of the Secret Garden. Meet at the designated entrance on time. The Huwon is a private royal retreat of pavilions and lotus ponds set in natural forest. Allow 2.5 hours total.<br><br><b>Afternoon: Bukchon Hanok Village & Insadong.</b> After the tour, walk to nearby Bukchon (traditional hanok houses) and Insadong (cultural street with galleries, tea shops). Relaxed afternoon wandering.<br><br><b>Evening: Checkout & Leisure.</b> Return to Hotel Junoh for checkout. If time permits, grab a final meal or coffee near your hotel before heading to the airport.",
    accommodation: "— Departure day —",
    food: "<b>Breakfast:</b> Hotel Junoh.<br><b>Lunch:</b> Light meal near Gyeongbokgung or Insadong.<br><b>Dinner:</b> Final Seoul meal near Hotel Junoh or airport.",
    practical: "Secret Garden tour starts at 10:30 AM sharp — arrive 15 minutes early.<br>Check out of Hotel Junoh by 11:00 AM (or store luggage if checkout is later).<br>AREX from Seoul Station to Incheon Airport (~43 min, ₩9,500). Plan to leave Seoul Station by ~12:30 PM for a 4:45 PM flight.",
    spots: [
      { name: "Gyeongbokgung Palace (경복궁)", type: "sight", lat: 37.5796, lng: 126.9770 },
      { name: "Gyeongbokgung Secret Garden (후원)", type: "sight", lat: 37.5820, lng: 127.0100 },
      { name: "Bukchon Hanok Village (북촌한옥마을)", type: "sight", lat: 37.5840, lng: 126.9900 },
      { name: "Insadong (인사동)", type: "sight", lat: 37.5790, lng: 126.9850 },
      { name: "Hotel Junoh", type: "hotel", lat: 37.5665, lng: 126.9780 }
    ]
  },
  {
    day: 12,
    date: "2025-07-14",
    title: "Seoul — Departure Day",
    distance: "~50km (AREX)",
    time: "~45 min transit",
    sights: "<b>Morning: Cheonggyecheon Stream (청계천).</b><br><br>A final morning walk along the sunken stream, right in the heart of the city. Peaceful, green, and a unique urban oasis.<br><br><b>Midday: AREX to Incheon Airport.</b><br><br>Check out of hotel and head to Seoul Station. Board the dedicated AREX Express Train at ~12:30 PM.<br><br><b>Afternoon: Incheon Airport.</b><br><br>Arrive at ICN by ~1:15 PM. Three and a half hours before your 4:45 PM flight to clear security, explore the massive terminals, and relax in the lounge.",
    accommodation: "— Departure day —",
    food: "<b>Breakfast:</b> Coffee and pastry near your hotel or at Seoul Station.<br><b>Lunch:</b> Incheon Airport T1 departures hall — excellent food options, Korean and international.",
    practical: "Cheonggyecheon Stream runs from Seoul Station area eastward — easy walk from most Jongno hotels.<br>AREX Seoul → Incheon takes ~43 min. Reserved seat recommended. ₩9,500.<br>Singapore Airlines check-in opens 3 hours before departure (13:45 for your 16:45 flight). Incheon is large but efficient — allow 90 minutes from arrival to airside.",
    spots: [
      { name: "Cheonggyecheon Stream (청계천)", type: "sight", lat: 37.5690, lng: 126.9800 },
      { name: "Seoul Station (AREX departure)", type: "waypoint", lat: 37.5545, lng: 126.9706 },
      { name: "Incheon Airport T1 (인천공항 T1)", type: "waypoint", lat: 37.4602, lng: 126.4407 }
    ]
  }
];

// REMOVED/ALTERNATIVE ITINERARY — what we left out from the original v1
const removedItinerary = [
  {
    day: "V1-Day 2",
    title: "Seoraksan Ridge Hike (REMOVED)",
    reason: "808 iron stairs + ridge trail = unsustainable in July heat for solo travel",
    original_sights: "<b>Ulsanbawi Rock (울산바위).</b><br>The iconic granite monolith with 808 iron stairs to the summit. Steep, exposed, no shade.<br><br><b>Gwongeumseong Fortress (관음성).</b> Cliff-top fortress ruins on the ridge trail. Requires full-day commitment.<br><br><b>Ridge Trail (능선길).</b> Connects Ulsanbawi to Seongiamsa Temple — 6+ hours of continuous uphill/downhill hiking.",
    alternative: "N/A — Seoraksan/Sokcho completely removed from itinerary in favor of Seoul cultural exploration.",
    transport: "Express bus from Dong Seoul Bus Terminal to Sokcho (3h). Local bus #7 to Seoraksan entrance.",
    hotel_original: "Seoraksan Guesthouse near Gwongeumseong entrance",
    hotel_current: "N/A — eliminated from route"
  },
  {
    day: "V1-Day 3",
    title: "Andong Hahoe Village (REMOVED)",
    reason: "Backtracking — Seoul → Andong → Seoul adds 6+ hours of transit for minimal unique value vs Gyeongju",
    original_sights: "<b>Hahoe Folk Village (하회마을).</b> UNESCO World Heritage. Traditional yangban village with stilt houses along the river. Mask dance performances.<br><br><b>Buyeo Palace (부용정).</b> Pavilion on the Nakdong River, iconic photo spot.<br><br><b>Pungyang Nongyo Mask Dance.</b> Traditional performance (seasonal).",
    alternative: "<b>Gyeongju instead:</b> Same UNESCO-level historical depth (Silla kingdom tombs, temples) with zero backtracking. Gyeongju is more walkable and has better food scene.",
    transport: "KTX Seoul → Andong (1h45m). Andong → Seoul (1h45m) — round trip = 3.5h transit for one day.",
    hotel_original: "Andong Hanok Stay near Hahoe Village",
    hotel_current: "N/A — eliminated from route"
  },
  {
    day: "V1-Day 4",
    title: "Naksansa Temple & Towangseong Falls (REMOVED)",
    reason: "Redundant with Seoraksan day — same mountain area, adds transit complexity",
    original_sights: "<b>Naksansa Temple (낙산사).</b> Cliffside temple overlooking the East Sea. Historic temple with mountain backdrop.<br><br><b>Towangseong Falls (토왕성폭포).</b> Waterfall valley trail — moderate hike through forest.",
    alternative: "N/A — Naksansa Temple also removed. Seoul cultural exploration provides richer historical depth.",
    transport: "Local bus #7 from Sokcho to Naksansa (30 min). Falls require 1h round-trip hike.",
    hotel_original: "Sokcho guesthouse near Naksansa",
    hotel_current: "N/A — eliminated from route"
  },
  {
    day: "V1-Day 5-8",
    title: "Conference Days (UNCHANGED)",
    reason: "",
    original_sights: "<b>ICML at COEX, Gangnam.</b><br>Monday 7 – Thursday 10 July — same as current itinerary.",
    alternative: "Identical to current plan. No changes needed.",
    transport: "Subway Line 2 to COEX Station (Yeoksam). Walking from hotel.",
    hotel_original: "Grand Intercontinental Seoul COEX",
    hotel_current: "Grand Intercontinental Seoul COEX (unchanged)"
  }
];

// TRANSPORT & HOTEL SUMMARY
const routeSummary = {
  transport: [
    { segment: "Incheon Airport → Gyeongju", method: "Airport Limousine Bus (direct)", duration: "~2h15m", cost: "₩22,000–28,000" },
    { segment: "Gyeongju → Busan", method: "Intercity Bus (경주→부산)", duration: "~1h45m–2h", cost: "₩10,000–15,000" },
    { segment: "Busan → Seoul", method: "Intercity Bus (부산→서울남부)", duration: "~3h45m–4h", cost: "Already purchased (7 PM departure)" },
    { segment: "Seoul → Incheon", method: "AREX (Airport Railroad)", duration: "~43 min", cost: "₩9,500" }
  ],
  hotels: [
    { nights: "Night 1", location: "Gyeongju (central)", hotel: "Gyeongju Hanok Guesthouse", reason: "Traditional hanok experience, walking distance to Daereungwon." },
    { nights: "Night 2", location: "Busan (Jungang Station)", hotel: "Toyoko Inn Busan Jungang Station", reason: "Right on Line 1 subway. Walking distance to Jagalchi Market & BIFF Square." },
    { nights: "Nights 3–8", location: "Seoul (Gangnam/COEX)", hotel: "Grand Intercontinental Seoul COEX", reason: "Right at the conference venue. Ultra-convenient for ICML days (Jul 5–12)." },
    { nights: "Nights 9–10", location: "Seoul (Jongno/Anguk)", hotel: "Hotel Junoh", reason: "Base for Secret Garden tour (Jul 14), Bukchon, and Insadong. July 12–14." },
    { nights: "Night 11", location: "Incheon Airport area", hotel: "N/A — AREX from Seoul Station, depart 16:45", reason: "No overnight needed. AREX at ~12:30 PM, arrive ICN by 1:15 PM." }
  ],
  removed_items: [
    { item: "Seoraksan Ridge Hike (Ulsanbawi + 808 stairs)", reason: "Unsustainable in July heat for solo travel", saved_time: "~6 hours hiking" },
    { item: "Andong Hahoe Village", reason: "Backtracking adds 3.5h transit for minimal unique value vs Gyeongju", saved_time: "~7 hours total (transit + visit)" },
    { item: "Naksansa Temple & Towangseong Falls", reason: "Redundant with Seoraksan area; adds transit complexity", saved_time: "~4 hours (transit + hike)" },
    { item: "Sokcho", reason: "Long transit (4h each way) for minimal unique value vs Seoul cultural exploration. Better departure logistics staying in Seoul.", saved_time: "~8 hours transit + 2 nights hotel" }
  ]
};
