// ============================================================
//  SITE CONFIGURATION — Edit everything here
//  This is the single source of truth for all content on the
//  website. Replace placeholder text, names, and image URLs
//  with your real content.
// ============================================================

export const siteData = {
  // ---- General ----
  name: 'ዘ ብሬክ',

  shortTagline: 'እያንዳንዱ ጨዋታ ታሪክ አለው።',

  heroHeading: 'እያንዳንዱ ጨዋታ ታሪክ አለው።',

  heroSubheading: 'ጥሩ ጨዋታ። ጥሩ ሰዎች። ጥሩ ትውስታዎች።',

  heroIndicator: '2 ጠረጴዛዎች • አንድ ቦታ • የማይጠገቡ ጨዋታዎች',
  // ---- Owner ----
  owner: {
    name: 'ዳዊት ሳሙኤል',
    sectionTitle: 'ባለቤቱን ያግኙ',
    subtitle: 'ከዚህ ቦታ ጀርባ ያለው ሰው።',
    bio: 'ዳዊት ሳሙኤል ሰዎች ተሰብስበው አብረው የሚጫወቱ፣ የሚስቁ፣ የሚወዳደሩ እና ከጓደኞቻቸው ጋር ደስ የሚላቸውን ጊዜ የሚያሳልፉበትን ቦታ ፈጠረ። በትንሽ ክፍል ውስጥ ከአንድ ጠረጴዛ የጀመረው ነገር፣ ዛሬ የአካባቢው ሰዎች ተወዳጅ መሰብሰቢያ ሆኗል። ይህ ቦታ ተወዳጅ የሆነው በጠረጴዛዎቹ ምክንያት ሳይሆን፣ በእነዚያ ጠረጴዛዎች ዙሪያ በሚሰበሰቡት ሰዎች ምክንያት ነው።',
    quote: 'እያንዳንዱ ተጫዋች የራሱ ታሪክ አለው። እያንዳንዱ ጨዋታ የማይረሳ ትውስታ ይሆናል።',

    photos: [
      {
        src: 'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/bebi.jpg',
        alt: 'Owner smiling, seated',
      },
      {
        src: 'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/bb.jpg',
        alt: 'Owner thoughtful expression',
      },
    ],
  },

  // ---- The House section ----
  house: {
    heading: 'ከመጫወትና ከመዝናናትም ያለፈ',

    description:
      'ይህ ትንሽ ቦታ ትልቅ ልዩነት አለው። ጓደኛሞች ከሥራ በኋላ የሚገናኙበት፣ ደንበኞች በስም የሚተዋወቁበት ልምዶቻቸውን የሚጋሩበት፣ በእያንዳንዱ ጨዋታ የራሳቸውን ታሪክ የሚሰሩበት ቦታ ነው።',

    highlights: [
      {
        icon: 'circle',
        title: '2 ጠረጴዛዎች',
        text: 'ጥሩ ጨዋታዎች፣ የተለያዩ ልምዶች።',
      },
      {
        icon: 'users',
        title: 'እውነተኛ ማህበረሰብ',
        text: 'ደንበኞች እርስ በርስ የሚተዋወቁበት ቦታ።',
      },
      {
        icon: 'flame',
        title: 'የውድድር መንፈስ',
        text: 'ጨዋታዎች በፍጥነት ወደ ከባድ ውድድር ሊቀየሩ ይችላሉ።',
      },
    ],
  },

  // ---- The Two Tables ----
  tables: {
    heading: 'ጠረጴዛዎን ይምረጡ',

    table01: {
      number: '01',
      name: 'የቤቱ ጠረጴዛ',
      tagline: 'ለሁሉም የሚሆን ጠረጴዛ።',
      description:
        'ማንኛውም ሰው መጥቶ ጨዋታውን መጀመር የሚችልበት ቦታ ነው። ቅድመ ቦታ ማስያዝ የለም፣ ጫናም የለም — ጥሩ ጨዋታ ብቻ።',
      badge: 'ለሁሉም ክፍት',
      image:
        'https://images.pexels.com/photos/6253676/pexels-photo-6253676.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800',
    },

    table02: {
      number: '02',
      name: 'የግል ጠረጴዛ',
      tagline: 'የበለጠ የግል የሆነ የቤቱ ክፍል።',
      description:
        'ይህ ጠረጴዛ የራሱ ልዩ ድባብ ያለው ሲሆን ለግል ጨዋታዎች የሚያገለግል ነው። የተለየ ጸጥታ፣ የተለየ ትኩረት።',
      badge: 'የግል',
      image:
        'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/Gemini_Generated_Image_tbnjvtbnjvtbnjvt.jfif',
    },
  },
  // ---- Hall of Fame ----
  hallOfFame: {
    heading: 'የዝና አዳራሽ',
    subtitle: 'ይህንን ቦታ ዛሬ ያለበት ደረጃ ያደረሱት ፊትአውራሪዎች።',

    players: [
      {
        name: 'ይታገስ',
        nickname: 'የፑል ንጉስ',
        photo:
          'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/yit.jpg',
      },
      {
        name: 'ዳዊት ሳሙኤል',
        nickname: 'ቁማርተኛ',
        photo:
          'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/bebi.jpg',
      },
      {
        name: 'ኤፍሬም',
        nickname: 'የወሬ ንጉስ',
        photo:
          'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/eph.jpg',
      },
      {
        name: 'አብዮት',
        nickname: 'መደበኛው ተጫዋች',
        photo:
          'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/abiy.jpg',
      },
      {
        name: 'ናሆም',
        nickname:'ዝምተኛው ተጫዋች',
        photo:'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/nah.jpg',
      },
      {
        name: 'ዳዊት ሀይልዬ',
        nickname:'እያንዳንዱን ጨዋታ በቁም ነገር የሚወስደው ሰው።',
        photo:
          'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/ddddd.jpg',
      },
{
        name: 'ስንታየሁ',
        nickname:'ሴት ያስፈልገኛል እኮ',
        photo:
          'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/snte.jfif',
      },

    ],
  },
  // ---- The Regulars ----
  regulars: {
    heading: 'መደበኛ ተጫዋቾች',

    people: [
      {
        name: 'ዳዊት ኃይለማርያም',
        photo:
          'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/ddd.jpg',
        line: 'ሊዘጋ ሲል የሚመጣው።',
      },
      {
        name: 'አቤል',
        photo:
          'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/abel.jpg',
        line: 'የመጨረሻ ጨዋታዬ ነው ብሎ 20 ቴብል ይጫወታል።',
      },
      
      
      {
        name: 'ዮናስ',
        photo:
          'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/yon.jpg',
        line: 'እሱ ከሁሉም የተሻልኩ ነኝ ይላል። እኛም ሲሰለቸን ትተነዋል',
      },
      {
        name: 'ታምር',
        photo:
          'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/tam.jpg',
        line: 'ጨዋው ተጫዋች',
      },
      {
        name: 'ይርጉ',
        photo:
          'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/yir.jpg',
        line: 'የቁማር ንጉስ እና የብዙ ሰው ብር እዳ ባለቤት',
      },
    ],
  },

  // ---- Customer Quotes ----
  quotes: {
    heading: 'ቤቱን ከሚያውቁት ሰዎች አንደበት',
    items: [
      {
        text: 'ለአንድ ጨዋታ መጥተው እንዴት እንደሆነ ሳያውቁ ለሦስት ሰዓታት ይቆያሉ።',
        author: 'መደበኛ ተጫዋች',
      },
      {
        text: 'ጨዋታዎቹ የፉክክር ናቸው፣ ነገር ግን ድባቡ ሁልጊዜ የወዳጅነት ነው።',
        author: 'መደበኛ ተጫዋች',
      },
      {
        text: 'ብታሸንፍም ብትሸነፍም ምንም አይደለም። ዋናው ነገር ሰው ታገኝበታለህ።',
        author: 'መደበኛ ተጫዋች',
      },
      {
        text: 'በዚህ ፑል ቤት ውስጥ ምርጥ ጓደኞቼን አግኝቻለሁ።',
        author: 'መደበኛ ተጫዋች',
      },
    ],
  },

  // ---- Gallery ----
  gallery: {
    heading: 'የቤቱ ውስጣዊ እይታ',
    images: [
      {
        src: 'https://images.pexels.com/photos/31512997/pexels-photo-31512997.png?auto=compress&cs=tinysrgb&w=900&h=700',
        alt: 'በለስላሳ ብርሃን ስር ያለ የቢሊያርድ ጠረጴዛ',
        category: 'ጠረጴዛዎቹ',
      },
      {
        src: 'https://images.pexels.com/photos/12730846/pexels-photo-12730846.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200',
        alt: 'ተጫዋች ወደ ቢሊያርድ ጠረጴዛ ላይ እያነጣጠረ',
        category: 'ተጫዋቾቹ',
      },
      {
        src: 'https://images.pexels.com/photos/10627105/pexels-photo-10627105.jpeg?auto=compress&cs=tinysrgb&w=900&h=600',
        alt: 'ሁለት ጓደኛሞች በጨዋታ ሲዝናኑ',
        category: 'ተጫዋቾቹ',
      },
      {
        src: 'https://hnoalsmiebkvdlqkmcsq.supabase.co/storage/v1/object/public/images/vv.jpg',
        alt: 'ጓደኛሞች እየሳቁና እየተጫወቱ',
        category: 'የማይረሱ ምሽቶች',
      },
      {
        src: 'https://images.pexels.com/photos/5055424/pexels-photo-5055424.jpeg?auto=compress&cs=tinysrgb&w=900&h=600',
        alt: 'በአረንጓዴ ሜዳ ላይ ያሉ የቢሊያርድ ኳሶች',
        category: 'ጠረጴዛዎቹ',
      },
      {
        src: 'https://images.pexels.com/photos/5044200/pexels-photo-5044200.jpeg?auto=compress&cs=tinysrgb&w=900&h=600',
        alt: 'ሦስት ወንዶች ቢሊያርድ እየተጫወቱ',
        category: 'የቤቱ ድባብ',
      },
      {
        src: 'https://images.pexels.com/photos/10178591/pexels-photo-10178591.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200',
        alt: 'ተጫዋች በኒዮን ብርሃን ስር ቆሞ',
        category: 'የቤቱ ድባብ',
      },
      {
        src: 'https://images.pexels.com/photos/13036112/pexels-photo-13036112.jpeg?auto=compress&cs=tinysrgb&w=900&h=600',
        alt: 'የቢሊያርድ ዱላ ኳሶችን ሲመታ',
        category: 'ጠረጴዛዎቹ',
      },
      {
        src: 'https://images.pexels.com/photos/6503756/pexels-photo-6503756.jpeg?auto=compress&cs=tinysrgb&w=900&h=600',
        alt: 'በዝቅተኛ ብርሃን የሚካሄድ የቢሊያርድ ጨዋታ',
        category: 'የማይረሱ ምሽቶች',
      },
      {
        src: 'https://images.pexels.com/photos/6032554/pexels-photo-6032554.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200',
        alt: 'የቢሊያርድ አዳራሽ ውስጣዊ እይታ',
        category: 'የቤቱ ድባብ',
      },
      {
        src: 'https://images.pexels.com/photos/6253923/pexels-photo-6253923.jpeg?auto=compress&cs=tinysrgb&w=900&h=600',
        alt: 'ሁለት ተጫዋቾች በጨዋታ ላይ በትኩረት ሲሳተፉ',
        category: 'ተጫዋቾቹ',
      },
      {
        src: 'https://images.pexels.com/photos/13179865/pexels-photo-13179865.jpeg?auto=compress&cs=tinysrgb&w=900&h=600',
        alt: 'የቢሊያርድ ኳስ ቅርብ ምስል',
        category: 'ጠረጴዛዎቹ',
      },
    ],
  },

  // ---- House Rules ----
  houseRules: {
    heading: 'የቤቱ ህጎች',
    rules: [
      { icon: 'circle', text: 'ጠረጴዛውን ያክብሩ።' },
      { icon: 'handshake', text: 'ተጫዋቾችን ያክብሩ።' },
      { icon: 'message-circle', text: 'የወዳጅነት ድባቡን ይጠብቁ።' },
      { icon: 'sparkles', text: 'ቦታውን እንዳገኙት ንጹህ አድርገው ይልቀቁት።' },
      { icon: 'trophy', text: 'ለማሸነፍ ይጫወቱ። ወዳጅነትዎን ይጠብቁ።' },
    ],
  },

  // ---- Opening Hours ----
  hours: {
    heading: 'ቤቱ የሚከፈትበት ሰዓት',
    schedule: 'ሰኞ — እሁድ',
    time: 'ከጠዋቱ 4:00 — እስከ ምሽቱ 2:00',
    note: 'ለጨዋታ ይምጡ። ለድባቡ ይቆዩ።',
  },

  // ---- Location ----
  location: {
    heading: 'ቤቱን ያግኙ',
    address: 'ቀበሌ 04 010 ሰፈር፣ ከተስፋዬ ዳቦ ቤት ወረድ ብሎ',
    phone: '+251 911 755 230',
    social: [
      { label: 'ቴሌግራም', url: 'https://t.me/Dawitsamuelll' },
      { label: 'ፌስቡክ', url: 'https://www.facebook.com/share/195kr9JLyf/' },
      { label: 'ኢንስታግራም', url: 'https://www.instagram.com/dawit__samuel/' },
    ],
    mapEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=38.7461%2C8.9806%2C38.7621%2C8.9906&layer=mapnik&marker=8.9856%2C38.7541',
    directionsUrl:
      'https://www.google.com/maps/place/Zero+asir/@9.6696796,39.5315236,21z/data=!4m6!3m5!1s0x1649bd006b07f1d5:0x10fdbdac14ba3123!8m2!3d9.6696234!4d39.5316645!16s%2Fg%2F11z525800_?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D',
  },

  // ---- Final CTA ----
  finalCta: {
    heading: 'ለአንድ ተጨማሪ ጨዋታ ዝግጁ ነዎት?',
    subheading: 'ጓደኛዎን ይዘው ይምጡ። የማይረሳ ትውስታ ይፍጠሩ።',
    buttonText: 'እኛን ያግኙ',
    backgroundImage:
      'https://images.pexels.com/photos/6032656/pexels-photo-6032656.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
  },

  // ---- Navigation ----
  navLinks: [
    { label: 'መነሻ', href: '#home' },
    { label: 'ቤቱ', href: '#house' },
    { label: 'ተጫዋቾች', href: '#players' },
    { label: 'ምስሎች', href: '#gallery' },
    { label: 'እኛን ያግኙ', href: '#location' },
  ],
};

export type SiteData = typeof siteData;
