/* ========================================
   ClarityPath — Core Application Logic
   ======================================== */

// ============ MOCK DATA ============

const MOCK_DATA = {
    patient: {
        name: 'Tan Ah Kow',
        age: 72,
        nric_last4: '4829',
        familyMembers: [
            { name: 'Sarah Tan', relationship: 'Daughter', phone: '+65 9123 4567' },
            { name: 'David Tan', relationship: 'Son', phone: '+65 9876 5432' }
        ]
    },

    currentStage: 4, // 1-6

    stages: [
        { id: 1, date: '15 Nov 2025', status: 'completed' },
        { id: 2, date: '28 Nov 2025', status: 'completed' },
        { id: 3, date: '12 Dec 2025', status: 'completed' },
        { id: 4, date: '8 Jan 2026', status: 'current' },
        { id: 5, date: 'TBD', status: 'upcoming' },
        { id: 6, date: 'TBD', status: 'upcoming' }
    ],

    appointments: [
        {
            title: 'Specialist Review Meeting',
            date: 'Mon, 24 Feb 2026 · 10:00 AM',
            location: 'NUH Memory Clinic, Level 5',
            type: 'review',
            icon: '👨‍⚕️'
        },
        {
            title: 'Follow-up MRI Scan',
            date: 'Thu, 6 Mar 2026 · 2:30 PM',
            location: 'SGH Radiology Dept',
            type: 'scan',
            icon: '🧠'
        },
        {
            title: 'Care Plan Discussion',
            date: 'Tue, 18 Mar 2026 · 11:00 AM',
            location: 'NUH Memory Clinic, Level 5',
            type: 'appointment',
            icon: '📋'
        }
    ],

    notifications: [
        {
            id: 1,
            type: 'update',
            title: 'Specialist Review Scheduled',
            body: 'Dr. Lim Wei Ming and the MDT team have scheduled a review meeting for 24 Feb to discuss your father\'s comprehensive test results.',
            date: '2026-02-18',
            read: false,
            stageId: 4
        },
        {
            id: 2,
            type: 'result',
            title: 'Biomarker Results Available',
            body: 'Blood biomarker test results have been received and forwarded to the specialist team for analysis. View the report in Documents.',
            date: '2026-02-15',
            read: false,
            stageId: 3
        },
        {
            id: 3,
            type: 'update',
            title: 'MRI Report Filed',
            body: 'The brain MRI scan report has been completed by the radiologist and filed in your documents. The specialist team will review it during the MDT meeting.',
            date: '2026-02-10',
            read: false,
            stageId: 3
        },
        {
            id: 4,
            type: 'appointment',
            title: 'Reminder: Follow-up MRI',
            body: 'A follow-up MRI scan has been scheduled for 6 Mar 2026 at SGH Radiology Department. Please arrive 15 minutes early.',
            date: '2026-02-08',
            read: true,
            stageId: 3
        },
        {
            id: 5,
            type: 'result',
            title: 'ACE-III Test Completed',
            body: 'The Addenbrooke\'s Cognitive Examination (ACE-III) has been completed. Score: 62/100. Results have been shared with the specialist team.',
            date: '2026-01-28',
            read: true,
            stageId: 2
        },
        {
            id: 6,
            type: 'scan',
            title: 'Brain MRI Completed',
            body: 'Brain MRI scan completed successfully at SGH Radiology. Images have been sent to the radiologist for detailed analysis. Expected report in 5-7 working days.',
            date: '2026-01-20',
            read: true,
            stageId: 3
        },
        {
            id: 7,
            type: 'appointment',
            title: 'Memory Clinic Visit Completed',
            body: 'Comprehensive assessment at NUH Memory Clinic has been completed. Multiple tests were conducted including cognitive screening and family history interview.',
            date: '2026-01-12',
            read: true,
            stageId: 2
        },
        {
            id: 8,
            type: 'update',
            title: 'Referral to Memory Clinic',
            body: 'GP Dr. Chen has referred Tan Ah Kow to NUH Memory Clinic for comprehensive dementia assessment. Appointment details will follow.',
            date: '2025-12-01',
            read: true,
            stageId: 1
        },
        {
            id: 9,
            type: 'appointment',
            title: 'GP Screening Completed',
            body: 'Initial memory screening completed at Bukit Merah Polyclinic. Dr. Chen recommends further assessment at a specialist memory clinic.',
            date: '2025-11-15',
            read: true,
            stageId: 1
        },
        {
            id: 10,
            type: 'update',
            title: 'Welcome to ClarityPath',
            body: 'Your family has been registered on ClarityPath. You will receive notifications at every stage of the diagnosis journey. Tap the Clara icon anytime for help.',
            date: '2025-11-15',
            read: true,
            stageId: 1
        },
        {
            id: 11,
            type: 'result',
            title: 'Blood Test Results Ready',
            body: 'Routine blood test results are now available. All standard panels completed — results have been forwarded to the memory clinic team.',
            date: '2025-11-20',
            read: true,
            stageId: 1
        },
        {
            id: 12,
            type: 'update',
            title: 'Weekly Progress Update',
            body: 'Your father\'s case is being actively reviewed by the MDT. The team is currently analysing the MRI and biomarker results together. Next update expected within the week.',
            date: '2026-02-05',
            read: true,
            stageId: 4
        }
    ],

    messages: [
        {
            id: 1,
            sender: 'coordinator',
            senderName: 'Dr. Lim Wei Ming',
            text: 'Good morning Sarah. I wanted to let you know that we\'ve received all of your father\'s test results. The team will be reviewing them at our MDT meeting next week.',
            timestamp: '2026-02-17T09:15:00',
            read: true
        },
        {
            id: 2,
            sender: 'user',
            text: 'Thank you Dr. Lim. Is there anything we should prepare for the review meeting?',
            timestamp: '2026-02-17T09:45:00',
            read: true
        },
        {
            id: 3,
            sender: 'coordinator',
            senderName: 'Dr. Lim Wei Ming',
            text: 'No special preparation needed. It would be helpful if you could bring a list of any new symptoms or behavioural changes you\'ve noticed since the last visit. Also, please bring any medication your father is currently taking.',
            timestamp: '2026-02-17T10:02:00',
            read: true
        },
        {
            id: 4,
            sender: 'user',
            text: 'Okay, I\'ll prepare that. My father has been a bit more forgetful lately, especially with names. Should I be worried?',
            timestamp: '2026-02-17T10:30:00',
            read: true
        },
        {
            id: 5,
            sender: 'coordinator',
            senderName: 'Dr. Lim Wei Ming',
            text: 'That\'s actually very useful information — please do mention it at the review. Memory changes can vary, and tracking specific patterns helps the team tremendously. Try not to worry too much right now. We\'ll have a clearer picture after the specialist review.',
            timestamp: '2026-02-17T11:15:00',
            read: true
        },
        {
            id: 6,
            sender: 'coordinator',
            senderName: 'Dr. Lim Wei Ming',
            text: 'Hi Sarah, just confirming your father\'s specialist review is set for Monday 24 Feb at 10:00 AM, NUH Memory Clinic Level 5. See you there!',
            timestamp: '2026-02-19T14:30:00',
            read: false
        },
        {
            id: 7,
            sender: 'user',
            text: 'Thank you for the reminder! We\'ll be there. Is parking available at NUH?',
            timestamp: '2026-02-19T15:00:00',
            read: true
        },
        {
            id: 8,
            sender: 'coordinator',
            senderName: 'Dr. Lim Wei Ming',
            text: 'Yes, there\'s a multi-storey carpark at Kent Ridge Wing. I\'d recommend arriving about 15 minutes early to allow time for parking and registration. Take care and see you on Monday!',
            timestamp: '2026-02-19T15:20:00',
            read: false
        }
    ],

    documents: [
        {
            id: 1,
            title: 'Brain MRI Scan Report',
            category: 'scans',
            date: '2026-01-25',
            type: 'PDF',
            size: '2.4 MB',
            icon: '🧠',
            content: `<h2>MRI Brain Report</h2>
<p><strong>Patient:</strong> Tan Ah Kow (NRIC: XXXX4829)<br>
<strong>Date of Scan:</strong> 20 January 2026<br>
<strong>Referring Physician:</strong> Dr. Lim Wei Ming<br>
<strong>Radiologist:</strong> Dr. Priya Nair</p>

<h3>Clinical Indication</h3>
<p>Cognitive decline, memory impairment. Evaluate for neurodegenerative changes.</p>

<h3>Technique</h3>
<p>MRI of the brain was performed on a 3T scanner with standard dementia protocol including T1, T2, FLAIR, DWI, and volumetric sequences.</p>

<h3>Findings</h3>
<p>1. <strong>Hippocampal Volume:</strong> Mild bilateral hippocampal atrophy noted, more pronounced on the left (MTA score: 2/4). This is slightly beyond what is expected for the patient's age.</p>
<p>2. <strong>Cortical Changes:</strong> Mild cortical thinning in the temporal and parietal regions. No significant frontal lobe atrophy.</p>
<p>3. <strong>White Matter:</strong> Scattered periventricular white matter hyperintensities (Fazekas grade 1), consistent with age-related small vessel disease.</p>
<p>4. <strong>No acute infarcts, mass lesions, or abnormal enhancement.</strong></p>

<h3>Impression</h3>
<p>Mild hippocampal atrophy with subtle temporoparietal cortical thinning. Findings are consistent with early neurodegenerative changes. Clinical correlation with cognitive testing and biomarkers recommended.</p>`
        },
        {
            id: 2,
            title: 'ACE-III Cognitive Test Results',
            category: 'memory_tests',
            date: '2026-01-28',
            type: 'PDF',
            size: '580 KB',
            icon: '📝',
            content: `<h2>ACE-III Cognitive Assessment</h2>
<p><strong>Patient:</strong> Tan Ah Kow<br>
<strong>Date:</strong> 28 January 2026<br>
<strong>Administered by:</strong> Clinical Psychologist, NUH Memory Clinic</p>

<h3>Overall Score: 62/100</h3>

<h3>Domain Scores</h3>
<table style="width:100%;border-collapse:collapse;margin:16px 0">
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Attention</strong></td><td style="padding:8px;text-align:right">14/18</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Memory</strong></td><td style="padding:8px;text-align:right">8/26</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Fluency</strong></td><td style="padding:8px;text-align:right">6/14</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Language</strong></td><td style="padding:8px;text-align:right">20/26</td></tr>
<tr><td style="padding:8px"><strong>Visuospatial</strong></td><td style="padding:8px;text-align:right">14/16</td></tr>
</table>

<h3>Interpretation</h3>
<p>The overall score of 62/100 falls below the threshold for normal cognition (88/100). Significant deficits observed in the memory domain (8/26), with moderate impairment in fluency. Attention, language, and visuospatial abilities are relatively preserved.</p>

<p>These findings suggest early-stage cognitive impairment primarily affecting episodic memory and verbal fluency, consistent with a pattern often seen in early Alzheimer's disease. Further clinical correlation recommended.</p>`
        },
        {
            id: 3,
            title: 'GP Referral Letter',
            category: 'referrals',
            date: '2025-12-01',
            type: 'PDF',
            size: '320 KB',
            icon: '📋',
            content: `<h2>Referral Letter</h2>
<p><strong>From:</strong> Dr. Chen Wei Ling, Bukit Merah Polyclinic<br>
<strong>To:</strong> NUH Memory Clinic<br>
<strong>Date:</strong> 1 December 2025</p>

<p>Dear Colleague,</p>

<p>I am referring Mr. Tan Ah Kow (72M, NRIC XXXX4829) for specialist assessment of progressive memory concerns.</p>

<h3>Presenting Complaint</h3>
<p>Patient's daughter reports increasing forgetfulness over the past 8-10 months, including difficulty remembering recent conversations, misplacing items, and occasional disorientation in familiar surroundings. Patient has some awareness of these difficulties.</p>

<h3>Relevant History</h3>
<p>• Hypertension (well-controlled on Amlodipine 5mg OD)<br>
• Type 2 Diabetes (HbA1c 6.8%, on Metformin 500mg BD)<br>
• No history of stroke or head injury<br>
• Family history: Mother had dementia (diagnosed in her late 70s)</p>

<h3>Screening</h3>
<p>AMT score: 6/10 (borderline)<br>
Blood tests: FBC, TFT, B12, Folate, RPR — all within normal limits</p>

<p>Thank you for seeing this patient. Please advise on further management.</p>`
        },
        {
            id: 4,
            title: 'Blood Biomarker Report',
            category: 'specialist_reports',
            date: '2026-02-15',
            type: 'PDF',
            size: '450 KB',
            icon: '🔬',
            content: `<h2>Blood Biomarker Analysis Report</h2>
<p><strong>Patient:</strong> Tan Ah Kow<br>
<strong>Date Collected:</strong> 10 February 2026<br>
<strong>Date Reported:</strong> 15 February 2026<br>
<strong>Laboratory:</strong> NUH Clinical Laboratory</p>

<h3>Test Results</h3>
<table style="width:100%;border-collapse:collapse;margin:16px 0">
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>p-Tau 217</strong></td><td style="padding:8px;text-align:right">Elevated (above threshold)</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>Aβ42/40 ratio</strong></td><td style="padding:8px;text-align:right">0.058 (Low)</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:8px"><strong>NfL</strong></td><td style="padding:8px;text-align:right">28.5 pg/mL (Mildly elevated)</td></tr>
<tr><td style="padding:8px"><strong>GFAP</strong></td><td style="padding:8px;text-align:right">245 pg/mL (Elevated)</td></tr>
</table>

<h3>Interpretation</h3>
<p>The biomarker profile shows elevated p-Tau 217 and a low Aβ42/40 ratio, which are suggestive of amyloid pathology. Mildly elevated NfL and GFAP indicate some degree of neurodegeneration and neuroinflammation respectively. These findings will be correlated with imaging and cognitive results at the upcoming MDT review.</p>`
        },
        {
            id: 5,
            title: 'Blood Test — Routine Panel',
            category: 'other',
            date: '2025-11-20',
            type: 'PDF',
            size: '280 KB',
            icon: '🩸',
            content: `<h2>Routine Blood Test Results</h2>
<p><strong>Patient:</strong> Tan Ah Kow<br>
<strong>Date:</strong> 20 November 2025<br>
<strong>Clinic:</strong> Bukit Merah Polyclinic</p>

<h3>Results</h3>
<p>All values within normal reference ranges:</p>
<p>• Full Blood Count (FBC): Normal<br>
• Thyroid Function (TFT): TSH 2.1 mIU/L (Normal)<br>
• Vitamin B12: 380 pmol/L (Normal)<br>
• Folate: 15.2 nmol/L (Normal)<br>
• RPR/VDRL: Non-reactive<br>
• HbA1c: 6.8% (Pre-diabetic range, stable)<br>
• Renal Panel: Normal<br>
• Liver Function: Normal</p>

<p><em>No reversible causes of cognitive impairment identified from blood investigations.</em></p>`
        },
        {
            id: 6,
            title: 'Specialist Referral — Neurology',
            category: 'referrals',
            date: '2026-01-10',
            type: 'PDF',
            size: '310 KB',
            icon: '📨',
            content: `<h2>Internal Referral</h2>
<p><strong>From:</strong> Dr. Lim Wei Ming (Psychiatry, Memory Clinic)<br>
<strong>To:</strong> Dr. Rajesh Kumar (Neurology)<br>
<strong>Date:</strong> 10 January 2026</p>

<p>Dear Dr. Kumar,</p>

<p>I am referring Mr. Tan Ah Kow for neurological consultation as part of our multidisciplinary assessment. Initial cognitive testing (ACE-III: 62/100) shows significant memory domain impairment. Brain MRI reveals mild hippocampal atrophy. Blood biomarkers are pending.</p>

<p>Would appreciate your assessment for neurological examination and input for the upcoming MDT discussion.</p>

<p>Thank you.</p>`
        }
    ]
};

// ============ NOTIFICATION ICONS ============

const NOTIF_ICONS = {
    appointment: '📅',
    result: '📊',
    update: '📢',
    scan: '🧠',
    review: '👨‍⚕️'
};

const DOC_ICONS_DEFAULT = {
    scans: '🧠',
    memory_tests: '📝',
    referrals: '📋',
    specialist_reports: '🔬',
    other: '📄'
};

// ============ APP STATE ============

window.AppState = {
    currentTab: 'home',
    theme: localStorage.getItem('cp_theme') || 'light',
    language: localStorage.getItem('cp_language') || 'en',
    apiKey: localStorage.getItem('cp_apiKey') || (window.CLARITY_CONFIG && window.CLARITY_CONFIG.apiKey) || '',
    claraOpen: false,
    notifFilter: 'all',
    docFilter: 'all',
    notifications: JSON.parse(JSON.stringify(MOCK_DATA.notifications)),
    messages: JSON.parse(JSON.stringify(MOCK_DATA.messages)),
    documents: JSON.parse(JSON.stringify(MOCK_DATA.documents)),
    patient: MOCK_DATA.patient,
    currentStage: MOCK_DATA.currentStage,
    stages: MOCK_DATA.stages,
    appointments: MOCK_DATA.appointments
};

// Load persisted read states
const readNotifs = JSON.parse(localStorage.getItem('cp_readNotifs') || '[]');
readNotifs.forEach(id => {
    const notif = window.AppState.notifications.find(n => n.id === id);
    if (notif) notif.read = true;
});

// ============ HELPERS ============

function getTimeOfDay() {
    const h = new Date().getHours();
    if (h < 12) return t('morning');
    if (h < 18) return t('afternoon');
    return t('evening');
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - d) / (1000 * 60 * 60 * 24));

    if (diff === 0) return t('today');
    if (diff === 1) return t('yesterday');

    return d.toLocaleDateString('en-SG', { day: 'numeric', month: 'short', year: 'numeric' });
}

function formatTime(timestamp) {
    return new Date(timestamp).toLocaleTimeString('en-SG', { hour: '2-digit', minute: '2-digit', hour12: true });
}

function getUnreadCount(type) {
    if (type === 'notifications') {
        return window.AppState.notifications.filter(n => !n.read).length;
    }
    if (type === 'messages') {
        return window.AppState.messages.filter(m => m.sender === 'coordinator' && !m.read).length;
    }
    return 0;
}

// ============ TAB ROUTING ============

let tabSwitching = false;

function switchTab(tabId) {
    if (tabId === window.AppState.currentTab || tabSwitching) return;

    const current = document.querySelector('.tab-content.active');
    const next = document.getElementById(`tab-${tabId}`);
    if (!current || !next) return;

    tabSwitching = true;

    // Animate out
    current.classList.add('leaving');
    current.classList.remove('active');

    // Animate in
    setTimeout(() => {
        current.classList.remove('leaving');
        next.classList.add('active');
        window.AppState.currentTab = tabId;
        tabSwitching = false;

        // Re-render the target tab
        renderTab(tabId);
    }, 50);

    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
}

function renderTab(tabId) {
    switch (tabId) {
        case 'home': renderHome(); break;
        case 'notifications': renderNotifications(); break;
        case 'messages': renderMessages(); break;
        case 'documents': renderDocuments(); break;
        case 'settings': renderSettings(); break;
    }
}

// ============ RENDER: HOME ============

function renderHome() {
    const state = window.AppState;

    // Greeting
    const timeOfDay = getTimeOfDay();
    document.getElementById('homeGreeting').textContent = t('homeGreeting', { timeOfDay });
    document.getElementById('homeSubgreeting').textContent = t('homeSubgreeting');

    // Patient card
    document.getElementById('patientName').textContent = state.patient.name;
    document.getElementById('patientDetails').textContent = `${t('profileAge')}: ${state.patient.age} · NRIC: XXXX${state.patient.nric_last4}`;
    document.getElementById('patientAvatar').textContent = state.patient.name.split(' ').map(n => n[0]).join('');

    // Progress tracker
    const tracker = document.getElementById('progressTracker');
    tracker.innerHTML = state.stages.map((stage, i) => {
        const stageNum = i + 1;
        const dotClass = stage.status === 'completed' ? 'completed' : stage.status === 'current' ? 'current' : '';
        const lineClass = stage.status === 'completed' ? 'completed' : '';
        const statusText = stage.status === 'completed' ? t('stageCompleted') : stage.status === 'current' ? t('stageCurrent') : t('stageUpcoming');

        return `
            <div class="progress-step">
                <div class="step-indicator">
                    <div class="step-dot ${dotClass}">${stage.status === 'completed' ? '✓' : stageNum}</div>
                    ${i < state.stages.length - 1 ? `<div class="step-line ${lineClass}"></div>` : ''}
                </div>
                <div class="step-info">
                    <h4>${t(`stage${stageNum}Title`)}</h4>
                    <p>${t(`stage${stageNum}Desc`)}</p>
                    <span class="step-date">${stage.date} · ${statusText}</span>
                </div>
            </div>
        `;
    }).join('');

    // Appointments
    const apptList = document.getElementById('appointmentsList');
    apptList.innerHTML = state.appointments.map(appt => `
        <div class="appointment-card">
            <div class="appt-icon ${appt.type}">${appt.icon}</div>
            <div class="appt-info">
                <h4>${appt.title}</h4>
                <p>${appt.date}</p>
                <p class="text-small text-secondary">${appt.location}</p>
            </div>
        </div>
    `).join('');

    // Latest update
    const latest = state.notifications[0];
    if (latest) {
        document.getElementById('latestUpdate').innerHTML = `
            <div class="update-card">
                <div class="update-icon">${NOTIF_ICONS[latest.type] || '📢'}</div>
                <div>
                    <h4>${latest.title}</h4>
                    <p>${latest.body}</p>
                    <div class="update-date">${formatDate(latest.date)}</div>
                </div>
            </div>
        `;
    }

    // Mascot animation - react to milestone
    const mascot = document.getElementById('mascot');
    if (state.currentStage >= 4) {
        mascot.style.animation = 'mascotBounce 2s ease-in-out infinite';
    }
}

// ============ RENDER: NOTIFICATIONS ============

function renderNotifications() {
    const state = window.AppState;
    const filter = state.notifFilter;

    let filtered = [...state.notifications];
    if (filter === 'unread') filtered = filtered.filter(n => !n.read);
    else if (filter !== 'all') filtered = filtered.filter(n => n.type === filter);

    // Sort by date descending
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    const list = document.getElementById('notificationList');

    if (filtered.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" stroke-width="1.5">
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
                </svg>
                <p>${t('noNotifications')}</p>
            </div>
        `;
        return;
    }

    list.innerHTML = filtered.map((notif, i) => `
        <div class="notif-card ${notif.read ? '' : 'unread'}" data-action="toggleNotifRead" data-notif-id="${notif.id}" style="animation-delay: ${i * 0.05}s">
            <div class="notif-icon ${notif.type}">${NOTIF_ICONS[notif.type] || '📢'}</div>
            <div class="notif-body">
                <h4>${notif.title}</h4>
                <p>${notif.body}</p>
                <div class="notif-date">${formatDate(notif.date)}</div>
            </div>
            ${!notif.read ? '<div class="notif-dot"></div>' : ''}
        </div>
    `).join('');
}

// ============ RENDER: MESSAGES ============

function renderMessages() {
    const state = window.AppState;
    const chatArea = document.getElementById('chatArea');
    const searchTerm = (document.getElementById('messageSearch')?.value || '').toLowerCase();

    let msgs = [...state.messages];
    if (searchTerm) {
        msgs = msgs.filter(m => m.text.toLowerCase().includes(searchTerm));
    }

    // Group by date
    let currentDate = '';
    let html = '';

    msgs.forEach(msg => {
        const msgDate = new Date(msg.timestamp).toLocaleDateString();
        const today = new Date().toLocaleDateString();
        const yesterday = new Date(Date.now() - 86400000).toLocaleDateString();

        if (msgDate !== currentDate) {
            currentDate = msgDate;
            let dateLabel = msgDate;
            if (msgDate === today) dateLabel = t('today');
            else if (msgDate === yesterday) dateLabel = t('yesterday');
            else dateLabel = new Date(msg.timestamp).toLocaleDateString('en-SG', { day: 'numeric', month: 'short' });

            html += `<div class="chat-date-divider">${dateLabel}</div>`;
        }

        if (msg.sender === 'coordinator') {
            html += `
                <div class="chat-bubble received">
                    <div class="chat-sender">${msg.senderName} · ${t('careCoordinator')}</div>
                    ${msg.text}
                    <div class="bubble-time">${formatTime(msg.timestamp)}</div>
                </div>
            `;
        } else {
            html += `
                <div class="chat-bubble sent">
                    ${msg.text}
                    <div class="bubble-time">${formatTime(msg.timestamp)} · ${msg.read ? t('read') : t('delivered')}</div>
                </div>
            `;
        }
    });

    chatArea.innerHTML = html;

    // Scroll to bottom
    requestAnimationFrame(() => {
        chatArea.scrollTop = chatArea.scrollHeight;
    });
}

// ============ RENDER: DOCUMENTS ============

function renderDocuments() {
    const state = window.AppState;
    const filter = state.docFilter;
    const searchTerm = (document.getElementById('docSearch')?.value || '').toLowerCase();

    let docs = [...state.documents];
    if (filter !== 'all') docs = docs.filter(d => d.category === filter);
    if (searchTerm) docs = docs.filter(d => d.title.toLowerCase().includes(searchTerm));

    // Sort by date descending
    docs.sort((a, b) => new Date(b.date) - new Date(a.date));

    const list = document.getElementById('documentList');

    if (docs.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" stroke-width="1.5">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
                </svg>
                <p>${t('noDocuments')}</p>
            </div>
        `;
        return;
    }

    list.innerHTML = docs.map((doc, i) => `
        <div class="doc-card" data-action="openDoc" data-doc-id="${doc.id}" style="animation-delay: ${i * 0.05}s">
            <div class="doc-icon ${doc.category}">${doc.icon || DOC_ICONS_DEFAULT[doc.category] || '📄'}</div>
            <div class="doc-info">
                <h4>${doc.title}</h4>
                <div class="doc-meta">
                    <span>${formatDate(doc.date)}</span>
                    <span>·</span>
                    <span>${doc.type} · ${doc.size}</span>
                </div>
            </div>
            <span class="doc-category-badge">${t('cat' + doc.category.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')) || doc.category}</span>
        </div>
    `).join('');
}

// ============ RENDER: SETTINGS ============

function renderSettings() {
    const state = window.AppState;

    // Dark mode toggle
    document.getElementById('darkModeToggle').checked = state.theme === 'dark';

    // Language selector
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === state.language);
    });

    // API Key
    document.getElementById('apiKeyInput').value = state.apiKey || '';

    // Profile
    const profile = document.getElementById('profileCard');
    const p = state.patient;
    profile.innerHTML = `
        <div class="profile-row"><span class="profile-label">${t('profilePatientName')}</span><span class="profile-value">${p.name}</span></div>
        <div class="profile-row"><span class="profile-label">${t('profileAge')}</span><span class="profile-value">${p.age}</span></div>
        <div class="profile-row"><span class="profile-label">${t('profileNRIC')}</span><span class="profile-value">XXXX${p.nric_last4}</span></div>
        ${p.familyMembers.map(fm => `
            <div class="profile-row"><span class="profile-label">${t('profileFamilyMember')}</span><span class="profile-value">${fm.name}</span></div>
            <div class="profile-row"><span class="profile-label">${t('profileRelationship')}</span><span class="profile-value">${fm.relationship}</span></div>
            <div class="profile-row"><span class="profile-label">${t('profilePhone')}</span><span class="profile-value">${fm.phone}</span></div>
        `).join('')}
    `;

    // FAQ
    renderFAQ();
}

function renderFAQ() {
    const faqList = document.getElementById('faqList');
    const faqs = [1, 2, 3, 4];
    faqList.innerHTML = faqs.map(i => `
        <div class="faq-item" data-action="toggleFaq">
            <button class="faq-question">
                <span>${t(`faq${i}Q`)}</span>
                <svg class="faq-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </button>
            <div class="faq-answer"><p>${t(`faq${i}A`)}</p></div>
        </div>
    `).join('');
}

// ============ DOCUMENT VIEWER ============

function openDocViewer(docId) {
    const doc = window.AppState.documents.find(d => d.id === parseInt(docId));
    if (!doc) return;

    document.getElementById('docViewerTitle').textContent = doc.title;
    document.getElementById('docViewerMeta').textContent = `${formatDate(doc.date)} · ${doc.type} · ${doc.size}`;
    document.getElementById('docViewerContent').innerHTML = doc.content;
    document.getElementById('docViewer').classList.add('active');
}

function closeDocViewer() {
    document.getElementById('docViewer').classList.remove('active');
}

// ============ THEME ============

function setTheme(theme) {
    window.AppState.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cp_theme', theme);
}

// ============ LANGUAGE ============

function setLanguage(lang) {
    window.AppState.language = lang;
    localStorage.setItem('cp_language', lang);
    applyTranslations(lang);

    // Re-render dynamic content
    renderTab(window.AppState.currentTab);
    updateBadges();
}

// ============ BADGES ============

function updateBadges() {
    const notifCount = getUnreadCount('notifications');
    const msgCount = getUnreadCount('messages');

    const notifBadge = document.getElementById('notifBadge');
    const msgBadge = document.getElementById('msgBadge');

    notifBadge.textContent = notifCount;
    notifBadge.classList.toggle('visible', notifCount > 0);

    msgBadge.textContent = msgCount;
    msgBadge.classList.toggle('visible', msgCount > 0);
}

// ============ SEND MESSAGE ============

function sendUserMessage() {
    const input = document.getElementById('messageInput');
    const text = input.value.trim();
    if (!text) return;

    const msg = {
        id: window.AppState.messages.length + 1,
        sender: 'user',
        text: text,
        timestamp: new Date().toISOString(),
        read: true
    };

    window.AppState.messages.push(msg);
    input.value = '';
    renderMessages();

    // Simulate coordinator reply after 2s
    setTimeout(() => {
        const replies = [
            "Thank you for your message. I'll look into this and get back to you shortly.",
            "Noted, Sarah. I'll follow up with the team and update you within the day.",
            "Thanks for letting me know. I'll check on this and send you an update soon.",
            "I've received your message. Let me coordinate with the relevant department and I'll update you."
        ];
        const reply = {
            id: window.AppState.messages.length + 1,
            sender: 'coordinator',
            senderName: 'Dr. Lim Wei Ming',
            text: replies[Math.floor(Math.random() * replies.length)],
            timestamp: new Date().toISOString(),
            read: false
        };
        window.AppState.messages.push(reply);
        renderMessages();
        updateBadges();
    }, 2000);
}

// ============ EVENT HANDLING ============

document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
    if (!target) {
        // Check for nav buttons
        const navBtn = e.target.closest('.nav-btn');
        if (navBtn) {
            switchTab(navBtn.dataset.tab);
            return;
        }

        // Check filter chips
        const chip = e.target.closest('.filter-chip');
        if (chip) {
            const filterBar = chip.closest('.filter-bar');
            filterBar.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            if (filterBar.id === 'notifFilterBar') {
                window.AppState.notifFilter = chip.dataset.filter;
                renderNotifications();
            } else if (filterBar.id === 'docFilterBar') {
                window.AppState.docFilter = chip.dataset.filter;
                renderDocuments();
            }
            return;
        }

        // Language buttons
        const langBtn = e.target.closest('.lang-btn');
        if (langBtn) {
            setLanguage(langBtn.dataset.lang);
            return;
        }

        // FAQ toggle
        const faqItem = e.target.closest('.faq-item');
        if (faqItem) {
            faqItem.classList.toggle('open');
            return;
        }

        return;
    }

    const action = target.dataset.action;

    switch (action) {
        case 'toggleClara':
            window.AppState.claraOpen = !window.AppState.claraOpen;
            document.getElementById('claraOverlay').classList.toggle('active', window.AppState.claraOpen);
            document.getElementById('claraFab').style.display = window.AppState.claraOpen ? 'none' : 'flex';
            if (window.AppState.claraOpen && typeof initClara === 'function') {
                initClara();
            }
            break;

        case 'sendClara':
            if (typeof sendClaraMessage === 'function') {
                sendClaraMessage();
            }
            break;

        case 'sendMessage':
            sendUserMessage();
            break;

        case 'toggleNotifRead': {
            const notifId = parseInt(target.dataset.notifId);
            const notif = window.AppState.notifications.find(n => n.id === notifId);
            if (notif) {
                notif.read = !notif.read;
                // Persist
                const readList = window.AppState.notifications.filter(n => n.read).map(n => n.id);
                localStorage.setItem('cp_readNotifs', JSON.stringify(readList));
                renderNotifications();
                updateBadges();
            }
            break;
        }

        case 'openDoc':
            openDocViewer(target.dataset.docId);
            break;

        case 'closeDocViewer':
            closeDocViewer();
            break;

        case 'downloadDoc':
            alert('Document download started');
            break;

        case 'shareDoc':
            alert('Share options opened');
            break;

        case 'saveApiKey': {
            const key = document.getElementById('apiKeyInput').value.trim();
            window.AppState.apiKey = key;
            localStorage.setItem('cp_apiKey', key);
            alert('API key saved');
            break;
        }

        case 'logout':
            if (confirm('Are you sure you want to log out?')) {
                localStorage.clear();
                location.reload();
            }
            break;

        case 'attach':
            alert('File attachment coming soon');
            break;
    }
});

// Dark mode toggle
document.getElementById('darkModeToggle')?.addEventListener('change', (e) => {
    setTheme(e.target.checked ? 'dark' : 'light');
});

// Message input enter key
document.getElementById('messageInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendUserMessage();
});

// Clara input enter key
document.getElementById('claraInput')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && typeof sendClaraMessage === 'function') {
        sendClaraMessage();
    }
});

// Search inputs
document.getElementById('messageSearch')?.addEventListener('input', () => renderMessages());
document.getElementById('docSearch')?.addEventListener('input', () => renderDocuments());

// ============ INITIALIZATION ============

function initApp() {
    // Apply saved theme
    setTheme(window.AppState.theme);

    // Apply saved language
    applyTranslations(window.AppState.language);

    // Render initial tab
    renderHome();

    // Update badges
    updateBadges();

    // Render settings
    renderSettings();

    // Header greeting
    document.getElementById('headerGreeting').textContent = t('greeting');

    // Hide loader
    document.getElementById('loadingOverlay').style.display = 'none';
}

// Start app
document.addEventListener('DOMContentLoaded', initApp);
