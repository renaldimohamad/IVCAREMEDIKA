export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  subtitle: string;
  list: string[];
  note: string;
}

export interface TrustItem {
  title: string;
  description: string;
}

export interface StepItem {
  num: string;
  title: string;
  desc: string;
}

export interface FAQItem {
  category: string;
  q: string;
  a: string;
}

export interface ContactCard {
  title: string;
  val: string;
  href: string;
  type: "whatsapp" | "email" | "map";
}

export const siteConfig = {
  name: "IVCare Medika",
  tagline: "Kesehatan dan Kenyamanan Anda, Prioritas Kami",
  logo: {
    src: "/logo-ivcaremedika.png",
    pngSrc: "/logo-ivcaremedika.png",
    alt: "IVCareMedika Logo",
  },

  // WhatsApp Configuration
  whatsapp: {
    number: "6281354872379",
    formattedNumber: "+62 813-5487-2379",
    url: "https://wa.me/6281354872379",
    consultationUrl:
      "https://wa.me/6281354872379?text=Halo%20IVCareMedika,%20saya%20ingin%20berkonsultasi",
  },

  // Navigation Links
  navLinks: [
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#services" },
    { name: "Tentang Kami", href: "#why-us" },
    { name: "Edukasi", href: "#education" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontak", href: "#contact" },
  ] as NavLink[],

  // Hero Section Constants
  hero: {
    badge: "Layanan Kesehatan Premium di Rumah Anda",
    headlineLine1: "Perawatan Profesional,",
    headlineLine2: "Kenyamanan di Rumah",
    description:
      "IVCare Medika hadir memberikan layanan kesehatan premium dengan pendekatan personal, aman, dan penuh kepedulian untuk Anda dan keluarga.",
    nurseImage: "/hero-nurse-rebuild.png",
    floatingBadges: {
      badge1: {
        title: "Layanan Teruji",
        subtitle: "100% Kesterilan SOP",
      },
      badge2: {
        title: "Supervisi Klinis",
        subtitle: "Tenaga Kesehatan STR",
      },
    },
    trustItems: [
      {
        title: "Tenaga Kesehatan Berpengalaman",
        description:
          "Dilayani oleh tenaga kesehatan sesuai kompetensi dan SOP.",
      },
      {
        title: "Layanan di Rumah",
        description: "Praktis, nyaman, dan efisien tanpa perlu keluar rumah.",
      },
      {
        title: "Pendekatan Personal",
        description: "Perawatan dengan empati dan komunikasi yang baik.",
      },
      {
        title: "Aman & Terpercaya",
        description: "Keselamatan dan kenyamanan Anda adalah prioritas kami.",
      },
    ] as TrustItem[],
  },

  // Services Section Constants
  servicesSection: {
    badge: "Layanan Kami",
    title: "Solusi Medis Profesional Dalam Genggaman Anda",
    subtitle:
      "Kami menghadirkan standar rumah sakit internasional langsung ke kamar Anda dengan kesterilan mutlak dan kepedulian yang mendalam.",
    list: [
      {
        title: "Layanan Homecare",
        subtitle: "Perawatan medis terstandar langsung di rumah Anda.",
        list: [
          "Jasa Perawat Homecare (Harian / Bulanan)",
          "Terapi & Rehabilitasi Pasca Stroke",
          "Pemasangan & Penggantian Alat Medis (NGT, Kateter)",
          "Perawatan Luka Diabetes & Luka Pasca Operasi",
          "Pendampingan Pasien Geriatri (Lansia)",
        ],
        note: "Semua tindakan dilakukan oleh perawat teregistrasi (STR) dengan pengawasan dokter penanggung jawab.",
      },
      {
        title: "Layanan Wellness & Vitamin",
        subtitle: "Optimalisasi kebugaran dan imunitas tubuh keluarga.",
        list: [
          "Infus Vitamin C Premium & Multivitamin",
          "Terapi Anti-Aging & Immune Booster",
          "Rehidrasi & Recovery Infusion (Jetlag / Kelelahan)",
          "Injeksi Neurobion & Suplemen Saraf",
          "Skincare & Brightening Infusion Teruji",
        ],
        note: "Formulasi premium disesuaikan dengan kondisi tubuh setelah melalui asesmen medis singkat.",
      },
      {
        title: "Pemeriksaan & Edukasi",
        subtitle: "Deteksi dini dan pendampingan kesehatan berkelanjutan.",
        list: [
          "Pemeriksaan Tanda Vital Lengkap (Tensi, Gula, Kolesterol)",
          "Pengambilan Sampel Darah Home Visit",
          "Konsultasi Gizi & Pendampingan Diet Pasien",
          "Edukasi Keluarga mengenai Perawatan Pasien Mandiri",
          "Rujukan Cepat ke Rumah Sakit Mitra Utama",
        ],
        note: "Hasil laboratorium dikirim langsung secara digital lengkap dengan interpretasi klinis dokter.",
      },
    ] as ServiceItem[],
    sopValues: [
      {
        title: "Sertifikasi Resmi",
        text: "Perawat terdaftar & terlatih khusus",
      },
      {
        title: "Sterilisasi Medis",
        text: "Peralatan medis sekali pakai & steril",
      },
      {
        title: "Respons Cepat",
        text: "Layanan cepat tanggap 24/7",
      },
      {
        title: "Monitoring Dokter",
        text: "Tindakan di bawah supervisi klinis",
      },
    ],
  },

  // Tentang Kami Section Constants
  aboutSection: {
    badge: "Tentang Kami",
    headlineLine1: "IVCare Medika",
    headlineLine2: "Kesehatan dan Kenyamanan Anda, Prioritas Kami.",
    paragraph1:
      "IVCare Medika hadir untuk memberikan layanan kesehatan profesional di rumah dengan pendekatan personal, aman, dan penuh kepedulian.",
    paragraph2:
      "Kami percaya bahwa setiap individu berhak mendapatkan perawatan yang berkualitas tanpa harus meninggalkan kenyamanan rumah.",
    nurseElderlyImage: "/nurse-elderly-patient.webp",
    medicalBagImage: "/medical-bag-rebuild.png",
    visiCard: {
      title: "VISI",
      text: "Menjadi penyedia layanan kesehatan di rumah yang terpercaya, berkualitas, dan menjadi pilihan utama masyarakat.",
    },
    misiCard: {
      title: "MISI",
      points: [
        "Memberikan layanan kesehatan yang aman, profesional, dan berempati.",
        "Mengutamakan kebutuhan dan kenyamanan setiap pasien.",
        "Mengedukasi masyarakat untuk hidup sehat.",
        "Terus meningkatkan kualitas layanan dan kompetensi tenaga kesehatan.",
      ],
    },
    valuesList: [
      {
        title: "Peduli",
        description: "Kami melayani dengan hati, penuh empati dan perhatian.",
      },
      {
        title: "Aman",
        description: "Keselamatan pasien adalah prioritas utama kami.",
      },
      {
        title: "Profesional",
        description:
          "Layanan diberikan oleh tenaga kesehatan sesuai kompetensi.",
      },
      {
        title: "Terpercaya",
        description: "Integritas dan kejujuran adalah dasar setiap pelayanan.",
      },
      {
        title: "Berkualitas",
        description: "Kami berkomitmen untuk terus belajar dan berkembang.",
      },
    ],
    ribbon: {
      statementLine1: "",
      statementLine2: "Kami hadir di rumah Anda, dengan layanan terbaik.",
      items: [
        { title: "Tenaga Kesehatan", subtitle: "Berpengalaman" },
        { title: "SOP Sesuai", subtitle: "Standar" },
        { title: "Layanan di Rumah", subtitle: "Praktis & Nyaman" },
        { title: "Komunikasi", subtitle: "Ramah & Responsif" },
      ],
    },
  },

  // Booking Flow Section Constants
  bookingSection: {
    badge: "Alur Layanan",
    title: "Prosedur Pemesanan Sangat Praktis & Cepat",
    subtitle:
      "Dapatkan pelayanan kesehatan berkualitas tinggi hanya dalam empat langkah sederhana tanpa repot mengantre.",
    steps: [
      {
        num: "01",
        title: "Hubungi WhatsApp",
        desc: "Konsultasikan kebutuhan medis atau wellness Anda dengan tim admin kami yang responsif.",
      },
      {
        num: "02",
        title: "Asesmen Medis",
        desc: "Dokter kami akan melakukan asesmen singkat untuk memastikan kesesuaian dosis & tindakan.",
      },
      {
        num: "03",
        title: "Jadwalkan Tindakan",
        desc: "Pilih tanggal, jam, dan lokasi kunjungan yang paling nyaman bagi jadwal harian Anda.",
      },
      {
        num: "04",
        title: "Perawatan di Rumah",
        desc: "Perawat berlisensi kami akan datang dengan peralatan steril lengkap berlogo IVCare Medika.",
      },
    ] as StepItem[],
  },

  // Contact / CTA Section Constants
  contactSection: {
    badge: "Hubungi Kami",
    title: "Reservasi Layanan Homecare Premium Anda Sekarang",
    subtitle:
      "Hubungi layanan admin medis kami yang siaga melayani kebutuhan konsultasi awal Anda secara gratis dan ramah. Kami siap mengirimkan perawat terbaik langsung ke rumah Anda.",
    phoneImage: "/hand-holding-phone.png",
    contactCards: [
      {
        title: "Nomor WhatsApp",
        val: "+62 813-5487-2379",
        href: "https://wa.me/6281354872379",
        type: "whatsapp",
      },
      {
        title: "Email Support",
        val: "support@ivcaremedika.com",
        href: "mailto:support@ivcaremedika.com",
        type: "email",
      },
      {
        title: "Lokasi Pusat",
        val: "Kebayoran Baru, Jakarta Selatan",
        href: "https://maps.google.com",
        type: "map",
      },
    ] as ContactCard[],
    standardsTitle: "Standar Kenyamanan & Keamanan IVCare Medika:",
    checklists: [
      "Pre-tindakan asesmen medis klinis dari dokter mitra",
      "Peralatan steril baru segel dibuka di depan pasien",
      "Monitoring rekam medis digital secara berkelanjutan",
      "Jaminan perawat berlisensi STR aktif nasional",
    ],
  },

  // FAQ Section Constants
  faqSection: {
    badge: "FAQ",
    title: "Pertanyaan yang Sering Diajukan",
    subtitle:
      "Punya pertanyaan mengenai layanan kami? Temukan jawaban lengkap seputar prosedur medis kami di bawah ini.",
    searchPlaceholder: "Cari pertanyaan atau kata kunci medis...",
    categories: [
      "Semua Pertanyaan",
      "Layanan Homecare",
      "Pemeriksaan Kesehatan",
      "Wellness & Relaksasi",
      "Prosedur & Keamanan",
      "Pembayaran & Reservasi",
    ],
    faqs: [
      {
        category: "Layanan Homecare",
        q: "Apa itu layanan homecare IVCare Medika?",
        a: "Layanan homecare kami adalah perawatan medis terstandar rumah sakit yang dilakukan langsung di rumah pasien oleh perawat berlisensi resmi (STR). Layanan meliputi rawat luka, pendampingan stroke, pemasangan kateter, NGT, hingga perawatan lansia.",
      },
      {
        category: "Layanan Homecare",
        q: "Apakah perawat standby 24 jam di rumah?",
        a: "Ya, kami menyediakan paket pendampingan perawat standby mulai dari kunjungan harian (visit), shift 12 jam, hingga standby penuh 24 jam (menginap) sesuai dengan kondisi klinis dan kebutuhan keluarga pasien.",
      },
      {
        category: "Layanan Homecare",
        q: "Bagaimana kualifikasi perawat yang dikirim?",
        a: "Seluruh perawat IVCare Medika wajib memiliki Surat Tanda Registrasi (STR) aktif, berlatar belakang pendidikan minimal D3/S1 Keperawatan, memiliki sertifikasi kegawatdaruratan (BTCLS), serta lolos pelatihan SOP asuhan keperawatan rumah tangga kami.",
      },
      {
        category: "Layanan Homecare",
        q: "Apakah melayani sewa alat medis pendukung?",
        a: "Kami menyediakan sewa alat medis habis pakai pendukung tindakan keperawatan (seperti tiang infus, perlak medis, syringe pump, dll) yang disesuaikan secara khusus dengan jenis paket tindakan home visit yang Anda pesan.",
      },
      {
        category: "Pemeriksaan Kesehatan",
        q: "Apakah layanan dilakukan oleh tenaga kesehatan profesional?",
        a: "Tentu saja. Semua jenis tindakan pemeriksaan kesehatan, pengambilan darah laboratorium, maupun pemasangan infus dilakukan secara langsung oleh perawat profesional di bawah pengawasan serta rekomendasi klinis tim dokter penanggung jawab kami.",
      },
      {
        category: "Pemeriksaan Kesehatan",
        q: "Bagaimana cara melihat hasil lab pemeriksaan?",
        a: "Hasil sampel laboratorium yang diambil perawat di rumah Anda akan dikirimkan secara langsung dalam format PDF digital (melalui WhatsApp/Email) lengkap dengan interpretasi medis resmi dan saran rujukan klinis dari dokter mitra laboratorium terpercaya kami.",
      },
      {
        category: "Pemeriksaan Kesehatan",
        q: "Apakah bisa melakukan medical check-up kolektif?",
        a: "Ya, kami melayani pemesanan paket Medical Check-Up (MCU) secara kolektif untuk kebutuhan keluarga besar, komunitas, maupun kunjungan korporasi (karyawan kantor) langsung ke lokasi yang Anda tentukan.",
      },
      {
        category: "Wellness & Relaksasi",
        q: "Apa saja manfaat dari Infus Vitamin (Wellness Infusion)?",
        a: "Wellness infusion bermanfaat mempercepat penyerapan vitamin oleh sel tubuh secara optimal 100% guna meningkatkan imunitas, mengatasi kelelahan kronis (jetlag), mencerahkan kulit secara sehat dari dalam, serta membantu hidrasi tubuh pasca sakit.",
      },
      {
        category: "Wellness & Relaksasi",
        q: "Apakah aman melakukan infus vitamin tanpa resep?",
        a: "Sangat aman karena tim medis kami akan melakukan pre-tindakan asesmen (skrining tekanan darah, riwayat alergi, kondisi ginjal/kondisi khusus) terlebih dahulu secara cermat untuk memastikan formulasinya sesuai dengan metabolisme tubuh Anda.",
      },
      {
        category: "Prosedur & Keamanan",
        q: "Apakah alat yang digunakan dijamin steril?",
        a: "Mutlak steril. Kami berkomitmen menerapkan 'Zero Infection SOP'. Seluruh jarum, selang infus, spuit, kasa, dan sarung tangan medis yang digunakan oleh perawat kami adalah perlengkapan baru sekali pakai (disposable) yang dibuka langsung di hadapan pasien.",
      },
      {
        category: "Prosedur & Keamanan",
        q: "Bagaimana jika terjadi kondisi darurat saat tindakan?",
        a: "Perawat kami dibekali dengan modul tanggap darurat (First Aid SOP). Jika terjadi reaksi alergi obat atau kondisi gawat lainnya, perawat akan segera menghubungi tim dokter penanggung jawab kami dan berkoordinasi cepat dengan rumah sakit rujukan terdekat.",
      },
      {
        category: "Pembayaran & Reservasi",
        q: "Bagaimana cara memesan layanan dan membayarnya?",
        a: "Pemesanan dapat dilakukan dengan mudah melalui tombol chat WhatsApp admin. Pembayaran dilakukan secara aman via transfer bank resmi rekening perusahaan IVCare Medika setelah jadwal kunjungan dikonfirmasi.",
      },
    ] as FAQItem[],
    emptyMessage:
      "Maaf, tidak menemukan hasil FAQ untuk kata kunci atau filter tersebut.",
  },

  // Footer Constants
  footer: {
    description:
      "IVCare Medika adalah penyedia layanan kesehatan homecare yang melayani dengan keahlian, kepedulian mendalam, serta kesterilan peralatan mutlak langsung di rumah Anda.",
    copyrightPrefix: "©",
    copyrightSuffix: "IVCare Medika. Hak Cipta Dilindungi Undang-Undang.",
    legalLinks: [
      { name: "Kebijakan Privasi", href: "#home" },
      { name: "Syarat & Ketentuan", href: "#home" },
    ],
  },
};
