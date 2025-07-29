
import { Product } from "./types";

export const products: Product[] = [
  {
    id: "prod_001",
    name: "Microsurfacing CH™15 (Danoes65)",
    description: "Pelapisan ulang super tipis untuk pemeliharaan preventif, berfungsi mengembalikan tekstur permukaan dan mencegah kerusakan dini pada jalan dengan lalu lintas ringan.",
    price: 3696300,
    image: "https://i.ibb.co/JwVC3yKL/Microsurfacing-CH-15.png",
    category: "Microsurfacing",
    dataAiHint: "road maintenance",
    details: {
      benefits: [
        "Memperpanjang umur perkerasan jalan hingga 5-7 tahun.",
        "Mengembalikan tekstur permukaan yang aus.",
        "Meningkatkan daya cengkeram (skid resistance) untuk keselamatan.",
        "Aplikasi cepat, lalu lintas dapat dibuka dalam waktu singkat."
      ],
      composition: "Campuran agregat halus pilihan, aspal emulsi polimer, filler mineral, air, dan aditif khusus.",
      application: [
        "Bersihkan permukaan jalan dari debu, kotoran, dan minyak.",
        "Aplikasikan lapisan tack coat jika diperlukan.",
        "Hampar campuran Microsurfacing menggunakan mesin khusus dengan ketebalan 3-5 mm.",
        "Biarkan mengering selama 1-2 jam sebelum dibuka untuk lalu lintas."
      ],
      orderingGuide: "Produk ini dijual per drum atau paket pengerjaan. Hubungi tim penjualan kami melalui halaman Kontak untuk mendapatkan penawaran harga sesuai volume proyek Anda."
    }
  },
  {
    id: "prod_002",
    name: "Microsurfacing CH™17 (Coating Metal)",
    description: "Solusi pelapisan permukaan yang efektif untuk jalan dengan lalu lintas sedang, berfungsi memperbaiki keretakan halus dan meningkatkan daya cengkeram (skid resistance).",
    price: 3796200,
    image: "https://i.ibb.co/sv9gqdg4/Microsurfacing-CH-17.png",
    category: "Microsurfacing",
    dataAiHint: "asphalt texture",
     details: {
      benefits: [
        "Menutup retak rambut dan mencegah penetrasi air.",
        "Meningkatkan ketahanan permukaan terhadap cuaca dan UV.",
        "Memberikan permukaan yang lebih halus dan senyap.",
        "Solusi ekonomis untuk pemeliharaan jalan kota dan perumahan."
      ],
      composition: "Campuran agregat berkualitas, aspal emulsi polimer, filler, air, dan aditif.",
      application: [
        "Permukaan harus bersih dan kering.",
        "Aplikasikan dengan mesin finisher khusus Microsurfacing.",
        "Ketebalan lapisan yang direkomendasikan adalah 5-8 mm.",
        "Waktu pengeringan bervariasi tergantung kondisi cuaca, umumnya 2-4 jam."
      ],
      orderingGuide: "Untuk melakukan pemesanan, tambahkan produk ke keranjang dan lanjutkan ke halaman checkout. Tim kami akan menghubungi Anda untuk konfirmasi dan detail pengiriman."
    }
  },
  {
    id: "prod_003",
    name: "Microsurfacing CH™19 (Danoes01)",
    description: "Lapisan aus yang sangat tahan lama, dirancang khusus untuk jalan dengan volume lalu lintas tinggi dan berat, seperti jalan tol dan arteri utama.",
    price: 3896100,
    image: "https://i.ibb.co/xtK55bgR/Microsurfacing-CH-19.png",
    category: "Microsurfacing",
    dataAiHint: "highway construction",
     details: {
      benefits: [
        "Daya tahan sangat tinggi terhadap beban berat dan abrasi.",
        "Stabilitas polimer yang unggul untuk performa jangka panjang.",
        "Ideal untuk jalan tol, jalan arteri, dan area industri.",
        "Mengurangi biaya pemeliharaan dalam jangka panjang."
      ],
      composition: "Agregat bergradasi khusus, aspal emulsi polimer tingkat tinggi, dan aditif performa.",
      application: [
        "Memerlukan persiapan permukaan yang cermat.",
        "Aplikasi menggunakan mesin khusus untuk hasil yang rata dan presisi.",
        "Dapat diaplikasikan dalam beberapa lapisan untuk ketebalan ekstra.",
        "Lalu lintas dapat dibuka setelah uji kekuatan awal tercapai."
      ],
      orderingGuide: "Produk ini memerlukan konsultasi teknis. Silakan hubungi tim dukungan kami untuk diskusi proyek dan pemesanan."
    }
  },
  {
    id: "prod_004",
    name: "Microsurfacing CH™21 (DanoesXL)",
    description: "Formula khusus untuk mengisi retak-retak (rutting) dan mengembalikan profil jalan ke kondisi semula, sekaligus memberikan lapisan pelindung baru.",
    price: 3996000,
    image: "https://i.ibb.co/pvfb5MM8/Microsurfacing-CH-21.png",
    category: "Microsurfacing",
    dataAiHint: "road rutting repair",
     details: {
      benefits: [
        "Mengoreksi deformasi alur roda (rutting) secara efektif.",
        "Mengembalikan kerataan dan profil jalan.",
        "Meningkatkan drainase permukaan.",
        "Menghindari kebutuhan pembongkaran dan pelapisan ulang total."
      ],
      composition: "Formula dengan agregat kasar dan polimer khusus untuk mengisi cekungan.",
      application: [
        "Alur roda dibersihkan secara menyeluruh.",
        "Diaplikasikan menggunakan 'rut-box' atau 'spreader box' khusus.",
        "Dapat diaplikasikan berlapis untuk mengisi alur yang dalam.",
        "Memerlukan pemadatan ringan setelah aplikasi."
      ],
      orderingGuide: "Untuk pemesanan, silakan tambahkan produk ke keranjang belanja Anda dan selesaikan proses checkout. Anda akan dihubungi untuk detail lebih lanjut."
    }
  },
  {
    id: "prod_005",
    name: "Microsurfacing CH™23 (Ultimate)",
    description: "Memberikan perlindungan maksimal untuk perkerasan dari kerusakan akibat cuaca ekstrem dan keausan, cocok untuk landasan pacu bandara dan area industri.",
    price: 4395600,
    image: "https://i.ibb.co/yczB4kGt/Microsurfacing-CH-23.png",
    category: "Microsurfacing",
    dataAiHint: "airport runway paving",
     details: {
      benefits: [
        "Tahan terhadap tumpahan bahan bakar dan oli.",
        "Memenuhi standar gesekan tinggi untuk landasan pacu pesawat.",
        "Melindungi perkerasan dari beban dinamis yang ekstrem.",
        "Cepat kering untuk meminimalkan penutupan bandara."
      ],
      composition: "Agregat sangat keras, aspal emulsi tahan bahan bakar, dan polimer khusus.",
      application: [
        "Aplikasi harus sesuai dengan standar penerbangan (FAA/ICAO).",
        "Peralatan harus dikalibrasi dengan presisi tinggi.",
        "Biasanya diaplikasikan pada malam hari untuk menghindari gangguan penerbangan.",
        "Pengujian kualitas yang ketat dilakukan sebelum pembukaan kembali."
      ],
      orderingGuide: "Proyek bandara memerlukan kualifikasi khusus. Hubungi tim ahli kami untuk konsultasi dan pengadaan."
    }
  },
  {
    id: "prod_006",
    name: "SABDA CH™27 (aspal)",
    description: "Bahan penutup celah (sealant) elastis untuk mengisi sambungan pada perkerasan beton dan aspal, mencegah masuknya air dan kotoran.",
    price: 2997000,
    image: "https://i.ibb.co/W45rgbTT/Sabda-Seal-CH-27.png",
    category: "Sealant",
    dataAiHint: "concrete joint sealant",
     details: {
      benefits: [
        "Mencegah kerusakan struktur akibat infiltrasi air.",
        "Tetap elastis dalam berbagai suhu.",
        "Daya lekat yang kuat pada beton dan aspal.",
        "Mudah diaplikasikan."
      ],
      composition: "Aspal emulsi polimer dengan filler dan serat khusus.",
      application: [
        "Bersihkan sambungan dari debu dan material lepas.",
        "Gunakan backer rod jika sambungan terlalu dalam.",
        "Tuangkan atau semprotkan sealant ke dalam sambungan.",
        "Ratakan permukaan dan biarkan mengering."
      ],
      orderingGuide: "Tersedia dalam kemasan pail. Tambahkan ke keranjang untuk pembelian langsung."
    }
  },
  {
    id: "prod_007",
    name: "SABDA CH™29 (Rigid)",
    description: "Sealant performa tinggi dengan fleksibilitas superior, ideal untuk area dengan pergerakan struktural yang signifikan seperti jembatan dan jalan layang.",
    price: 3196800,
    image: "https://i.ibb.co/ksmh4pQm/Sabda-Seal-CH-29.png",
    category: "Sealant",
    dataAiHint: "bridge expansion joint",
     details: {
      benefits: [
        "Akomodasi pergerakan sambungan yang tinggi.",
        "Sangat tahan lama dan tidak mudah sobek.",
        "Melindungi bantalan jembatan (bearing) dari air dan kotoran.",
        "Tahan terhadap kondisi cuaca ekstrem."
      ],
      composition: "Formula polimer khusus dengan tingkat elongasi tinggi.",
      application: [
        "Persiapan sambungan sangat krusial.",
        "Gunakan primer khusus jika direkomendasikan.",
        "Aplikasi harus memperhatikan faktor bentuk (shape factor) yang benar.",
        "Lindungi dari lalu lintas hingga kering sempurna."
      ],
      orderingGuide: "Karena sifatnya yang teknis, harap hubungi tim kami untuk konsultasi sebelum membeli."
    }
  },
  {
    id: "prod_008",
    name: "SABDA CH™31 (Expantion Joint)",
    description: "Solusi penutup celah yang dirancang khusus agar tahan terhadap tumpahan bahan bakar, oli, dan bahan kimia, cocok untuk apron bandara dan area SPBU.",
    price: 3496500,
    image: "https://i.ibb.co/0VF2qnZN/Sabda-Seal-CH-31.png",
    category: "Sealant",
    dataAiHint: "fuel resistant sealant",
     details: {
      benefits: [
        "Tahan terhadap hidrokarbon dan bahan kimia industri.",
        "Menjaga integritas sambungan di area rawan tumpahan.",
        "Mencegah kontaminasi tanah di bawah perkerasan.",
        "Memenuhi standar keselamatan untuk area pengisian bahan bakar."
      ],
      composition: "Sealant berbasis polimer tahan kimia.",
      application: [
        "Permukaan sambungan harus benar-benar bersih dan bebas kontaminan.",
        "Aplikasikan secara merata sesuai kedalaman yang direkomendasikan.",
        "Hindari kontak dengan air selama proses pengeringan awal.",
        "Waktu kering total bisa mencapai 24 jam."
      ],
      orderingGuide: "Produk khusus untuk kebutuhan industri dan aviasi. Hubungi kami untuk penawaran dan spesifikasi teknis."
    }
  },
  {
    id: "prod_009",
    name: "Atomized Microseal CH™25",
    description: "Lapisan tipis pelindung aspal yang meremajakan permukaan, mengembalikan warna hitam, dan melindungi dari oksidasi serta penetrasi air. Efektif memperpanjang umur jalan.",
    price: 4995000,
    image: "https://i.ibb.co/LhDfqv0D/Atomized-Microseal.png",
    category: "Pavement Preservation",
    dataAiHint: "asphalt sealcoating",
     details: {
      benefits: [
        "Melindungi aspal dari kerusakan akibat sinar UV dan oksidasi.",
        "Mengembalikan warna hitam pekat pada aspal yang pudar.",
        "Menutup pori-pori permukaan untuk mencegah masuknya air.",
        "Memperpanjang umur perkerasan dengan biaya rendah."
      ],
      composition: "Emulsi aspal khusus dengan partikel halus dan aditif peremaja.",
      application: [
        "Permukaan jalan dibersihkan menggunakan power broom atau water jet.",
        "Aplikasikan secara merata menggunakan distributor truck dengan spray bar.",
        "Satu atau dua lapisan dapat diaplikasikan tergantung kondisi.",
        "Kering dalam 2-4 jam."
      ],
      orderingGuide: "Tersedia untuk proyek skala besar. Hubungi tim penjualan kami untuk jadwal dan penawaran."
    }
  },
  {
    id: "prod_010",
    name: "Coating CH-34",
    description: "Lapisan pelindung serbaguna (per liter) untuk beton, aspal, atau metal. Memberikan proteksi terhadap cuaca dan abrasi, tersedia dalam berbagai warna untuk kebutuhan estetika.",
    price: 66000,
    image: "https://i.ibb.co/XrgVVRmf/Coating-CH-34.png",
    category: "Coating",
    dataAiHint: "protective coating",
     details: {
      benefits: [
        "Memberikan warna dan perlindungan dalam satu lapisan.",
        "Tahan lama dan tidak mudah pudar.",
        "Cocok untuk lapangan olahraga, trotoar, dan area parkir.",
        "Meningkatkan keamanan dengan warna-warna cerah."
      ],
      composition: "Resin akrilik berbasis air dengan pigmen berkualitas tinggi.",
      application: [
        "Pastikan permukaan bersih, kering, dan bebas dari minyak.",
        "Aplikasikan menggunakan roller, kuas, atau spray.",
        "Dua lapisan direkomendasikan untuk hasil terbaik.",
        "Setiap lapisan kering dalam 1-2 jam."
      ],
      orderingGuide: "Pilih warna dan jumlah yang Anda butuhkan, lalu tambahkan ke keranjang."
    }
  },
  {
    id: "prod_011",
    name: "Coldplast CH™33",
    description: "Aspal dingin modifikasi yang diaplikasikan tanpa pemanasan untuk membuat marka jalan yang sangat tahan lama, reflektif, dan memiliki daya lekat tinggi.",
    price: 360750,
    image: "https://i.ibb.co/xqmQy5M1/Coldplast-CH-33.png",
    category: "Road Marking",
    dataAiHint: "road marking paint",
     details: {
      benefits: [
        "Ketahanan abrasi yang jauh lebih baik dari cat biasa.",
        "Dapat diaplikasikan lebih tebal untuk efek 3D (profiled marking).",
        "Daya reflektif tinggi pada malam hari dan saat hujan.",
        "Aplikasi tanpa pemanasan, lebih aman dan ramah lingkungan."
      ],
      composition: "Bahan dasar resin reaktif dengan pigmen, filler, dan glass beads.",
      application: [
        "Aplikasikan pada permukaan aspal atau beton yang bersih.",
        "Gunakan screed box atau aplikator khusus.",
        "Taburkan glass beads tambahan di atas permukaan saat masih basah.",
        "Kering dan siap dilalui dalam 15-30 menit."
      ],
      orderingGuide: "Produk ini dijual per set (komponen A dan B). Hubungi kami untuk detail teknis dan pembelian."
    }
  },
  {
    id: "prod_012",
    name: "Ecobeton Crono™",
    description: "Beton ramah lingkungan yang mengering sangat cepat (rapid setting), ideal untuk perbaikan darurat pada jalan, jembatan, dan lantai industri tanpa mengganggu lalu lintas.",
    price: 1998000,
    image: "https://i.ibb.co/k6XwYZh5/Ecobeton-Chrono-e.png",
    category: "Specialty Concrete",
    dataAiHint: "eco concrete",
     details: {
      benefits: [
        "Mencapai kekuatan struktural dalam 2-3 jam.",
        "Meminimalkan gangguan pada operasional dan lalu lintas.",
        "Tidak menyusut dan memiliki daya lekat sangat baik.",
        "Emisi CO2 lebih rendah selama produksi."
      ],
      composition: "Semen khusus, agregat pilihan, dan aditif pemercepat pengeringan.",
      application: [
        "Campurkan dengan air sesuai takaran.",
        "Aduk hingga merata (waktu kerja terbatas, sekitar 15 menit).",
        "Tuangkan pada area perbaikan dan ratakan.",
        "Lindungi dari pengeringan terlalu cepat di bawah terik matahari."
      ],
      orderingGuide: "Tersedia dalam kemasan sak. Tambahkan ke keranjang untuk pembelian."
    }
  },
  {
    id: "prod_013",
    name: "Ecobeton Pavishield™",
    description: "Cairan pelindung transparan untuk permukaan beton yang membuatnya tahan terhadap noda, air, minyak, dan keausan, sekaligus mempermudah pembersihan.",
    price: 1498500,
    image: "https://i.ibb.co/WNXjyXpW/Ecobeton-Paveshield.png",
    category: "Specialty Concrete",
    dataAiHint: "concrete protection",
     details: {
      benefits: [
        "Melindungi beton dari noda kopi, anggur, dan oli.",
        "Membuat permukaan mudah dibersihkan.",
        "Tidak mengubah tampilan asli beton (efek natural).",
        "Tahan terhadap sinar UV dan tidak menguning."
      ],
      composition: "Formula polimer berbasis air yang meresap ke dalam beton.",
      application: [
        "Pastikan permukaan beton benar-benar bersih dan kering.",
        "Aplikasikan menggunakan roller atau spray bertekanan rendah.",
        "Satu atau dua lapisan tipis sudah cukup.",
        "Biarkan meresap dan kering selama 24 jam sebelum digunakan."
      ],
      orderingGuide: "Tersedia dalam kemasan galon. Beli sekarang melalui toko online kami."
    }
  },
  {
    id: "prod_014",
    name: "Ecobeton Vetrofluid™",
    description: "Cairan konsolidan yang meresap ke dalam beton untuk menghentikan debu, mengeraskan permukaan, dan memberikan perlindungan permanen terhadap kelembapan.",
    price: 1398600,
    image: "https://i.ibb.co/r2bd8dXR/Ecobeton-vetrofluid.png",
    category: "Specialty Concrete",
    dataAiHint: "liquid concrete hardener",
     details: {
      benefits: [
        "Mengikat partikel debu pada permukaan beton secara permanen.",
        "Meningkatkan kepadatan dan kekuatan permukaan.",
        "Melindungi dari kerusakan akibat kelembaban dari dalam.",
        "Solusi sekali pakai untuk seumur hidup beton."
      ],
      composition: "Cairan silikat yang bereaksi secara kimia dengan beton.",
      application: [
        "Semprotkan secara melimpah pada permukaan beton.",
        "Jaga agar permukaan tetap basah selama 15-20 menit.",
        "Bersihkan sisa cairan yang tidak meresap.",
        "Proses reaksi kimia akan terus berlangsung selama beberapa minggu."
      ],
      orderingGuide: "Produk teknis, hubungi kami untuk konsultasi dan pembelian."
    }
  },
  {
    id: "prod_015",
    name: "GEONE™",
    description: "Material geosintetik berkualitas tinggi untuk stabilisasi tanah, perkuatan dasar jalan, dan sistem drainase untuk mencegah erosi.",
    price: 1978020,
    image: "https://i.ibb.co/hRMTL1K1/geone.png",
    category: "Geosynthetics",
    dataAiHint: "geotextile fabric",
     details: {
      benefits: [
        "Meningkatkan daya dukung tanah lunak.",
        "Mencegah tercampurnya lapisan agregat dengan tanah dasar.",
        "Berfungsi sebagai filter pada sistem drainase bawah permukaan.",
        "Tahan terhadap sobek dan bahan kimia tanah."
      ],
      composition: "Serat polypropylene atau polyester yang dianyam (woven) atau tidak dianyam (non-woven).",
      application: [
        "Ratakan dan siapkan area tanah dasar.",
        "Gelar lapisan GEONE™ di atasnya, pastikan ada tumpang tindih (overlap).",
        "Timbun dengan lapisan agregat sesuai desain.",
        "Padatkan lapisan agregat di atasnya."
      ],
      orderingGuide: "Dijual per meter persegi. Hubungi tim kami untuk memilih spesifikasi yang tepat untuk proyek Anda."
    }
  },
  {
    id: "prod_016",
    name: "ColdMix CH™28 (dlm air)",
    description: "Campuran aspal dingin premium dalam kemasan karung, dirancang untuk perbaikan jalan berlubang (pothole) yang lebih kuat dan permanen.",
    price: 216450,
    image: "https://i.ibb.co/hxdfsgHY/Coldmix-CH-28.png",
    category: "Coldmix",
    dataAiHint: "asphalt repair bag",
     details: {
      benefits: [
        "Perbaikan yang lebih tahan lama dibandingkan coldmix biasa.",
        "Kekuatan setara dengan aspal panas setelah pemadatan.",
        "Dapat digunakan dalam kondisi basah.",
        "Penyimpanan mudah dan tahan lama."
      ],
      composition: "Agregat berkualitas tinggi dengan aspal emulsi polimer khusus.",
      application: [
        "Bersihkan lubang dari air dan material lepas.",
        "Tuangkan ke dalam lubang.",
        "Padatkan dengan stamper atau dilindas ban kendaraan.",
        "Jalan bisa langsung dibuka untuk lalu lintas."
      ],
      orderingGuide: "Tersedia per karung 25 kg. Tambahkan ke keranjang untuk pembelian."
    }
  },
  {
    id: "prod_017",
    name: "ColdMix CH™24 (media kering)",
    description: "Aspal dingin praktis dalam kemasan karung untuk penambalan lubang di jalan secara cepat dan efisien, dapat langsung diaplikasikan tanpa pemanasan.",
    price: 199800,
    image: "https://i.ibb.co/x8R76K6X/Coldmix-CH-24.png",
    category: "Coldmix",
    dataAiHint: "pothole repair bag",
     details: {
      benefits: [
        "Sangat praktis untuk perbaikan darurat.",
        "Tidak memerlukan alat khusus atau pemanasan.",
        "Solusi cepat untuk lubang-lubang kecil.",
        "Harga ekonomis."
      ],
      composition: "Agregat dan aspal emulsi standar.",
      application: [
        "Keluarkan dari karung dan tuangkan ke lubang.",
        "Ratakan dengan sekop.",
        "Padatkan hingga rata dengan permukaan jalan.",
        "Lalu lintas ringan dapat segera melintas."
      ],
      orderingGuide: "Beli per karung langsung dari toko online kami."
    }
  },
  {
    id: "prod_018",
    name: "SAMI Waterproofing CH™13",
    description: "Membran interlayer penyerap tegangan dan kedap air, digunakan di bawah lapisan aspal untuk mencegah retak reflektif dan melindungi struktur jembatan.",
    price: 5494500,
    image: "https://i.ibb.co/8DW5BSm8/S-A-M-I-Waterproofing.png",
    category: "Waterproofing",
    dataAiHint: "bridge waterproofing",
     details: {
      benefits: [
        "Mencegah retak dari perkerasan bawah (beton) merambat ke lapisan aspal di atasnya.",
        "Memberikan lapisan kedap air yang sempurna untuk melindungi struktur jembatan.",
        "Menyerap tegangan akibat pergerakan dan perbedaan suhu.",
        "Memperpanjang umur lapisan aspal secara signifikan."
      ],
      composition: "Aspal polimer sangat elastis yang disemprotkan, kemudian ditaburi agregat kecil.",
      application: [
        "Permukaan dek jembatan harus bersih dan kering.",
        "Semprotkan aspal polimer S.A.M.I pada suhu dan tekanan yang tepat.",
        "Segera taburkan agregat panas di atasnya.",
        "Setelah dingin, sisa agregat yang tidak melekat dibersihkan.",
        "Lapisan aspal baru (wearing course) dapat diaplikasikan di atasnya."
      ],
      orderingGuide: "Ini adalah sistem aplikasi khusus. Hubungi tim teknis kami untuk perencanaan dan pelaksanaan proyek."
    }
  },
  {
    id: "prod_019",
    name: "Marka CH™32",
    description: "Cat termoplastik berkualitas tinggi untuk marka jalan. Memberikan visibilitas maksimal, daya tahan lama, dan cepat kering setelah aplikasi.",
    price: 2397600,
    image: "https://i.ibb.co/VcV5zBwD/Marka-CH-32.png",
    category: "Road Marking",
    dataAiHint: "thermoplastic road marking",
     details: {
      benefits: [
        "Daya tahan sangat tinggi, 5-8 kali lebih lama dari cat biasa.",
        "Daya reflektif yang sangat baik karena mengandung glass beads.",
        "Cepat kering, lalu lintas dapat dibuka dalam hitungan menit.",
        "Tahan terhadap minyak, bensin, dan garam."
      ],
      composition: "Campuran resin, pigmen, filler, dan glass beads yang dilelehkan.",
      application: [
        "Material dilelehkan dalam mesin pre-heater pada suhu 180-200°C.",
        "Diaplikasikan ke permukaan jalan menggunakan mesin marka jalan termoplastik.",
        "Glass beads tambahan ditaburkan di atasnya saat masih panas.",
        "Mengeras dengan cepat saat mendingin."
      ],
      orderingGuide: "Dijual dalam kemasan sak. Memerlukan peralatan khusus untuk aplikasi. Hubungi kami untuk pembelian material atau paket pengerjaan."
    }
  },
];
