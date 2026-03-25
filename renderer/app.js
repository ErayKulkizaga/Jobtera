/* ── Known Companies (for autocomplete) ─────────────────────────────────── */
const KNOWN_COMPANIES = [
  // Global Tech
  { name:'Google',        domain:'google.com'        },
  { name:'Meta',          domain:'meta.com'           },
  { name:'Microsoft',     domain:'microsoft.com'      },
  { name:'Apple',         domain:'apple.com'          },
  { name:'Amazon',        domain:'amazon.com'         },
  { name:'Netflix',       domain:'netflix.com'        },
  { name:'Spotify',       domain:'spotify.com'        },
  { name:'X (Twitter)',   domain:'x.com'              },
  { name:'LinkedIn',      domain:'linkedin.com'       },
  { name:'Airbnb',        domain:'airbnb.com'         },
  { name:'Uber',          domain:'uber.com'           },
  { name:'Stripe',        domain:'stripe.com'         },
  { name:'Shopify',       domain:'shopify.com'        },
  { name:'Salesforce',    domain:'salesforce.com'     },
  { name:'Oracle',        domain:'oracle.com'         },
  { name:'IBM',           domain:'ibm.com'            },
  { name:'Intel',         domain:'intel.com'          },
  { name:'NVIDIA',        domain:'nvidia.com'         },
  { name:'AMD',           domain:'amd.com'            },
  { name:'Tesla',         domain:'tesla.com'          },
  { name:'SpaceX',        domain:'spacex.com'         },
  { name:'GitHub',        domain:'github.com'         },
  { name:'GitLab',        domain:'gitlab.com'         },
  { name:'Atlassian',     domain:'atlassian.com'      },
  { name:'Slack',         domain:'slack.com'          },
  { name:'Zoom',          domain:'zoom.us'            },
  { name:'Dropbox',       domain:'dropbox.com'        },
  { name:'Figma',         domain:'figma.com'          },
  { name:'Notion',        domain:'notion.so'          },
  { name:'Discord',       domain:'discord.com'        },
  { name:'Adobe',         domain:'adobe.com'          },
  { name:'SAP',           domain:'sap.com'            },
  { name:'Cisco',         domain:'cisco.com'          },
  { name:'Dell',          domain:'dell.com'           },
  { name:'HP',            domain:'hp.com'             },
  { name:'Huawei',        domain:'huawei.com'         },
  { name:'Samsung',       domain:'samsung.com'        },
  { name:'ByteDance',     domain:'bytedance.com'      },
  { name:'TikTok',        domain:'tiktok.com'         },
  { name:'Cloudflare',    domain:'cloudflare.com'     },
  { name:'Vercel',        domain:'vercel.com'         },
  { name:'Netlify',       domain:'netlify.com'        },
  { name:'MongoDB',       domain:'mongodb.com'        },
  { name:'Snowflake',     domain:'snowflake.com'      },
  { name:'Databricks',    domain:'databricks.com'     },
  { name:'Twilio',        domain:'twilio.com'         },
  { name:'HubSpot',       domain:'hubspot.com'        },
  { name:'Zendesk',       domain:'zendesk.com'        },
  { name:'Asana',         domain:'asana.com'          },
  { name:'Monday.com',    domain:'monday.com'         },
  { name:'Linear',        domain:'linear.app'         },
  { name:'Airtable',      domain:'airtable.com'       },
  { name:'Webflow',       domain:'webflow.com'        },
  { name:'Palantir',      domain:'palantir.com'       },
  { name:'Robinhood',     domain:'robinhood.com'      },
  { name:'Coinbase',      domain:'coinbase.com'       },
  { name:'OpenAI',        domain:'openai.com'         },
  { name:'Anthropic',     domain:'anthropic.com'      },
  { name:'DeepMind',      domain:'deepmind.com'       },
  // Türkiye — tr:true → aramada önce listelenir
  { name:'Trendyol',      domain:'trendyol.com',       tr:true },
  { name:'Hepsiburada',   domain:'hepsiburada.com',    tr:true },
  { name:'Getir',         domain:'getir.com',          tr:true },
  { name:'Yemeksepeti',   domain:'yemeksepeti.com',    tr:true },
  { name:'Türk Telekom',  domain:'turktelekom.com.tr', tr:true },
  { name:'Turkcell',      domain:'turkcell.com.tr',    tr:true },
  { name:'Vodafone TR',   domain:'vodafone.com.tr',    tr:true },
  { name:'Akbank',        domain:'akbank.com',         tr:true },
  { name:'İş Bankası',    domain:'isbank.com.tr',      tr:true },
  { name:'Garanti BBVA',  domain:'garantibbva.com.tr', tr:true },
  { name:'Yapı Kredi',    domain:'yapikredi.com.tr',   tr:true },
  { name:'Ziraat Bankası',domain:'ziraatbank.com.tr',  tr:true },
  { name:'Sabancı',       domain:'sabanci.com',        tr:true },
  { name:'Koç',           domain:'koc.com.tr',         tr:true },
  { name:'Arçelik',       domain:'arcelik.com',        tr:true },
  { name:'Vestel',        domain:'vestel.com.tr',      tr:true },
  { name:'Havelsan',      domain:'havelsan.com.tr',    tr:true },
  { name:'Aselsan',       domain:'aselsan.com.tr',     tr:true },
  { name:'Roketsan',      domain:'roketsan.com.tr',    tr:true },
  { name:'TUSAŞ',         domain:'tai.com.tr',         tr:true },
  { name:'STM',           domain:'stm.com.tr',         tr:true },
  { name:'Dream Games',   domain:'dreamgames.com',     tr:true },
  { name:'Peak Games',    domain:'peakgames.com',      tr:true },
  { name:'Gram Games',    domain:'gramgames.com',      tr:true },
  { name:'Insider',       domain:'useinsider.com',     tr:true },
  { name:'Iyzico',        domain:'iyzico.com',         tr:true },
  { name:'Papara',        domain:'papara.com',         tr:true },
  { name:'Logo Yazılım',  domain:'logo.com.tr',        tr:true },
  { name:'Mikro',         domain:'mikro.com.tr',       tr:true },
  { name:'IdeaSoft',      domain:'ideasoft.com.tr',    tr:true },
  { name:'N11',           domain:'n11.com',            tr:true },
  { name:'GittiGidiyor',  domain:'gittigidiyor.com',   tr:true },
  { name:'Pazarama',      domain:'pazarama.com',       tr:true },
  { name:'Migros',        domain:'migros.com.tr',      tr:true },
  { name:'Carrefour SA',  domain:'carrefoursa.com',    tr:true },
  { name:'Boyner',        domain:'boyner.com.tr',      tr:true },
  { name:'LC Waikiki',    domain:'lcwaikiki.com',      tr:true },
  { name:'Mavi',          domain:'mavi.com',           tr:true },
  // Türkiye — bankalar & finans (favicon için kurumsal alan adları)
  { name:'QNB Finansbank',domain:'qnbfinansbank.com',  tr:true },
  { name:'Denizbank',     domain:'denizbank.com',      tr:true },
  { name:'Şekerbank',     domain:'sekerbank.com.tr',   tr:true },
  { name:'Halkbank',      domain:'halkbank.com.tr',    tr:true },
  { name:'VakıfBank',     domain:'vakifbank.com.tr',   tr:true },
  { name:'TEB',           domain:'teb.com.tr',         tr:true },
  { name:'ING Türkiye',   domain:'ing.com.tr',         tr:true },
  { name:'Odeabank',      domain:'odeabank.com.tr',    tr:true },
  { name:'Alternatif Bank',domain:'alternatifbank.com.tr', tr:true },
  { name:'Albaraka Türk', domain:'albaraka.com.tr',    tr:true },
  { name:'Kuveyt Türk',   domain:'kuveytturk.com.tr',  tr:true },
  { name:'Türkiye Finans',domain:'turkiyefinans.com.tr', tr:true },
  { name:'Ziraat Katılım',domain:'ziraatkatilim.com.tr', tr:true },
  { name:'Vakıf Katılım', domain:'vakifkatilim.com.tr', tr:true },
  { name:'Aktif Bank',    domain:'aktifbank.com.tr',   tr:true },
  { name:'Fibabanka',     domain:'fibabanka.com.tr',   tr:true },
  { name:'HSBC Türkiye',  domain:'hsbc.com.tr',        tr:true },
  { name:'Burgan Bank',   domain:'burgan.com.tr',      tr:true },
  { name:'Anadolubank',   domain:'anadolubank.com.tr', tr:true },
  { name:'Colendi',       domain:'colendi.com',        tr:true },
  { name:'Param',         domain:'param.com.tr',       tr:true },
  { name:'PayTR',         domain:'paytr.com',          tr:true },
  // E-ticaret, pazar & perakende
  { name:'Sahibinden',    domain:'sahibinden.com',     tr:true },
  { name:'Çiçeksepeti',   domain:'ciceksepeti.com',    tr:true },
  { name:'Amazon Türkiye',domain:'amazon.com.tr',      tr:true },
  { name:'BİM',           domain:'bim.com.tr',         tr:true },
  { name:'A101',          domain:'a101.com.tr',        tr:true },
  { name:'Şok Marketler', domain:'sokmarket.com.tr',   tr:true },
  { name:'Defacto',       domain:'defacto.com.tr',     tr:true },
  { name:'Koton',         domain:'koton.com.tr',       tr:true },
  { name:'Gratis',        domain:'gratis.com',         tr:true },
  { name:'Teknosa',       domain:'teknosa.com',        tr:true },
  { name:'MediaMarkt TR', domain:'mediamarkt.com.tr',  tr:true },
  // Ulaşım, havacılık, otomotiv
  { name:'Türk Hava Yolları', domain:'turkishairlines.com', tr:true },
  { name:'Pegasus',       domain:'flypgs.com',         tr:true },
  { name:'AnadoluJet',    domain:'anadolujet.com',     tr:true },
  { name:'Togg',          domain:'togg.com.tr',        tr:true },
  { name:'Ford Otosan',   domain:'fordotosan.com.tr',  tr:true },
  { name:'Mercedes-Benz TR',domain:'mercedes-benz.com.tr', tr:true },
  { name:'Tofaş',         domain:'tofas.com.tr',       tr:true },
  { name:'Borusan Holding', domain:'borusan.com.tr', tr:true },
  // Teknoloji & yazılım
  { name:'OBSS',          domain:'obss.com.tr',        tr:true },
  { name:'KoçSistem',     domain:'kocsistem.com.tr',   tr:true },
  { name:'Etiya',         domain:'etiya.com',          tr:true },
  { name:'Softtech',      domain:'softtech.com.tr',    tr:true },
  { name:'Foreks',        domain:'foreks.com',         tr:true },
  { name:'Codeway',       domain:'codeway.co',         tr:true },
  { name:'Martı',         domain:'marti.tech',         tr:true },
  { name:'Bitaksi',       domain:'bitaksi.com',        tr:true },
  { name:'Ininal',        domain:'ininal.com',         tr:true },
  { name:'Midas',         domain:'getmidas.com',       tr:true },
  { name:'HotelRunner',   domain:'hotelrunner.com',    tr:true },
  { name:'Protel',        domain:'protel.com.tr',      tr:true },
  { name:'Sestek',        domain:'sestek.com',         tr:true },
  { name:'Mindbehind',    domain:'mindbehind.com',     tr:true },
  { name:'Commencis',     domain:'commencis.com',      tr:true },
  { name:'Appcent',       domain:'appcent.mobi',       tr:true },
  { name:'Mobven',        domain:'mobven.com',         tr:true },
  { name:'Radore',        domain:'radore.com',         tr:true },
  { name:'TurkNet',       domain:'turk.net',           tr:true },
  { name:'Superonline',   domain:'superonline.net',  tr:true },
  { name:'D-Smart',       domain:'dsmart.com.tr',      tr:true },
  { name:'BluTV',         domain:'blutv.com',          tr:true },
  { name:'Exxen',         domain:'exxen.com',          tr:true },
  { name:'Gain',          domain:'gain.tv',            tr:true },
  { name:'TRT',           domain:'trt.net.tr',         tr:true },
  { name:'Demirören Medya',domain:'demiroren.com.tr',  tr:true },
  { name:'Doğuş Holding', domain:'dogusgrubu.com.tr',  tr:true },
  { name:'Enka',          domain:'enka.com',           tr:true },
  { name:'Limak',         domain:'limak.com.tr',       tr:true },
  { name:'Rönesans Holding',domain:'ronesans.com',     tr:true },
  { name:'Emlak Konut',   domain:'emlakkonut.com.tr',  tr:true },
  { name:'Kalyon',        domain:'kalyonholding.com',  tr:true },
  { name:'TAV Havalimanları',domain:'tav.aero',        tr:true },
];

/* ── Known Cities (for location autocomplete) ────────────────────────────── */
const KNOWN_CITIES = [
  // Türkiye — 81 il (tr: true → önce gösterilir)
  { name:'İstanbul',        tr:true  }, { name:'Ankara',          tr:true  },
  { name:'İzmir',           tr:true  }, { name:'Bursa',           tr:true  },
  { name:'Antalya',         tr:true  }, { name:'Adana',           tr:true  },
  { name:'Konya',           tr:true  }, { name:'Gaziantep',       tr:true  },
  { name:'Mersin',          tr:true  }, { name:'Kayseri',         tr:true  },
  { name:'Eskişehir',       tr:true  }, { name:'Diyarbakır',      tr:true  },
  { name:'Samsun',          tr:true  }, { name:'Denizli',         tr:true  },
  { name:'Şanlıurfa',       tr:true  }, { name:'Malatya',         tr:true  },
  { name:'Manisa',          tr:true  }, { name:'Kocaeli',         tr:true  },
  { name:'Trabzon',         tr:true  }, { name:'Van',             tr:true  },
  { name:'Balıkesir',       tr:true  }, { name:'Sakarya',         tr:true  },
  { name:'Hatay',           tr:true  }, { name:'Kahramanmaraş',   tr:true  },
  { name:'Tekirdağ',        tr:true  }, { name:'Erzurum',         tr:true  },
  { name:'Afyonkarahisar',  tr:true  }, { name:'Mardin',          tr:true  },
  { name:'Aydın',           tr:true  }, { name:'Muğla',           tr:true  },
  { name:'Ordu',            tr:true  }, { name:'Elazığ',          tr:true  },
  { name:'Adıyaman',        tr:true  }, { name:'Edirne',          tr:true  },
  { name:'Çorum',           tr:true  }, { name:'Giresun',         tr:true  },
  { name:'Tokat',           tr:true  }, { name:'Aksaray',         tr:true  },
  { name:'Karabük',         tr:true  }, { name:'Bolu',            tr:true  },
  { name:'Nevşehir',        tr:true  }, { name:'Isparta',         tr:true  },
  { name:'Burdur',          tr:true  }, { name:'Kastamonu',       tr:true  },
  { name:'Kırıkkale',       tr:true  }, { name:'Kırşehir',        tr:true  },
  { name:'Kırklareli',      tr:true  }, { name:'Çanakkale',       tr:true  },
  { name:'Çankırı',         tr:true  }, { name:'Sinop',           tr:true  },
  { name:'Amasya',          tr:true  }, { name:'Zonguldak',       tr:true  },
  { name:'Bartın',          tr:true  }, { name:'Düzce',           tr:true  },
  { name:'Yalova',          tr:true  }, { name:'Bilecik',         tr:true  },
  { name:'Rize',            tr:true  }, { name:'Artvin',          tr:true  },
  { name:'Gümüşhane',       tr:true  }, { name:'Bayburt',         tr:true  },
  { name:'Sivas',           tr:true  }, { name:'Tunceli',         tr:true  },
  { name:'Bingöl',          tr:true  }, { name:'Erzincan',        tr:true  },
  { name:'Ardahan',         tr:true  }, { name:'Iğdır',           tr:true  },
  { name:'Kars',            tr:true  }, { name:'Ağrı',            tr:true  },
  { name:'Muş',             tr:true  }, { name:'Bitlis',          tr:true  },
  { name:'Siirt',           tr:true  }, { name:'Şırnak',          tr:true  },
  { name:'Hakkari',         tr:true  }, { name:'Batman',          tr:true  },
  { name:'Uşak',            tr:true  }, { name:'Kütahya',         tr:true  },
  { name:'Niğde',           tr:true  }, { name:'Karaman',         tr:true  },
  { name:'Yozgat',          tr:true  }, { name:'Kilis',           tr:true  },
  { name:'Osmaniye',        tr:true  }, { name:'Erzincan',        tr:true  },
  // Remote seçenekler
  { name:'Remote',          tr:false }, { name:'Hibrit / Remote', tr:false },
  // Dünya — Avrupa
  { name:'Londra',          tr:false }, { name:'Berlin',          tr:false },
  { name:'Paris',           tr:false }, { name:'Amsterdam',       tr:false },
  { name:'Stockholm',       tr:false }, { name:'Oslo',            tr:false },
  { name:'Kopenhag',        tr:false }, { name:'Helsinki',        tr:false },
  { name:'Zürih',           tr:false }, { name:'Cenevre',         tr:false },
  { name:'Viyana',          tr:false }, { name:'Münih',           tr:false },
  { name:'Hamburg',         tr:false }, { name:'Frankfurt',       tr:false },
  { name:'Barcelona',       tr:false }, { name:'Madrid',          tr:false },
  { name:'Roma',            tr:false }, { name:'Milano',          tr:false },
  { name:'Dublin',          tr:false }, { name:'Lizbon',          tr:false },
  { name:'Varşova',         tr:false }, { name:'Prag',            tr:false },
  { name:'Budapeşte',       tr:false }, { name:'Brüksel',         tr:false },
  { name:'Lahey',           tr:false }, { name:'Eindhoven',       tr:false },
  { name:'Tallinn',         tr:false }, { name:'Riga',            tr:false },
  { name:'Kiev',            tr:false }, { name:'Moskova',         tr:false },
  // Dünya — Kuzey Amerika
  { name:'New York',        tr:false }, { name:'San Francisco',   tr:false },
  { name:'Los Angeles',     tr:false }, { name:'Seattle',         tr:false },
  { name:'Chicago',         tr:false }, { name:'Austin',          tr:false },
  { name:'Boston',          tr:false }, { name:'Toronto',         tr:false },
  { name:'Vancouver',       tr:false }, { name:'Montreal',        tr:false },
  // Dünya — Asya & Orta Doğu
  { name:'Tokyo',           tr:false }, { name:'Seul',            tr:false },
  { name:'Singapur',        tr:false }, { name:'Hong Kong',       tr:false },
  { name:'Şangay',          tr:false }, { name:'Pekin',           tr:false },
  { name:'Bangalore',       tr:false }, { name:'Mumbay',          tr:false },
  { name:'Dubai',           tr:false }, { name:'Riyad',           tr:false },
  { name:'Abu Dabi',        tr:false }, { name:'Tel Aviv',        tr:false },
  // Dünya — Diğer
  { name:'Sydney',          tr:false }, { name:'Melbourne',       tr:false },
  { name:'São Paulo',       tr:false }, { name:'Johannesburg',    tr:false },
];

/* ── Known Positions (for autocomplete) ─────────────────────────────────── */
const KNOWN_POSITIONS = [
  // Yazılım Geliştirme
  'Frontend Developer','Backend Developer','Full Stack Developer',
  'Mobile Developer','iOS Developer','Android Developer',
  'React Developer','Vue Developer','Angular Developer',
  'Node.js Developer','Python Developer','Java Developer',
  'C# Developer','.NET Developer','PHP Developer',
  'Go Developer','Rust Developer','Swift Developer','Kotlin Developer',
  'Embedded Software Engineer','Firmware Engineer',
  'Junior Frontend Developer','Mid Frontend Developer','Senior Frontend Developer',
  'Junior Backend Developer','Mid Backend Developer','Senior Backend Developer',
  'Junior Full Stack Developer','Senior Full Stack Developer',
  'Software Engineer','Software Developer','Staff Engineer','Principal Engineer',
  // Veri & Yapay Zeka
  'Data Scientist','Data Analyst','Data Engineer',
  'Machine Learning Engineer','AI Engineer','Deep Learning Engineer',
  'MLOps Engineer','NLP Engineer','Computer Vision Engineer',
  'Business Intelligence Developer','BI Analyst',
  // DevOps & Altyapı
  'DevOps Engineer','Site Reliability Engineer','SRE',
  'Cloud Engineer','Cloud Architect','Infrastructure Engineer',
  'Kubernetes Engineer','Platform Engineer','Systems Engineer',
  'Network Engineer','Security Engineer','Cybersecurity Analyst',
  // Mobil & Oyun
  'Unity Developer','Unreal Engine Developer','Game Developer',
  'React Native Developer','Flutter Developer',
  // Tasarım & Ürün
  'UI Designer','UX Designer','UI/UX Designer','Product Designer',
  'Graphic Designer','Visual Designer','Motion Designer',
  'Product Manager','Technical Product Manager','Senior Product Manager',
  'Project Manager','Scrum Master','Agile Coach',
  // QA & Test
  'QA Engineer','Test Automation Engineer','Manual Tester',
  'SDET','Performance Test Engineer',
  // Yönetim & Liderlik
  'Engineering Manager','Tech Lead','Team Lead','CTO','VP of Engineering',
  'Software Architect','Solution Architect','Enterprise Architect',
  // Pazarlama & Büyüme
  'Digital Marketing Specialist','Growth Hacker','SEO Specialist',
  'Content Writer','Copywriter','Social Media Manager',
  'Performance Marketing Specialist','Email Marketing Specialist',
  // Satış & Müşteri
  'Sales Development Representative','Account Executive',
  'Customer Success Manager','Customer Support Specialist',
  'Technical Account Manager','Pre-Sales Engineer',
  // İnsan Kaynakları
  'HR Specialist','Recruiter','Technical Recruiter',
  'HR Business Partner','People Operations Manager',
  // Finans & Muhasebe
  'Financial Analyst','Accountant','Controller',
  'Business Analyst','Strategy Analyst',
  // Staj
  'Software Engineering Intern','Frontend Intern','Backend Intern',
  'Data Science Intern','Product Management Intern','Design Intern',
  'DevOps Intern','Mobile Development Intern',
];

/* ── Constants ──────────────────────────────────────────────────────────── */
const STATUSES = ['Başvuruldu','İncelemede','Mülakat','Teklif','Reddedildi','Vazgeçildi'];
const STATUS_ORDER = { 'Teklif':0,'Mülakat':1,'İncelemede':2,'Başvuruldu':3,'Reddedildi':4,'Vazgeçildi':5 };
const PRIORITY_ORDER = { 'Yüksek':0,'Orta':1,'Düşük':2,'':3 };
const PRIORITY_COLORS = { 'Yüksek':'#EF4444','Orta':'#F59E0B','Düşük':'#94A3B8' };
const STATUS_COLORS = {
  'Başvuruldu':'#3B82F6','İncelemede':'#8B5CF6','Mülakat':'#F59E0B',
  'Teklif':'#10B981','Reddedildi':'#EF4444','Vazgeçildi':'#94A3B8'
};

/* ── State ──────────────────────────────────────────────────────────────── */
let applications   = [];
let settings       = { theme: 'light', monthlyGoal: 0, accentColor: 'blue', followUpDays: 7 };
let activeFilter   = 'all';
let activeWorkType = 'all';
let searchQuery    = '';
let sortMode       = 'newest';
let selectedIds    = new Set();
let expandedRows   = new Set();
let formTags       = [];
let formStars      = 0;
let formTabCur     = 'basic';
let currentView    = 'list';
let deleteTarget   = null;
let statusTarget   = null;
let calYear        = new Date().getFullYear();
let calMonth       = new Date().getMonth();
let spActiveIdx    = -1;

/* ── DOM Refs ────────────────────────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const searchInput      = $('search-input');
const searchClear      = $('search-clear');
const btnAdd           = $('btn-add');
const btnAddEmpty      = $('btn-add-empty');
const btnExport        = $('btn-export');
const btnImport        = $('btn-import');
const btnMaximize      = $('btn-maximize');
const btnTheme         = $('btn-theme');
const btnSettings      = $('btn-settings');
const btnViewList      = $('btn-view-list');
const btnViewAnalytics = $('btn-view-analytics');
const activeFilterLabel= $('active-filter-label');
const sortSelect       = $('sort-select');
const appTbody         = $('app-tbody');
const appTable         = $('app-table');
const emptyState       = $('empty-state');
const emptyTitle       = $('empty-title');
const emptySub         = $('empty-sub');
const resultCount      = $('result-count');
const selectAll        = $('select-all');
const bulkBar          = $('bulk-bar');
const bulkCount        = $('bulk-count');
const bulkStatusBtn    = $('bulk-status-btn');
const bulkDeleteBtn    = $('bulk-delete-btn');
const bulkClearBtn     = $('bulk-clear-btn');
const upcomingBanner   = $('upcoming-banner');
const upcomingText     = $('upcoming-text');
const goalBar          = $('goal-bar');
const goalText         = $('goal-text');
const goalFill         = $('goal-fill');
const appShell         = $('app-shell');
const analyticsView    = $('analytics-view');
const statusDropdown   = $('status-dropdown');
const bulkStatusDD     = $('bulk-status-dropdown');
const toastEl          = $('toast');

// Stats
const statTotal    = $('stat-total');
const statApplied  = $('stat-applied');
const statReview   = $('stat-review');
const statInterview= $('stat-interview');
const statOffer    = $('stat-offer');
const statRejected = $('stat-rejected');
const statWithdrawn= $('stat-withdrawn');

// Autocomplete
const acDropdown   = $('ac-dropdown');
const locDropdown  = $('loc-dropdown');
const posDropdown  = $('pos-dropdown');

// Modal
const modalOverlay = $('modal-overlay');
const modalTitle   = $('modal-title');
const modalClose   = $('modal-close');
const modalCancel  = $('modal-cancel');
const appForm      = $('app-form');
const editCtx      = $('edit-ctx');
const formId       = $('form-id');
const formCompany  = $('form-company');
const formPosition = $('form-position');
const formLocation = $('form-location');
const formDate     = $('form-date');
const formStatus   = $('form-status');
const formPriority = $('form-priority');
const formIntDate  = $('form-interview-date');
const formIntTbd   = $('form-int-tbd');
const formUrl      = $('form-url');
const formSalMin   = $('form-salary-min');
const formSalMax   = $('form-salary-max');
const formCurrency = $('form-currency');
const chipContainer= $('chip-container');
const chipInput    = $('form-tag-input');
const formContactN = $('form-contact-name');
const formContactE = $('form-contact-email');
const formContactL = $('form-contact-linkedin');
const formNotes    = $('form-notes');
const formWorkType = $('form-work-type');
const formSource   = $('form-source');
const formCvVer    = $('form-cv-version');
const formCoverLet = $('form-cover-letter');
const formStarsInput=$('form-stars');
const starRow      = $('star-row');
const starClear    = $('star-clear');

// Confirm
const confirmOverlay = $('confirm-overlay');
const confirmMsg     = $('confirm-msg');
const confirmCancel  = $('confirm-cancel');
const confirmDelete  = $('confirm-delete');

// Bulk confirm
const bulkConfirmOverlay= $('bulk-confirm-overlay');
const bulkConfirmMsg    = $('bulk-confirm-msg');
const bulkConfirmCancel = $('bulk-confirm-cancel');
const bulkConfirmOk     = $('bulk-confirm-ok');
let bulkConfirmAction   = null;

// Settings
const settingsOverlay  = $('settings-overlay');
const settingsClose    = $('settings-close');
const settingsSave     = $('settings-save');
const settingsGoal     = $('settings-goal');
const settingsFollowup = $('settings-followup');
const themeOptLight    = $('theme-opt-light');
const themeOptDark     = $('theme-opt-dark');
const btnShowData      = $('btn-show-data');
const btnOpenBackup    = $('btn-open-backup');

// Extra buttons
const btnSpotlight  = $('btn-spotlight');
const btnShortcuts  = $('btn-shortcuts');
const btnTemplate   = $('btn-template');
const btnViewKanban = $('btn-view-kanban');
const btnViewCal    = $('btn-view-calendar');
const kanbanView    = $('kanban-view');
const calendarView  = $('calendar-view');
const btnPrintAnalytics = $('btn-print-analytics');

/* ── Init ────────────────────────────────────────────────────────────────── */
async function init() {
  settings     = await window.trackjob.getSettings();
  applications = await window.trackjob.getAll();
  applyTheme(settings.theme, false);
  applyAccent(settings.accentColor || 'blue', false);
  updateGoalBar();
  checkUpcomingBanner();
  renderAll();
  // Show onboarding on first run
  if (!settings.onboardingDone) obShow();
}

/* ── Theme ───────────────────────────────────────────────────────────────── */
function applyTheme(theme, save = true) {
  document.documentElement.setAttribute('data-theme', theme);
  settings.theme = theme;
  // Update settings modal buttons
  themeOptLight.classList.toggle('active', theme === 'light');
  themeOptDark.classList.toggle('active',  theme === 'dark');
  if (save) window.trackjob.saveSettings(settings);
}

btnTheme.addEventListener('click', () => {
  applyTheme(settings.theme === 'dark' ? 'light' : 'dark');
});

/* ── View Toggle ─────────────────────────────────────────────────────────── */
btnViewList.addEventListener('click',      () => switchView('list'));
btnViewKanban.addEventListener('click',    () => switchView('kanban'));
btnViewCal.addEventListener('click',       () => switchView('calendar'));
btnViewAnalytics.addEventListener('click', () => switchView('analytics'));

function switchView(view) {
  currentView = view;

  const views = [
    { el: appShell,     name: 'list' },
    { el: kanbanView,   name: 'kanban' },
    { el: calendarView, name: 'calendar' },
    { el: analyticsView,name: 'analytics' },
  ];

  views.forEach(({ el, name }) => {
    if (name === view) {
      el.classList.remove('hidden');
      // Trigger enter animation
      el.classList.remove('view-enter');
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('view-enter')));
    } else {
      el.classList.add('hidden');
      el.classList.remove('view-enter');
    }
  });

  btnViewList.classList.toggle('active',      view === 'list');
  btnViewKanban.classList.toggle('active',    view === 'kanban');
  btnViewCal.classList.toggle('active',       view === 'calendar');
  btnViewAnalytics.classList.toggle('active', view === 'analytics');

  if (view === 'analytics') renderAnalytics();
  if (view === 'kanban')    renderKanban();
  if (view === 'calendar')  renderCalendar();
}

/* ── Upcoming Banner ─────────────────────────────────────────────────────── */
function checkUpcomingBanner() {
  const today   = new Date().toISOString().split('T')[0];
  const nextWeek= new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0];
  const tomorrow= new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const upcoming = applications
    .filter(a => a.interviewDate && a.interviewDate >= today && a.interviewDate <= nextWeek)
    .sort((a, b) => a.interviewDate.localeCompare(b.interviewDate));

  if (!upcoming.length) { upcomingBanner.classList.add('hidden'); return; }

  const s = upcoming[0];
  const when = s.interviewDate === today ? 'Bugün' : s.interviewDate === tomorrow ? 'Yarın' : formatDate(s.interviewDate);
  upcomingText.textContent =
    `${when}: ${s.company} — ${s.position} mülakatı` +
    (upcoming.length > 1 ? ` (+${upcoming.length - 1} daha)` : '');
  upcomingBanner.classList.remove('hidden');
}

$('upcoming-close').addEventListener('click', () => upcomingBanner.classList.add('hidden'));

/* ── Goal Bar ────────────────────────────────────────────────────────────── */
function updateGoalBar() {
  const goal = settings.monthlyGoal || 0;
  if (!goal) { goalBar.classList.add('hidden'); return; }
  goalBar.classList.remove('hidden');
  const month   = new Date().toISOString().slice(0, 7);
  const current = applications.filter(a => a.date && a.date.startsWith(month)).length;
  const pct     = Math.min((current / goal) * 100, 100);
  goalText.textContent  = `${current} / ${goal} — %${Math.round(pct)}`;
  goalFill.style.width  = pct + '%';
}

/* ── Stats ───────────────────────────────────────────────────────────────── */
function animateCount(el, target) {
  const start    = parseInt(el.textContent) || 0;
  if (start === target) { el.textContent = target; return; }
  const duration = 400;
  const startTs  = performance.now();
  const step = ts => {
    const pct  = Math.min((ts - startTs) / duration, 1);
    const ease = 1 - Math.pow(1 - pct, 3); // ease-out cubic
    el.textContent = Math.round(start + (target - start) * ease);
    if (pct < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function updateStats() {
  const c = s => applications.filter(a => a.status === s).length;
  animateCount(statTotal,     applications.length);
  animateCount(statApplied,   c('Başvuruldu'));
  animateCount(statReview,    c('İncelemede'));
  animateCount(statInterview, c('Mülakat'));
  animateCount(statOffer,     c('Teklif'));
  animateCount(statRejected,  c('Reddedildi'));
  animateCount(statWithdrawn, c('Vazgeçildi'));
}

function renderAll() {
  updateStats();
  renderList();
}

/* ── Filtering / Sorting ─────────────────────────────────────────────────── */
function getFiltered() {
  let list = [...applications];

  if (activeFilter !== 'all')
    list = list.filter(a => a.status === activeFilter);

  if (activeWorkType !== 'all')
    list = list.filter(a => a.workType === activeWorkType);

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(a =>
      a.company.toLowerCase().includes(q) ||
      a.position.toLowerCase().includes(q) ||
      (a.location || '').toLowerCase().includes(q) ||
      (a.notes || '').toLowerCase().includes(q) ||
      (a.source || '').toLowerCase().includes(q) ||
      (a.tags || []).some(t => t.toLowerCase().includes(q))
    );
  }

  switch (sortMode) {
    case 'oldest':   list.sort((a,b) => (a.date||'').localeCompare(b.date||'')); break;
    case 'company':  list.sort((a,b) => a.company.localeCompare(b.company,'tr')); break;
    case 'status':   list.sort((a,b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status]); break;
    case 'priority': list.sort((a,b) => PRIORITY_ORDER[a.priority||''] - PRIORITY_ORDER[b.priority||'']); break;
    case 'stars':    list.sort((a,b) => (b.stars||0) - (a.stars||0)); break;
    default:         list.sort((a,b) => (b.date||'').localeCompare(a.date||'')); break;
  }
  return list;
}

/* ── List Render ─────────────────────────────────────────────────────────── */
function renderList() {
  const list = getFiltered();
  appTbody.innerHTML = '';

  if (!list.length) {
    appTable.classList.add('hidden');
    emptyState.classList.remove('hidden');
    if (searchQuery || activeFilter !== 'all') {
      emptyTitle.textContent = 'Sonuç bulunamadı';
      emptySub.textContent   = 'Arama veya filtre kriterlerini değiştirmeyi dene.';
    } else {
      emptyTitle.textContent = 'Henüz başvuru yok';
      emptySub.textContent   = 'İlk iş başvurunu eklemek için "+ Yeni Başvuru" butonuna tıkla.';
    }
    resultCount.textContent = '';
    updateBulkBar();
    return;
  }

  appTable.classList.remove('hidden');
  emptyState.classList.add('hidden');

  const frag = document.createDocumentFragment();
  list.forEach((app, i) => {
    const row = buildRow(app);
    row.style.animationDelay = Math.min(i * 28, 280) + 'ms';
    frag.appendChild(row);
    if (expandedRows.has(app.id)) frag.appendChild(buildExpandRow(app));
  });
  appTbody.appendChild(frag);

  // Sync select-all
  updateBulkBar();
  const allSelected = list.length > 0 && list.every(a => selectedIds.has(a.id));
  selectAll.checked = allSelected;
  selectAll.indeterminate = !allSelected && list.some(a => selectedIds.has(a.id));

  resultCount.textContent = list.length < applications.length
    ? `${list.length} / ${applications.length} başvuru gösteriliyor`
    : `${applications.length} başvuru`;
}

function buildRow(app) {
  const tr = document.createElement('tr');
  tr.dataset.id = app.id;
  if (selectedIds.has(app.id)) tr.classList.add('selected');

  const initials = app.company.trim().split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase();
  const logoUrl  = getFaviconUrl(app);
  const logoHtml = logoUrl
    ? `<img class="company-logo" src="${logoUrl}" onerror="this.style.display='none';this.nextSibling.style.display='flex'" loading="lazy"/>
       <div class="company-avatar" style="display:none">${escHtml(initials)}</div>`
    : `<div class="company-avatar">${escHtml(initials)}</div>`;

  const priColor = PRIORITY_COLORS[app.priority || ''] || 'transparent';
  const priHtml  = app.priority
    ? `<span class="pri-dot" style="background:${priColor}" title="${escHtml(app.priority)} öncelik"></span>`
    : '';

  const today = new Date().toISOString().split('T')[0];
  const intClass = app.interviewDate && app.interviewDate < today ? 'cell-interview past' : 'cell-interview';
  const intText  = app.interviewDateTbd
    ? '<span class="tbd-badge">Açıklanacak</span>'
    : (app.interviewDate ? formatDate(app.interviewDate) : '—');

  const tags = (app.tags || []).slice(0, 3);
  const tagHtml = tags.length
    ? `<div class="tag-pills">${tags.map(t=>`<span class="tag-pill">${escHtml(t)}</span>`).join('')}${(app.tags||[]).length>3?`<span class="tag-pill">+${(app.tags||[]).length-3}</span>`:''}</div>`
    : '';

  const wtHtml = app.workType
    ? `<span class="wt-badge wt-${app.workType}">${escHtml(app.workType)}</span>` : '';

  const starsHtml = app.stars
    ? `<span class="star-display">${[1,2,3,4,5].map(i=>`<span class="s${i<=app.stars?' filled':''}">${i<=app.stars?'★':'☆'}</span>`).join('')}</span>` : '';

  const hasExpand = !!(app.notes || app.history?.length || app.salaryMin || app.contactName || (app.tags||[]).length || app.cvVersion || app.source);
  const expandBtn = hasExpand
    ? `<button class="row-btn exp-btn" data-id="${app.id}" title="${expandedRows.has(app.id)?'Gizle':'Detaylar'}">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          ${expandedRows.has(app.id)
            ? '<polyline points="18 15 12 9 6 15"/>'
            : '<polyline points="6 9 12 15 18 9"/>'}
        </svg>
       </button>` : '';

  tr.innerHTML = `
    <td><input type="checkbox" class="row-check" data-id="${app.id}" ${selectedIds.has(app.id)?'checked':''}></td>
    <td>${priHtml}</td>
    <td>
      <div class="cell-company">
        ${logoHtml}
        <div>
          <div style="display:flex;align-items:center;gap:6px">${escHtml(app.company)}${wtHtml}</div>
          ${app.location ? `<div style="font-size:11px;font-weight:400;color:var(--text-3);margin-top:1px">${escHtml(app.location)}</div>` : ''}
          ${tagHtml}
        </div>
      </div>
    </td>
    <td class="cell-position">${escHtml(app.position)}${starsHtml ? `<div style="margin-top:2px">${starsHtml}</div>` : ''}</td>
    <td class="cell-date">${formatDate(app.date)}</td>
    <td class="${intClass}">${intText}</td>
    <td>
      <button class="status-badge status-${app.status}" data-id="${app.id}" title="Durumu değiştir">
        ${escHtml(app.status)}
      </button>
    </td>
    <td>
      <div class="row-actions">
        ${app.url ? `<button class="row-btn rlink url-btn" data-url="${escHtml(app.url)}" title="İlanı aç">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </button>` : ''}
        ${expandBtn}
        <button class="row-btn edit-btn" data-id="${app.id}" title="Düzenle">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </button>
        <button class="row-btn rdanger del-btn" data-id="${app.id}" title="Sil">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <path d="M10 11v6"/><path d="M14 11v6"/>
          </svg>
        </button>
      </div>
    </td>`;
  return tr;
}

function buildExpandRow(app) {
  const tr = document.createElement('tr');
  tr.className  = 'expand-row';
  tr.dataset.expFor = app.id;

  const timeline = buildTimeline(app.history || []);
  const details  = buildDetails(app);
  const notes    = app.notes
    ? `<div class="exp-notes">${escHtml(app.notes)}</div>` : '';

  tr.innerHTML = `<td colspan="8">
    <div class="expand-content">
      ${timeline}
      ${details}
    </div>
    ${notes ? `<div style="padding:0 16px 10px">${notes}</div>` : ''}
  </td>`;
  return tr;
}

function buildTimeline(history) {
  if (!history.length) return '';
  const items = history.map(h => `
    <div class="tl-item">
      <span class="tl-dot" style="background:${STATUS_COLORS[h.status]||'#94A3B8'}"></span>
      <span class="tl-status">${escHtml(h.status)}</span>
      <span class="tl-date">${formatDate(h.date)}</span>
    </div>`).join('');
  return `<div class="timeline">
    <div class="timeline-title">Geçmiş</div>
    ${items}
  </div>`;
}

function buildDetails(app) {
  const rows = [];
  if (app.source)    rows.push(`<div class="exp-row"><strong>Kaynak:</strong> ${escHtml(app.source)}</div>`);
  if (app.workType)  rows.push(`<div class="exp-row"><strong>Çalışma:</strong> ${escHtml(app.workType)}</div>`);
  if (app.cvVersion) rows.push(`<div class="exp-row"><strong>CV:</strong> ${escHtml(app.cvVersion)}</div>`);
  if (app.coverLetter) rows.push(`<div class="exp-row"><strong>Kapak Mektubu:</strong> ✓ Gönderildi</div>`);
  if (app.stars)     rows.push(`<div class="exp-row"><strong>İsteklilik:</strong> ${'★'.repeat(app.stars)}${'☆'.repeat(5-app.stars)}</div>`);
  if (app.salaryMin || app.salaryMax) {
    const sal = [app.salaryMin, app.salaryMax].filter(Boolean)
      .map(n => Number(n).toLocaleString('tr-TR')).join(' — ');
    rows.push(`<div class="exp-row"><strong>Maaş:</strong> ${escHtml(sal)} ${escHtml(app.currency||'')}</div>`);
  }
  if (app.contactName)   rows.push(`<div class="exp-row"><strong>İletişim:</strong> ${escHtml(app.contactName)}</div>`);
  if (app.contactEmail)  rows.push(`<div class="exp-row"><strong>E-posta:</strong> ${escHtml(app.contactEmail)}</div>`);
  if (app.contactLinkedIn) {
    rows.push(`<div class="exp-row"><strong>LinkedIn:</strong>
      <a href="#" class="li-link" data-url="${escHtml(app.contactLinkedIn)}" style="color:var(--accent)">Profil</a>
    </div>`);
  }
  if (!rows.length) return '';
  return `<div class="exp-panel">
    <div class="exp-panel-title">Detaylar</div>
    ${rows.join('')}
  </div>`;
}

/* ── Company Favicon ─────────────────────────────────────────────────────── */
function getFaviconUrl(app) {
  if (!app.url) return null;
  try {
    const domain = new URL(app.url).hostname.replace(/^www\./, '');
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
  } catch { return null; }
}

/* ── Table Delegation ────────────────────────────────────────────────────── */
appTbody.addEventListener('click', e => {
  const statusBtn = e.target.closest('.status-badge');
  if (statusBtn) { openStatusDropdown(statusBtn.dataset.id, statusBtn); return; }

  const editBtn = e.target.closest('.edit-btn');
  if (editBtn) { openEditModal(editBtn.dataset.id); return; }

  const delBtn = e.target.closest('.del-btn');
  if (delBtn) { openConfirm(delBtn.dataset.id); return; }

  const urlBtn = e.target.closest('.url-btn');
  if (urlBtn) { window.trackjob.openUrl(urlBtn.dataset.url); return; }

  const liLink = e.target.closest('.li-link');
  if (liLink) { e.preventDefault(); window.trackjob.openUrl(liLink.dataset.url); return; }

  const expBtn = e.target.closest('.exp-btn');
  if (expBtn) {
    const id = expBtn.dataset.id;
    if (expandedRows.has(id)) expandedRows.delete(id); else expandedRows.add(id);
    renderList();
    return;
  }

  const chk = e.target.closest('.row-check');
  if (chk) {
    const id = chk.dataset.id;
    if (chk.checked) selectedIds.add(id); else selectedIds.delete(id);
    const row = appTbody.querySelector(`tr[data-id="${id}"]`);
    if (row) row.classList.toggle('selected', chk.checked);
    updateBulkBar();
    const list = getFiltered();
    const allSelected = list.length > 0 && list.every(a => selectedIds.has(a.id));
    selectAll.checked = allSelected;
    selectAll.indeterminate = !allSelected && list.some(a => selectedIds.has(a.id));
    return;
  }

  // Satır tıklama → düzenle (checkbox veya etkileşimli element değilse)
  const tr = e.target.closest('tr[data-id]');
  if (tr && !e.target.closest('.row-check, .status-badge, .row-btn, .row-actions, td:first-child')) {
    openEditModal(tr.dataset.id);
  }
});

/* ── Select All ──────────────────────────────────────────────────────────── */
selectAll.addEventListener('change', () => {
  const list = getFiltered();
  if (selectAll.checked) list.forEach(a => selectedIds.add(a.id));
  else list.forEach(a => selectedIds.delete(a.id));
  renderList();
});

/* ── Bulk Bar ────────────────────────────────────────────────────────────── */
function updateBulkBar() {
  if (selectedIds.size > 0) {
    bulkBar.classList.remove('hidden');
    bulkCount.textContent = `${selectedIds.size} başvuru seçildi`;
  } else {
    bulkBar.classList.add('hidden');
  }
}

bulkClearBtn.addEventListener('click', () => {
  selectedIds.clear();
  renderList();
});

bulkStatusBtn.addEventListener('click', e => {
  const rect = bulkStatusBtn.getBoundingClientRect();
  bulkStatusDD.style.bottom = `${window.innerHeight - rect.top + 6}px`;
  bulkStatusDD.style.left   = `${rect.left}px`;
  bulkStatusDD.classList.remove('hidden');
  e.stopPropagation();
});

bulkStatusDD.addEventListener('click', async e => {
  const opt = e.target.closest('.sd-opt');
  if (!opt) return;
  const status = opt.dataset.status;
  const ids    = [...selectedIds];
  applications = await window.trackjob.updateManyStatus(ids, status);
  selectedIds.clear();
  bulkStatusDD.classList.add('hidden');
  renderAll();
  showToast(`${ids.length} başvurunun durumu güncellendi`);
});

bulkDeleteBtn.addEventListener('click', () => {
  const ids = [...selectedIds];
  bulkConfirmMsg.textContent = `${ids.length} başvuru kalıcı olarak silinecek.`;
  bulkConfirmAction = async () => {
    applications = await window.trackjob.deleteMany(ids);
    selectedIds.clear();
    expandedRows = new Set([...expandedRows].filter(id => !ids.includes(id)));
    renderAll();
    updateGoalBar();
    checkUpcomingBanner();
    showToast(`${ids.length} başvuru silindi`);
  };
  bulkConfirmOverlay.classList.remove('hidden');
});

bulkConfirmCancel.addEventListener('click', () => {
  bulkConfirmOverlay.classList.add('hidden');
  bulkConfirmAction = null;
});
bulkConfirmOk.addEventListener('click', async () => {
  if (bulkConfirmAction) await bulkConfirmAction();
  bulkConfirmOverlay.classList.add('hidden');
  bulkConfirmAction = null;
});

/* ── Status Quick Dropdown ───────────────────────────────────────────────── */
function openStatusDropdown(id, badgeEl) {
  statusTarget = { id, badgeEl };
  const rect = badgeEl.getBoundingClientRect();
  statusDropdown.style.top  = `${rect.bottom + 5}px`;
  statusDropdown.style.left = `${rect.left}px`;
  statusDropdown.classList.remove('hidden');
  statusDropdown.querySelectorAll('.sd-opt').forEach(o => {
    const app = applications.find(a => a.id === id);
    o.style.fontWeight = app && o.dataset.status === app.status ? '700' : '';
  });
}

statusDropdown.addEventListener('click', async e => {
  const opt = e.target.closest('.sd-opt');
  if (!opt || !statusTarget) return;
  const newStatus = opt.dataset.status;
  applications    = await window.trackjob.updateStatus(statusTarget.id, newStatus);
  statusDropdown.classList.add('hidden');
  statusTarget = null;
  renderAll();
  checkUpcomingBanner();
  showToast('Durum güncellendi');
});

document.addEventListener('click', e => {
  if (!statusDropdown.classList.contains('hidden') &&
      !statusDropdown.contains(e.target) && !e.target.closest('.status-badge')) {
    statusDropdown.classList.add('hidden'); statusTarget = null;
  }
  if (!bulkStatusDD.classList.contains('hidden') &&
      !bulkStatusDD.contains(e.target) && e.target !== bulkStatusBtn) {
    bulkStatusDD.classList.add('hidden');
  }
});

/* ── Stat card clicks (tek filtre mekanizması) ───────────────────────────── */
document.querySelectorAll('.stat-card').forEach(card => {
  card.addEventListener('click', () => setFilter(card.dataset.filter || 'all'));
});

function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll('.stat-card').forEach(c =>
    c.classList.toggle('active', c.dataset.filter === filter)
  );
  // Active filter label güncelle
  const labels = {
    all: 'Tüm başvurular',
    'Başvuruldu': 'Başvuruldu',
    'İncelemede': 'İncelemede',
    'Mülakat':    'Mülakat aşamasında',
    'Teklif':     'Teklif alınanlar',
    'Reddedildi': 'Reddedilenler',
    'Vazgeçildi': 'Vazgeçilenler',
  };
  if (activeFilterLabel) activeFilterLabel.textContent = labels[filter] || filter;
  renderList();
}

/* ── Search ──────────────────────────────────────────────────────────────── */
let searchTimer;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchQuery = searchInput.value.trim();
    searchClear.classList.toggle('hidden', !searchQuery);
    renderList();
  }, 160);
});

searchClear.addEventListener('click', () => {
  searchInput.value = ''; searchQuery = '';
  searchClear.classList.add('hidden');
  searchInput.focus(); renderList();
});

/* ── Sort ────────────────────────────────────────────────────────────────── */
sortSelect.addEventListener('change', () => { sortMode = sortSelect.value; renderList(); });

/* ── Add/Edit Modal ──────────────────────────────────────────────────────── */
btnAdd.addEventListener('click', () => openAddModal());
btnAddEmpty.addEventListener('click', () => openAddModal());
modalClose.addEventListener('click', closeModal);
modalCancel.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

/* ── Status Pill Helpers ─────────────────────────────────────────────────── */
function syncStatusPills(status) {
  document.querySelectorAll('#status-pills .sp-pill').forEach(p => {
    p.classList.toggle('sp-active', p.dataset.s === status);
  });
  formStatus.value = status;
}

document.getElementById('status-pills').addEventListener('click', e => {
  const pill = e.target.closest('.sp-pill');
  if (pill) syncStatusPills(pill.dataset.s);
});

/* ── Edit Context Header ─────────────────────────────────────────────────── */
function showEditCtx(app) {
  const initials = app.company.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
  const logoUrl  = getFaviconUrl(app);
  const logoEl   = $('edit-ctx-logo');
  if (logoUrl) {
    logoEl.innerHTML = `<img src="${logoUrl}" onerror="this.style.display='none';this.nextSibling.style.display=''" loading="lazy"/><span style="display:none">${escHtml(initials)}</span>`;
  } else {
    logoEl.textContent = initials;
  }
  $('edit-ctx-company').textContent  = app.company;
  $('edit-ctx-position').textContent = app.position;
  editCtx.classList.remove('hidden');
}

function hideEditCtx() { editCtx.classList.add('hidden'); }

/* ── Add / Edit Modal ────────────────────────────────────────────────────── */
function openAddModal(prefill = {}) {
  modalTitle.textContent = 'Yeni Başvuru';
  appForm.reset(); formId.value = ''; formTags = []; formStars = 0;
  renderChips(); renderStars(); switchFormTab('basic');
  hideAcDropdown(); hidePosDropdown(); hideLocDropdown(); hideEditCtx();
  formDate.value = todayIso();
  formIntTbd.checked    = false;
  formIntDate.disabled  = false;
  formIntDate.style.opacity = '';
  syncStatusPills('Başvuruldu');
  // Apply prefill (from templates)
  if (prefill.position)  formPosition.value = prefill.position;
  if (prefill.source)    formSource.value   = prefill.source;
  if (prefill.workType)  formWorkType.value = prefill.workType;
  if (prefill.priority)  formPriority.value = prefill.priority;
  if (prefill.tags)      { formTags = [...prefill.tags]; renderChips(); }
  clearErrors();
  modalOverlay.classList.remove('hidden');
  formCompany.focus();
}

function openEditModal(id) {
  const app = applications.find(a => a.id === id);
  if (!app) return;
  modalTitle.textContent  = 'Düzenle';
  formId.value            = app.id;
  formCompany.value       = app.company;
  formPosition.value      = app.position;
  formLocation.value      = app.location || '';
  formWorkType.value      = app.workType || '';
  formSource.value        = app.source || '';
  formDate.value          = app.date;
  formPriority.value      = app.priority || '';
  const tbd               = !!app.interviewDateTbd;
  formIntTbd.checked      = tbd;
  formIntDate.value       = tbd ? '' : (app.interviewDate || '');
  formIntDate.disabled    = tbd;
  formIntDate.style.opacity = tbd ? '0.4' : '';
  formUrl.value           = app.url || '';
  formSalMin.value        = app.salaryMin || '';
  formSalMax.value        = app.salaryMax || '';
  formCurrency.value      = app.currency || 'TRY';
  formCvVer.value         = app.cvVersion || '';
  formCoverLet.checked    = !!app.coverLetter;
  formContactN.value      = app.contactName || '';
  formContactE.value      = app.contactEmail || '';
  formContactL.value      = app.contactLinkedIn || '';
  formNotes.value         = app.notes || '';
  formTags  = [...(app.tags || [])];
  formStars = app.stars || 0;
  syncStatusPills(app.status);
  renderChips();
  renderStars();
  showEditCtx(app);
  switchFormTab('basic');
  clearErrors();
  modalOverlay.classList.remove('hidden');
  formCompany.focus();
}

function closeModal() {
  modalOverlay.classList.add('hidden');
  hideAcDropdown(); hidePosDropdown(); hideLocDropdown(); hideEditCtx();
  if (typeof hideCvVerDropdown === 'function') hideCvVerDropdown();
}

/* ── Form Tabs ───────────────────────────────────────────────────────────── */
document.querySelectorAll('.form-tab').forEach(tab => {
  tab.addEventListener('click', () => switchFormTab(tab.dataset.tab));
});

function switchFormTab(tab) {
  formTabCur = tab;
  document.querySelectorAll('.form-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  $('ftab-basic').classList.toggle('hidden', tab !== 'basic');
  $('ftab-details').classList.toggle('hidden', tab !== 'details');
}

/* ── Tag Chips ───────────────────────────────────────────────────────────── */
function renderChips() {
  chipContainer.querySelectorAll('.chip').forEach(c => c.remove());
  formTags.forEach(tag => {
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.innerHTML = `${escHtml(tag)}<button class="chip-remove" data-tag="${escHtml(tag)}">×</button>`;
    chipContainer.insertBefore(chip, chipInput);
  });
}

chipContainer.addEventListener('click', e => {
  if (e.target === chipContainer || e.target === chipInput) { chipInput.focus(); return; }
  const rm = e.target.closest('.chip-remove');
  if (rm) {
    formTags = formTags.filter(t => t !== rm.dataset.tag);
    renderChips();
  }
});

chipInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ',') {
    e.preventDefault();
    const val = chipInput.value.trim().replace(/,/g, '');
    if (val && !formTags.includes(val)) { formTags.push(val); renderChips(); }
    chipInput.value = '';
  } else if (e.key === 'Backspace' && !chipInput.value && formTags.length) {
    formTags.pop(); renderChips();
  }
});

/* ── Form Submit ─────────────────────────────────────────────────────────── */
appForm.addEventListener('submit', async e => {
  e.preventDefault();
  if (!validateForm()) return;

  const isEdit = !!formId.value;
  const old    = isEdit ? applications.find(a => a.id === formId.value) : null;

  const app = {
    id:             formId.value || generateId(),
    company:        formCompany.value.trim(),
    position:       formPosition.value.trim(),
    location:       formLocation.value.trim(),
    workType:       formWorkType.value,
    source:         formSource.value,
    date:           formDate.value,
    status:         formStatus.value,
    priority:       formPriority.value,
    stars:          formStars || 0,
    interviewDate:    formIntTbd.checked ? '' : (formIntDate.value || ''),
    interviewDateTbd: formIntTbd.checked,
    url:            formUrl.value.trim(),
    salaryMin:      formSalMin.value ? Number(formSalMin.value) : '',
    salaryMax:      formSalMax.value ? Number(formSalMax.value) : '',
    currency:       formCurrency.value,
    cvVersion:      formCvVer.value.trim(),
    coverLetter:    formCoverLet.checked,
    tags:           [...formTags],
    contactName:    formContactN.value.trim(),
    contactEmail:   formContactE.value.trim(),
    contactLinkedIn:formContactL.value.trim(),
    notes:          formNotes.value.trim(),
    history:        old?.history || [],
  };

  applications = await window.trackjob.save(app);
  closeModal();
  renderAll();
  updateGoalBar();
  checkUpcomingBanner();
  showToast(isEdit ? 'Başvuru güncellendi' : 'Başvuru eklendi');
});

function validateForm() {
  let ok = true;
  clearErrors();
  if (!formCompany.value.trim()) { showErr('err-company','Şirket adı gerekli'); formCompany.classList.add('invalid'); ok = false; }
  if (!formPosition.value.trim()){ showErr('err-position','Pozisyon gerekli');   formPosition.classList.add('invalid'); ok = false; }
  if (!formDate.value)            { showErr('err-date','Tarih gerekli');          formDate.classList.add('invalid');     ok = false; }
  return ok;
}
function clearErrors() {
  ['err-company','err-position','err-date'].forEach(id => $(`${id}`).textContent = '');
  [formCompany, formPosition, formDate].forEach(el => el.classList.remove('invalid'));
}
function showErr(id, msg) { $(id).textContent = msg; }

/* ── Delete ──────────────────────────────────────────────────────────────── */
confirmCancel.addEventListener('click', () => { confirmOverlay.classList.add('hidden'); deleteTarget = null; });
confirmOverlay.addEventListener('click', e => { if (e.target===confirmOverlay){ confirmOverlay.classList.add('hidden'); deleteTarget=null; }});

confirmDelete.addEventListener('click', async () => {
  if (!deleteTarget) return;
  applications = await window.trackjob.delete(deleteTarget);
  expandedRows.delete(deleteTarget);
  deleteTarget = null;
  confirmOverlay.classList.add('hidden');
  renderAll();
  updateGoalBar();
  checkUpcomingBanner();
  showToast('Başvuru silindi');
});

function openConfirm(id) {
  const app = applications.find(a => a.id === id);
  if (!app) return;
  deleteTarget = id;
  confirmMsg.textContent = `"${app.company} — ${app.position}" kalıcı olarak silinecek.`;
  confirmOverlay.classList.remove('hidden');
}

/* ── Export ──────────────────────────────────────────────────────────────── */
btnExport.addEventListener('click', async () => {
  const csv = await window.trackjob.exportCsv();
  if (!csv) { showToast('Dışa aktarılacak veri yok'); return; }
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = Object.assign(document.createElement('a'), { href: url, download: `jobtera-${todayIso()}.csv` });
  a.click();
  URL.revokeObjectURL(url);
  showToast('CSV dışa aktarıldı');
});

/* ── Import ──────────────────────────────────────────────────────────────── */
btnImport.addEventListener('click', async () => {
  const result = await window.trackjob.openFile({
    title: 'Jobtera Verisi İçe Aktar',
    filters: [
      { name: 'Desteklenen Dosyalar', extensions: ['json','csv'] },
      { name: 'JSON',                 extensions: ['json'] },
      { name: 'CSV',                  extensions: ['csv']  },
    ],
    properties: ['openFile']
  });
  if (!result) return;

  const { content, filePath } = result;
  const isJson = filePath.toLowerCase().endsWith('.json');

  let apps = [];
  try {
    if (isJson) {
      apps = JSON.parse(content);
      if (!Array.isArray(apps)) throw new Error('Geçersiz format');
    } else {
      apps = parseCSV(content);
    }
  } catch (err) {
    showToast('Dosya okunamadı: ' + err.message);
    return;
  }

  const res = await window.trackjob.importBatch(apps);
  applications = res.data;
  renderAll();
  updateGoalBar();
  checkUpcomingBanner();
  showToast(`${res.added} yeni başvuru içe aktarıldı`);
});

function parseCSV(content) {
  const lines = content.trim().split('\n');
  if (lines.length < 2) return [];
  const headers = splitCSVLine(lines[0]);
  const map = {
    'Şirket':'company','Pozisyon':'position','Konum':'location','Tarih':'date',
    'Durum':'status','Öncelik':'priority','Etiketler':'tags',
    'Mülakat Tarihi':'interviewDate','URL':'url','Notlar':'notes',
    'Maaş Min':'salaryMin','Maaş Max':'salaryMax','Para Birimi':'currency',
    'Bağlantı Adı':'contactName','Bağlantı Email':'contactEmail',
    'Company':'company','Position':'position','Date':'date','Status':'status',
  };
  return lines.slice(1).filter(l => l.trim()).map(line => {
    const vals = splitCSVLine(line);
    const obj  = { id: generateId() };
    headers.forEach((h, i) => {
      const key = map[h];
      if (!key) return;
      if (key === 'tags') obj[key] = (vals[i]||'').split(';').map(t=>t.trim()).filter(Boolean);
      else obj[key] = vals[i] || '';
    });
    if (!obj.status) obj.status = 'Başvuruldu';
    return obj;
  }).filter(a => a.company);
}

function splitCSVLine(line) {
  const res = []; let cur = ''; let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') { inQ = !inQ; }
    else if (ch === ',' && !inQ) { res.push(cur.trim()); cur = ''; }
    else cur += ch;
  }
  res.push(cur.trim());
  return res;
}

/* ── Settings ────────────────────────────────────────────────────────────── */
btnSettings.addEventListener('click', () => {
  settingsGoal.value    = settings.monthlyGoal || 0;
  settingsFollowup.value= settings.followUpDays ?? 7;
  themeOptLight.classList.toggle('active', settings.theme === 'light');
  themeOptDark.classList.toggle('active',  settings.theme === 'dark');
  document.querySelectorAll('.accent-opt').forEach(b =>
    b.classList.toggle('active', b.dataset.accent === (settings.accentColor || 'blue'))
  );
  settingsOverlay.classList.remove('hidden');
});

settingsClose.addEventListener('click', () => settingsOverlay.classList.add('hidden'));
settingsOverlay.addEventListener('click', e => { if (e.target===settingsOverlay) settingsOverlay.classList.add('hidden'); });

themeOptLight.addEventListener('click', () => applyTheme('light'));
themeOptDark.addEventListener('click',  () => applyTheme('dark'));

settingsSave.addEventListener('click', async () => {
  settings.monthlyGoal  = parseInt(settingsGoal.value) || 0;
  settings.followUpDays = parseInt(settingsFollowup.value) ?? 7;
  await window.trackjob.saveSettings(settings);
  settingsOverlay.classList.add('hidden');
  updateGoalBar();
  showToast('Ayarlar kaydedildi');
});

// Accent color buttons
document.querySelectorAll('.accent-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    applyAccent(btn.dataset.accent);
    document.querySelectorAll('.accent-opt').forEach(b =>
      b.classList.toggle('active', b.dataset.accent === btn.dataset.accent)
    );
  });
});

btnShowData.addEventListener('click', () => window.trackjob.showDataInFolder());
btnOpenBackup.addEventListener('click', () => window.trackjob.openBackupFolder());

/* ── Analytics ───────────────────────────────────────────────────────────── */
function renderAnalytics() {
  const data  = applications;
  const total = data.length;
  const month = new Date().toISOString().slice(0, 7);

  $('kpi-total').textContent   = total;
  $('an-subtitle').textContent = `${total} başvuru`;

  const responded = data.filter(a => !['Başvuruldu','Vazgeçildi'].includes(a.status)).length;
  const offers    = data.filter(a => a.status === 'Teklif').length;
  const thisMonth = data.filter(a => a.date?.startsWith(month)).length;

  $('kpi-response').textContent   = total ? `%${Math.round((responded/total)*100)}` : '%0';
  $('kpi-offer').textContent      = total ? `%${Math.round((offers/total)*100)}`    : '%0';
  $('kpi-this-month').textContent = thisMonth;

  // Avg response time (days from date to first non-Başvuruldu status change)
  const responseTimes = data
    .filter(a => a.history && a.history.length > 1 && a.date)
    .map(a => {
      const first = a.history.find(h => h.status !== 'Başvuruldu');
      if (!first?.date) return null;
      return (new Date(first.date) - new Date(a.date)) / 86400000;
    }).filter(d => d !== null && d >= 0);
  const avgDays = responseTimes.length
    ? Math.round(responseTimes.reduce((s,v) => s+v, 0) / responseTimes.length)
    : null;
  $('kpi-avg-days').textContent = avgDays !== null ? `${avgDays}` : '—';

  $('chart-monthly').innerHTML = buildBarChart(data);
  const { svg, legend } = buildDonutChart(data);
  $('chart-donut').innerHTML  = svg;
  $('chart-legend').innerHTML = legend;

  $('chart-source').innerHTML  = buildSourceChart(data);
  $('chart-salary').innerHTML  = buildSalaryChart(data);
}

function buildSourceChart(data) {
  const sources = {};
  data.forEach(a => {
    const s = a.source || 'Belirtilmemiş';
    sources[s] = (sources[s] || 0) + 1;
  });
  const entries = Object.entries(sources).sort((a,b) => b[1]-a[1]).slice(0, 8);
  if (!entries.length) return '<div style="color:var(--text-3);font-size:12px;padding:16px">Veri yok</div>';

  const maxV = Math.max(...entries.map(e => e[1]), 1);
  // padL: etiket için ayrılan alan — en uzun etiket baz alınır (maks 20 karakter)
  const maxLen  = Math.min(Math.max(...entries.map(e => e[0].length), 6), 20);
  const bH = 22, gap = 8, padL = Math.max(100, maxLen * 7 + 10), padR = 40, chartW = 240;
  const totalH = entries.length * (bH + gap);

  let bars = '';
  entries.forEach(([name, count], i) => {
    const y      = i * (bH + gap);
    const bW     = Math.max((count / maxV) * chartW, 4);
    const label  = name.length > 20 ? name.slice(0, 19) + '…' : name;
    bars += `<text x="${padL-6}" y="${y+bH/2+4}" text-anchor="end" font-size="11" fill="var(--text-2)">${escHtml(label)}</text>`;
    bars += `<rect x="${padL}" y="${y}" width="${bW}" height="${bH}" rx="4" fill="url(#barG)" opacity=".85"/>`;
    bars += `<text x="${padL+bW+5}" y="${y+bH/2+4}" font-size="11" font-weight="700" fill="var(--accent)">${count}</text>`;
  });

  return `<svg viewBox="0 0 ${padL+chartW+padR} ${totalH}" width="100%" style="display:block;overflow:visible">
    <defs><linearGradient id="barG" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="var(--accent)"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient></defs>
    ${bars}
  </svg>`;
}

function buildSalaryChart(data) {
  const offers = data.filter(a => a.status === 'Teklif' && (a.salaryMin || a.salaryMax));
  if (!offers.length) return '<div style="color:var(--text-3);font-size:12px;padding:16px">Teklif alınan başvuruda maaş bilgisi yok</div>';

  const bH = 28, gap = 10, padL = 150, padR = 60, chartW = 220;
  const maxSal = Math.max(...offers.map(a => a.salaryMax || a.salaryMin || 0), 1);

  let bars = '';
  offers.slice(0, 6).forEach(({ company, salaryMin, salaryMax, currency }, i) => {
    const y    = i * (bH + gap);
    const mid  = ((salaryMin || 0) + (salaryMax || salaryMin || 0)) / 2;
    const bW   = Math.max((mid / maxSal) * chartW, 4);
    const label= company.length > 16 ? company.slice(0,15)+'…' : company;
    const salStr = salaryMin && salaryMax
      ? `${Number(salaryMin).toLocaleString('tr-TR')}–${Number(salaryMax).toLocaleString('tr-TR')} ${currency||''}`
      : `${Number(salaryMin||salaryMax).toLocaleString('tr-TR')} ${currency||''}`;
    bars += `<text x="${padL-6}" y="${y+bH/2+4}" text-anchor="end" font-size="11" fill="var(--text-2)">${escHtml(label)}</text>`;
    bars += `<rect x="${padL}" y="${y}" width="${bW}" height="${bH}" rx="5" fill="url(#salG)" opacity=".85"/>`;
    bars += `<text x="${padL+bW+5}" y="${y+bH/2+4}" font-size="10" fill="var(--success)">${escHtml(salStr)}</text>`;
  });

  const totalH = Math.min(offers.length, 6) * (bH + gap);
  return `<svg viewBox="0 0 ${padL+chartW+padR} ${totalH}" width="100%" style="display:block;overflow:visible">
    <defs><linearGradient id="salG" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#34D399"/>
    </linearGradient></defs>
    ${bars}
  </svg>`;
}

function buildBarChart(data) {
  const months = [];
  const now = new Date();
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    months.push({
      key:   `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`,
      label: d.toLocaleDateString('tr-TR', { month: 'short' }),
      count: 0
    });
  }
  data.forEach(a => {
    if (a.date) {
      const m = months.find(x => x.key === a.date.slice(0,7));
      if (m) m.count++;
    }
  });

  const maxC   = Math.max(...months.map(m => m.count), 1);
  const barW   = 44, barGap = 18, padTop = 24, padBot = 30, chartH = 150;
  const totalW = months.length * (barW + barGap) + barGap;

  let bars = '';
  months.forEach((m, i) => {
    const x    = i * (barW + barGap) + barGap;
    const barH = Math.max((m.count / maxC) * chartH, m.count ? 4 : 0);
    const y    = padTop + chartH - barH;
    bars += `<rect x="${x}" y="${y}" width="${barW}" height="${barH}" rx="5"
               fill="url(#barG)" opacity="${m.count?'.9':'.2'}"/>`;
    if (m.count)
      bars += `<text x="${x+barW/2}" y="${y-7}" text-anchor="middle"
                 font-size="11" font-weight="700" fill="var(--accent)">${m.count}</text>`;
    bars += `<text x="${x+barW/2}" y="${padTop+chartH+padBot-8}" text-anchor="middle"
               font-size="11" fill="var(--text-3)">${m.label}</text>`;
  });

  return `<svg viewBox="0 0 ${totalW} ${padTop+chartH+padBot}"
           width="100%" height="100%"
           preserveAspectRatio="xMidYMid meet"
           style="overflow:visible; display:block;">
    <defs>
      <linearGradient id="barG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="#3B82F6"/>
        <stop offset="100%" stop-color="#8B5CF6"/>
      </linearGradient>
    </defs>
    ${bars}
  </svg>`;
}

function buildDonutChart(data) {
  const cfg = [
    { key:'Başvuruldu',  color:STATUS_COLORS['Başvuruldu']  },
    { key:'İncelemede',  color:STATUS_COLORS['İncelemede']  },
    { key:'Mülakat',     color:STATUS_COLORS['Mülakat']     },
    { key:'Teklif',      color:STATUS_COLORS['Teklif']      },
    { key:'Reddedildi',  color:STATUS_COLORS['Reddedildi']  },
    { key:'Vazgeçildi',  color:STATUS_COLORS['Vazgeçildi']  },
  ].map(c => ({ ...c, count: data.filter(a => a.status === c.key).length }))
   .filter(c => c.count > 0);

  const total = data.length || 1;
  const cx = 100, cy = 100, R = 72, r = 44;
  let angle = -Math.PI / 2;
  let paths = '';

  cfg.forEach(({ color, count }) => {
    const slice = (count / total) * 2 * Math.PI;
    const x1 = cx + R * Math.cos(angle), y1 = cy + R * Math.sin(angle);
    const x2 = cx + R * Math.cos(angle+slice), y2 = cy + R * Math.sin(angle+slice);
    const ix1= cx + r * Math.cos(angle),  iy1= cy + r * Math.sin(angle);
    const ix2= cx + r * Math.cos(angle+slice), iy2= cy + r * Math.sin(angle+slice);
    const lg = slice > Math.PI ? 1 : 0;
    paths += `<path d="M${x1},${y1} A${R},${R} 0 ${lg},1 ${x2},${y2}
                        L${ix2},${iy2} A${r},${r} 0 ${lg},0 ${ix1},${iy1} Z"
                   fill="${color}" stroke="var(--surface)" stroke-width="2"/>`;
    angle += slice;
  });

  paths += `<text x="${cx}" y="${cy-6}" text-anchor="middle" font-size="20" font-weight="800"
              fill="var(--text-1)">${data.length}</text>
            <text x="${cx}" y="${cy+12}" text-anchor="middle" font-size="10"
              fill="var(--text-3)">TOPLAM</text>`;

  const svg = `<svg viewBox="0 0 200 200" width="160" height="160" style="display:block">${paths}</svg>`;

  const legend = cfg.map(c => `
    <div class="legend-item">
      <span class="legend-dot" style="background:${c.color}"></span>
      <span>${c.key}</span>
      <span class="legend-count">${c.count}</span>
    </div>`).join('');

  return { svg, legend };
}

/* ── Maximize ────────────────────────────────────────────────────────────── */
btnMaximize.addEventListener('click', async () => {
  await window.trackjob.maximize();
  updateMaxBtn();
});
async function updateMaxBtn() {
  const max = await window.trackjob.isMaximized();
  btnMaximize.querySelector('svg').innerHTML = max
    ? `<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" stroke="currentColor" stroke-width="1.5" fill="none"/>`
    : `<rect x=".75" y=".75" width="8.5" height="8.5" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>`;
}

/* ── Keyboard Shortcuts ──────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  // Escape
  if (e.key === 'Escape') {
    if (!$('spotlight-overlay').classList.contains('hidden')) { closeSpotlight(); return; }
    if (!statusDropdown.classList.contains('hidden'))         { statusDropdown.classList.add('hidden'); statusTarget=null; return; }
    if (!bulkStatusDD.classList.contains('hidden'))           { bulkStatusDD.classList.add('hidden'); return; }
    if (!modalOverlay.classList.contains('hidden'))           { closeModal(); return; }
    if (!confirmOverlay.classList.contains('hidden'))         { confirmOverlay.classList.add('hidden'); deleteTarget=null; return; }
    if (!settingsOverlay.classList.contains('hidden'))        { settingsOverlay.classList.add('hidden'); return; }
    if (!bulkConfirmOverlay.classList.contains('hidden'))     { bulkConfirmOverlay.classList.add('hidden'); bulkConfirmAction=null; return; }
    if (!$('shortcuts-overlay').classList.contains('hidden')) { $('shortcuts-overlay').classList.add('hidden'); return; }
    if (!$('templates-overlay').classList.contains('hidden')) { $('templates-overlay').classList.add('hidden'); return; }
    return;
  }

  // Active element — don't fire shortcuts inside text inputs
  const tag = document.activeElement?.tagName;
  const inInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

  if ((e.ctrlKey||e.metaKey) && e.key === 'n') { e.preventDefault(); openAddModal(); return; }
  if ((e.ctrlKey||e.metaKey) && e.key === 'k') { e.preventDefault(); openSpotlight(); return; }
  if ((e.ctrlKey||e.metaKey) && e.key === 'f') { e.preventDefault(); searchInput.focus(); searchInput.select(); return; }

  if (!inInput) {
    if (e.key === '?') { $('shortcuts-overlay').classList.remove('hidden'); return; }
    if (e.altKey && e.key === '1') { e.preventDefault(); switchView('list'); return; }
    if (e.altKey && e.key === '2') { e.preventDefault(); switchView('kanban'); return; }
    if (e.altKey && e.key === '3') { e.preventDefault(); switchView('calendar'); return; }
    if (e.altKey && e.key === '4') { e.preventDefault(); switchView('analytics'); return; }
  }

  // Spotlight navigation
  if (!$('spotlight-overlay').classList.contains('hidden')) {
    const items = $('spotlight-results').querySelectorAll('.spotlight-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      spActiveIdx = Math.min(spActiveIdx + 1, items.length - 1);
      items.forEach((it, i) => it.classList.toggle('sp-active', i === spActiveIdx));
      items[spActiveIdx]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      spActiveIdx = Math.max(spActiveIdx - 1, 0);
      items.forEach((it, i) => it.classList.toggle('sp-active', i === spActiveIdx));
      items[spActiveIdx]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter' && spActiveIdx >= 0) {
      e.preventDefault();
      const id = items[spActiveIdx]?.dataset.id;
      if (id) { closeSpotlight(); switchView('list'); openEditModal(id); }
    }
  }
});

/* ── Toast ───────────────────────────────────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.remove('hidden', 'toast-hide');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.add('toast-hide');
    setTimeout(() => toastEl.classList.add('hidden'), 240);
  }, 2400);
}

/* ── Company Autocomplete ────────────────────────────────────────────────── */
let acActiveIdx = -1;

function getAcSuggestions(query) {
  if (!query || query.length < 1) return [];
  const q = query.toLowerCase();

  // Previously entered companies (from existing applications)
  const usedNames = [...new Set(applications.map(a => a.company))];
  const existing = usedNames
    .filter(name => name.toLowerCase().includes(q))
    .map(name => {
      const app = applications.find(a => a.company === name);
      let domain = null;
      if (app?.url) { try { domain = new URL(app.url).hostname.replace(/^www\./, ''); } catch {} }
      if (!domain) {
        const known = KNOWN_COMPANIES.find(k => k.name.toLowerCase() === name.toLowerCase());
        if (known) domain = known.domain;
      }
      return { name, domain, existing: true };
    });

  // Known companies — TR şirketleri önce
  const existingLower = new Set(existing.map(c => c.name.toLowerCase()));
  const knownAll = KNOWN_COMPANIES
    .filter(c => c.name.toLowerCase().includes(q) && !existingLower.has(c.name.toLowerCase()));
  const knownTR    = knownAll.filter(c => c.tr).map(c => ({ name: c.name, domain: c.domain, existing: false, tr: true }));
  const knownGlobal= knownAll.filter(c => !c.tr).map(c => ({ name: c.name, domain: c.domain, existing: false }));

  return [...existing, ...knownTR, ...knownGlobal].slice(0, 18);
}

function renderAcDropdown(suggestions, query) {
  if (!suggestions.length) { hideAcDropdown(); return; }
  acActiveIdx = -1;

  acDropdown.innerHTML = suggestions.map(s => {
    const logoHtml = s.domain
      ? `<img class="ac-logo" src="https://www.google.com/s2/favicons?domain=${s.domain}&sz=32"
             onerror="this.style.display='none';this.nextSibling.style.display='flex'" loading="lazy"/>
         <div class="ac-logo-fallback" style="display:none">${escHtml(s.name[0].toUpperCase())}</div>`
      : `<div class="ac-logo-fallback">${escHtml(s.name[0].toUpperCase())}</div>`;

    // Highlight matching part
    const qIdx = s.name.toLowerCase().indexOf(query.toLowerCase());
    let nameHtml = escHtml(s.name);
    if (qIdx !== -1) {
      const before = escHtml(s.name.slice(0, qIdx));
      const match  = escHtml(s.name.slice(qIdx, qIdx + query.length));
      const after  = escHtml(s.name.slice(qIdx + query.length));
      nameHtml = `${before}<mark>${match}</mark>${after}`;
    }

    return `<div class="ac-item" data-name="${escHtml(s.name)}" data-domain="${escHtml(s.domain || '')}">
      ${logoHtml}
      <span class="ac-name">${nameHtml}</span>
      ${s.existing ? '<span class="ac-badge">Geçmiş</span>' : ''}
    </div>`;
  }).join('');

  const rect = formCompany.getBoundingClientRect();
  acDropdown.style.position = 'fixed';
  acDropdown.style.top      = rect.bottom + 'px';
  acDropdown.style.left     = rect.left   + 'px';
  acDropdown.style.width    = rect.width  + 'px';
  acDropdown.style.zIndex   = '9999';
  acDropdown.style.right    = 'auto';

  acDropdown.classList.remove('hidden');
  formCompany.classList.add('ac-open');
}

function hideAcDropdown() {
  acDropdown.classList.add('hidden');
  formCompany.classList.remove('ac-open');
  acActiveIdx = -1;
}

function selectAcItem(item) {
  formCompany.value = item.dataset.name;
  if (item.dataset.domain && !formUrl.value) {
    formUrl.value = `https://www.${item.dataset.domain}`;
  }
  hideAcDropdown();
  formPosition.focus();
}

// Input events
formCompany.addEventListener('input', () => {
  const val = formCompany.value.trim();
  if (!val) { hideAcDropdown(); return; }
  renderAcDropdown(getAcSuggestions(val), val);
});

formCompany.addEventListener('keydown', e => {
  if (acDropdown.classList.contains('hidden')) return;
  const items = acDropdown.querySelectorAll('.ac-item');
  if (!items.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    acActiveIdx = Math.min(acActiveIdx + 1, items.length - 1);
    items.forEach((it, i) => it.classList.toggle('ac-active', i === acActiveIdx));
    items[acActiveIdx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    acActiveIdx = Math.max(acActiveIdx - 1, 0);
    items.forEach((it, i) => it.classList.toggle('ac-active', i === acActiveIdx));
    items[acActiveIdx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'Enter' && acActiveIdx >= 0) {
    e.preventDefault();
    selectAcItem(items[acActiveIdx]);
  } else if (e.key === 'Escape') {
    hideAcDropdown();
  }
});

acDropdown.addEventListener('click', e => {
  const item = e.target.closest('.ac-item');
  if (item) selectAcItem(item);
});

// Close on outside click
document.addEventListener('mousedown', e => {
  if (!$('company-ac-wrap').contains(e.target)) hideAcDropdown();
  if (!$('position-ac-wrap').contains(e.target)) hidePosDropdown();
});

/* ── Position Autocomplete ───────────────────────────────────────────────── */
let posActiveIdx = -1;

function getPosSuggestions(query) {
  if (!query || query.length < 1) return [];
  const q = query.toLowerCase();

  // Previously entered positions
  const usedPositions = [...new Set(applications.map(a => a.position).filter(Boolean))];
  const existing = usedPositions
    .filter(p => p.toLowerCase().includes(q))
    .map(p => ({ name: p, existing: true }));

  // Known positions
  const existingLower = new Set(existing.map(p => p.name.toLowerCase()));
  const known = KNOWN_POSITIONS
    .filter(p => p.toLowerCase().includes(q) && !existingLower.has(p.toLowerCase()))
    .map(p => ({ name: p, existing: false }));

  return [...existing, ...known].slice(0, 9);
}

function renderPosDropdown(suggestions, query) {
  if (!suggestions.length) { hidePosDropdown(); return; }
  posActiveIdx = -1;

  posDropdown.innerHTML = suggestions.map(s => {
    const qIdx = s.name.toLowerCase().indexOf(query.toLowerCase());
    let nameHtml = escHtml(s.name);
    if (qIdx !== -1) {
      const before = escHtml(s.name.slice(0, qIdx));
      const match  = escHtml(s.name.slice(qIdx, qIdx + query.length));
      const after  = escHtml(s.name.slice(qIdx + query.length));
      nameHtml = `${before}<mark>${match}</mark>${after}`;
    }
    return `<div class="ac-item pos-ac-item" data-name="${escHtml(s.name)}">
      <div class="ac-logo-fallback pos-icon">⚙</div>
      <span class="ac-name">${nameHtml}</span>
      ${s.existing ? '<span class="ac-badge">Geçmiş</span>' : ''}
    </div>`;
  }).join('');

  const rect = formPosition.getBoundingClientRect();
  posDropdown.style.position = 'fixed';
  posDropdown.style.top      = rect.bottom + 'px';
  posDropdown.style.left     = rect.left   + 'px';
  posDropdown.style.width    = rect.width  + 'px';
  posDropdown.style.zIndex   = '9999';
  posDropdown.style.right    = 'auto';

  posDropdown.classList.remove('hidden');
  formPosition.classList.add('ac-open');
}

function hidePosDropdown() {
  posDropdown.classList.add('hidden');
  formPosition.classList.remove('ac-open');
  posActiveIdx = -1;
}

function selectPosItem(item) {
  formPosition.value = item.dataset.name;
  hidePosDropdown();
  formPosition.blur();
}

formPosition.addEventListener('input', () => {
  const val = formPosition.value.trim();
  if (!val) { hidePosDropdown(); return; }
  renderPosDropdown(getPosSuggestions(val), val);
});

formPosition.addEventListener('keydown', e => {
  if (posDropdown.classList.contains('hidden')) return;
  const items = posDropdown.querySelectorAll('.pos-ac-item');
  if (!items.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    posActiveIdx = Math.min(posActiveIdx + 1, items.length - 1);
    items.forEach((it, i) => it.classList.toggle('ac-active', i === posActiveIdx));
    items[posActiveIdx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    posActiveIdx = Math.max(posActiveIdx - 1, 0);
    items.forEach((it, i) => it.classList.toggle('ac-active', i === posActiveIdx));
    items[posActiveIdx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'Enter' && posActiveIdx >= 0) {
    e.preventDefault();
    selectPosItem(items[posActiveIdx]);
  } else if (e.key === 'Escape') {
    hidePosDropdown();
  }
});

posDropdown.addEventListener('click', e => {
  const item = e.target.closest('.pos-ac-item');
  if (item) selectPosItem(item);
});

/* ── Location Autocomplete ───────────────────────────────────────────────── */
let locActiveIdx = -1;

function getLocSuggestions(q) {
  const lq = q.toLowerCase().trim();
  if (!lq) return [];
  // TR şehirleri önce, dünya şehirleri sonra
  const tr    = KNOWN_CITIES.filter(c => c.tr  && c.name.toLowerCase().includes(lq));
  const world = KNOWN_CITIES.filter(c => !c.tr && c.name.toLowerCase().includes(lq));
  return [...tr, ...world].slice(0, 10);
}

function renderLocDropdown(suggestions, query) {
  if (!suggestions.length) { hideLocDropdown(); return; }
  locActiveIdx = -1;

  locDropdown.innerHTML = suggestions.map(s => {
    const lq   = query.toLowerCase();
    const idx  = s.name.toLowerCase().indexOf(lq);
    let nameHtml = escHtml(s.name);
    if (idx !== -1) {
      nameHtml = escHtml(s.name.slice(0, idx))
               + `<mark>${escHtml(s.name.slice(idx, idx + query.length))}</mark>`
               + escHtml(s.name.slice(idx + query.length));
    }
    const flag = s.tr ? '🇹🇷' : '🌍';
    const badge = s.tr ? '<span class="ac-badge-tr">TR</span>' : '';
    return `<div class="ac-item" data-name="${escHtml(s.name)}">
      <span class="loc-flag">${flag}</span>
      <span class="ac-name">${nameHtml}</span>
      ${badge}
    </div>`;
  }).join('');

  // Use fixed positioning to escape overflow-y:auto clipping in form-tab-body
  const rect = formLocation.getBoundingClientRect();
  locDropdown.style.position = 'fixed';
  locDropdown.style.top      = rect.bottom + 'px';
  locDropdown.style.left     = rect.left   + 'px';
  locDropdown.style.width    = rect.width  + 'px';
  locDropdown.style.zIndex   = '9999';
  // Reset absolute-positioning properties that would conflict
  locDropdown.style.right    = 'auto';

  locDropdown.classList.remove('hidden');
  formLocation.classList.add('ac-open');
}

function hideLocDropdown() {
  locDropdown.classList.add('hidden');
  formLocation.classList.remove('ac-open');
  locActiveIdx = -1;
}

formLocation.addEventListener('input', () => {
  const val = formLocation.value.trim();
  if (!val) { hideLocDropdown(); return; }
  renderLocDropdown(getLocSuggestions(val), val);
});

formLocation.addEventListener('keydown', e => {
  if (locDropdown.classList.contains('hidden')) return;
  const items = locDropdown.querySelectorAll('.ac-item');
  if (!items.length) return;
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    locActiveIdx = Math.min(locActiveIdx + 1, items.length - 1);
    items.forEach((it, i) => it.classList.toggle('ac-active', i === locActiveIdx));
    items[locActiveIdx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    locActiveIdx = Math.max(locActiveIdx - 1, 0);
    items.forEach((it, i) => it.classList.toggle('ac-active', i === locActiveIdx));
    items[locActiveIdx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'Enter' && locActiveIdx >= 0) {
    e.preventDefault();
    formLocation.value = items[locActiveIdx].dataset.name;
    hideLocDropdown();
  } else if (e.key === 'Escape') {
    hideLocDropdown();
  }
});

formLocation.addEventListener('blur', () => setTimeout(hideLocDropdown, 150));

locDropdown.addEventListener('click', e => {
  const item = e.target.closest('.ac-item');
  if (item) { formLocation.value = item.dataset.name; hideLocDropdown(); }
});

/* ── Interview Date TBD ──────────────────────────────────────────────────── */
formIntTbd.addEventListener('change', () => {
  if (formIntTbd.checked) {
    formIntDate.value    = '';
    formIntDate.disabled = true;
    formIntDate.style.opacity = '0.4';
  } else {
    formIntDate.disabled = false;
    formIntDate.style.opacity = '';
  }
});

/* ── Star Rating ─────────────────────────────────────────────────────────── */
function renderStars() {
  starRow.querySelectorAll('.star-btn').forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.val) <= formStars);
  });
  formStarsInput.value = formStars;
}

starRow.addEventListener('click', e => {
  const btn = e.target.closest('.star-btn');
  if (btn) {
    const val = Number(btn.dataset.val);
    formStars = formStars === val ? 0 : val;
    renderStars();
  }
});
starRow.addEventListener('mouseover', e => {
  const btn = e.target.closest('.star-btn');
  if (btn) {
    const hov = Number(btn.dataset.val);
    starRow.querySelectorAll('.star-btn').forEach(b =>
      b.classList.toggle('active', Number(b.dataset.val) <= hov)
    );
  }
});
starRow.addEventListener('mouseleave', () => renderStars());
starClear.addEventListener('click', () => { formStars = 0; renderStars(); });

/* ── Work Type Filter ────────────────────────────────────────────────────── */
document.querySelectorAll('.wt-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    activeWorkType = pill.dataset.wt;
    document.querySelectorAll('.wt-pill').forEach(p =>
      p.classList.toggle('active', p.dataset.wt === activeWorkType)
    );
    renderList();
  });
});

/* ── Accent Color ────────────────────────────────────────────────────────── */
function applyAccent(color, save = true) {
  document.documentElement.setAttribute('data-accent', color);
  settings.accentColor = color;
  if (save) window.trackjob.saveSettings(settings);
}

/* ── Spotlight / Global Search ───────────────────────────────────────────── */
function openSpotlight() {
  const overlay = $('spotlight-overlay');
  overlay.classList.remove('hidden');
  $('spotlight-input').value = '';
  renderSpotlight('');
  setTimeout(() => $('spotlight-input').focus(), 50);
}

function closeSpotlight() {
  $('spotlight-overlay').classList.add('hidden');
  spActiveIdx = -1;
}

function renderSpotlight(q) {
  spActiveIdx = -1;
  const resultsEl = $('spotlight-results');
  if (!q.trim()) {
    resultsEl.innerHTML = `<div class="spotlight-empty">Aramak için yazmaya başla…</div>`;
    return;
  }
  const ql = q.toLowerCase();
  const matches = applications.filter(a =>
    a.company.toLowerCase().includes(ql) ||
    a.position.toLowerCase().includes(ql) ||
    (a.status||'').toLowerCase().includes(ql) ||
    (a.location||'').toLowerCase().includes(ql) ||
    (a.tags||[]).some(t => t.toLowerCase().includes(ql))
  ).slice(0, 12);

  if (!matches.length) {
    resultsEl.innerHTML = `<div class="spotlight-empty">Sonuç bulunamadı</div>`;
    return;
  }
  resultsEl.innerHTML = matches.map(a => {
    const logoUrl = getFaviconUrl(a);
    const logoHtml = logoUrl
      ? `<img class="company-logo" src="${logoUrl}" onerror="this.style.display='none'" loading="lazy" style="width:28px;height:28px;border-radius:6px;object-fit:contain">`
      : `<div class="company-avatar" style="width:28px;height:28px">${escHtml(a.company[0].toUpperCase())}</div>`;
    return `<div class="spotlight-item" data-id="${a.id}">
      ${logoHtml}
      <div class="spotlight-item-info">
        <div class="spotlight-company">${escHtml(a.company)}</div>
        <div class="spotlight-position">${escHtml(a.position)}</div>
      </div>
      <div class="spotlight-meta">
        <span class="status-badge status-${a.status}" style="cursor:default;font-size:10px">${escHtml(a.status)}</span>
        <span style="font-size:11px;color:var(--text-3)">${formatDate(a.date)}</span>
      </div>
    </div>`;
  }).join('');
}

$('spotlight-input').addEventListener('input', e => renderSpotlight(e.target.value));

$('spotlight-results').addEventListener('click', e => {
  const item = e.target.closest('.spotlight-item');
  if (item) {
    closeSpotlight();
    switchView('list');
    openEditModal(item.dataset.id);
  }
});

$('spotlight-overlay').addEventListener('click', e => {
  if (e.target === $('spotlight-overlay')) closeSpotlight();
});

btnSpotlight.addEventListener('click', openSpotlight);

/* ── Shortcuts Modal ─────────────────────────────────────────────────────── */
btnShortcuts.addEventListener('click', () => $('shortcuts-overlay').classList.remove('hidden'));
$('shortcuts-close').addEventListener('click', () => $('shortcuts-overlay').classList.add('hidden'));
$('shortcuts-overlay').addEventListener('click', e => {
  if (e.target === $('shortcuts-overlay')) $('shortcuts-overlay').classList.add('hidden');
});

/* ── Templates Modal ─────────────────────────────────────────────────────── */
const JOB_TEMPLATES = [
  { icon:'💻', name:'Frontend Developer', desc:'React/Vue, Uzaktan, Yüksek öncelik',
    prefill:{ position:'Frontend Developer', workType:'Uzaktan', priority:'Yüksek', tags:['React','TypeScript'] } },
  { icon:'⚙', name:'Backend Developer', desc:'Node.js / Java, API geliştirme',
    prefill:{ position:'Backend Developer', workType:'Hibrit', priority:'Orta', tags:['Node.js','API'] } },
  { icon:'🚀', name:'Full Stack Developer', desc:'Hem frontend hem backend',
    prefill:{ position:'Full Stack Developer', workType:'Hibrit', tags:['React','Node.js'] } },
  { icon:'📊', name:'Data Scientist', desc:'ML, Python, analitik odaklı',
    prefill:{ position:'Data Scientist', workType:'Uzaktan', tags:['Python','ML'] } },
  { icon:'🎨', name:'UI/UX Designer', desc:'Figma, kullanıcı deneyimi',
    prefill:{ position:'UI/UX Designer', workType:'Uzaktan', tags:['Figma','Design'] } },
  { icon:'☁', name:'DevOps Engineer', desc:'CI/CD, Kubernetes, bulut altyapı',
    prefill:{ position:'DevOps Engineer', workType:'Uzaktan', tags:['Docker','Kubernetes'] } },
  { icon:'🤖', name:'ML Engineer', desc:'Makine öğrenmesi, model geliştirme',
    prefill:{ position:'Machine Learning Engineer', workType:'Hibrit', tags:['Python','TensorFlow'] } },
  { icon:'📱', name:'Mobile Developer', desc:'iOS/Android, React Native',
    prefill:{ position:'Mobile Developer', workType:'Ofis', tags:['React Native','Mobile'] } },
  { icon:'🎓', name:'Stajyer / Intern', desc:'Yazılım stajı başvurusu',
    prefill:{ position:'Software Engineering Intern', source:'LinkedIn', tags:['Intern'] } },
  { icon:'🔒', name:'Security Engineer', desc:'Siber güvenlik, sızma testi',
    prefill:{ position:'Security Engineer', workType:'Ofis', tags:['Security','Pentesting'] } },
];

function renderTemplates() {
  $('templates-body').innerHTML = JOB_TEMPLATES.map((t, i) => `
    <div class="tpl-item" data-idx="${i}">
      <div class="tpl-icon">${t.icon}</div>
      <div class="tpl-info">
        <div class="tpl-name">${escHtml(t.name)}</div>
        <div class="tpl-desc">${escHtml(t.desc)}</div>
      </div>
    </div>`).join('');
}

btnTemplate.addEventListener('click', () => {
  renderTemplates();
  $('templates-overlay').classList.remove('hidden');
});
$('templates-close').addEventListener('click', () => $('templates-overlay').classList.add('hidden'));
$('templates-overlay').addEventListener('click', e => {
  if (e.target === $('templates-overlay')) $('templates-overlay').classList.add('hidden');
});
$('templates-body').addEventListener('click', e => {
  const item = e.target.closest('.tpl-item');
  if (!item) return;
  const tpl = JOB_TEMPLATES[Number(item.dataset.idx)];
  $('templates-overlay').classList.add('hidden');
  openAddModal(tpl.prefill || {});
});

/* ── Kanban View ─────────────────────────────────────────────────────────── */
function renderKanban() {
  const board = $('kanban-board');
  board.innerHTML = '';

  STATUSES.forEach(status => {
    const apps = applications.filter(a => a.status === status);
    const col  = document.createElement('div');
    col.className = 'kanban-col';

    const dotColor = STATUS_COLORS[status] || '#94A3B8';
    col.innerHTML = `
      <div class="kanban-col-header">
        <span class="tl-dot" style="background:${dotColor}"></span>
        <span class="kanban-col-title">${escHtml(status)}</span>
        <span class="kanban-col-count">${apps.length}</span>
      </div>
      <div class="kanban-cards" data-status="${escHtml(status)}">
        ${apps.map(a => buildKanbanCard(a)).join('')}
      </div>`;
    board.appendChild(col);
  });

  // Drag-and-drop
  board.querySelectorAll('.kanban-card').forEach(card => {
    card.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', card.dataset.id);
      setTimeout(() => card.classList.add('dragging'), 0);
    });
    card.addEventListener('dragend', () => card.classList.remove('dragging'));
  });

  board.querySelectorAll('.kanban-cards').forEach(zone => {
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', async e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const id     = e.dataTransfer.getData('text/plain');
      const status = zone.dataset.status;
      applications = await window.trackjob.updateStatus(id, status);
      renderAll();
      renderKanban();
      showToast('Durum güncellendi');
    });
  });

  board.querySelectorAll('.kanban-card-edit').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openEditModal(btn.dataset.id);
    });
  });
}

function buildKanbanCard(app) {
  const logoUrl = getFaviconUrl(app);
  const logoHtml = logoUrl
    ? `<img src="${logoUrl}" onerror="this.style.display='none'" loading="lazy" style="width:18px;height:18px;border-radius:3px;object-fit:contain;flex-shrink:0">`
    : '';
  const wtHtml = app.workType ? `<span class="wt-badge wt-${app.workType}" style="font-size:9px">${escHtml(app.workType)}</span>` : '';
  const starsHtml = app.stars ? `<span style="font-size:11px;color:#F59E0B">${'★'.repeat(app.stars)}</span>` : '';
  return `<div class="kanban-card" draggable="true" data-id="${app.id}">
    <div class="kanban-card-company">${logoHtml}${escHtml(app.company)}</div>
    <div class="kanban-card-position">${escHtml(app.position)}</div>
    <div class="kanban-card-meta">
      <span class="kanban-card-date">${formatDate(app.date)}</span>
      ${wtHtml}${starsHtml}
      <button class="kanban-card-edit" data-id="${app.id}" title="Düzenle">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
      </button>
    </div>
  </div>`;
}

$('btn-add-kanban').addEventListener('click', () => openAddModal());

/* ── Calendar View ───────────────────────────────────────────────────────── */
function renderCalendar() {
  const grid     = $('cal-grid');
  const label    = $('cal-month-label');
  const firstDay = new Date(calYear, calMonth, 1);
  const lastDay  = new Date(calYear, calMonth + 1, 0);
  const today    = new Date().toISOString().split('T')[0];

  label.textContent = firstDay.toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' });

  // Days from previous month to fill week start (Mon = 0)
  let startDow = firstDay.getDay() - 1;
  if (startDow < 0) startDow = 6;

  grid.innerHTML = '';

  // Prev month filler
  const prevLast = new Date(calYear, calMonth, 0).getDate();
  for (let i = startDow - 1; i >= 0; i--) {
    const d = prevLast - i;
    const cell = document.createElement('div');
    cell.className = 'cal-day other-month';
    cell.innerHTML = `<div class="cal-day-num">${d}</div>`;
    grid.appendChild(cell);
  }

  // Current month days
  for (let d = 1; d <= lastDay.getDate(); d++) {
    const iso  = `${calYear}-${String(calMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const cell = document.createElement('div');
    cell.className = 'cal-day' + (iso === today ? ' today' : '');
    cell.innerHTML = `<div class="cal-day-num">${d}</div>`;

    // Interview events
    const interviews = applications.filter(a => a.interviewDate === iso);
    interviews.forEach(a => {
      const ev = document.createElement('div');
      ev.className   = 'cal-event cal-event-interview';
      ev.textContent = `${a.company} — ${a.position}`;
      ev.title       = `${a.company} mülakatı`;
      ev.dataset.id  = a.id;
      ev.addEventListener('click', () => { switchView('list'); openEditModal(a.id); });
      cell.appendChild(ev);
    });

    // Applied events
    const applied = applications.filter(a => a.date === iso);
    applied.forEach(a => {
      const ev = document.createElement('div');
      ev.className   = 'cal-event cal-event-applied';
      ev.textContent = `${a.company}`;
      ev.title       = `${a.company} — ${a.position}`;
      ev.dataset.id  = a.id;
      ev.addEventListener('click', () => { switchView('list'); openEditModal(a.id); });
      cell.appendChild(ev);
    });

    grid.appendChild(cell);
  }

  // Next month filler
  const totalCells = startDow + lastDay.getDate();
  const remaining  = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
  for (let d = 1; d <= remaining; d++) {
    const cell = document.createElement('div');
    cell.className = 'cal-day other-month';
    cell.innerHTML = `<div class="cal-day-num">${d}</div>`;
    grid.appendChild(cell);
  }
}

$('cal-prev').addEventListener('click', () => {
  calMonth--;
  if (calMonth < 0) { calMonth = 11; calYear--; }
  renderCalendar();
});
$('cal-next').addEventListener('click', () => {
  calMonth++;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  renderCalendar();
});

/* ── PDF / Print ─────────────────────────────────────────────────────────── */
btnPrintAnalytics.addEventListener('click', () => window.print());

/* ── Helpers ─────────────────────────────────────────────────────────────── */
function generateId() { return Date.now().toString(36) + Math.random().toString(36).slice(2,9); }

function todayIso() { return new Date().toISOString().split('T')[0]; }

function formatDate(iso) {
  if (!iso) return '—';
  try { return new Date(iso+'T00:00:00').toLocaleDateString('tr-TR',{day:'2-digit',month:'short',year:'numeric'}); }
  catch { return iso; }
}

function escHtml(str) {
  return String(str??'')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── Onboarding ──────────────────────────────────────────────────────────── */
const OB_SLIDES = [
  {
    bg: 'linear-gradient(145deg,#1E40AF 0%,#2563EB 45%,#38BDF8 100%)',
    step: '01 / 05',
    title: 'Jobtera\'a\nHoş Geldiniz!',
    desc: 'İş arama sürecinizi daha akıllıca yönetin. Tüm başvurularınızı tek yerden takip edin, hiçbir fırsatı kaçırmayın.',
    bullets: [],
    svg: `<svg viewBox="0 0 440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="220" cy="192" r="130" fill="white" fill-opacity=".05"/>
      <circle cx="220" cy="192" r="96"  fill="white" fill-opacity=".07"/>
      <circle cx="220" cy="192" r="63"  fill="white" fill-opacity=".10"/>
      <rect   x="183" y="156" width="74" height="74" rx="22" fill="white" fill-opacity=".96"/>
      <rect   x="198" y="175" width="44" height="31" rx="6"  fill="#2563EB"/>
      <path   d="M209 175v-5a11 11 0 0 1 22 0v5" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <line   x1="220" y1="184" x2="220" y2="195" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
      <line   x1="214" y1="190" x2="226" y2="190" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
      <g transform="translate(24,68) rotate(-5,74,26)">
        <rect width="158" height="54" rx="13" fill="white" fill-opacity=".97"/>
        <circle cx="24" cy="27" r="13" fill="#EA4335"/>
        <text x="24" y="31.5" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="white" text-anchor="middle">G</text>
        <text x="45" y="22"   font-family="system-ui,sans-serif" font-size="11.5" font-weight="600" fill="#0F172A">Google</text>
        <text x="45" y="37"   font-family="system-ui,sans-serif" font-size="10"   fill="#64748B">Frontend Developer</text>
        <rect x="93" y="15" width="56" height="18" rx="9" fill="rgba(59,130,246,.13)"/>
        <text x="121" y="28" font-family="system-ui,sans-serif" font-size="9" font-weight="600" fill="#2563EB" text-anchor="middle">Başvuruldu</text>
      </g>
      <g transform="translate(260,46) rotate(5,74,26)">
        <rect width="158" height="54" rx="13" fill="white" fill-opacity=".97"/>
        <circle cx="24" cy="27" r="13" fill="#0078D4"/>
        <text x="24" y="31.5" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">Ms</text>
        <text x="45" y="22"   font-family="system-ui,sans-serif" font-size="11.5" font-weight="600" fill="#0F172A">Microsoft</text>
        <text x="45" y="37"   font-family="system-ui,sans-serif" font-size="10"   fill="#64748B">UX Designer</text>
        <rect x="97" y="15" width="52" height="18" rx="9" fill="rgba(245,158,11,.14)"/>
        <text x="123" y="28" font-family="system-ui,sans-serif" font-size="9" font-weight="600" fill="#D97706" text-anchor="middle">Mülakat</text>
      </g>
      <g transform="translate(142,305) rotate(-3,74,26)">
        <rect width="158" height="54" rx="13" fill="white" fill-opacity=".97"/>
        <circle cx="24" cy="27" r="13" fill="#1DB954"/>
        <text x="24" y="31.5" font-family="system-ui,sans-serif" font-size="9"  font-weight="700" fill="white" text-anchor="middle">Sp</text>
        <text x="45" y="22"   font-family="system-ui,sans-serif" font-size="11.5" font-weight="600" fill="#0F172A">Spotify</text>
        <text x="45" y="37"   font-family="system-ui,sans-serif" font-size="10"   fill="#64748B">Product Manager</text>
        <rect x="99" y="15" width="48" height="18" rx="9" fill="rgba(16,185,129,.14)"/>
        <text x="123" y="28" font-family="system-ui,sans-serif" font-size="9" font-weight="600" fill="#059669" text-anchor="middle">Teklif 🎉</text>
      </g>
      <circle cx="38"  cy="325" r="20" fill="white" fill-opacity=".07"/>
      <circle cx="412" cy="78"  r="30" fill="white" fill-opacity=".05"/>
      <circle cx="398" cy="350" r="15" fill="white" fill-opacity=".08"/>
    </svg>`
  },
  {
    bg: 'linear-gradient(145deg,#1D4ED8 0%,#3B82F6 50%,#06B6D4 100%)',
    step: '02 / 05',
    title: 'Tüm Başvurular\nTek Ekranda',
    desc: 'Şirket, pozisyon, durum ve tarih bilgilerini kolayca görüntüleyin. Durum kartlarına tıklayarak anlık filtreler uygulayın.',
    bullets: ['Renk kodlu durum rozetleri', 'Hızlı durum değişikliği', 'Sıralama ve filtreleme'],
    svg: `<svg viewBox="0 0 440 390" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="18" width="404" height="354" rx="16" fill="white" fill-opacity=".10" stroke="white" stroke-opacity=".16" stroke-width="1.2"/>
      <rect x="28" y="30" width="90"  height="56" rx="10" fill="white" fill-opacity=".96"/>
      <text x="73" y="57" font-family="system-ui,sans-serif" font-size="21" font-weight="800" fill="#2563EB"  text-anchor="middle">24</text>
      <text x="73" y="74" font-family="system-ui,sans-serif" font-size="9"   fill="#64748B"    text-anchor="middle">Başvuru</text>
      <rect x="126" y="30" width="90"  height="56" rx="10" fill="white" fill-opacity=".96"/>
      <text x="171" y="57" font-family="system-ui,sans-serif" font-size="21" font-weight="800" fill="#D97706" text-anchor="middle">4</text>
      <text x="171" y="74" font-family="system-ui,sans-serif" font-size="9"   fill="#64748B"    text-anchor="middle">Mülakat</text>
      <rect x="224" y="30" width="90"  height="56" rx="10" fill="white" fill-opacity=".96"/>
      <text x="269" y="57" font-family="system-ui,sans-serif" font-size="21" font-weight="800" fill="#059669" text-anchor="middle">2</text>
      <text x="269" y="74" font-family="system-ui,sans-serif" font-size="9"   fill="#64748B"    text-anchor="middle">Teklif</text>
      <rect x="322" y="30" width="90"  height="56" rx="10" fill="white" fill-opacity=".96"/>
      <text x="367" y="57" font-family="system-ui,sans-serif" font-size="21" font-weight="800" fill="#DC2626" text-anchor="middle">8</text>
      <text x="367" y="74" font-family="system-ui,sans-serif" font-size="9"   fill="#64748B"    text-anchor="middle">Reddedildi</text>
      <rect x="28" y="100" width="384" height="24" rx="6" fill="white" fill-opacity=".14"/>
      <text x="68"  y="116" font-family="system-ui,sans-serif" font-size="8.5" font-weight="700" fill="white" fill-opacity=".65">ŞİRKET</text>
      <text x="193" y="116" font-family="system-ui,sans-serif" font-size="8.5" font-weight="700" fill="white" fill-opacity=".65">POZİSYON</text>
      <text x="328" y="116" font-family="system-ui,sans-serif" font-size="8.5" font-weight="700" fill="white" fill-opacity=".65">DURUM</text>
      <rect x="28" y="130" width="384" height="36" rx="7" fill="white" fill-opacity=".93"/>
      <circle cx="47" cy="148" r="10" fill="#EA4335"/>
      <text x="47" y="152.5" font-family="system-ui,sans-serif" font-size="8" font-weight="700" fill="white" text-anchor="middle">G</text>
      <text x="65" y="151"   font-family="system-ui,sans-serif" font-size="10.5" font-weight="600" fill="#0F172A">Google</text>
      <text x="193" y="151"  font-family="system-ui,sans-serif" font-size="10" fill="#334155">Frontend Developer</text>
      <rect x="310" y="139" width="76" height="18" rx="9" fill="rgba(59,130,246,.13)"/>
      <text x="348" y="152" font-family="system-ui,sans-serif" font-size="8.5" font-weight="600" fill="#2563EB" text-anchor="middle">Başvuruldu</text>
      <rect x="28" y="172" width="384" height="36" rx="7" fill="white" fill-opacity=".93"/>
      <circle cx="47" cy="190" r="10" fill="#0078D4"/>
      <text x="47" y="194.5" font-family="system-ui,sans-serif" font-size="8" font-weight="700" fill="white" text-anchor="middle">M</text>
      <text x="65" y="193"   font-family="system-ui,sans-serif" font-size="10.5" font-weight="600" fill="#0F172A">Microsoft</text>
      <text x="193" y="193"  font-family="system-ui,sans-serif" font-size="10" fill="#334155">UX Designer</text>
      <rect x="317" y="181" width="64" height="18" rx="9" fill="rgba(245,158,11,.14)"/>
      <text x="349" y="194" font-family="system-ui,sans-serif" font-size="8.5" font-weight="600" fill="#D97706" text-anchor="middle">Mülakat</text>
      <rect x="28" y="214" width="384" height="36" rx="7" fill="white" fill-opacity=".93"/>
      <circle cx="47" cy="232" r="10" fill="#1DB954"/>
      <text x="47" y="236.5" font-family="system-ui,sans-serif" font-size="8" font-weight="700" fill="white" text-anchor="middle">S</text>
      <text x="65" y="235"   font-family="system-ui,sans-serif" font-size="10.5" font-weight="600" fill="#0F172A">Spotify</text>
      <text x="193" y="235"  font-family="system-ui,sans-serif" font-size="10" fill="#334155">Product Manager</text>
      <rect x="320" y="223" width="58" height="18" rx="9" fill="rgba(16,185,129,.14)"/>
      <text x="349" y="236" font-family="system-ui,sans-serif" font-size="8.5" font-weight="600" fill="#059669" text-anchor="middle">Teklif</text>
      <rect x="28" y="256" width="384" height="36" rx="7" fill="white" fill-opacity=".93"/>
      <circle cx="47" cy="274" r="10" fill="#5865F2"/>
      <text x="47" y="278.5" font-family="system-ui,sans-serif" font-size="8" font-weight="700" fill="white" text-anchor="middle">D</text>
      <text x="65" y="277"   font-family="system-ui,sans-serif" font-size="10.5" font-weight="600" fill="#0F172A">Discord</text>
      <text x="193" y="277"  font-family="system-ui,sans-serif" font-size="10" fill="#334155">Backend Developer</text>
      <rect x="308" y="265" width="80" height="18" rx="9" fill="rgba(139,92,246,.13)"/>
      <text x="348" y="278" font-family="system-ui,sans-serif" font-size="8.5" font-weight="600" fill="#7C3AED" text-anchor="middle">İncelemede</text>
      <rect x="28" y="298" width="384" height="36" rx="7" fill="white" fill-opacity=".88"/>
      <circle cx="47" cy="316" r="10" fill="#FF6900"/>
      <text x="47" y="320.5" font-family="system-ui,sans-serif" font-size="8" font-weight="700" fill="white" text-anchor="middle">A</text>
      <text x="65" y="319"   font-family="system-ui,sans-serif" font-size="10.5" font-weight="600" fill="#0F172A">Airbnb</text>
      <text x="193" y="319"  font-family="system-ui,sans-serif" font-size="10" fill="#334155">UI/UX Designer</text>
      <rect x="310" y="307" width="76" height="18" rx="9" fill="rgba(59,130,246,.13)"/>
      <text x="348" y="320" font-family="system-ui,sans-serif" font-size="8.5" font-weight="600" fill="#2563EB" text-anchor="middle">Başvuruldu</text>
    </svg>`
  },
  {
    bg: 'linear-gradient(145deg,#4338CA 0%,#6366F1 45%,#3B82F6 100%)',
    step: '03 / 05',
    title: 'Kanban ile\nGörsel Takip',
    desc: 'Başvurunuzun hangi aşamada olduğunu sürükle-bırak Kanban panosuyla görün. Kartları sütunlar arasında taşıyarak durumu güncelleyin.',
    bullets: ['Sürükle ve bırak desteği', 'Aşama bazlı kart görünümü', 'Anlık durum güncelleme'],
    svg: `<svg viewBox="0 0 440 390" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="16" width="133" height="356" rx="14" fill="white" fill-opacity=".10" stroke="white" stroke-opacity=".16" stroke-width="1"/>
      <rect x="8" y="16" width="133" height="44"  rx="14" fill="white" fill-opacity=".18"/>
      <circle cx="24" cy="38" r="6" fill="#3B82F6"/>
      <text x="36" y="42" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="white">Başvuruldu</text>
      <rect x="112" y="27" width="22" height="22" rx="11" fill="white" fill-opacity=".22"/>
      <text x="123" y="42" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">3</text>
      <rect x="16" y="68"  width="116" height="62" rx="9" fill="white" fill-opacity=".95"/>
      <circle cx="30" cy="85" r="9" fill="#EA4335"/>
      <text x="30" y="89.5" font-family="system-ui,sans-serif" font-size="7.5" font-weight="700" fill="white" text-anchor="middle">G</text>
      <text x="46" y="83" font-family="system-ui,sans-serif" font-size="10" font-weight="600" fill="#0F172A">Google</text>
      <text x="46" y="96" font-family="system-ui,sans-serif" font-size="9"   fill="#64748B">Frontend Dev</text>
      <text x="28" y="119" font-family="system-ui,sans-serif" font-size="8.5" fill="#94A3B8">15 Mar</text>
      <rect x="16" y="138" width="116" height="62" rx="9" fill="white" fill-opacity=".95"/>
      <circle cx="30" cy="155" r="9" fill="#0078D4"/>
      <text x="30" y="159.5" font-family="system-ui,sans-serif" font-size="7.5" font-weight="700" fill="white" text-anchor="middle">M</text>
      <text x="46" y="153" font-family="system-ui,sans-serif" font-size="10" font-weight="600" fill="#0F172A">Microsoft</text>
      <text x="46" y="166" font-family="system-ui,sans-serif" font-size="9"   fill="#64748B">UX Designer</text>
      <text x="28" y="189" font-family="system-ui,sans-serif" font-size="8.5" fill="#94A3B8">18 Mar</text>
      <rect x="16" y="208" width="116" height="62" rx="9" fill="white" fill-opacity=".88"/>
      <circle cx="30" cy="225" r="9" fill="#FF6900"/>
      <text x="30" y="229.5" font-family="system-ui,sans-serif" font-size="7.5" font-weight="700" fill="white" text-anchor="middle">A</text>
      <text x="46" y="223" font-family="system-ui,sans-serif" font-size="10" font-weight="600" fill="#0F172A">Airbnb</text>
      <text x="46" y="236" font-family="system-ui,sans-serif" font-size="9"   fill="#64748B">UI/UX Designer</text>
      <text x="28" y="259" font-family="system-ui,sans-serif" font-size="8.5" fill="#94A3B8">20 Mar</text>
      <rect x="155" y="16" width="133" height="356" rx="14" fill="white" fill-opacity=".10" stroke="white" stroke-opacity=".16" stroke-width="1"/>
      <rect x="155" y="16" width="133" height="44"  rx="14" fill="white" fill-opacity=".18"/>
      <circle cx="171" cy="38" r="6" fill="#F59E0B"/>
      <text x="183" y="42" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="white">Mülakat</text>
      <rect x="259" y="27" width="22" height="22" rx="11" fill="white" fill-opacity=".22"/>
      <text x="270" y="42" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">2</text>
      <rect x="163" y="68"  width="116" height="72" rx="9" fill="white" fill-opacity=".95"/>
      <circle cx="177" cy="85" r="9" fill="#1DB954"/>
      <text x="177" y="89.5" font-family="system-ui,sans-serif" font-size="7.5" font-weight="700" fill="white" text-anchor="middle">Sp</text>
      <text x="193" y="83" font-family="system-ui,sans-serif" font-size="10" font-weight="600" fill="#0F172A">Spotify</text>
      <text x="193" y="96" font-family="system-ui,sans-serif" font-size="9"   fill="#64748B">Prod. Manager</text>
      <rect x="166" y="107" width="74" height="14" rx="7" fill="rgba(245,158,11,.15)"/>
      <text x="203" y="118" font-family="system-ui,sans-serif" font-size="8" fill="#D97706" text-anchor="middle">25 Mar Mülakat</text>
      <rect x="163" y="148" width="116" height="72" rx="9" fill="white" fill-opacity=".95"/>
      <circle cx="177" cy="165" r="9" fill="#FF0000"/>
      <text x="177" y="169.5" font-family="system-ui,sans-serif" font-size="7"  font-weight="700" fill="white" text-anchor="middle">YT</text>
      <text x="193" y="163" font-family="system-ui,sans-serif" font-size="10" font-weight="600" fill="#0F172A">YouTube</text>
      <text x="193" y="176" font-family="system-ui,sans-serif" font-size="9"   fill="#64748B">Frontend Dev</text>
      <rect x="166" y="187" width="74" height="14" rx="7" fill="rgba(245,158,11,.15)"/>
      <text x="203" y="198" font-family="system-ui,sans-serif" font-size="8" fill="#D97706" text-anchor="middle">27 Mar Mülakat</text>
      <rect x="302" y="16" width="133" height="356" rx="14" fill="white" fill-opacity=".10" stroke="white" stroke-opacity=".16" stroke-width="1"/>
      <rect x="302" y="16" width="133" height="44"  rx="14" fill="white" fill-opacity=".18"/>
      <circle cx="318" cy="38" r="6" fill="#10B981"/>
      <text x="330" y="42" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="white">Teklif</text>
      <rect x="406" y="27" width="22" height="22" rx="11" fill="white" fill-opacity=".22"/>
      <text x="417" y="42" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="white" text-anchor="middle">1</text>
      <rect x="310" y="68"  width="116" height="74" rx="9" fill="white" fill-opacity=".95"/>
      <circle cx="324" cy="85" r="9" fill="#5865F2"/>
      <text x="324" y="89.5" font-family="system-ui,sans-serif" font-size="7.5" font-weight="700" fill="white" text-anchor="middle">D</text>
      <text x="340" y="83" font-family="system-ui,sans-serif" font-size="10" font-weight="600" fill="#0F172A">Discord</text>
      <text x="340" y="96" font-family="system-ui,sans-serif" font-size="9"   fill="#64748B">Backend Dev</text>
      <rect x="312" y="107" width="80" height="14" rx="7" fill="rgba(16,185,129,.14)"/>
      <text x="352" y="118" font-family="system-ui,sans-serif" font-size="8" fill="#059669" text-anchor="middle">Teklif Alındı 🎉</text>
    </svg>`
  },
  {
    bg: 'linear-gradient(145deg,#064E3B 0%,#059669 45%,#0EA5E9 100%)',
    step: '04 / 05',
    title: 'Analitik ile\nVeriye Dayalı Kararlar',
    desc: 'Başvuru sürecinizi grafikler ve istatistiklerle anlayın. Hangi kaynak size en çok yanıt veriyor, yanıt süreniz ne kadar?',
    bullets: ['Aylık başvuru çubuk grafiği', 'Durum dağılımı pasta grafiği', 'KPI: yanıt süresi & başarı oranı'],
    svg: `<svg viewBox="0 0 440 390" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="18" width="120" height="70" rx="13" fill="white" fill-opacity=".96"/>
      <text x="78" y="54" font-family="system-ui,sans-serif" font-size="26" font-weight="800" fill="#2563EB" text-anchor="middle">24</text>
      <text x="78" y="73" font-family="system-ui,sans-serif" font-size="9"   fill="#64748B"    text-anchor="middle">Toplam Başvuru</text>
      <rect x="158" y="18" width="120" height="70" rx="13" fill="white" fill-opacity=".96"/>
      <text x="218" y="54" font-family="system-ui,sans-serif" font-size="26" font-weight="800" fill="#059669" text-anchor="middle">%8</text>
      <text x="218" y="73" font-family="system-ui,sans-serif" font-size="9"   fill="#64748B"    text-anchor="middle">Başarı Oranı</text>
      <rect x="298" y="18" width="126" height="70" rx="13" fill="white" fill-opacity=".96"/>
      <text x="361" y="54" font-family="system-ui,sans-serif" font-size="26" font-weight="800" fill="#D97706" text-anchor="middle">12</text>
      <text x="361" y="73" font-family="system-ui,sans-serif" font-size="9"   fill="#64748B"    text-anchor="middle">Ort. Yanıt (gün)</text>
      <rect x="18" y="104" width="258" height="200" rx="14" fill="white" fill-opacity=".96"/>
      <text x="30"  y="123" font-family="system-ui,sans-serif" font-size="10.5" font-weight="600" fill="#1E293B">Aylık Başvuru</text>
      <text x="47"  y="291" font-family="system-ui,sans-serif" font-size="8" fill="#94A3B8" text-anchor="middle">Eki</text>
      <text x="88"  y="291" font-family="system-ui,sans-serif" font-size="8" fill="#94A3B8" text-anchor="middle">Kas</text>
      <text x="129" y="291" font-family="system-ui,sans-serif" font-size="8" fill="#94A3B8" text-anchor="middle">Ara</text>
      <text x="170" y="291" font-family="system-ui,sans-serif" font-size="8" fill="#94A3B8" text-anchor="middle">Oca</text>
      <text x="211" y="291" font-family="system-ui,sans-serif" font-size="8" fill="#94A3B8" text-anchor="middle">Şub</text>
      <text x="252" y="291" font-family="system-ui,sans-serif" font-size="8" fill="#2563EB" font-weight="600" text-anchor="middle">Mar</text>
      <rect x="33"  y="255" width="28" height="26"  rx="5" fill="rgba(59,130,246,.28)"/>
      <rect x="74"  y="228" width="28" height="53"  rx="5" fill="rgba(59,130,246,.38)"/>
      <rect x="115" y="262" width="28" height="19"  rx="5" fill="rgba(59,130,246,.26)"/>
      <rect x="156" y="197" width="28" height="84"  rx="5" fill="rgba(59,130,246,.52)"/>
      <rect x="197" y="213" width="28" height="68"  rx="5" fill="rgba(59,130,246,.48)"/>
      <rect x="238" y="234" width="28" height="47"  rx="5" fill="#2563EB"/>
      <rect x="290" y="104" width="135" height="200" rx="14" fill="white" fill-opacity=".96"/>
      <text x="357" y="123" font-family="system-ui,sans-serif" font-size="10.5" font-weight="600" fill="#1E293B" text-anchor="middle">Durumlar</text>
      <!-- Donut centred higher so legend fits below -->
      <circle cx="357" cy="185" r="38" fill="none" stroke="#E2E8F0" stroke-width="13"/>
      <circle cx="357" cy="185" r="38" fill="none" stroke="#2563EB"  stroke-width="13"
              stroke-dasharray="95 144" stroke-dashoffset="0"    stroke-linecap="round"/>
      <circle cx="357" cy="185" r="38" fill="none" stroke="#F59E0B"  stroke-width="13"
              stroke-dasharray="48 191" stroke-dashoffset="-95"  stroke-linecap="round"/>
      <circle cx="357" cy="185" r="38" fill="none" stroke="#10B981"  stroke-width="13"
              stroke-dasharray="19 220" stroke-dashoffset="-143" stroke-linecap="round"/>
      <circle cx="357" cy="185" r="38" fill="none" stroke="#EF4444"  stroke-width="13"
              stroke-dasharray="69 170" stroke-dashoffset="-162" stroke-linecap="round"/>
      <!-- Legend below the donut -->
      <circle cx="300" cy="240" r="4" fill="#2563EB"/>
      <text x="308" y="244" font-family="system-ui,sans-serif" font-size="8" fill="#475569">Başvuruldu</text>
      <circle cx="300" cy="256" r="4" fill="#F59E0B"/>
      <text x="308" y="260" font-family="system-ui,sans-serif" font-size="8" fill="#475569">Mülakat</text>
      <circle cx="300" cy="272" r="4" fill="#10B981"/>
      <text x="308" y="276" font-family="system-ui,sans-serif" font-size="8" fill="#475569">Teklif</text>
      <circle cx="300" cy="288" r="4" fill="#EF4444"/>
      <text x="308" y="292" font-family="system-ui,sans-serif" font-size="8" fill="#475569">Reddedildi</text>
      <rect x="18" y="318" width="408" height="58" rx="14" fill="white" fill-opacity=".96"/>
      <text x="30" y="338" font-family="system-ui,sans-serif" font-size="10.5" font-weight="600" fill="#1E293B">PDF / PNG Rapor Dışa Aktarma</text>
      <text x="30" y="355" font-family="system-ui,sans-serif" font-size="9.5" fill="#64748B">Analitik sayfasını tek tıkla dışa aktar</text>
      <rect x="336" y="326" width="80" height="28" rx="8" fill="#2563EB"/>
      <text x="376" y="345" font-family="system-ui,sans-serif" font-size="9.5" font-weight="600" fill="white" text-anchor="middle">Dışa Aktar</text>
    </svg>`
  },
  {
    bg: 'linear-gradient(145deg,#1E3A8A 0%,#2563EB 50%,#4F46E5 100%)',
    step: '05 / 05',
    title: 'Hazırsınız!',
    desc: 'Jobtera iş başvurularınızı yönetmek için ihtiyacınız olan her şeye sahip. Hadi ilk başvurunuzu ekleyin!',
    bullets: [],
    svg: `<svg viewBox="0 0 440 390" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30"  y="28"  width="118" height="118" rx="18" fill="white" fill-opacity=".96"/>
      <circle cx="64" cy="75" r="15" fill="rgba(59,130,246,.12)"/>
      <path d="M58 75 L62 79 L70 71" stroke="#2563EB" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <text x="89" y="68" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#0F172A">Takvim</text>
      <text x="89" y="84" font-family="system-ui,sans-serif" font-size="9.5"  fill="#64748B">Mülakat takibi</text>
      <text x="89" y="98" font-family="system-ui,sans-serif" font-size="9.5"  fill="#64748B">& hatırlatıcı</text>
      <text x="89" y="130" font-family="system-ui,sans-serif" font-size="8.5" fill="#94A3B8">Görüntüle →</text>
      <rect x="162" y="28"  width="118" height="118" rx="18" fill="white" fill-opacity=".96"/>
      <circle cx="196" cy="75" r="15" fill="rgba(59,130,246,.12)"/>
      <circle cx="196" cy="75" r="7"  fill="none" stroke="#2563EB" stroke-width="2.2"/>
      <line x1="201" y1="81" x2="208" y2="88" stroke="#2563EB" stroke-width="2.2" stroke-linecap="round"/>
      <text x="221" y="68" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#0F172A">Global Arama</text>
      <text x="221" y="84" font-family="system-ui,sans-serif" font-size="9.5"  fill="#64748B">Ctrl + K ile</text>
      <text x="221" y="98" font-family="system-ui,sans-serif" font-size="9.5"  fill="#64748B">anında bul</text>
      <text x="221" y="130" font-family="system-ui,sans-serif" font-size="8.5" fill="#94A3B8">Ctrl+K →</text>
      <rect x="294" y="28"  width="118" height="118" rx="18" fill="white" fill-opacity=".96"/>
      <rect x="326" y="60" width="60" height="12" rx="4" fill="#1E293B" fill-opacity=".85"/>
      <rect x="326" y="78" width="60" height="12" rx="4" fill="#E2E8F0"/>
      <circle cx="390" cy="84" r="9"  fill="#2563EB"/>
      <text x="353" y="118" font-family="system-ui,sans-serif" font-size="9.5" fill="#64748B" text-anchor="middle">Karanlık Mod</text>
      <rect x="30"  y="162" width="118" height="118" rx="18" fill="white" fill-opacity=".96"/>
      <rect x="54"  y="196" width="70" height="7"  rx="3" fill="#2563EB" fill-opacity=".55"/>
      <rect x="54"  y="209" width="54" height="6"  rx="3" fill="#E2E8F0"/>
      <rect x="54"  y="220" width="62" height="6"  rx="3" fill="#E2E8F0"/>
      <circle cx="112" cy="213" r="10" fill="#2563EB"/>
      <text x="112" y="217" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">+</text>
      <text x="89" y="255" font-family="system-ui,sans-serif" font-size="9.5" fill="#64748B" text-anchor="middle">Başvuru Şablonları</text>
      <rect x="162" y="162" width="118" height="118" rx="18" fill="white" fill-opacity=".96"/>
      <!-- Emoji SVG &lt;text&gt; içinde Electron’da görünmüyor; vektör yıldız -->
      <g fill="none" stroke-linejoin="round">
        <g transform="translate(188,204) scale(0.42)"><path fill="#FBBF24" stroke="#F59E0B" stroke-width="0.5" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></g>
        <g transform="translate(202,204) scale(0.42)"><path fill="#FBBF24" stroke="#F59E0B" stroke-width="0.5" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></g>
        <g transform="translate(216,204) scale(0.42)"><path fill="#FBBF24" stroke="#F59E0B" stroke-width="0.5" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></g>
        <g transform="translate(230,204) scale(0.42)"><path fill="none" stroke="#CBD5E1" stroke-width="1.35" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></g>
        <g transform="translate(244,204) scale(0.42)"><path fill="none" stroke="#CBD5E1" stroke-width="1.35" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></g>
      </g>
      <text x="221" y="252" font-family="system-ui,sans-serif" font-size="9.5" fill="#64748B" text-anchor="middle">Yıldız / Skor</text>
      <rect x="294" y="162" width="118" height="118" rx="18" fill="white" fill-opacity=".96"/>
      <rect x="318" y="192" width="70" height="7" rx="3" fill="#E2E8F0"/>
      <rect x="318" y="205" width="56" height="7" rx="3" fill="#E2E8F0"/>
      <rect x="318" y="218" width="62" height="7" rx="3" fill="#E2E8F0"/>
      <circle cx="354" cy="233" r="10" fill="rgba(59,130,246,.14)"/>
      <path d="M350 233 L353 236 L360 229" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <text x="353" y="255" font-family="system-ui,sans-serif" font-size="9.5" fill="#64748B" text-anchor="middle">CV Versiyonu</text>
      <rect x="30" y="306" width="382" height="62" rx="16" fill="white" fill-opacity=".15" stroke="white" stroke-opacity=".25" stroke-width="1.5"/>
      <text x="221" y="332" font-family="system-ui,sans-serif" font-size="15.5" font-weight="800" fill="white" text-anchor="middle">&#304;lk ba&#351;vurunuzu ekleyin!</text>
      <text x="221" y="352" font-family="system-ui,sans-serif" font-size="10"  fill="white" fill-opacity=".72" text-anchor="middle">Sa&#287; alttaki + butonuna t&#305;klay&#305;n</text>
    </svg>`
  }
];

let obIdx = 0;

function obSetContent(slide, idx, animate) {
  const panel   = document.getElementById('ob-visual-panel');
  const svgWrap = document.getElementById('ob-svg-wrap');
  const main    = document.querySelector('.ob-main');

  const apply = () => {
    panel.style.background = slide.bg;
    svgWrap.innerHTML = slide.svg;

    document.getElementById('ob-step').textContent = slide.step;
    document.getElementById('ob-title').innerHTML  = slide.title.replace('\n', '<br>');
    document.getElementById('ob-desc').textContent  = slide.desc;

    const list = document.getElementById('ob-list');
    list.innerHTML = slide.bullets.map(b => `<li>${b}</li>`).join('');

    // Dots
    document.getElementById('ob-dots').innerHTML = OB_SLIDES.map((_, i) =>
      `<span class="ob-dot${i === idx ? ' active' : ''}" data-i="${i}"></span>`
    ).join('');
    document.getElementById('ob-dots').querySelectorAll('.ob-dot').forEach(d => {
      d.addEventListener('click', () => obGoto(Number(d.dataset.i)));
    });

    // Button label / skip visibility
    const isLast = idx === OB_SLIDES.length - 1;
    document.getElementById('ob-next-label').textContent = isLast ? 'Başlayalım!' : 'Devam';
    document.getElementById('ob-skip').style.visibility  = isLast ? 'hidden' : 'visible';
  };

  if (animate) {
    svgWrap.classList.add('ob-fade');
    main.classList.add('ob-fade');
    setTimeout(() => {
      apply();
      svgWrap.classList.remove('ob-fade');
      main.classList.remove('ob-fade');
    }, 210);
  } else {
    apply();
  }
}

function obGoto(idx) {
  obIdx = idx;
  obSetContent(OB_SLIDES[idx], idx, true);
}

function obFinish() {
  const overlay = document.getElementById('onboarding-overlay');
  overlay.classList.add('ob-closing');
  setTimeout(() => overlay.classList.add('hidden'), 380);
  settings.onboardingDone = true;
  window.trackjob.saveSettings(settings);
}

function obShow() {
  obSetContent(OB_SLIDES[0], 0, false);
  document.getElementById('onboarding-overlay').classList.remove('hidden');
}

document.getElementById('ob-next').addEventListener('click', () => {
  if (obIdx < OB_SLIDES.length - 1) obGoto(obIdx + 1);
  else obFinish();
});
document.getElementById('ob-skip').addEventListener('click', obFinish);

/* ── CV Manager ──────────────────────────────────────────────────────────── */

let cvList = [];       // [{fileName, displayName, size, addedAt}]
let cvVerActiveIdx = -1;

const cvManagerOverlay = $('cv-manager-overlay');
const cvListEl         = $('cv-list');
const cvEmptyEl        = $('cv-empty');
const cvListCount      = $('cv-list-count');
const cvUploadZone     = $('cv-upload-zone');
const cvVerDropdown    = $('cv-ver-dropdown');

function fmtBytes(b) {
  if (b < 1024) return b + ' B';
  if (b < 1048576) return (b / 1024).toFixed(0) + ' KB';
  return (b / 1048576).toFixed(1) + ' MB';
}

async function loadCvList() {
  cvList = await window.trackjob.listCvs();
  renderCvList();
}

function renderCvList() {
  cvListCount.textContent = cvList.length + ' dosya';
  if (!cvList.length) {
    cvEmptyEl.classList.remove('hidden');
    const items = cvListEl.querySelectorAll('.cv-item');
    items.forEach(i => i.remove());
    return;
  }
  cvEmptyEl.classList.add('hidden');
  const existing = new Set(Array.from(cvListEl.querySelectorAll('.cv-item')).map(el => el.dataset.fn));
  cvList.forEach((cv, i) => {
    if (existing.has(cv.fileName)) return;
    const el = document.createElement('div');
    el.className = 'cv-item';
    el.dataset.fn = cv.fileName;
    el.style.animationDelay = (i * 40) + 'ms';
    const ext = cv.fileName.split('.').pop().toUpperCase();
    el.innerHTML = `
      <div class="cv-item-icon cv-ext-${ext.toLowerCase()}">
        <span>${ext}</span>
      </div>
      <div class="cv-item-info">
        <div class="cv-item-name">${escHtml(cv.displayName)}</div>
        <div class="cv-item-meta">${fmtBytes(cv.size)} · ${new Date(cv.addedAt).toLocaleDateString('tr-TR')}</div>
      </div>
      <div class="cv-item-actions">
        <button class="cv-item-btn cv-select-btn" data-fn="${escHtml(cv.fileName)}" data-dn="${escHtml(cv.displayName)}" title="Bu CV'yi seç">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </button>
        <button class="cv-item-btn cv-open-btn" data-fn="${escHtml(cv.fileName)}" title="Aç">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </button>
        <button class="cv-item-btn cv-del-btn" data-fn="${escHtml(cv.fileName)}" title="Sil">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
          </svg>
        </button>
      </div>`;
    cvListEl.appendChild(el);
  });
}

async function uploadCv() {
  const srcPath = await window.trackjob.pickCv();
  if (!srcPath) return;
  const rawName = srcPath.split(/[\\/]/).pop().replace(/\.[^.]+$/, '');
  const displayName = prompt('CV adı (boş bırakabilirsiniz):', rawName) ?? rawName;
  const result = await window.trackjob.saveCv({ srcPath, displayName: displayName || rawName });
  cvList.unshift(result);
  // Remove stale DOM so renderCvList rebuilds
  cvListEl.querySelectorAll('.cv-item').forEach(el => el.remove());
  renderCvList();
  showToast('CV yüklendi: ' + result.displayName);
}

function openCvManager() {
  loadCvList();
  cvManagerOverlay.classList.remove('hidden');
}
function closeCvManager() { cvManagerOverlay.classList.add('hidden'); }

$('cv-manager-close').addEventListener('click', closeCvManager);
$('cv-manager-done').addEventListener('click', closeCvManager);
cvManagerOverlay.addEventListener('click', e => { if (e.target === cvManagerOverlay) closeCvManager(); });

cvUploadZone.addEventListener('click', uploadCv);
cvUploadZone.addEventListener('dragover', e => { e.preventDefault(); cvUploadZone.classList.add('drag-over'); });
cvUploadZone.addEventListener('dragleave', () => cvUploadZone.classList.remove('drag-over'));
cvUploadZone.addEventListener('drop', async e => {
  e.preventDefault();
  cvUploadZone.classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (!file) return;
  const rawName    = file.name.replace(/\.[^.]+$/, '');
  const displayName = prompt('CV adı:', rawName) ?? rawName;
  // For drag-drop we need the path (Electron exposes it)
  const srcPath = file.path;
  if (!srcPath) { showToast('Dosya yolu alınamadı.'); return; }
  const result = await window.trackjob.saveCv({ srcPath, displayName: displayName || rawName });
  cvList.unshift(result);
  cvListEl.querySelectorAll('.cv-item').forEach(el => el.remove());
  renderCvList();
  showToast('CV yüklendi: ' + result.displayName);
});

cvListEl.addEventListener('click', async e => {
  const selectBtn = e.target.closest('.cv-select-btn');
  const openBtn   = e.target.closest('.cv-open-btn');
  const delBtn    = e.target.closest('.cv-del-btn');
  if (selectBtn) {
    formCvVer.value = selectBtn.dataset.dn;
    closeCvManager();
    showToast('CV seçildi: ' + selectBtn.dataset.dn);
  } else if (openBtn) {
    await window.trackjob.openCv(openBtn.dataset.fn);
  } else if (delBtn) {
    const fn = delBtn.dataset.fn;
    if (!confirm('Bu CV dosyası silinsin mi?')) return;
    await window.trackjob.deleteCv(fn);
    cvList = cvList.filter(c => c.fileName !== fn);
    const el = cvListEl.querySelector(`.cv-item[data-fn="${fn}"]`);
    if (el) el.remove();
    renderCvList();
    showToast('CV silindi.');
  }
});

/* Browse button in form opens manager */
$('cv-browse-btn').addEventListener('click', openCvManager);

/* CV version field autocomplete from uploaded CVs */
function renderCvVerDropdown(items, query) {
  if (!items.length) { hideCvVerDropdown(); return; }
  cvVerActiveIdx = -1;
  cvVerDropdown.innerHTML = items.map(cv => {
    const lq  = query.toLowerCase();
    const idx = cv.displayName.toLowerCase().indexOf(lq);
    let nameHtml = escHtml(cv.displayName);
    if (idx !== -1) {
      nameHtml = escHtml(cv.displayName.slice(0, idx))
               + `<mark>${escHtml(cv.displayName.slice(idx, idx + query.length))}</mark>`
               + escHtml(cv.displayName.slice(idx + query.length));
    }
    return `<div class="ac-item" data-name="${escHtml(cv.displayName)}">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
      <span class="ac-name">${nameHtml}</span>
    </div>`;
  }).join('');
  // Use fixed positioning to escape overflow-y:auto clipping in form-tab-body
  const rect = formCvVer.getBoundingClientRect();
  cvVerDropdown.style.position = 'fixed';
  cvVerDropdown.style.top      = rect.bottom + 'px';
  cvVerDropdown.style.left     = rect.left   + 'px';
  cvVerDropdown.style.width    = rect.width  + 'px';
  cvVerDropdown.style.zIndex   = '9999';
  cvVerDropdown.style.right    = 'auto';

  cvVerDropdown.classList.remove('hidden');
}

function hideCvVerDropdown() {
  cvVerDropdown.classList.add('hidden');
  cvVerActiveIdx = -1;
}

formCvVer.addEventListener('focus', async () => {
  if (!cvList.length) cvList = await window.trackjob.listCvs();
  const q = formCvVer.value.trim();
  const matches = q
    ? cvList.filter(c => c.displayName.toLowerCase().includes(q.toLowerCase()))
    : cvList;
  renderCvVerDropdown(matches.slice(0, 8), q);
});

formCvVer.addEventListener('input', () => {
  const q = formCvVer.value.trim();
  const matches = q
    ? cvList.filter(c => c.displayName.toLowerCase().includes(q.toLowerCase()))
    : cvList;
  renderCvVerDropdown(matches.slice(0, 8), q);
});

formCvVer.addEventListener('keydown', e => {
  if (cvVerDropdown.classList.contains('hidden')) return;
  const items = cvVerDropdown.querySelectorAll('.ac-item');
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    cvVerActiveIdx = Math.min(cvVerActiveIdx + 1, items.length - 1);
    items.forEach((it, i) => it.classList.toggle('ac-active', i === cvVerActiveIdx));
    items[cvVerActiveIdx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    cvVerActiveIdx = Math.max(cvVerActiveIdx - 1, 0);
    items.forEach((it, i) => it.classList.toggle('ac-active', i === cvVerActiveIdx));
    items[cvVerActiveIdx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'Enter' && cvVerActiveIdx >= 0) {
    e.preventDefault();
    formCvVer.value = items[cvVerActiveIdx].dataset.name;
    hideCvVerDropdown();
  } else if (e.key === 'Escape') {
    hideCvVerDropdown();
  }
});

formCvVer.addEventListener('blur', () => setTimeout(hideCvVerDropdown, 150));
cvVerDropdown.addEventListener('click', e => {
  const item = e.target.closest('.ac-item');
  if (item) { formCvVer.value = item.dataset.name; hideCvVerDropdown(); }
});

/* ── Boot ────────────────────────────────────────────────────────────────── */
init();
