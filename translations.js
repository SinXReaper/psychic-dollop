/* ========================================
   ClarityPath — Translations (EN/ZH/MS/TA)
   ======================================== */

const TRANSLATIONS = {
    en: {
        // Nav
        navHome: 'Home',
        navNotifications: 'Alerts',
        navMessages: 'Messages',
        navDocuments: 'Documents',
        navSettings: 'Settings',

        // Header
        greeting: 'Welcome back',

        // Home
        homeGreeting: 'Good {{timeOfDay}}, Sarah',
        homeSubgreeting: "Here's your father's latest update",
        journeyProgress: 'Diagnosis Journey',
        upcomingAppointments: 'Upcoming Appointments',
        latestUpdate: 'Latest Update',
        stageCompleted: 'Completed',
        stageCurrent: 'In Progress',
        stageUpcoming: 'Upcoming',

        // Journey Stages
        stage1Title: 'GP / Polyclinic Visit',
        stage1Desc: 'Initial screening and referral',
        stage2Title: 'Memory Clinic Assessment',
        stage2Desc: 'Comprehensive cognitive testing',
        stage3Title: 'Brain Imaging & Labs',
        stage3Desc: 'MRI scan and biomarker tests',
        stage4Title: 'Specialist Review',
        stage4Desc: 'MDT meeting and analysis',
        stage5Title: 'Diagnosis Delivery',
        stage5Desc: 'Results and care plan discussion',
        stage6Title: 'Ongoing Care Plan',
        stage6Desc: 'Continuous support and follow-up',

        // Notifications
        notifications: 'Notifications',
        filterAll: 'All',
        filterUnread: 'Unread',
        filterAppointments: 'Appointments',
        filterResults: 'Results',
        filterUpdates: 'Updates',
        markAsRead: 'Mark as read',
        noNotifications: 'No notifications to show',

        // Messages
        messages: 'Messages',
        searchMessages: 'Search messages...',
        typeMessage: 'Type a message...',
        today: 'Today',
        yesterday: 'Yesterday',
        read: 'Read',
        delivered: 'Delivered',
        careCoordinator: 'Care Coordinator',

        // Documents
        documents: 'Documents',
        searchDocuments: 'Search documents...',
        catScans: 'Scans',
        catMemoryTests: 'Memory Tests',
        catReferrals: 'Referrals',
        catSpecialist: 'Specialist',
        catSpecialistReports: 'Specialist',
        catOther: 'Other',
        noDocuments: 'No documents found',

        // Settings
        settings: 'Settings',
        appearance: 'Appearance',
        darkMode: 'Dark Mode',
        language: 'Language',
        notifPreferences: 'Notification Preferences',
        notifAppointments: 'Appointment Reminders',
        notifResults: 'Test Results',
        notifUpdates: 'General Updates',
        profile: 'Profile',
        helpFaq: 'Help & FAQ',
        logout: 'Log Out',
        apiKeyLabel: 'OpenRouter API Key (for Clara AI)',
        saveKey: 'Save Key',

        // Profile labels
        profilePatientName: 'Patient Name',
        profileAge: 'Age',
        profileNRIC: 'NRIC (last 4)',
        profileFamilyMember: 'Family Contact',
        profileRelationship: 'Relationship',
        profilePhone: 'Phone',

        // Clara
        claraStatus: 'Online — here to help',
        askClara: 'Ask Clara anything...',
        claraWelcome: "Hi there! I'm Clara, your care companion. I can help you find information about your father's diagnosis journey, explain medical terms, or guide you through the app. What would you like to know?",

        // FAQ
        faq1Q: 'What is ClarityPath?',
        faq1A: 'ClarityPath is a mobile app that helps families track and understand the dementia diagnosis journey in Singapore. It provides real-time updates, stores medical documents, and offers AI-powered guidance.',
        faq2Q: 'How does the notification system work?',
        faq2A: 'You receive automatic notifications at each stage of the diagnosis process — from referrals and appointments to test results and specialist reviews. You can customise which notifications you receive in Settings.',
        faq3Q: 'Who is Clara?',
        faq3A: 'Clara is your AI care companion. She can answer questions about the dementia diagnosis process, help you find specific documents or notifications, and provide emotional support in your preferred language.',
        faq4Q: 'Is my data secure?',
        faq4A: 'Yes. All data is stored locally on your device. Documents and medical information are not shared with third parties. The Clara AI only processes your questions — it does not store conversation history on external servers.',

        // Time of day
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
    },

    zh: {
        // Nav
        navHome: '首页',
        navNotifications: '通知',
        navMessages: '消息',
        navDocuments: '文件',
        navSettings: '设置',

        // Header
        greeting: '欢迎回来',

        // Home
        homeGreeting: '{{timeOfDay}}好，Sarah',
        homeSubgreeting: '以下是您父亲的最新状况',
        journeyProgress: '诊断进程',
        upcomingAppointments: '即将到来的预约',
        latestUpdate: '最新动态',
        stageCompleted: '已完成',
        stageCurrent: '进行中',
        stageUpcoming: '即将到来',

        // Journey Stages
        stage1Title: '全科/综合诊疗所就诊',
        stage1Desc: '初步筛查和转介',
        stage2Title: '记忆诊所评估',
        stage2Desc: '综合认知测试',
        stage3Title: '脑部影像和化验',
        stage3Desc: 'MRI 扫描和生物标志物检测',
        stage4Title: '专科医生审查',
        stage4Desc: '多学科团队会议和分析',
        stage5Title: '诊断结果',
        stage5Desc: '结果和护理计划讨论',
        stage6Title: '持续护理计划',
        stage6Desc: '持续支持和随访',

        // Notifications
        notifications: '通知',
        filterAll: '全部',
        filterUnread: '未读',
        filterAppointments: '预约',
        filterResults: '结果',
        filterUpdates: '动态',
        markAsRead: '标为已读',
        noNotifications: '暂无通知',

        // Messages
        messages: '消息',
        searchMessages: '搜索消息...',
        typeMessage: '输入消息...',
        today: '今天',
        yesterday: '昨天',
        read: '已读',
        delivered: '已送达',
        careCoordinator: '护理协调员',

        // Documents
        documents: '文件',
        searchDocuments: '搜索文件...',
        catScans: '扫描',
        catMemoryTests: '记忆测试',
        catReferrals: '转介',
        catSpecialist: '专科',
        catSpecialistReports: '专科',
        catOther: '其他',
        noDocuments: '未找到文件',

        // Settings
        settings: '设置',
        appearance: '外观',
        darkMode: '深色模式',
        language: '语言',
        notifPreferences: '通知偏好',
        notifAppointments: '预约提醒',
        notifResults: '检测结果',
        notifUpdates: '一般动态',
        profile: '个人资料',
        helpFaq: '帮助与常见问题',
        logout: '退出登录',
        apiKeyLabel: 'OpenRouter API 密钥（Clara AI 使用）',
        saveKey: '保存密钥',

        // Profile
        profilePatientName: '患者姓名',
        profileAge: '年龄',
        profileNRIC: 'NRIC（后4位）',
        profileFamilyMember: '家属联系人',
        profileRelationship: '关系',
        profilePhone: '电话',

        // Clara
        claraStatus: '在线 — 随时为您服务',
        askClara: '向 Clara 提问...',
        claraWelcome: '您好！我是 Clara，您的护理助手。我可以帮您查找有关您父亲诊断进程的信息、解释医学术语，或引导您使用本应用。请问您想了解什么？',

        // FAQ
        faq1Q: '什么是 ClarityPath？',
        faq1A: 'ClarityPath 是一款帮助家庭在新加坡追踪和了解痴呆诊断过程的移动应用。它提供实时更新、存储医疗文件，并提供 AI 驱动的指导。',
        faq2Q: '通知系统如何运作？',
        faq2A: '您将在诊断过程的每个阶段收到自动通知——从转介和预约到检测结果和专科审查。您可以在设置中自定义接收哪些通知。',
        faq3Q: '谁是 Clara？',
        faq3A: 'Clara 是您的 AI 护理助手。她可以回答有关痴呆诊断过程的问题，帮助您查找特定文件或通知，并以您偏好的语言提供情感支持。',
        faq4Q: '我的数据安全吗？',
        faq4A: '是的。所有数据都存储在您的设备上。文件和医疗信息不会与第三方共享。Clara AI 仅处理您的问题——不会在外部服务器上存储对话记录。',

        // Time of day
        morning: '早上',
        afternoon: '下午',
        evening: '晚上',
    },

    ms: {
        // Nav
        navHome: 'Utama',
        navNotifications: 'Makluman',
        navMessages: 'Mesej',
        navDocuments: 'Dokumen',
        navSettings: 'Tetapan',

        // Header
        greeting: 'Selamat kembali',

        // Home
        homeGreeting: 'Selamat {{timeOfDay}}, Sarah',
        homeSubgreeting: 'Berikut ialah kemas kini terbaru bapa anda',
        journeyProgress: 'Perjalanan Diagnosis',
        upcomingAppointments: 'Temu Janji Akan Datang',
        latestUpdate: 'Kemas Kini Terkini',
        stageCompleted: 'Selesai',
        stageCurrent: 'Sedang Berjalan',
        stageUpcoming: 'Akan Datang',

        // Journey Stages
        stage1Title: 'Lawatan GP / Poliklinik',
        stage1Desc: 'Saringan awal dan rujukan',
        stage2Title: 'Penilaian Klinik Memori',
        stage2Desc: 'Ujian kognitif menyeluruh',
        stage3Title: 'Pengimejan Otak & Makmal',
        stage3Desc: 'Imbasan MRI dan ujian biopenanda',
        stage4Title: 'Semakan Pakar',
        stage4Desc: 'Mesyuarat MDT dan analisis',
        stage5Title: 'Penyampaian Diagnosis',
        stage5Desc: 'Keputusan dan perbincangan pelan penjagaan',
        stage6Title: 'Pelan Penjagaan Berterusan',
        stage6Desc: 'Sokongan dan susulan berterusan',

        // Notifications
        notifications: 'Makluman',
        filterAll: 'Semua',
        filterUnread: 'Belum Dibaca',
        filterAppointments: 'Temu Janji',
        filterResults: 'Keputusan',
        filterUpdates: 'Kemas Kini',
        markAsRead: 'Tanda dibaca',
        noNotifications: 'Tiada makluman',

        // Messages
        messages: 'Mesej',
        searchMessages: 'Cari mesej...',
        typeMessage: 'Taip mesej...',
        today: 'Hari Ini',
        yesterday: 'Semalam',
        read: 'Dibaca',
        delivered: 'Dihantar',
        careCoordinator: 'Penyelaras Penjagaan',

        // Documents
        documents: 'Dokumen',
        searchDocuments: 'Cari dokumen...',
        catScans: 'Imbasan',
        catMemoryTests: 'Ujian Memori',
        catReferrals: 'Rujukan',
        catSpecialist: 'Pakar',
        catSpecialistReports: 'Pakar',
        catOther: 'Lain-lain',
        noDocuments: 'Tiada dokumen dijumpai',

        // Settings
        settings: 'Tetapan',
        appearance: 'Penampilan',
        darkMode: 'Mod Gelap',
        language: 'Bahasa',
        notifPreferences: 'Keutamaan Makluman',
        notifAppointments: 'Peringatan Temu Janji',
        notifResults: 'Keputusan Ujian',
        notifUpdates: 'Kemas Kini Am',
        profile: 'Profil',
        helpFaq: 'Bantuan & Soalan Lazim',
        logout: 'Log Keluar',
        apiKeyLabel: 'Kunci API OpenRouter (untuk Clara AI)',
        saveKey: 'Simpan Kunci',

        // Profile
        profilePatientName: 'Nama Pesakit',
        profileAge: 'Umur',
        profileNRIC: 'NRIC (4 digit terakhir)',
        profileFamilyMember: 'Kenalan Keluarga',
        profileRelationship: 'Hubungan',
        profilePhone: 'Telefon',

        // Clara
        claraStatus: 'Dalam talian — sedia membantu',
        askClara: 'Tanya Clara apa sahaja...',
        claraWelcome: 'Hai! Saya Clara, teman penjagaan anda. Saya boleh membantu anda mencari maklumat tentang perjalanan diagnosis bapa anda, menerangkan istilah perubatan, atau membimbing anda menggunakan aplikasi ini. Apa yang anda ingin tahu?',

        // FAQ
        faq1Q: 'Apa itu ClarityPath?',
        faq1A: 'ClarityPath ialah aplikasi mudah alih yang membantu keluarga menjejak dan memahami perjalanan diagnosis demensia di Singapura. Ia menyediakan kemas kini masa nyata, menyimpan dokumen perubatan, dan menawarkan panduan berkuasa AI.',
        faq2Q: 'Bagaimana sistem makluman berfungsi?',
        faq2A: 'Anda menerima makluman automatik pada setiap peringkat proses diagnosis — dari rujukan dan temu janji hingga keputusan ujian dan semakan pakar. Anda boleh menyesuaikan makluman yang anda terima di Tetapan.',
        faq3Q: 'Siapa Clara?',
        faq3A: 'Clara ialah teman penjagaan AI anda. Dia boleh menjawab soalan tentang proses diagnosis demensia, membantu anda mencari dokumen atau makluman tertentu, dan memberikan sokongan emosi dalam bahasa pilihan anda.',
        faq4Q: 'Adakah data saya selamat?',
        faq4A: 'Ya. Semua data disimpan di peranti anda. Dokumen dan maklumat perubatan tidak dikongsi dengan pihak ketiga. Clara AI hanya memproses soalan anda — ia tidak menyimpan sejarah perbualan pada pelayan luaran.',

        // Time of day
        morning: 'pagi',
        afternoon: 'petang',
        evening: 'malam',
    },

    ta: {
        // Nav
        navHome: 'முகப்பு',
        navNotifications: 'அறிவிப்புகள்',
        navMessages: 'செய்திகள்',
        navDocuments: 'ஆவணங்கள்',
        navSettings: 'அமைப்புகள்',

        // Header
        greeting: 'மீண்டும் வரவேற்கிறோம்',

        // Home
        homeGreeting: '{{timeOfDay}} வணக்கம், Sarah',
        homeSubgreeting: 'உங்கள் தந்தையின் சமீபத்திய புதுப்பிப்பு இங்கே',
        journeyProgress: 'நோய் கண்டறிதல் பயணம்',
        upcomingAppointments: 'வரவிருக்கும் சந்திப்புகள்',
        latestUpdate: 'சமீபத்திய புதுப்பிப்பு',
        stageCompleted: 'நிறைவடைந்தது',
        stageCurrent: 'நடப்பில் உள்ளது',
        stageUpcoming: 'வரவிருக்கிறது',

        // Journey Stages
        stage1Title: 'GP / பாலிகிளினிக் வருகை',
        stage1Desc: 'ஆரம்ப பரிசோதனை மற்றும் பரிந்துரை',
        stage2Title: 'நினைவாற்றல் மருத்துவமனை மதிப்பீடு',
        stage2Desc: 'விரிவான அறிவாற்றல் பரிசோதனை',
        stage3Title: 'மூளை படமெடுப்பு & ஆய்வகம்',
        stage3Desc: 'MRI ஸ்கேன் மற்றும் உயிரியல் குறியீட்டு சோதனைகள்',
        stage4Title: 'நிபுணர் மதிப்பாய்வு',
        stage4Desc: 'MDT கூட்டம் மற்றும் பகுப்பாய்வு',
        stage5Title: 'நோய் கண்டறிதல் வழங்கல்',
        stage5Desc: 'முடிவுகள் மற்றும் பராமரிப்பு திட்ட விவாதம்',
        stage6Title: 'தொடர்ச்சியான பராமரிப்பு திட்டம்',
        stage6Desc: 'தொடர்ச்சியான ஆதரவு மற்றும் பின்தொடர்தல்',

        // Notifications
        notifications: 'அறிவிப்புகள்',
        filterAll: 'அனைத்தும்',
        filterUnread: 'படிக்காதவை',
        filterAppointments: 'சந்திப்புகள்',
        filterResults: 'முடிவுகள்',
        filterUpdates: 'புதுப்பிப்புகள்',
        markAsRead: 'படித்ததாக குறி',
        noNotifications: 'காட்ட அறிவிப்புகள் இல்லை',

        // Messages
        messages: 'செய்திகள்',
        searchMessages: 'செய்திகளை தேடு...',
        typeMessage: 'செய்தி தட்டச்சு செய்...',
        today: 'இன்று',
        yesterday: 'நேற்று',
        read: 'படிக்கப்பட்டது',
        delivered: 'வழங்கப்பட்டது',
        careCoordinator: 'பராமரிப்பு ஒருங்கிணைப்பாளர்',

        // Documents
        documents: 'ஆவணங்கள்',
        searchDocuments: 'ஆவணங்களை தேடு...',
        catScans: 'ஸ்கேன்கள்',
        catMemoryTests: 'நினைவாற்றல் சோதனைகள்',
        catReferrals: 'பரிந்துரைகள்',
        catSpecialist: 'நிபுணர்',
        catSpecialistReports: 'நிபுணர்',
        catOther: 'மற்றவை',
        noDocuments: 'ஆவணங்கள் காணப்படவில்லை',

        // Settings
        settings: 'அமைப்புகள்',
        appearance: 'தோற்றம்',
        darkMode: 'இருள் பயன்முறை',
        language: 'மொழி',
        notifPreferences: 'அறிவிப்பு விருப்பங்கள்',
        notifAppointments: 'சந்திப்பு நினைவூட்டல்கள்',
        notifResults: 'சோதனை முடிவுகள்',
        notifUpdates: 'பொது புதுப்பிப்புகள்',
        profile: 'சுயவிவரம்',
        helpFaq: 'உதவி & அடிக்கடி கேட்கப்படும் கேள்விகள்',
        logout: 'வெளியேறு',
        apiKeyLabel: 'OpenRouter API விசை (Clara AI க்கு)',
        saveKey: 'விசையை சேமி',

        // Profile
        profilePatientName: 'நோயாளி பெயர்',
        profileAge: 'வயது',
        profileNRIC: 'NRIC (கடைசி 4)',
        profileFamilyMember: 'குடும்பத் தொடர்பு',
        profileRelationship: 'உறவு',
        profilePhone: 'தொலைபேசி',

        // Clara
        claraStatus: 'ஆன்லைன் — உதவ தயாராக',
        askClara: 'Clara-விடம் எதையும் கேளுங்கள்...',
        claraWelcome: 'வணக்கம்! நான் Clara, உங்கள் பராமரிப்பு துணை. உங்கள் தந்தையின் நோய் கண்டறிதல் பயணம் பற்றிய தகவல்களைக் கண்டறிய, மருத்துவ சொற்களை விளக்க, அல்லது இந்த செயலியைப் பயன்படுத்த உங்களுக்கு வழிகாட்ட என்னால் உதவ முடியும். நீங்கள் என்ன அறிய விரும்புகிறீர்கள்?',

        // FAQ
        faq1Q: 'ClarityPath என்றால் என்ன?',
        faq1A: 'ClarityPath என்பது சிங்கப்பூரில் டிமென்ஷியா நோய் கண்டறிதல் பயணத்தை குடும்பங்கள் கண்காணிக்கவும் புரிந்துகொள்ளவும் உதவும் மொபைல் செயலி. இது நிகழ்நேர புதுப்பிப்புகள், மருத்துவ ஆவணங்களை சேமிப்பு மற்றும் AI இயக்கும் வழிகாட்டுதலை வழங்குகிறது.',
        faq2Q: 'அறிவிப்பு அமைப்பு எப்படி வேலை செய்கிறது?',
        faq2A: 'நோய் கண்டறிதல் செயல்முறையின் ஒவ்வொரு கட்டத்திலும் — பரிந்துரைகள் மற்றும் சந்திப்புகள் முதல் சோதனை முடிவுகள் மற்றும் நிபுணர் மதிப்பாய்வுகள் வரை — தானியங்கி அறிவிப்புகளைப் பெறுவீர்கள். அமைப்புகளில் எந்த அறிவிப்புகளைப் பெறுவது என்பதைத் தனிப்பயனாக்கலாம்.',
        faq3Q: 'Clara யார்?',
        faq3A: 'Clara உங்கள் AI பராமரிப்பு துணை. டிமென்ஷியா நோய் கண்டறிதல் செயல்முறை பற்றிய கேள்விகளுக்கு பதிலளிக்கவும், குறிப்பிட்ட ஆவணங்கள் அல்லது அறிவிப்புகளைக் கண்டறியவும், உங்கள் விருப்பமான மொழியில் உணர்ச்சி ஆதரவை வழங்கவும் அவளால் முடியும்.',
        faq4Q: 'என் தரவு பாதுகாப்பானதா?',
        faq4A: 'ஆம். அனைத்து தரவும் உங்கள் சாதனத்தில் சேமிக்கப்படுகிறது. ஆவணங்கள் மற்றும் மருத்துவ தகவல்கள் மூன்றாம் தரப்பினருடன் பகிரப்படாது. Clara AI உங்கள் கேள்விகளை மட்டுமே செயலாக்குகிறது — வெளிப்புற சேவையகங்களில் உரையாடல் வரலாற்றை சேமிக்காது.',

        // Time of day
        morning: 'காலை',
        afternoon: 'மதியம்',
        evening: 'மாலை',
    }
};

// Language names for display
const LANGUAGE_NAMES = {
    en: 'English',
    zh: '中文',
    ms: 'Bahasa Melayu',
    ta: 'தமிழ்'
};

/**
 * Apply translations to all elements with data-i18n attributes
 */
function applyTranslations(lang) {
    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) {
            el.placeholder = t[key];
        }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;
}

/**
 * Get a translated string with interpolation
 */
function t(key, vars = {}) {
    const lang = window.AppState ? window.AppState.language : 'en';
    const translations = TRANSLATIONS[lang] || TRANSLATIONS.en;
    let str = translations[key] || TRANSLATIONS.en[key] || key;

    // Replace {{variable}} placeholders
    Object.keys(vars).forEach(varKey => {
        str = str.replace(new RegExp(`\\{\\{${varKey}\\}\\}`, 'g'), vars[varKey]);
    });

    return str;
}
