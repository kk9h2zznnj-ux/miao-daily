// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';

// --- 极简线条手绘风图标库 (Line Art Icons) ---
const Icons = {
  Paw: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22c-4 0-7-3-7-7 0-3.5 3-6 7-6s7 2.5 7 6c0 4-3 7-7 7z" />
      <ellipse cx="5" cy="11" rx="2.5" ry="3.5" transform="rotate(-35 5 11)" />
      <ellipse cx="19" cy="11" rx="2.5" ry="3.5" transform="rotate(35 19 11)" />
      <ellipse cx="9" cy="6" rx="2.5" ry="3.8" transform="rotate(-15 9 6)" />
      <ellipse cx="15" cy="6" rx="2.5" ry="3.8" transform="rotate(15 15 6)" />
    </svg>
  ),
  CrossPaw: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22c-4 0-7-3-7-7 0-3.5 3-6 7-6s7 2.5 7 6c0 4-3 7-7 7z" />
      <ellipse cx="5" cy="11" rx="2.5" ry="3.5" transform="rotate(-35 5 11)" />
      <ellipse cx="19" cy="11" rx="2.5" ry="3.5" transform="rotate(35 19 11)" />
      <ellipse cx="9" cy="6" rx="2.5" ry="3.8" transform="rotate(-15 9 6)" />
      <ellipse cx="15" cy="6" rx="2.5" ry="3.8" transform="rotate(15 15 6)" />
      <path d="M11 12H9v2h2v2h2v-2h2v-2h-2v-2h-2v2z" fill="#FDFBF7" />
    </svg>
  ),
  WeightScale: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="4" />
      <path d="M8 8h8v3H8z" fill="currentColor" fillOpacity="0.1" />
      <path d="M12 17c-.8 0-1.5-.5-1.5-1.2 0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3c0 .7-.7 1.2-1.5 1.2z" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="14" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="14" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  Syringe: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2l-2 2M15 5l4 4M14 4l6 6" />
      <rect x="7" y="7" width="12" height="6" rx="2" transform="rotate(45 7 7)" />
      <path d="M4 20l2.5-2.5" />
      <path d="M17 3c1-1 2-1 3 0s1 2 0 3" />
    </svg>
  ),
  PeekingCat: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 22H2M4 22V14c0-4 4-7 8-7s8 3 8 7v8" />
      <path d="M5 12L3 4l6 4M19 12l2-8-6 4" />
      <circle cx="9" cy="15" r="1.5" fill="currentColor" />
      <circle cx="15" cy="15" r="1.5" fill="currentColor" />
      <path d="M12 17c-.5 0-1-.5-1-1s.5-1 1-1 1 .5 1 1-.5 1-1 1z" />
    </svg>
  ),
  Poop: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-1.5 0-2.5 1-2.5 2.5S11 7 12 8s2.5 1 2.5 2.5S13.5 13 12 13H8c-2 0-3.5 1.5-3.5 3.5S6 21 8.5 21h7c3 0 5-2 5-4.5 0-1.5-.5-2.5-1.5-3.5.5-.5 1-1.5 1-2.5 0-2-1.5-3.5-3.5-3.5-1 0-1.5.5-2 1 0-1-1-1.5-2.5-1.5z" />
      <path d="M9.5 16v.01M14.5 16v.01" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  Pee: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a6 6 0 006-6c0-4-6-10.5-6-10.5S6 12 6 16a6 6 0 006 6z" />
      <path d="M12 18v.01" />
    </svg>
  ),
  Water: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15h16v2a4 4 0 01-4 4H8a4 4 0 01-4-4v-2z" />
      <path d="M4 15c0-4 8-9 8-9s8 5 8 9" />
      <path d="M8 15h8" />
    </svg>
  ),
  Tail: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c0-5 3-7 3-11s-2-5-4-5-4 1-4 3 2 4 2 7" />
    </svg>
  ),
  Plus: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  Check: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Alert: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  Edit: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  BandAid: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-45 12 12)" />
      <rect x="9" y="10" width="6" height="4" rx="1" transform="rotate(-45 12 12)" stroke="none" fill="currentColor" opacity="0.15" />
      <circle cx="10.5" cy="10.5" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="13.5" r="0.5" fill="currentColor" stroke="none" />
      <path d="M7 11l-1 1M17 13l-1 1" opacity="0.5" />
    </svg>
  ),
  ChevronDown: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  ),
  Camera: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
      <circle cx="12" cy="13" r="4"></circle>
    </svg>
  ),
  Bowl: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13c0 4 4 7 9 7s9-3 9-7" />
      <path d="M3 13h18" />
      <path d="M8 8l1-2M12 9V6M16 8l-1-2" opacity="0.6" />
      <path d="M12 17c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1c0 .6-.4 1-1 1z" fill="currentColor" stroke="none" />
      <circle cx="10.5" cy="14.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="14.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  Fish: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12c0 2.5-3 5-7 5s-9-2-9-5c0-3 5-5 9-5s7 2.5 7 5z" />
      <path d="M6 12L2 9v6l4-3z" />
      <circle cx="18" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  CatStick: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 21h12a2 2 0 002-2V7L12 3 4 7v12a2 2 0 002 2z" />
      <path d="M4 7h16" />
      <path d="M9 13h6M9 17h6" opacity="0.4" />
    </svg>
  ),
  Can: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="7" rx="8" ry="3" />
      <path d="M4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7" />
      <ellipse cx="12" cy="7" rx="2" ry="1" opacity="0.7" />
      <path d="M12 7l1-2" opacity="0.7" />
      <path d="M4 14h16" opacity="0.5" />
    </svg>
  )
};

const assetUrl = path => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
const ARTWORK_ICON_PATHS = {
  food: assetUrl('icons/main/food.png'),
  water: assetUrl('icons/main/water.png'),
  poop: assetUrl('icons/main/poop.png'),
  pee: assetUrl('icons/main/pee.png'),
  care: assetUrl('icons/main/care.png'),
  health: assetUrl('icons/main/health.png'),
  stock: assetUrl('icons/main/stock.png'),
  brush: assetUrl('icons/main/brush.png'),
  play: assetUrl('icons/main/play.png'),
  wipe: assetUrl('icons/main/wipe.png'),
  ear: assetUrl('icons/main/ear.png'),
  teeth: assetUrl('icons/main/teeth.png'),
  nail: assetUrl('icons/main/nail.png'),
  paw: assetUrl('icons/main/paw_trim.png'),
  bath: assetUrl('icons/main/bath.png'),
  clean_water_bowl: assetUrl('icons/main/clean_water_bowl.png'),
  clean_food_bowl: assetUrl('icons/main/clean_food_bowl.png'),
  deep_clean_litter_box: assetUrl('icons/main/clean_litter_box.png'),
  internal_deworm: assetUrl('icons/main/internal_deworm.png'),
  external_deworm: assetUrl('icons/main/external_deworm.png'),
  vaccine: assetUrl('icons/supplement/vaccine.png'),
  reminder: assetUrl('icons/supplement/medical_reminder.png'),
  health_observation: assetUrl('icons/supplement/health_observation.png'),
  weight: assetUrl('icons/supplement/weight.png'),
  stock_item: assetUrl('icons/supplement/stock_item.png'),
  restock_done: assetUrl('icons/supplement/restock_done.png'),
  add_record: assetUrl('icons/supplement/add_record.png'),
  edit: assetUrl('icons/supplement/edit.png'),
  complete: assetUrl('icons/supplement/complete.png'),
  details: assetUrl('icons/supplement/details.png'),
  remove: assetUrl('icons/supplement/remove.png'),
  info: assetUrl('icons/supplement/info.png')
};

const ArtworkIcon = ({ name, className = 'w-6 h-6', alt = '', style }) => (
  <img
    src={ARTWORK_ICON_PATHS[name] || ARTWORK_ICON_PATHS.info}
    className={`${className} object-contain`}
    style={style}
    alt={alt}
    aria-hidden={alt ? undefined : true}
  />
);

const TailArtwork = ({ className = 'w-7 h-7' }) => (
  <img
    src={assetUrl('icons/navigation/cat-tail.png')}
    className={`${className} object-contain`}
    alt=""
    aria-hidden="true"
  />
);

const FamilyPawArtwork = ({ className = 'w-7 h-7' }) => (
  <img
    src={assetUrl('icons/navigation/family-paw.png')}
    className={`${className} object-contain`}
    alt=""
    aria-hidden="true"
  />
);

const createArtworkIcon = (name) => ({ className = 'w-6 h-6' }) => <ArtworkIcon name={name} className={className} />;
const AppIcons = {
  Food: createArtworkIcon('food'),
  Water: createArtworkIcon('water'),
  Poop: createArtworkIcon('poop'),
  Pee: createArtworkIcon('pee'),
  Care: createArtworkIcon('care'),
  Health: createArtworkIcon('health'),
  Stock: createArtworkIcon('stock'),
  Brush: createArtworkIcon('brush'),
  Play: createArtworkIcon('play'),
  Wipe: createArtworkIcon('wipe'),
  Ear: createArtworkIcon('ear'),
  Teeth: createArtworkIcon('teeth'),
  Nail: createArtworkIcon('nail'),
  PawTrim: createArtworkIcon('paw'),
  Bath: createArtworkIcon('bath'),
  Cleaning: createArtworkIcon('clean_litter_box'),
  InternalDeworm: createArtworkIcon('internal_deworm'),
  ExternalDeworm: createArtworkIcon('external_deworm'),
  Vaccine: createArtworkIcon('vaccine'),
  Reminder: createArtworkIcon('reminder'),
  Observation: createArtworkIcon('health_observation'),
  Weight: createArtworkIcon('weight'),
  StockItem: createArtworkIcon('stock_item')
};

// --- 💩 排便量视觉递进手绘风 SVG 渲染器 ---
const PoopVolumeIcon = ({ count = 1, scale = 1, showShockLines = false, isSelected = false }) => {
  return (
    <div className="relative flex items-center justify-center min-h-[40px]">
      {showShockLines && (
        <svg className="absolute -top-2 -left-2 w-11 h-11 text-[#E8B042] pointer-events-none animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <line x1="4" y1="12" x2="1" y2="12" />
          <line x1="6" y1="6" x2="3" y2="3" />
          <line x1="12" y1="4" x2="12" y2="1" />
          <line x1="18" y1="6" x2="21" y2="3" />
          <line x1="20" y1="12" x2="23" y2="12" />
        </svg>
      )}
      <div className={`flex items-end justify-center -space-x-2 transition-transform ${isSelected ? 'scale-110' : 'opacity-60'}`}>
        {Array.from({ length: count }).map((_, index) => (
          <ArtworkIcon
            key={index}
            name="poop"
            className="rounded-xl"
            style={{ width: `${24 + scale * 7}px`, height: `${24 + scale * 7}px` }}
          />
        ))}
      </div>
    </div>
  );
};

// 猫咪头像严格使用已确认原稿。旧头像值继续映射，避免历史数据失效。
const createCatAvatar = (fileName) => ({ className = "" }) => (
  <img src={assetUrl(`avatars/${fileName}.png`)} className={`${className} object-contain rounded-full`} alt="" aria-hidden="true" />
);
const CatAvatars = {
  orange: createCatAvatar('orange'),
  calico: createCatAvatar('calico'),
  shorthair: createCatAvatar('shorthair'),
  siamese: createCatAvatar('siamese'),
  black: createCatAvatar('black'),
  tuxedo: createCatAvatar('black'),
  ragdoll: createCatAvatar('siamese')
};

const AVATAR_OPTIONS = [
  { id: 'orange', name: '橘猫' },
  { id: 'calico', name: '三花猫' },
  { id: 'shorthair', name: '英短' },
  { id: 'siamese', name: '暹罗猫' },
  { id: 'black', name: '黑猫' }
];

// --- 饮食结构配置 ---
const FOOD_CATEGORIES = {
  main: { label: '主粮', subs: ['干粮', '主食罐', '冻干'] },
  snack: { label: '零食', subs: ['猫条', '冻干零食', '猫草'] },
  supplement: { label: '营养品', subs: ['鱼油', '益生菌', '化毛膏'] }
};

// --- 健康异常标签分类配置 ---
const HEALTH_CATEGORIES = [
  { id: 'gastro', title: '肠胃与排异', tags: ['吐毛球', '吐未消化食物', '吐黄水', '流口水'] },
  { id: 'skin', title: '五官与皮肤', tags: ['猫癣', '黑下巴', '频繁甩头', '单眼流泪', '牙龈红肿'] },
  { id: 'stress', title: '情绪与应激', tags: ['大口喘气', '肉垫出汗', '躲藏不出', '过度舔毛'] },
  { id: 'others', title: '其他体征', tags: ['打喷嚏', '咳嗽', '精神不振', '食欲减退', '频繁蹲砂盆'] }
];
const URGENT_TAGS = ['大口喘气', '频繁蹲砂盆']; // 需柔和高亮的急症标签

// --- CSS 动画注入 ---
const injectStyles = () => {
  if (document.getElementById('cat-daily-styles')) return;
  const style = document.createElement('style');
  style.id = 'cat-daily-styles';
  style.innerHTML = `
    @keyframes wag { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-15deg); } 75% { transform: rotate(15deg); } }
    .animate-wag { animation: wag 0.8s ease-in-out; }
    
    @keyframes stamp { 0% { opacity: 0; transform: scale(2) rotate(-15deg); } 40%, 60% { opacity: 1; transform: scale(0.95) rotate(0deg); } 100% { opacity: 0; transform: scale(1) rotate(0deg); } }
    .animate-stamp { animation: stamp 1.2s forwards; }

    @keyframes float-bubble { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
    .animate-float { animation: float-bubble 3s ease-in-out infinite; }
    
    /* 软糯闪烁发光膨胀动画 */
    @keyframes sparkle-pulse {
      0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(217, 194, 126, 0.4); }
      50% { transform: scale(1.03); box-shadow: 0 0 15px 6px rgba(217, 194, 126, 0.25); }
      100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(217, 194, 126, 0); }
    }
    .animate-sparkle { animation: sparkle-pulse 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards; }

    /* 数字滚动动画 */
    @keyframes slide-number-up { 0% { transform: translateY(100%); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
    @keyframes slide-number-down { 0% { transform: translateY(-100%); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
    .slide-up-enter { animation: slide-number-up 0.2s ease-out forwards; }
    .slide-down-enter { animation: slide-number-down 0.2s ease-out forwards; }

    /* 下落动画 (食物) */
    @keyframes fall-down { 
      0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; } 
      80% { opacity: 1; }
      100% { transform: translateY(110vh) rotate(360deg); opacity: 0; } 
    }
    .falling-item { animation: fall-down 2.5s linear forwards; position: absolute; top: 0; }

    .jelly-touch { transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1); }
    .jelly-touch:active { transform: scale(0.94); filter: brightness(0.95); }
    
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `;
  document.head.appendChild(style);
};

const DEFAULT_TAGS = {
  poop: ['完美条状', '干硬', '软便', '拉稀', '带毛发'],
};

const STORAGE_KEY = 'miao_daily_data';
const OWNER_PREFERENCES_KEY = 'miao_owner_preferences';
const CARE_SETTINGS_KEY = 'miao_care_settings';
const CARE_RECORDS_KEY = 'cat_care_records';
const BACKUP_STORAGE_KEYS = [STORAGE_KEY, OWNER_PREFERENCES_KEY, CARE_SETTINGS_KEY, CARE_RECORDS_KEY];
const HOUSEHOLD_CARE_ID = '__household__';
const RECORD_SCOPES = ['single', 'multiple', 'shared', 'unknown'];

const createRecordId = () => `record_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

const buildOccurredAt = (date, time) => {
  const fallback = new Date().toISOString();
  if (!date) return fallback;
  const normalizedTime = typeof time === 'string' && /^\d{2}:\d{2}/.test(time) ? time.slice(0, 5) : '12:00';
  const parsed = new Date(`${date}T${normalizedTime}:00`);
  return Number.isNaN(parsed.getTime()) ? fallback : parsed.toISOString();
};

const normalizeRecord = (record, fallback = {}) => {
  const date = record?.date || fallback.date || new Date().toLocaleDateString('en-CA');
  const time = record?.time || fallback.time || '--:--';
  const fallbackCatId = fallback.catId ? [fallback.catId] : [];
  const catIds = Array.isArray(record?.catIds) ? record.catIds.filter(Boolean) : fallbackCatId;
  const scope = RECORD_SCOPES.includes(record?.scope)
    ? record.scope
    : (catIds.length > 1 ? 'multiple' : catIds.length === 1 ? 'single' : 'unknown');

  return {
    id: record?.id || createRecordId(),
    occurredAt: record?.occurredAt || buildOccurredAt(date, time),
    date,
    time,
    type: record?.type || fallback.type || 'health',
    catIds,
    scope,
    tags: Array.isArray(record?.tags) ? record.tags : [],
    details: record?.details && typeof record.details === 'object' ? record.details : {},
    ...(record?.photo ? { photo: record.photo } : {})
  };
};

const migrateRecords = (records) => {
  if (Array.isArray(records)) {
    return records.filter(Boolean).map(record => normalizeRecord(record));
  }

  const migrated = [];
  if (!records || typeof records !== 'object') return migrated;

  Object.entries(records).forEach(([catId, dates]) => {
    if (!dates || typeof dates !== 'object') return;
    Object.entries(dates).forEach(([date, types]) => {
      if (!types || typeof types !== 'object') return;
      Object.entries(types).forEach(([type, recordList]) => {
        if (!Array.isArray(recordList)) return;
        recordList.filter(Boolean).forEach(record => {
          migrated.push(normalizeRecord(record, { catId, date, type }));
        });
      });
    });
  });

  return migrated;
};

const migrateHealthProfile = (profile = {}) => {
  const weights = Array.isArray(profile.weights)
    ? profile.weights.map(item => ({
        id: item.id || `weight_${item.date || Date.now()}`,
        date: item.date || new Date().toLocaleDateString('en-CA'),
        occurredAt: item.occurredAt || buildOccurredAt(item.date, item.time),
        weight: Number(item.weight),
        note: item.note || ''
      })).filter(item => !Number.isNaN(item.weight))
    : [];
  const dewormings = Array.isArray(profile.dewormings) ? profile.dewormings : (
    profile.lastDeworming ? [{
      id: `legacy_deworm_${profile.lastDeworming}`,
      kind: 'combined',
      date: profile.lastDeworming,
      occurredAt: buildOccurredAt(profile.lastDeworming),
      product: '',
      nextDate: ''
    }] : []
  );
  const vaccines = Array.isArray(profile.vaccines) ? profile.vaccines : (
    profile.lastVaccine ? [{
      id: `legacy_vaccine_${profile.lastVaccine}`,
      name: '年度疫苗',
      date: profile.lastVaccine,
      occurredAt: buildOccurredAt(profile.lastVaccine),
      nextDate: ''
    }] : []
  );
  return {
    ...profile,
    weights,
    dewormings,
    vaccines,
    reminders: Array.isArray(profile.reminders) ? profile.reminders : []
  };
};

const STOCK_CATEGORIES = [
  { id: 'food', label: '主食' },
  { id: 'snack', label: '零食营养' },
  { id: 'cleaning', label: '清洁用品' },
  { id: 'health', label: '健康用品' }
];

const migrateStockItems = (stockItems, legacyStocks = {}) => {
  if (Array.isArray(stockItems) && stockItems.length > 0) {
    return stockItems.map(item => ({
      reminderEnabled: true,
      active: true,
      usageCatIds: [],
      trackingMode: 'simple',
      simpleLevel: 'full',
      ...item
    }));
  }
  const levelMap = { '充足': 'full', '一半': 'half', '见底啦': 'low' };
  const now = new Date().toISOString();
  return [
    { id: 'legacy_stock_food', name: '猫粮 / 主食罐', category: 'food', trackingMode: 'simple', simpleLevel: levelMap[legacyStocks.food] || 'full' },
    { id: 'legacy_stock_litter', name: '猫砂', category: 'cleaning', trackingMode: 'simple', simpleLevel: levelMap[legacyStocks.litter] || 'half' },
    { id: 'legacy_stock_meds', name: '驱虫药 / 备用药', category: 'health', trackingMode: 'simple', simpleLevel: levelMap[legacyStocks.meds] || 'low' }
  ].map(item => ({ ...item, reminderEnabled: true, active: true, usageCatIds: [], createdAt: now, updatedAt: now }));
};

const TYPE_INFO = {
  poop: { title: '拉粑粑', icon: AppIcons.Poop, color: 'text-[#8C7662]', bg: 'bg-[#F4EFE6]' },
  pee: { title: '尿尿', icon: AppIcons.Pee, color: 'text-[#E8B042]', bg: 'bg-[#FDF6E3]' },
  food: { title: '吃饭', icon: AppIcons.Food, color: 'text-[#E87A5D]', bg: 'bg-[#FFEDE8]' },
  water: { title: '喝水', icon: AppIcons.Water, color: 'text-[#6A98D7]', bg: 'bg-[#EAF2FF]' },
  nails: { title: '剪指甲', icon: AppIcons.Nail, color: 'text-[#A3BCA7]', bg: 'bg-[#F0F5F1]' },
  brush: { title: '梳毛', icon: AppIcons.Brush, color: 'text-[#A3BCA7]', bg: 'bg-[#F0F5F1]' },
  play: { title: '陪玩', icon: AppIcons.Play, color: 'text-[#6A98D7]', bg: 'bg-[#EAF2FF]' },
  wipe: { title: '擦眼泪', icon: AppIcons.Wipe, color: 'text-[#A3BCA7]', bg: 'bg-[#F0F5F1]' },
  ear: { title: '洗耳朵', icon: AppIcons.Ear, color: 'text-[#E8B042]', bg: 'bg-[#FDF6E3]' },
  teeth: { title: '刷牙', icon: AppIcons.Teeth, color: 'text-[#A3BCA7]', bg: 'bg-[#F0F5F1]' },
  nail: { title: '剪指甲', icon: AppIcons.Nail, color: 'text-[#A3BCA7]', bg: 'bg-[#F0F5F1]' },
  paw: { title: '剃脚毛', icon: AppIcons.PawTrim, color: 'text-[#8C7662]', bg: 'bg-[#F4EFE6]' },
  bath: { title: '洗澡', icon: AppIcons.Bath, color: 'text-[#6A98D7]', bg: 'bg-[#EAF2FF]' },
  health: { title: '异常状况', icon: AppIcons.Observation, color: 'text-[#D36B4F]', bg: 'bg-[#FFEDE8]' },
  weight: { title: '体重', icon: AppIcons.Weight, color: 'text-[#8C7662]', bg: 'bg-[#F4EFE6]' },
  deworm: { title: '驱虫', icon: AppIcons.InternalDeworm, color: 'text-[#A3BCA7]', bg: 'bg-[#F0F5F1]' },
  internal_deworm: { title: '体内驱虫', icon: AppIcons.InternalDeworm, color: 'text-[#A3BCA7]', bg: 'bg-[#F0F5F1]' },
  external_deworm: { title: '体外驱虫', icon: AppIcons.ExternalDeworm, color: 'text-[#6A98D7]', bg: 'bg-[#EAF2FF]' },
  vaccine: { title: '疫苗', icon: AppIcons.Vaccine, color: 'text-[#D36B4F]', bg: 'bg-[#FFEDE8]' },
  reminder: { title: '医疗提醒', icon: AppIcons.Reminder, color: 'text-[#E8B042]', bg: 'bg-[#FDF6E3]' },
  cleaning: { title: '家庭清洁', icon: AppIcons.Cleaning, color: 'text-[#8C7662]', bg: 'bg-[#F4EFE6]' }
};

export default function App() {
  const [data, setData] = useState({ 
    cats: [],
    archivedCats: {},
    records: [],
    health: {},
    brandHistory: [], 
    customFoodSubs: { main: [], snack: [], supplement: [] },
    customHealthTags: { gastro: [], skin: [], stress: [], others: [] },
    stocks: { food: '充足', litter: '一半', meds: '见底啦' },
    stockItems: []
  });
  const [currentCatId, setCurrentCatId] = useState('');
  const [isHydrated, setIsHydrated] = useState(false);
  const [isWagging, setIsWagging] = useState(false);
  const [showStamp, setShowStamp] = useState({ show: false, type: 'complete' }); 
  
  // 顶层状态
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [catModal, setCatModal] = useState({ isOpen: false, mode: 'add', catId: null });
  const [catForm, setCatForm] = useState({ name: '', avatar: 'orange' });
  const [historyModalOpen, setHistoryModalOpen] = useState(false); 
  const [viewMode, setViewMode] = useState('cat');
  const [expandedHomeSection, setExpandedHomeSection] = useState(null);
  const [careCenterOpen, setCareCenterOpen] = useState(false);
  const [careEditor, setCareEditor] = useState({ isOpen: false, mode: 'settings', item: null, target: 'cat' });
  const [careForm, setCareForm] = useState({ name: '', icon: '✨', frequencyDays: 7, reminderEnabled: true, target: 'cat' });
  
  // 弹窗状态管理
  const [sheetConfig, setSheetConfig] = useState({ isOpen: false, type: null, title: '' });
  const [selectedTags, setSelectedTags] = useState([]);
  const [customTags, setCustomTags] = useState({});
  const [newTagInput, setNewTagInput] = useState('');
  const [isAddingTag, setIsAddingTag] = useState(false);

  const [healthSheet, setHealthSheet] = useState({ isOpen: false, type: null, title: '' }); 
  const [healthInput, setHealthInput] = useState('');
  const [healthForm, setHealthForm] = useState({
    note: '', kind: 'external', product: '', name: '猫三联',
    date: '', nextDate: '', status: 'observing', title: ''
  });
  const [showWeightHistory, setShowWeightHistory] = useState(false);
  const [stockCategoryFilter, setStockCategoryFilter] = useState('all');
  const [stockUsageFilter, setStockUsageFilter] = useState('all');
  const [stockEditor, setStockEditor] = useState({ isOpen: false, mode: 'create', itemId: null });
  const [stockForm, setStockForm] = useState({
    name: '', category: 'food', trackingMode: 'simple', simpleLevel: 'full',
    quantity: 1, unit: '袋', lowStockThreshold: 1, consumeStep: 1,
    expiresAt: '', openedAt: '', usageCatIds: [], note: '', reminderEnabled: true
  });
  const [stockAdjust, setStockAdjust] = useState({ isOpen: false, itemId: null, amount: 1 });
  const [dataToolsOpen, setDataToolsOpen] = useState(false);
  const [backupNotice, setBackupNotice] = useState('');
  const backupInputRef = useRef(null);
  const [pendingDeleteRecord, setPendingDeleteRecord] = useState(null);
  const [pendingDeleteCat, setPendingDeleteCat] = useState(null);
  const [undoDeletion, setUndoDeletion] = useState(null);
  const undoTimerRef = useRef(null);

  // 饮食专属状态
  const [foodState, setFoodState] = useState({ tab: 'main', subType: '干粮', brand: '', amount: 50 });
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState('up'); 
  const [fallingItems, setFallingItems] = useState([]); 
  const [isAddingFoodSub, setIsAddingFoodSub] = useState(false); 
  const [newFoodSubInput, setNewFoodSubInput] = useState(''); 

  // 异常与健康专属状态
  const [activeAccordion, setActiveAccordion] = useState('gastro');
  const [healthPhoto, setHealthPhoto] = useState(null); 
  const [addingHealthTagCatId, setAddingHealthTagCatId] = useState(null); 
  const [newHealthTagInput, setNewHealthTagInput] = useState(''); 

  // 💩 拉粑粑专属状态
  const [poopVolume, setPoopVolume] = useState('正常量');
  const [poopColors, setPoopColors] = useState(['棕色']);

  // 💧 尿尿专属状态
  const [peeCount, setPeeCount] = useState(1);
  const [peeSizeDistribution, setPeeSizeDistribution] = useState(['正常大小为主']);
  const [peeAbnormalities, setPeeAbnormalities] = useState([]);

  // 💧 喝水专属状态
  const [waterMode, setWaterMode] = useState('observed');
  const [waterObservedCount, setWaterObservedCount] = useState(1);
  const [waterAmount, setWaterAmount] = useState(200);
  const [waterAction, setWaterAction] = useState('补水');
  const [waterFoodSource, setWaterFoodSource] = useState('湿粮加水');

  // 记录归属独立于当前查看的猫咪，并区分系统默认与用户手动选择。
  const [recordAssignment, setRecordAssignment] = useState({ scope: 'shared', catIds: [] });
  const [assignmentExpanded, setAssignmentExpanded] = useState(false);
  const [assignmentSource, setAssignmentSource] = useState('default');
  const [isMultiOwnerMode, setIsMultiOwnerMode] = useState(false);
  const [ownerPreferences, setOwnerPreferences] = useState(() => {
    try {
      const saved = localStorage.getItem(OWNER_PREFERENCES_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // --- 🪮 🌟 日常护理区状态与逻辑 ---
  const [careRecords, setCareRecords] = useState(() => {
    try {
      const saved = localStorage.getItem(CARE_RECORDS_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [careSettings, setCareSettings] = useState(() => {
    try {
      const saved = localStorage.getItem(CARE_SETTINGS_KEY);
      return saved ? JSON.parse(saved) : { cats: {}, household: {}, customItems: [] };
    } catch {
      return { cats: {}, household: {}, customItems: [] };
    }
  });

  const [sparkleId, setSparkleId] = useState(null);

  useEffect(() => {
    localStorage.setItem(CARE_RECORDS_KEY, JSON.stringify(careRecords));
  }, [careRecords]);

  useEffect(() => {
    localStorage.setItem(CARE_SETTINGS_KEY, JSON.stringify(careSettings));
  }, [careSettings]);

  useEffect(() => {
    localStorage.setItem(OWNER_PREFERENCES_KEY, JSON.stringify(ownerPreferences));
  }, [ownerPreferences]);

  const exportLocalBackup = () => {
    const storage = Object.fromEntries(
      BACKUP_STORAGE_KEYS.map(key => [key, localStorage.getItem(key)])
    );
    const backup = {
      app: 'miao-daily',
      version: 1,
      exportedAt: new Date().toISOString(),
      storage
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const date = new Date().toLocaleDateString('en-CA');
    link.href = url;
    link.download = `猫咪日常备份-${date}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setBackupNotice('备份已经导出，请把文件保存在安全的位置。');
  };

  const importLocalBackup = async event => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    try {
      const backup = JSON.parse(await file.text());
      if (backup?.app !== 'miao-daily' || !backup.storage || typeof backup.storage !== 'object') {
        throw new Error('unsupported-backup');
      }

      const primaryData = backup.storage[STORAGE_KEY];
      const parsedPrimaryData = primaryData ? JSON.parse(primaryData) : null;
      if (!parsedPrimaryData || !Array.isArray(parsedPrimaryData.cats)) {
        throw new Error('invalid-data');
      }

      const shouldRestore = window.confirm(
        '恢复备份会覆盖这台设备上当前的猫咪记录。建议先导出一次现有备份，再继续恢复。'
      );
      if (!shouldRestore) return;

      BACKUP_STORAGE_KEYS.forEach(key => {
        const value = backup.storage[key];
        if (typeof value === 'string') localStorage.setItem(key, value);
        else localStorage.removeItem(key);
      });
      window.location.reload();
    } catch {
      setBackupNotice('这个文件不是有效的“猫咪日常”备份，请重新选择。');
    }
  };

  // 温柔的时间计算器
  const getTimeText = (timestamp) => {
    if (!timestamp) return "还没做过哦";
    const now = new Date().getTime();
    const diffDays = Math.floor((now - timestamp) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
      const diffMinutes = Math.floor((now - timestamp) / (1000 * 60));
      return diffMinutes < 60 ? "刚刚" : "今天刚做过";
    }
    return `已过 ${diffDays} 天`;
  };

  // 判断是否需要“燕麦黄光晕”提醒
  const needsAttention = (timestamp, cycleDays) => {
    if (!timestamp) return true; // 没做过默认需要提醒
    const now = new Date().getTime();
    const diffDays = Math.floor((now - timestamp) / (1000 * 60 * 60 * 24));
    return diffDays >= cycleDays;
  };

  const isCareClearlyOverdue = (timestamp, cycleDays) => {
    if (!timestamp) return false;
    const diffDays = Math.floor((Date.now() - timestamp) / 86400000);
    const graceDays = Math.max(3, Math.ceil(Number(cycleDays || 1) * 0.5));
    return diffDays >= Number(cycleDays || 1) + graceDays;
  };

  // 护理打卡动作
  const handleCareAction = (id, itemName, target = 'cat') => {
    const now = new Date();
    const date = now.toLocaleDateString('en-CA');
    const time = now.toLocaleTimeString('zh-CN', {hour: '2-digit', minute:'2-digit', hour12: false});

    // 1. 更新对应猫咪的这一项时间戳
    const recordOwnerId = target === 'household' ? HOUSEHOLD_CARE_ID : currentCatId;
    setCareRecords(prev => ({
      ...prev,
      [recordOwnerId]: {
        ...(prev[recordOwnerId] || {}),
        [id]: new Date().getTime()
      }
    }));

    // 2. 将这次护理活动自动记录并同步插入到今日动态时间轴上，带来闭环成就感！
    setData(prev => {
      const careRecord = normalizeRecord({
        id: createRecordId(),
        occurredAt: now.toISOString(),
        date,
        time,
        type: target === 'household' ? 'cleaning' : id,
        catIds: target === 'household' ? [] : [currentCatId],
        scope: target === 'household' ? 'shared' : 'single',
        tags: [target === 'household' ? '已完成清洁' : '已按时护理'],
        details: { itemName, completed: true, target }
      });
      return {
        ...prev,
        records: [...migrateRecords(prev.records), careRecord]
      };
    });

    setSparkleId(id); // 触发该卡片的星星动画
    setTimeout(() => setSparkleId(null), 1000); // 1秒后回收星星
  };

  // 护理项目配置表 (包含预设提醒周期)
  const CARE_MODULES = [
    {
      group: '基础互动',
      items: [
        { id: 'brush', name: '梳毛', iconKey: 'brush', cycle: 3 },
        { id: 'play', name: '陪玩', iconKey: 'play', cycle: 1 }
      ]
    },
    {
      group: '面部清洁',
      items: [
        { id: 'wipe', name: '擦眼泪/下巴', iconKey: 'wipe', cycle: 2 },
        { id: 'ear', name: '洗耳朵', iconKey: 'ear', cycle: 14 },
        { id: 'teeth', name: '刷牙', iconKey: 'teeth', cycle: 7 }
      ]
    },
    {
      group: '身体四肢',
      items: [
        { id: 'nail', name: '剪指甲', iconKey: 'nail', cycle: 14 },
        { id: 'paw', name: '剃脚毛', iconKey: 'paw', cycle: 30 },
        { id: 'bath', name: '洗澡', iconKey: 'bath', cycle: 180 }
      ]
    }
  ];
  const DEFAULT_CARE_ITEMS = CARE_MODULES.flatMap(group => group.items.map(item => ({ ...item, group: group.group, target: 'cat' })));
  const DEFAULT_CLEANING_ITEMS = [
    { id: 'clean_water_bowl', name: '清洗水碗', iconKey: 'clean_water_bowl', cycle: 1, group: '家庭清洁', target: 'household' },
    { id: 'clean_food_bowl', name: '清洗饭碗', iconKey: 'clean_food_bowl', cycle: 1, group: '家庭清洁', target: 'household' },
    { id: 'deep_clean_litter_box', name: '彻底清洗猫砂盆', iconKey: 'deep_clean_litter_box', cycle: 14, group: '家庭清洁', target: 'household' }
  ];
  const customCareItems = Array.isArray(careSettings.customItems) ? careSettings.customItems : [];
  const getCatCareItems = (catId) => [
    ...DEFAULT_CARE_ITEMS,
    ...customCareItems.filter(item => item.target === 'cat' && (!item.catIds?.length || item.catIds.includes(catId)))
  ];
  const catCareItems = getCatCareItems(currentCatId);
  const householdCareItems = [...DEFAULT_CLEANING_ITEMS, ...customCareItems.filter(item => item.target === 'household')];

  const getCareItemSetting = (item, target = item.target || 'cat', catId = currentCatId) => {
    const settingsGroup = target === 'household'
      ? careSettings.household
      : careSettings.cats?.[catId];
    return {
      frequencyDays: Math.max(1, Number(settingsGroup?.[item.id]?.frequencyDays || item.cycle || 7)),
      reminderEnabled: settingsGroup?.[item.id]?.reminderEnabled !== false
    };
  };

  const openCareSettings = (item, target = item.target || 'cat') => {
    const setting = getCareItemSetting(item, target);
    setCareForm({
      name: item.name,
      icon: item.icon || '✨',
      frequencyDays: setting.frequencyDays,
      reminderEnabled: setting.reminderEnabled,
      target
    });
    setCareEditor({ isOpen: true, mode: 'settings', item, target });
  };

  const openCustomCareEditor = (target = 'cat') => {
    setCareForm({ name: '', icon: target === 'household' ? '🧽' : '✨', frequencyDays: 7, reminderEnabled: true, target });
    setCareEditor({ isOpen: true, mode: 'create', item: null, target });
  };

  const saveCareEditor = () => {
    const frequencyDays = Math.max(1, Number(careForm.frequencyDays) || 1);
    if (careEditor.mode === 'create') {
      if (!careForm.name.trim()) return;
      const newItem = {
        id: `care_custom_${Date.now()}`,
        name: careForm.name.trim(),
        icon: careForm.icon || '✨',
        cycle: frequencyDays,
        target: careForm.target,
        ...(careForm.target === 'cat' ? { catIds: [currentCatId] } : {}),
        custom: true
      };
      setCareSettings(prev => ({
        ...prev,
        customItems: [...(prev.customItems || []), newItem],
        ...(careForm.target === 'household'
          ? { household: { ...(prev.household || {}), [newItem.id]: { frequencyDays, reminderEnabled: careForm.reminderEnabled } } }
          : { cats: { ...(prev.cats || {}), [currentCatId]: { ...(prev.cats?.[currentCatId] || {}), [newItem.id]: { frequencyDays, reminderEnabled: careForm.reminderEnabled } } } })
      }));
    } else {
      const itemId = careEditor.item.id;
      setCareSettings(prev => careEditor.target === 'household'
        ? {
            ...prev,
            household: { ...(prev.household || {}), [itemId]: { frequencyDays, reminderEnabled: careForm.reminderEnabled } }
          }
        : {
            ...prev,
            cats: {
              ...(prev.cats || {}),
              [currentCatId]: {
                ...(prev.cats?.[currentCatId] || {}),
                [itemId]: { frequencyDays, reminderEnabled: careForm.reminderEnabled }
              }
            }
          });
    }
    setCareEditor({ isOpen: false, mode: 'settings', item: null, target: 'cat' });
  };

  useEffect(() => {
    injectStyles();
    const localData = localStorage.getItem(STORAGE_KEY);
    if (localData) {
      try {
        const parsed = JSON.parse(localData);
        if (!Array.isArray(parsed.cats)) parsed.cats = [];
        if (!parsed.archivedCats || typeof parsed.archivedCats !== 'object') parsed.archivedCats = {};
        if (!parsed.brandHistory || !Array.isArray(parsed.brandHistory)) parsed.brandHistory = [];
        if (!parsed.customFoodSubs || typeof parsed.customFoodSubs !== 'object') parsed.customFoodSubs = { main: [], snack: [], supplement: [] };
        if (!parsed.customHealthTags || typeof parsed.customHealthTags !== 'object') parsed.customHealthTags = { gastro: [], skin: [], stress: [], others: [] };
        if (!parsed.health || typeof parsed.health !== 'object') parsed.health = {};
        parsed.health = Object.fromEntries(
          Object.entries(parsed.health).map(([catId, profile]) => [catId, migrateHealthProfile(profile)])
        );
        if (!parsed.stocks || typeof parsed.stocks !== 'object') {
          parsed.stocks = { food: '充足', litter: '一半', meds: '见底啦' };
        }
        parsed.stockItems = migrateStockItems(parsed.stockItems, parsed.stocks);
        parsed.records = migrateRecords(parsed.records);
        setData(parsed);
        if (parsed.cats.length > 0) setCurrentCatId(parsed.cats[0].id);
        else setViewMode('family');
      } catch (error) {
        console.warn('猫咪日常数据读取失败，已保留默认数据。', error);
      }
    }
    setIsHydrated(true);
    triggerWag();
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data, isHydrated]);

  const getToday = () => new Date().toLocaleDateString('en-CA'); 
  const today = getToday();

  // --- 触发小动画 ---
  const triggerWag = () => { setIsWagging(false); setTimeout(() => setIsWagging(true), 10); };

  // --- 饮食交互处理 ---
  const handleFoodAmountChange = (newAmount) => {
    if (newAmount < 0) return;
    setScrollDir(newAmount > foodState.amount ? 'up' : 'down');
    setFoodState(prev => ({ ...prev, amount: newAmount }));
  };

  const generateFallingItems = () => {
    const items = [];
    const count = Math.floor(Math.random() * 4) + 5;
    for(let i=0; i<count; i++) {
      items.push({
        id: Date.now() + i,
        left: `${10 + Math.random() * 80}%`, 
        delay: `${Math.random() * 0.5}s`,
        duration: `${2.2 + Math.random()}s`,
        size: 28 + Math.floor(Math.random() * 18),
        rotation: `${-20 + Math.random() * 40}deg`
      });
    }
    setFallingItems(items);
    setTimeout(() => setFallingItems([]), 3500); 
  };

  const getAssignmentContextKey = (type, foodTab = foodState.tab, selectedWaterMode = waterMode) => {
    if (type === 'food') return `food_${foodTab}`;
    if (type === 'water') return `water_${selectedWaterMode}`;
    return type;
  };

  const normalizeAssignment = (assignment) => {
    const validCatIds = Array.isArray(assignment?.catIds)
      ? assignment.catIds.filter(id => data.cats?.some(cat => cat.id === id))
      : [];
    if (assignment?.scope === 'shared') return { scope: 'shared', catIds: [] };
    if (assignment?.scope === 'unknown') return { scope: 'unknown', catIds: [] };
    if (validCatIds.length > 1) return { scope: 'multiple', catIds: validCatIds };
    if (validCatIds.length === 1) return { scope: 'single', catIds: validCatIds };
    return null;
  };

  const getDefaultAssignment = (type, foodTab = foodState.tab, selectedWaterMode = waterMode) => {
    const cats = data.cats || [];
    if (cats.length === 0) return { scope: 'unknown', catIds: [] };
    if (cats.length === 1) return { scope: 'single', catIds: [cats[0].id] };
    if (type === 'food') {
      return foodTab === 'main'
        ? { scope: 'shared', catIds: [] }
        : { scope: 'single', catIds: [currentCatId] };
    }
    if (type === 'water') {
      return selectedWaterMode === 'food_added'
        ? { scope: 'single', catIds: [currentCatId] }
        : { scope: 'shared', catIds: [] };
    }
    if (['poop', 'pee'].includes(type)) return { scope: 'shared', catIds: [] };
    return { scope: 'single', catIds: [currentCatId] };
  };

  const getInitialAssignment = (type, foodTab = foodState.tab, selectedWaterMode = waterMode) => {
    const defaultAssignment = getDefaultAssignment(type, foodTab, selectedWaterMode);
    if (type === 'health') {
      return viewMode === 'cat' && data.cats?.some(cat => cat.id === currentCatId)
        ? { scope: 'single', catIds: [currentCatId] }
        : { scope: 'unknown', catIds: [] };
    }
    if ((data.cats || []).length === 1) return defaultAssignment;
    const key = getAssignmentContextKey(type, foodTab, selectedWaterMode);
    return normalizeAssignment(ownerPreferences[key]) || defaultAssignment;
  };

  const applyScenarioAssignment = (type, foodTab = foodState.tab, selectedWaterMode = waterMode) => {
    if (assignmentSource === 'manual') return;
    setRecordAssignment(getInitialAssignment(type, foodTab, selectedWaterMode));
    setIsMultiOwnerMode(false);
  };

  const setManualAssignment = (assignment, shouldCollapse = true) => {
    setRecordAssignment(normalizeAssignment(assignment) || getDefaultAssignment(sheetConfig.type));
    setAssignmentSource('manual');
    setIsMultiOwnerMode(false);
    if (shouldCollapse) setAssignmentExpanded(false);
  };

  const getRecordAssignment = () => normalizeAssignment(recordAssignment) || getDefaultAssignment(sheetConfig.type);

  const getAssignmentLabel = (scope, catIds) => {
    if (scope === 'shared') return '🏠 共同 / 分不清';
    if (scope === 'unknown') return '☁️ 不确定是谁';
    const names = (catIds || [])
      .map(id => data.cats?.find(cat => cat.id === id)?.name || data.archivedCats?.[id]?.name)
      .filter(Boolean);
    if (scope === 'multiple') return `🐾 ${names.join('、') || '多只猫咪'}`;
    const deletedSuffix = catIds?.length === 1 && data.archivedCats?.[catIds[0]] ? '（已删除）' : '';
    return `🐱 ${names[0] || '明确归属'}${deletedSuffix}`;
  };

  const getRecordDisplayTitle = (record, typeInfo) => {
    if (record?.details?.completed && record?.details?.itemName) {
      return record.details.itemName;
    }
    if (record?.type === 'reminder' && record?.details?.title) return record.details.title;
    if (record?.type === 'vaccine' && record?.details?.name) return record.details.name;
    return typeInfo.title;
  };

  const currentAssignment = getRecordAssignment();
  const currentAssignmentLabel = getAssignmentLabel(currentAssignment.scope, currentAssignment.catIds);

  // --- 核心记录保存 ---
  const saveRecord = () => {
    const requiresSelectedTags = !['food', 'poop', 'pee', 'water'].includes(sheetConfig.type);
    if (requiresSelectedTags && selectedTags.length === 0) return;
    
    let tagsToSave = selectedTags;
    let details = {};
    let newBrandHistory = [...(data.brandHistory || [])];
    const assignment = getRecordAssignment();

    // 如果是饮食模块，重组数据
    if (sheetConfig.type === 'food') {
      const brandStr = foodState.brand.trim() ? `[${foodState.brand.trim()}]` : '';
      tagsToSave = [
        `${foodState.subType}`,
        brandStr,
        foodState.amount > 0 ? `${foodState.amount}g` : ''
      ].filter(Boolean);
      details = {
        category: foodState.tab,
        subType: foodState.subType,
        brand: foodState.brand.trim(),
        amount: foodState.amount,
        unit: 'g'
      };

      if (foodState.brand.trim() && !newBrandHistory.includes(foodState.brand.trim())) {
        newBrandHistory = [foodState.brand.trim(), ...newBrandHistory].slice(0, 10); 
      }
    }

    // 如果是💩拉粑粑模块，重组复合多选与单选项数据
    if (sheetConfig.type === 'poop') {
      tagsToSave = [
        ...selectedTags,
        poopColors.length > 0 ? `颜色: ${poopColors.join('、')}` : '',
        poopVolume ? `分量: ${poopVolume}` : ''
      ].filter(Boolean);
      details = { texture: selectedTags, colors: poopColors, volume: poopVolume };
    }

    // 铲砂场景：记录总团数、整体大小分布和异常状态。
    if (sheetConfig.type === 'pee') {
      tagsToSave = [
        `共 ${peeCount} 团`,
        ...peeSizeDistribution,
        ...peeAbnormalities
      ].filter(Boolean);
      details = {
        count: peeCount,
        sizeDistribution: peeSizeDistribution,
        abnormalities: peeAbnormalities
      };
    }

    if (sheetConfig.type === 'water') {
      if (waterMode === 'observed') {
        tagsToSave = [`观察到喝水 ${waterObservedCount} 次`];
        details = { method: 'observed', observedCount: waterObservedCount };
      } else if (waterMode === 'refill') {
        tagsToSave = [`${waterAction} ${waterAmount}ml`];
        details = { method: 'refill', action: waterAction, amount: waterAmount, unit: 'ml' };
      } else {
        tagsToSave = [`${waterFoodSource} ${waterAmount}ml`];
        details = { method: 'food_added', source: waterFoodSource, amount: waterAmount, unit: 'ml' };
      }
    }

    if (sheetConfig.type === 'health') {
      tagsToSave = [...selectedTags];
      details = { symptoms: selectedTags, status: 'observing', startedAt: new Date().toISOString() };
    }

    if (!['food', 'poop', 'pee', 'water', 'health'].includes(sheetConfig.type)) {
      tagsToSave = [...selectedTags];
      details = { statuses: selectedTags };
    }

    const now = new Date();
    const date = now.toLocaleDateString('en-CA');
    const time = now.toLocaleTimeString('zh-CN', {hour: '2-digit', minute:'2-digit', hour12: false});
    const newRecord = normalizeRecord({
      id: createRecordId(),
      occurredAt: now.toISOString(),
      date,
      time,
      type: sheetConfig.type,
      catIds: assignment.catIds,
      scope: assignment.scope,
      tags: tagsToSave,
      details,
      ...(healthPhoto && sheetConfig.type === 'health' ? { photo: healthPhoto } : {})
    });

    if (sheetConfig.type !== 'health') {
      const preferenceKey = getAssignmentContextKey(sheetConfig.type);
      setOwnerPreferences(prev => ({
        ...prev,
        [preferenceKey]: assignment
      }));
    }

    setData(prev => {
      return {
        ...prev,
        brandHistory: newBrandHistory,
        records: [...migrateRecords(prev.records), newRecord]
      };
    });
    
    setSheetConfig({ isOpen: false, type: null, title: '' });
    
    const stampType = sheetConfig.type || 'complete';
    setShowStamp({ show: true, type: stampType });
    
    if (sheetConfig.type === 'food') {
      generateFallingItems();
    }
    
    setTimeout(() => setShowStamp({ show: false, type: stampType }), 1200);
  };

  // --- 健康专属记录保存 ---
  const saveHealthRecord = () => {
    const now = new Date();
    const date = healthForm.date || now.toLocaleDateString('en-CA');
    const time = now.toLocaleTimeString('zh-CN', {hour: '2-digit', minute:'2-digit', hour12: false});
    const recordType = healthSheet.type;
    if (recordType === 'weight' && Number.isNaN(parseFloat(healthInput))) return;
    if (recordType === 'reminder' && !healthForm.title.trim()) return;
    const typeLabels = { internal_deworm: '体内驱虫', external_deworm: '体外驱虫' };
    const recordTags = recordType === 'weight' ? [`${parseFloat(healthInput)} kg`, healthForm.note].filter(Boolean)
      : recordType === 'vaccine' ? [healthForm.name || '疫苗']
      : recordType === 'reminder' ? [healthForm.title]
      : [typeLabels[recordType] || '驱虫'];
    const details = recordType === 'weight'
      ? { weight: parseFloat(healthInput), unit: 'kg', note: healthForm.note }
      : recordType === 'vaccine'
        ? { name: healthForm.name || '疫苗', nextDate: healthForm.nextDate, note: healthForm.note, completed: true }
        : recordType === 'reminder'
          ? { title: healthForm.title, dueDate: healthForm.nextDate || date, note: healthForm.note, status: 'pending' }
          : { kind: recordType === 'internal_deworm' ? 'internal' : 'external', product: healthForm.product, nextDate: healthForm.nextDate, note: healthForm.note, completed: true };

    setData(prev => {
      const currentHealth = migrateHealthProfile(prev.health?.[currentCatId]);
      let newHealth = { ...currentHealth };
      const itemId = createRecordId();

      if (recordType === 'weight') {
        const weightVal = parseFloat(healthInput);
        newHealth.weights = [...newHealth.weights, { id: itemId, date, occurredAt: buildOccurredAt(date, time), weight: weightVal, note: healthForm.note }]
          .sort((a, b) => new Date(a.occurredAt || a.date) - new Date(b.occurredAt || b.date));
      } else if (['internal_deworm', 'external_deworm'].includes(recordType)) {
        newHealth.dewormings = [...newHealth.dewormings, {
          id: itemId, kind: details.kind, date, occurredAt: buildOccurredAt(date, time),
          product: healthForm.product, nextDate: healthForm.nextDate, note: healthForm.note
        }];
      } else if (recordType === 'vaccine') {
        newHealth.vaccines = [...newHealth.vaccines, {
          id: itemId, name: healthForm.name || '疫苗', date, occurredAt: buildOccurredAt(date, time),
          nextDate: healthForm.nextDate, note: healthForm.note
        }];
      } else if (recordType === 'reminder') {
        newHealth.reminders = [...newHealth.reminders, {
          id: itemId, title: healthForm.title.trim(), dueDate: healthForm.nextDate || date,
          note: healthForm.note, status: 'pending'
        }];
      }

      return {
        ...prev,
        health: { ...prev.health, [currentCatId]: newHealth },
        records: [
          ...migrateRecords(prev.records),
          normalizeRecord({
            id: itemId,
            occurredAt: buildOccurredAt(date, time),
            date,
            time,
            type: recordType,
            catIds: [currentCatId],
            scope: 'single',
            tags: recordTags,
            details
          })
        ]
      };
    });
    setHealthSheet({ isOpen: false, type: null, title: '' });
    setHealthInput('');
    setHealthForm({ note: '', kind: 'external', product: '', name: '猫三联', date: '', nextDate: '', status: 'observing', title: '' });
    setShowStamp({ show: true, type: recordType }); 
    setTimeout(() => setShowStamp({ show: false, type: 'complete' }), 1200);
  };

  // --- 猫咪资料保存 ---
  const saveCatProfile = () => {
    if (!catForm.name || typeof catForm.name !== 'string' || !catForm.name.trim()) return;
    if (catModal.mode === 'add') {
      const newId = Date.now().toString();
      setData(prev => {
        const records = migrateRecords(prev.records);
        const hasUnusedPrototypeCat = prev.cats?.length === 1
          && prev.cats[0].id === '1'
          && prev.cats[0].name === '毛孩子'
          && !records.some(record => record.catIds?.includes('1'))
          && !prev.health?.['1'];
        return {
          ...prev,
          cats: hasUnusedPrototypeCat
            ? [{ id: newId, name: catForm.name.trim(), avatar: catForm.avatar }]
            : [...(prev.cats || []), { id: newId, name: catForm.name.trim(), avatar: catForm.avatar }]
        };
      });
      switchCat(newId);
    } else if (catModal.mode === 'edit') {
      setData(prev => ({
        ...prev,
        cats: (prev.cats || []).map(c => c.id === catModal.catId ? { ...c, name: catForm.name.trim(), avatar: catForm.avatar } : c)
      }));
    }
    setCatModal({ isOpen: false, mode: 'add', catId: null });
  };

  const removeLinkedHealthData = (sourceData, record) => {
    if (!record?.catIds?.length || !['weight', 'internal_deworm', 'external_deworm', 'deworm', 'vaccine', 'reminder'].includes(record.type)) {
      return sourceData.health;
    }
    const catId = record.catIds[0];
    const profile = migrateHealthProfile(sourceData.health?.[catId]);
    const matchesDate = item => (item.date || item.dueDate) === record.date;
    const nextProfile = { ...profile };
    if (record.type === 'weight') {
      nextProfile.weights = profile.weights.filter(item =>
        !(item.id === record.id || (matchesDate(item) && Number(item.weight) === Number(record.details?.weight)))
      );
    } else if (['internal_deworm', 'external_deworm', 'deworm'].includes(record.type)) {
      nextProfile.dewormings = profile.dewormings.filter(item =>
        !(item.id === record.id || (matchesDate(item) && (!record.details?.kind || item.kind === record.details.kind)))
      );
    } else if (record.type === 'vaccine') {
      nextProfile.vaccines = profile.vaccines.filter(item =>
        !(item.id === record.id || (matchesDate(item) && (!record.details?.name || item.name === record.details.name)))
      );
    } else if (record.type === 'reminder') {
      nextProfile.reminders = profile.reminders.filter(item =>
        !(item.id === record.id || (item.title === record.details?.title && item.dueDate === record.details?.dueDate))
      );
    }
    return { ...sourceData.health, [catId]: nextProfile };
  };

  const showUndoDeletion = (previousData, message) => {
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    setUndoDeletion({ previousData, message });
    undoTimerRef.current = setTimeout(() => setUndoDeletion(null), 5000);
  };

  const confirmDeleteRecord = () => {
    if (!pendingDeleteRecord) return;
    const record = pendingDeleteRecord;
    const previousData = data;
    setData(prev => ({
      ...prev,
      health: removeLinkedHealthData(prev, record),
      records: migrateRecords(prev.records).filter(item => item.id !== record.id)
    }));
    setPendingDeleteRecord(null);
    showUndoDeletion(previousData, '记录已删除');
  };

  const undoLastDeletion = () => {
    if (!undoDeletion) return;
    if (undoTimerRef.current) clearTimeout(undoTimerRef.current);
    setData(undoDeletion.previousData);
    setUndoDeletion(null);
  };

  const confirmDeleteCat = () => {
    if (!pendingDeleteCat) return;
    const cat = pendingDeleteCat;
    const previousData = data;
    const remainingCats = (data.cats || []).filter(item => item.id !== cat.id);
    setData(prev => ({
      ...prev,
      cats: (prev.cats || []).filter(item => item.id !== cat.id),
      archivedCats: {
        ...(prev.archivedCats || {}),
        [cat.id]: { name: cat.name, avatar: cat.avatar, deletedAt: new Date().toISOString() }
      }
    }));
    setCatModal({ isOpen: false, mode: 'add', catId: null });
    setPendingDeleteCat(null);
    if (remainingCats.length > 0) switchCat(remainingCats[0].id);
    else {
      setCurrentCatId('');
      setViewMode('family');
      setCareCenterOpen(false);
    }
    showUndoDeletion(previousData, `${cat.name}的档案已删除`);
  };

  // --- Helpers ---
  const switchCat = (id) => {
    setCurrentCatId(id);
    setViewMode('cat');
    setIsDropdownOpen(false);
    triggerWag();
  };
  
  const openSheet = (type, title) => {
    setSheetConfig({ isOpen: true, type, title });
    setAssignmentSource('default');
    setAssignmentExpanded(false);
    setIsMultiOwnerMode(false);
    setRecordAssignment(getInitialAssignment(type, 'main', 'observed'));
    if (type === 'food') {
      const defaultSub = FOOD_CATEGORIES['main'].subs[0];
      setFoodState({ tab: 'main', subType: defaultSub, brand: '', amount: 50 });
      setIsBrandDropdownOpen(false);
      setIsAddingFoodSub(false);
      setNewFoodSubInput('');
    } else if (type === 'health') {
      setSelectedTags([]);
      setHealthPhoto(null);
      setActiveAccordion('gastro');
      setAddingHealthTagCatId(null);
      setNewHealthTagInput('');
    } else if (type === 'poop') {
      setSelectedTags([]);
      setPoopVolume('正常量');
      setPoopColors(['棕色']);
    } else if (type === 'pee') {
      setPeeCount(1);
      setPeeSizeDistribution(['正常大小为主']);
      setPeeAbnormalities([]);
    } else if (type === 'water') {
      setWaterMode('observed');
      setWaterObservedCount(1);
      setWaterAmount(200);
      setWaterAction('补水');
      setWaterFoodSource('湿粮加水');
    } else {
      setSelectedTags([]);
      setIsAddingTag(false);
      setNewTagInput('');
    }
  };

  const openHealthSheet = (type, title) => {
    setHealthSheet({ isOpen: true, type, title });
    setHealthInput('');
    setHealthForm({
      note: '',
      kind: type === 'internal_deworm' ? 'internal' : 'external',
      product: '',
      name: type === 'vaccine' ? '猫三联' : '',
      date: today,
      nextDate: '',
      status: 'observing',
      title: ''
    });
  };

  const updateHealthRecordStatus = (recordId, status) => {
    setData(prev => ({
      ...prev,
      records: migrateRecords(prev.records).map(record => record.id === recordId
        ? {
            ...record,
            details: {
              ...record.details,
              status,
              ...(status === 'resolved' ? { resolvedAt: new Date().toISOString() } : {})
            }
          }
        : record)
    }));
  };

  const completeMedicalReminder = (reminderId) => {
    setData(prev => {
      const profile = migrateHealthProfile(prev.health?.[currentCatId]);
      return {
        ...prev,
        health: {
          ...prev.health,
          [currentCatId]: {
            ...profile,
            reminders: profile.reminders.map(item => item.id === reminderId ? { ...item, status: 'completed' } : item)
          }
        }
      };
    });
  };

  const openStockEditor = (item = null) => {
    if (item) {
      setStockForm({
        name: item.name || '',
        category: item.category || 'food',
        trackingMode: item.trackingMode || 'simple',
        simpleLevel: item.simpleLevel || 'full',
        quantity: Number(item.quantity ?? 1),
        unit: item.unit || '袋',
        lowStockThreshold: Number(item.lowStockThreshold ?? 1),
        consumeStep: Number(item.consumeStep ?? 1),
        expiresAt: item.expiresAt || '',
        openedAt: item.openedAt || '',
        usageCatIds: item.usageCatIds || [],
        note: item.note || '',
        reminderEnabled: item.reminderEnabled !== false
      });
      setStockEditor({ isOpen: true, mode: 'edit', itemId: item.id });
    } else {
      setStockForm({
        name: '', category: 'food', trackingMode: 'simple', simpleLevel: 'full',
        quantity: 1, unit: '袋', lowStockThreshold: 1, consumeStep: 1,
        expiresAt: '', openedAt: '', usageCatIds: [], note: '', reminderEnabled: true
      });
      setStockEditor({ isOpen: true, mode: 'create', itemId: null });
    }
  };

  const saveStockItem = () => {
    if (!stockForm.name.trim()) return;
    const now = new Date().toISOString();
    setData(prev => {
      const items = migrateStockItems(prev.stockItems, prev.stocks);
      const normalized = {
        ...stockForm,
        name: stockForm.name.trim(),
        quantity: Math.max(0, Number(stockForm.quantity) || 0),
        lowStockThreshold: Math.max(0, Number(stockForm.lowStockThreshold) || 0),
        consumeStep: Math.max(0.01, Number(stockForm.consumeStep) || 1),
        updatedAt: now
      };
      return {
        ...prev,
        stockItems: stockEditor.mode === 'edit'
          ? items.map(item => item.id === stockEditor.itemId ? { ...item, ...normalized } : item)
          : [...items, { ...normalized, id: `stock_${Date.now()}`, active: true, createdAt: now }]
      };
    });
    setStockEditor({ isOpen: false, mode: 'create', itemId: null });
  };

  const updateSimpleStockLevel = (itemId, simpleLevel) => {
    setData(prev => ({
      ...prev,
      stockItems: migrateStockItems(prev.stockItems, prev.stocks).map(item =>
        item.id === itemId ? { ...item, simpleLevel, updatedAt: new Date().toISOString() } : item
      )
    }));
  };

  const consumeStockItem = (item) => {
    setData(prev => ({
      ...prev,
      stockItems: migrateStockItems(prev.stockItems, prev.stocks).map(stockItem =>
        stockItem.id === item.id
          ? { ...stockItem, quantity: Math.max(0, Number(stockItem.quantity || 0) - Number(stockItem.consumeStep || 1)), updatedAt: new Date().toISOString() }
          : stockItem
      )
    }));
  };

  const confirmStockRestock = () => {
    setData(prev => ({
      ...prev,
      stockItems: migrateStockItems(prev.stockItems, prev.stocks).map(item =>
        item.id === stockAdjust.itemId
          ? { ...item, quantity: Number(item.quantity || 0) + Math.max(0, Number(stockAdjust.amount) || 0), updatedAt: new Date().toISOString() }
          : item
      )
    }));
    setStockAdjust({ isOpen: false, itemId: null, amount: 1 });
  };

  const openAddCat = () => {
    setCatForm({ name: '', avatar: 'orange' });
    setCatModal({ isOpen: true, mode: 'add', catId: null });
    setIsDropdownOpen(false);
  };

  const openEditCat = (cat) => {
    setCatForm({ name: cat.name, avatar: cat.avatar || 'orange' });
    setCatModal({ isOpen: true, mode: 'edit', catId: cat.id });
    setIsDropdownOpen(false);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setHealthPhoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAddCustomFoodSub = () => {
    if (newFoodSubInput.trim()) {
      const currentTab = foodState.tab;
      setData(prev => {
        const prevCustomFood = prev.customFoodSubs || { main: [], snack: [], supplement: [] };
        return {
          ...prev,
          customFoodSubs: {
            ...prevCustomFood,
            [currentTab]: [...(prevCustomFood[currentTab] || []), newFoodSubInput.trim()]
          }
        };
      });
      setFoodState(prev => ({ ...prev, subType: newFoodSubInput.trim() }));
      setNewFoodSubInput('');
      setIsAddingFoodSub(false);
    }
  };

  // 添加自定义症状标签
  const handleAddCustomHealthTag = (categoryId) => {
    if (newHealthTagInput.trim()) {
      setData(prev => {
        const prevCustomTags = prev.customHealthTags || { gastro: [], skin: [], stress: [], others: [] };
        return {
          ...prev,
          customHealthTags: {
            ...prevCustomTags,
            [categoryId]: [...(prevCustomTags[categoryId] || []), newHealthTagInput.trim()]
          }
        };
      });
      setSelectedTags(prev => [...prev, newHealthTagInput.trim()]);
      setNewHealthTagInput('');
      setAddingHealthTagCatId(null);
    }
  };

  const currentCat = (data.cats && data.cats.find(c => c.id === currentCatId)) || data.cats?.[0] || null;
  const hasCats = (data.cats || []).length > 0;
  const CurrentCatAvatar = CatAvatars[currentCat?.avatar] || CatAvatars.orange;

  const allRecords = migrateRecords(data.records);
  const isRecordVisibleInView = (record, mode = viewMode, catId = currentCatId) => {
    if (mode === 'family') return true;
    if (record.scope === 'unknown') return false;
    if (record.scope === 'shared') return true;
    return Array.isArray(record.catIds) && record.catIds.includes(catId);
  };
  const visibleRecords = allRecords.filter(record => isRecordVisibleInView(record));
  const todayVisibleRecords = visibleRecords.filter(record => record.date === today);
  const progressCount = ['poop', 'pee', 'food', 'water'].filter(type => todayVisibleRecords.some(record => record.type === type)).length;
  const progressPercentage = (progressCount / 4) * 100;
  const todaySummary = {
    explicit: todayVisibleRecords.filter(record => record.scope === 'single').length,
    shared: todayVisibleRecords.filter(record => record.scope === 'shared' || record.scope === 'multiple').length,
    unknown: todayVisibleRecords.filter(record => record.scope === 'unknown').length,
    health: todayVisibleRecords.filter(record => record.type === 'health').length
  };
  const quickRecordItems = [
    { id: 'food', title: '吃饭', icon: AppIcons.Food },
    { id: 'water', title: '喝水', icon: AppIcons.Water },
    { id: 'poop', title: '拉粑粑', icon: AppIcons.Poop },
    { id: 'pee', title: '尿尿', icon: AppIcons.Pee }
  ].map(item => ({
    ...item,
    count: todayVisibleRecords.filter(record => record.type === item.id).length
  }));
  const completedQuickRecords = quickRecordItems.filter(item => item.count > 0);
  const missingQuickRecords = quickRecordItems.filter(item => item.count === 0);
  
  // 医疗数据指标
  const healthData = migrateHealthProfile(data.health?.[currentCatId]);
  const weightHistory = Array.isArray(healthData.weights) ? healthData.weights : [];
  const currentWeight = weightHistory.length > 0 ? weightHistory[weightHistory.length - 1].weight : null;
  const previousWeight = weightHistory.length > 1 ? weightHistory[weightHistory.length - 2].weight : null;
  const weightChange = currentWeight !== null && previousWeight !== null
    ? Number(currentWeight) - Number(previousWeight)
    : null;
  const getLatestByDate = items => [...(items || [])].sort((a, b) => new Date(b.occurredAt || b.date) - new Date(a.occurredAt || a.date))[0];
  const latestInternalDeworm = getLatestByDate(healthData.dewormings.filter(item => ['internal', 'combined'].includes(item.kind)));
  const latestExternalDeworm = getLatestByDate(healthData.dewormings.filter(item => ['external', 'combined'].includes(item.kind)));
  const latestVaccine = getLatestByDate(healthData.vaccines);
  const currentCatHealthRecords = allRecords
    .filter(record => record.catIds?.includes(currentCatId) && ['health', 'weight', 'internal_deworm', 'external_deworm', 'deworm', 'vaccine', 'reminder'].includes(record.type));
  const activeHealthRecords = currentCatHealthRecords.filter(record => record.type === 'health' && (record.details?.status || 'observing') === 'observing');
  const pendingReminders = (healthData.reminders || []).filter(item => item.status !== 'completed');
  const healthTimeline = [
    ...weightHistory.map(item => ({ id: item.id, occurredAt: item.occurredAt || buildOccurredAt(item.date), title: `体重 ${item.weight} kg`, detail: item.note })),
    ...healthData.dewormings.map(item => ({ id: item.id, occurredAt: item.occurredAt || buildOccurredAt(item.date), title: item.kind === 'internal' ? '体内驱虫' : item.kind === 'external' ? '体外驱虫' : '体内外驱虫', detail: item.product })),
    ...healthData.vaccines.map(item => ({ id: item.id, occurredAt: item.occurredAt || buildOccurredAt(item.date), title: item.name || '疫苗', detail: item.note })),
    ...currentCatHealthRecords.filter(record => record.type === 'health').map(record => ({ id: record.id, occurredAt: record.occurredAt, title: record.tags?.join('、') || '异常记录', detail: record.details?.status === 'resolved' ? '已经恢复' : record.details?.status === 'visited' ? '已就诊' : '观察中', record })),
    ...healthData.reminders.map(item => ({ id: item.id, occurredAt: buildOccurredAt(item.dueDate), title: item.title, detail: item.status === 'completed' ? '已完成' : `提醒日期 ${item.dueDate}`, reminder: item }))
  ].sort((a, b) => new Date(b.occurredAt) - new Date(a.occurredAt));

  // 生成平滑的软糖拉丝贝塞尔曲线
  const generateSmoothCurve = (dataArray) => {
    if (!Array.isArray(dataArray) || dataArray.length < 2) return "";
    const recent = dataArray.slice(-7); 
    const validWeights = recent.map(d => parseFloat(d.weight)).filter(w => !isNaN(w));
    if (validWeights.length < 2) return "";
    
    const minW = Math.min(...validWeights);
    const maxW = Math.max(...validWeights);
    const range = (maxW - minW) || 1; 
    
    const width = 100, height = 30; 
    
    const points = recent
      .map(d => ({ ...d, weight: parseFloat(d.weight) }))
      .filter(d => !isNaN(d.weight))
      .map((d, i, arr) => ({
        x: i * (width / (arr.length - 1)),
        y: height - ((d.weight - minW) / range) * (height - 4) - 2 
      }));

    if (points.length < 2) return "";

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const p0 = points[i - 1];
      const p1 = points[i];
      const cX = (p0.x + p1.x) / 2;
      d += ` C ${cX} ${p0.y}, ${cX} ${p1.y}, ${p1.x} ${p1.y}`;
    }
    return d;
  };
  const weightCurvePath = generateSmoothCurve(weightHistory);

  const calculateDaysPassed = (dateStr) => {
    if (!dateStr) return null;
    const diffTime = new Date(today).getTime() - new Date(dateStr).getTime();
    return Math.max(0, Math.floor(diffTime / (1000 * 3600 * 24)));
  };

  const getRingColor = (percent) => {
    if (percent < 60) return '#A3BCA7'; 
    if (percent < 90) return '#E8B042'; 
    return '#D36B4F'; 
  };

  // 驱虫/疫苗圆环倒计时数据
  const dewormDays = calculateDaysPassed(healthData.lastDeworming);
  const dewormPercent = dewormDays !== null ? Math.min(100, (dewormDays / 30) * 100) : 0;
  const dewormColor = getRingColor(dewormPercent);
  const dewormRadius = 40;
  const dewormCircumference = 2 * Math.PI * dewormRadius;

  const vaccineDays = calculateDaysPassed(healthData.lastVaccine);
  const vaccinePercent = vaccineDays !== null ? Math.min(100, (vaccineDays / 365) * 100) : 0;
  const vaccineColor = getRingColor(vaccinePercent);
  const vaccineRadius = 26;
  const vaccineCircumference = 2 * Math.PI * vaccineRadius;
  const showDewormAlert = dewormDays !== null && dewormDays >= 30;
  const currentCatCare = careRecords[currentCatId] || {};
  const careAttentionItems = catCareItems
    .filter(item => {
      const setting = getCareItemSetting(item, 'cat', currentCatId);
      return setting.reminderEnabled && needsAttention(currentCatCare[item.id], setting.frequencyDays);
    });
  const attentionCats = viewMode === 'family'
    ? (data.cats || [])
    : (data.cats || []).filter(cat => cat.id === currentCatId);
  const catCareAttentionItems = attentionCats.flatMap(cat => {
    const catCare = careRecords[cat.id] || {};
    const overdueItems = getCatCareItems(cat.id)
      .filter(item => {
        const setting = getCareItemSetting(item, 'cat', cat.id);
        return setting.reminderEnabled && isCareClearlyOverdue(catCare[item.id], setting.frequencyDays);
      });
    if (overdueItems.length === 0) return [];
    const firstItem = overdueItems[0];
    return [{
      id: `care-${cat.id}`,
      level: 'attention',
      priority: 4,
      destination: 'care',
      catId: cat.id,
      text: overdueItems.length === 1 ? `${cat.name}的${firstItem.name}已经超期了` : `${cat.name}有 ${overdueItems.length} 项护理已经超期`,
      detail: overdueItems.length === 1 ? getTimeText(catCare[firstItem.id]) : '有空时一起安排就好'
    }];
  });
  const householdCleaningRecords = careRecords[HOUSEHOLD_CARE_ID] || {};
  const householdCleaningAttentionItems = householdCareItems
    .filter(item => {
      const setting = getCareItemSetting(item, 'household');
      return setting.reminderEnabled && needsAttention(householdCleaningRecords[item.id], setting.frequencyDays);
    })
    .map(item => ({
      id: `cleaning-${item.id}`,
      level: 'attention',
      text: `${item.name}可以安排了`,
      detail: getTimeText(householdCleaningRecords[item.id])
    }));
  const catMedicalAttentionItems = attentionCats.flatMap(cat => {
    const catHealth = migrateHealthProfile(data.health?.[cat.id]);
    const todayTime = new Date(today).getTime();
    const dueItems = [
      ...catHealth.dewormings.filter(item => item.nextDate).map(item => ({ id: item.id, title: item.kind === 'internal' ? '体内驱虫' : '体外驱虫', dueDate: item.nextDate })),
      ...catHealth.vaccines.filter(item => item.nextDate).map(item => ({ id: item.id, title: item.name || '疫苗', dueDate: item.nextDate })),
      ...catHealth.reminders.filter(item => item.status !== 'completed').map(item => ({ id: item.id, title: item.title, dueDate: item.dueDate }))
    ].filter(item => {
      const diffDays = Math.ceil((new Date(item.dueDate).getTime() - todayTime) / 86400000);
      return diffDays <= 7;
    });
    return [
      ...dueItems.map(item => {
        const diffDays = Math.ceil((new Date(item.dueDate).getTime() - todayTime) / 86400000);
        return {
        id: `medical-${cat.id}-${item.id}`,
        level: diffDays <= 0 ? 'important' : 'attention',
        priority: diffDays < 0 ? 0 : diffDays === 0 ? 1 : 6,
        destination: 'health',
        catId: cat.id,
        text: `${cat.name}的${item.title}${diffDays < 0 ? '已经到时间了' : diffDays === 0 ? '今天到期' : `还有 ${diffDays} 天`}`,
        detail: item.dueDate
      }}),
      ...allRecords.filter(record => record.type === 'health' && record.date !== today && record.catIds?.includes(cat.id) && (record.details?.status || 'observing') === 'observing').slice(0, 1).map(record => ({
        id: `observing-${record.id}`,
        level: 'important',
        priority: 1,
        destination: 'health',
        catId: cat.id,
        text: `${cat.name}有一条异常正在观察`,
        detail: record.tags?.slice(0, 2).join('、') || '记得继续观察'
      }))
    ];
  });
  const stockItems = migrateStockItems(data.stockItems, data.stocks).filter(item => item.active !== false);
  const getStockExpiryDays = item => item.expiresAt
    ? Math.ceil((new Date(item.expiresAt).getTime() - new Date(today).getTime()) / 86400000)
    : null;
  const isLowStock = item => item.trackingMode === 'quantity'
    ? Number(item.quantity || 0) <= Number(item.lowStockThreshold || 0)
    : item.simpleLevel === 'low';
  const lowStockItems = stockItems.filter(item => item.reminderEnabled !== false && isLowStock(item));
  const expiringStockItems = stockItems.filter(item => {
    if (item.reminderEnabled === false) return false;
    const days = getStockExpiryDays(item);
    return days !== null && days <= 7;
  });
  const stockAttentionItems = stockItems
    .filter(item => item.reminderEnabled !== false && (isLowStock(item) || (getStockExpiryDays(item) !== null && getStockExpiryDays(item) <= 7)))
    .map(item => {
      const expiryDays = getStockExpiryDays(item);
      if (expiryDays !== null && expiryDays < 0) return { id: item.id, name: item.name, text: `${item.name}已经过期，请检查一下`, detail: item.expiresAt, priority: 1 };
      if (expiryDays !== null && expiryDays <= 7) return { id: item.id, name: item.name, text: `${item.name}还有 ${expiryDays} 天到期`, detail: item.expiresAt, priority: 2 };
      return {
        id: item.id,
        name: item.name,
        text: item.trackingMode === 'quantity' ? `${item.name}只剩 ${item.quantity} ${item.unit}` : `${item.name}快用完了`,
        detail: '有空时补充一点吧',
        priority: 3
      };
    })
    .sort((a, b) => a.priority - b.priority);
  const filteredStockItems = stockItems.filter(item => {
    const categoryMatches = stockCategoryFilter === 'all' || item.category === stockCategoryFilter;
    const usageMatches = stockUsageFilter === 'all'
      || !item.usageCatIds?.length
      || item.usageCatIds.includes(stockUsageFilter);
    return categoryMatches && usageMatches;
  });
  const homeAttentionCandidates = [
    ...todayVisibleRecords
      .filter(record => record.type === 'health')
      .map(record => ({
        id: `health-${record.id}`,
        level: 'important',
        priority: 0,
        destination: 'health',
        catId: record.catIds?.length === 1 ? record.catIds[0] : null,
        text: `${getAssignmentLabel(record.scope, record.catIds).replace(/^[^\s]+\s/, '')}今天有异常记录`,
        detail: record.tags?.slice(0, 2).join('、') || '记得继续观察'
      })),
    ...catMedicalAttentionItems.filter(item => item.priority <= 1),
    ...catCareAttentionItems,
    ...stockItems.filter(item => {
      if (item.reminderEnabled === false) return false;
      const expiryDays = getStockExpiryDays(item);
      return isLowStock(item) || (expiryDays !== null && expiryDays < 0);
    }).map(item => {
      const expiryDays = getStockExpiryDays(item);
      const expired = expiryDays !== null && expiryDays < 0;
      return {
      id: `stock-${item.id}`,
      level: expired ? 'important' : 'attention',
      priority: expired ? 0 : 5,
      destination: 'stock',
      familyItem: true,
      text: expired
        ? `${item.name}已经过期，请检查一下`
        : item.trackingMode === 'quantity' ? `${item.name}只剩 ${item.quantity} ${item.unit}` : `${item.name}快用完了`,
      detail: expired ? item.expiresAt : '有空时补充一点吧'
    }})
  ].sort((a, b) => a.priority - b.priority);
  const attentionItems = homeAttentionCandidates
    .filter((item, index, items) => items.findIndex(candidate => candidate.id === item.id) === index)
    .reduce((selected, item) => {
      if (selected.length >= 2) return selected;
      if (viewMode === 'cat' && item.familyItem && selected.some(selectedItem => selectedItem.familyItem)) return selected;
      return [...selected, item];
    }, []);

  const openAttentionDestination = (item) => {
    if (!item.destination) return;
    if (item.catId && item.catId !== currentCatId) setCurrentCatId(item.catId);
    setExpandedHomeSection(item.destination);
    setCareCenterOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 当前视角只负责筛选，记录归属由 scope 与 catIds 决定。
  const getTimelineEvents = (dateStr, mode = viewMode, catId = currentCatId) => {
    return allRecords
      .filter(record => record.date === dateStr && isRecordVisibleInView(record, mode, catId))
      .sort((a, b) => (a.occurredAt || '').localeCompare(b.occurredAt || ''));
  };
  const todayTimelineEvents = getTimelineEvents(today);
  const recentTimelineEvents = [...todayTimelineEvents].reverse().slice(0, 5);
  const sortedHistoryDates = [...new Set(visibleRecords.map(record => record.date).filter(Boolean))]
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  const selectSingleOwner = (catId) => {
    setManualAssignment({ scope: 'single', catIds: [catId] });
  };

  const toggleMultipleOwner = (catId) => {
    setAssignmentSource('manual');
    setIsMultiOwnerMode(true);
    setRecordAssignment(prev => {
      const selectedCatIds = Array.isArray(prev?.catIds) ? prev.catIds : [];
      const nextCatIds = selectedCatIds.includes(catId)
        ? selectedCatIds.filter(id => id !== catId)
        : [...selectedCatIds, catId];
      return {
        scope: nextCatIds.length > 1 ? 'multiple' : 'single',
        catIds: nextCatIds
      };
    });
  };

  const openAssignmentEditor = () => {
    setAssignmentExpanded(true);
    setTimeout(() => {
      document.getElementById('record-assignment-editor')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 0);
  };

  const AssignmentConfirmation = () => (
    <button
      type="button"
      onClick={openAssignmentEditor}
      className="jelly-touch w-full flex items-center justify-between gap-3 px-4 py-3 rounded-[18px] bg-[#F9F7F3] border border-[#F0EBE1] text-left"
    >
      <span className="text-xs text-[#A9A096]">将记录到</span>
      <span className="flex-1 text-sm font-bold text-[#5D554D] text-right">{currentAssignmentLabel}</span>
      <span className="text-[10px] font-semibold text-[#D29E7A]">修改</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A443E] font-sans selection:bg-[#E8DCC8] relative overflow-x-hidden">
      
      {/* 盖章动画层 */}
      {showStamp.show && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          <div className="animate-stamp">
            <ArtworkIcon
              name={ARTWORK_ICON_PATHS[showStamp.type] ? showStamp.type : 'complete'}
              className="w-32 h-32 opacity-95 drop-shadow-[0_10px_24px_rgba(93,85,77,0.12)]"
            />
          </div>
        </div>
      )}

      {/* 食物掉落动画层 */}
      {fallingItems.length > 0 && (
        <div className="fixed inset-0 z-[60] pointer-events-none overflow-hidden">
          {fallingItems.map(item => {
            return (
              <div 
                key={item.id} 
                className="falling-item opacity-75"
                style={{ left: item.left, animationDelay: item.delay, animationDuration: item.duration, rotate: item.rotation }}
              >
                <ArtworkIcon name="food" style={{ width: item.size, height: item.size }} />
              </div>
            );
          })}
        </div>
      )}

      <div className="max-w-md mx-auto min-h-screen relative shadow-[0_0_40px_rgba(0,0,0,0.02)] bg-[#FDFBF7] pb-10">
        
        {/* --- Top Navbar --- */}
        {!careCenterOpen && <header className="pt-10 pb-6 px-6 flex justify-between items-center sticky top-0 bg-[#FDFBF7]/90 backdrop-blur-sm z-20">
          <div className="relative z-30">
            <div className="flex items-center gap-3 cursor-pointer jelly-touch" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <div className="w-10 h-10 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#5D554D] border-2 border-white shadow-sm overflow-hidden">
                {viewMode === 'family' || !hasCats ? <FamilyPawArtwork className="w-7 h-7" /> : <CurrentCatAvatar className="w-8 h-8" />}
              </div>
              <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#5D554D] to-[#8C8276] flex items-center gap-2">
                {viewMode === 'family' || !hasCats ? '全家小日子' : currentCat?.name}
                {viewMode === 'cat' && currentCat && (
                  <button 
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      openEditCat(currentCat); 
                    }} 
                    className="p-1.5 text-[#A9A096] hover:text-[#D29E7A] rounded-full hover:bg-white/80 transition-colors jelly-touch"
                    title="捏脸或修改名字花色"
                  >
                    <Icons.Edit className="w-4 h-4" />
                  </button>
                )}
              </h1>
              <div className={`origin-bottom ${isWagging ? 'animate-wag' : ''}`}>
                <TailArtwork />
              </div>
            </div>
            
            {/* 下拉菜单 */}
            {isDropdownOpen && data.cats && (
              <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-[24px] shadow-[0_12px_40px_rgb(0,0,0,0.08)] border border-[#F0EBE1] p-2 z-30">
                <div className="p-1 max-h-[30vh] overflow-y-auto no-scrollbar">
                  <div className="flex items-center px-3 py-3 rounded-[16px] mb-1 hover:bg-[#F9F7F3] transition-colors cursor-pointer" onClick={() => { setViewMode('family'); setIsDropdownOpen(false); triggerWag(); }}>
                    <div className="w-7 h-7 rounded-full bg-[#F4EFE6] flex items-center justify-center mr-3">
                      <FamilyPawArtwork className="w-5 h-5" />
                    </div>
                    <span className={`font-semibold text-sm ${viewMode === 'family' ? 'text-[#4A443E]' : 'text-[#8C8276]'}`}>全家小日子</span>
                  </div>
                  {data.cats.map(cat => (
                    <div key={cat.id} className="flex items-center justify-between px-3 py-2 rounded-[16px] mb-1 hover:bg-[#F9F7F3] transition-colors">
                      <div className="flex items-center flex-1 py-1 cursor-pointer" onClick={() => switchCat(cat.id)}>
                        {React.createElement(CatAvatars[cat.avatar] || CatAvatars.orange, { className: "w-7 h-7 text-[#5D554D] mr-3" })}
                        <span className={`font-semibold text-sm ${viewMode === 'cat' && cat.id === currentCatId ? 'text-[#4A443E]' : 'text-[#8C8276]'}`}>{cat.name}</span>
                      </div>
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          openEditCat(cat); 
                        }} 
                        className="p-2 text-[#A9A096] hover:text-[#D29E7A] jelly-touch"
                      >
                        <Icons.Edit className="w-4.5 h-4.5" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-[#F0EBE1] my-1" />
                <div onClick={openAddCat} className="px-4 py-3 text-[#D29E7A] flex items-center gap-2 jelly-touch cursor-pointer hover:bg-[#F9F7F3] rounded-[16px] font-semibold text-sm">
                  <Icons.Plus className="w-4 h-4" /> 迎接新主子
                </div>
              </div>
            )}
          </div>
          {isDropdownOpen && <div className="fixed inset-0 z-20" onClick={() => setIsDropdownOpen(false)} />}
        </header>}

        {!careCenterOpen && !hasCats && (
          <section className="px-6 pt-8 pb-14">
            <div className="bg-white rounded-[32px] border border-[#F0EBE1] px-6 py-9 text-center shadow-[0_8px_28px_rgba(0,0,0,0.035)]">
              <FamilyPawArtwork className="w-20 h-20 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-[#4A443E]">先迎接家里的第一只猫咪吧</h2>
              <p className="text-xs text-[#A9A096] leading-relaxed mt-2">建好档案后，就可以开始记录它的吃喝拉撒和健康小事。</p>
              <button
                onClick={openAddCat}
                className="jelly-touch mt-6 px-6 py-3.5 rounded-[22px] bg-[#4A443E] text-white text-sm font-bold shadow-[0_8px_18px_rgba(74,68,62,0.18)]"
              >
                创建猫咪档案
              </button>
            </div>
          </section>
        )}

        {!careCenterOpen && hasCats && (<>
        {/* --- 今日日期显示 --- */}
        <div className="text-center mb-6 mt-1">
          <span className="bg-[#F4EFE6]/80 text-[#8C8276] px-5 py-2 rounded-full text-sm font-medium tracking-wide shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
             {`${new Date().getMonth() + 1}月${new Date().getDate()}日 ${['周日', '周一', '周二', '周三', '周四', '周五', '周六'][new Date().getDay()]}`}
          </span>
        </div>

        <div className="px-6 mb-4 overflow-x-auto no-scrollbar">
          <div className="flex w-max min-w-full bg-[#F4EFE6]/70 rounded-full p-1">
            {(data.cats || []).map(cat => {
              const isActive = viewMode === 'cat' && cat.id === currentCatId;
              return (
                <button
                  key={`view-tab-${cat.id}`}
                  onClick={() => switchCat(cat.id)}
                  className={`jelly-touch flex-1 min-w-[88px] px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    isActive ? 'bg-white text-[#5D554D] shadow-sm' : 'text-[#A9A096]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
            <button
              onClick={() => {
                setViewMode('family');
                setIsDropdownOpen(false);
                triggerWag();
              }}
              className={`jelly-touch flex-1 min-w-[96px] px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                viewMode === 'family' ? 'bg-white text-[#5D554D] shadow-sm' : 'text-[#A9A096]'
              }`}
            >
              全家记录
            </button>
          </div>
        </div>

        {/* --- 今日概览 --- */}
        <section className="px-6 mb-5">
          <div className="bg-white rounded-[28px] border border-[#F0EBE1] p-5 shadow-[0_8px_26px_rgb(0,0,0,0.035)]">
            <div className="flex items-center gap-5">
              <div className="relative w-[82px] h-[82px] flex-shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90 absolute inset-0">
                  <circle cx="41" cy="41" r="31" fill="transparent" stroke="#F0EBE1" strokeWidth="7" />
                  <circle
                    cx="41"
                    cy="41"
                    r="31"
                    fill="transparent"
                    stroke={progressPercentage === 100 ? "#A3BCA7" : "#D29E7A"}
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 31}
                    strokeDashoffset={(2 * Math.PI * 31) - (progressPercentage / 100) * (2 * Math.PI * 31)}
                    className="transition-all duration-700"
                  />
                </svg>
                <div className="relative text-xl font-bold text-[#5D554D]">
                  {progressCount}<span className="text-xs text-[#A9A096]">/4</span>
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="text-[17px] font-bold text-[#4A443E]">
                  {progressCount === 4 ? '今天都记录好啦' : `今天已经记录 ${progressCount} 项`}
                </h2>
                <p className="text-xs text-[#8C8276] mt-1.5 leading-relaxed">
                  {completedQuickRecords.length > 0 ? `已记录：${completedQuickRecords.map(item => item.title).join('、')}` : '今天还没有开始记录'}
                </p>
                <p className="text-xs text-[#A9A096] mt-0.5 truncate">
                  {missingQuickRecords.length > 0 ? `还没有：${missingQuickRecords.map(item => item.title).join('、')}` : '吃喝拉撒都有记录'}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#F0EBE1]/70 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#A9A096]">
              <span>明确记录 <b className="text-[#5D554D]">{todaySummary.explicit}</b></span>
              <span>共同 / 多猫 <b className="text-[#8C7662]">{todaySummary.shared}</b></span>
              <span>{viewMode === 'family' ? '待确认' : '异常'} <b className="text-[#D29E7A]">{viewMode === 'family' ? todaySummary.unknown : todaySummary.health}</b></span>
            </div>
          </div>
        </section>

        {/* --- 高频快速记录 --- */}
        <section className="px-6 mb-7">
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-[15px] font-bold text-[#5D554D]">快速记录</h2>
            <span className="text-[10px] text-[#A9A096]">记录过也可以继续添加</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {quickRecordItems.map(item => (
              <button
                key={item.id}
                onClick={() => openSheet(item.id, `记录${item.title}`)}
                className="jelly-touch bg-white rounded-[24px] border border-[#F0EBE1] px-4 py-4 flex items-center gap-3 text-left shadow-[0_5px_18px_rgb(0,0,0,0.035)]"
              >
                <div className="w-12 h-12 rounded-[17px] flex items-center justify-center">
                  <item.icon className="w-12 h-12" />
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-sm text-[#4A443E]">{item.title}</div>
                  <div className={`text-[11px] mt-0.5 ${item.count > 0 ? 'text-[#A3BCA7]' : 'text-[#A9A096]'}`}>
                    {item.count > 0 ? `今天 ${item.count} 次` : '还没有记录'}
                  </div>
                </div>
                <Icons.Plus className="w-4 h-4 text-[#C1B6AB] ml-auto flex-shrink-0" />
              </button>
            ))}
          </div>
        </section>

        {/* --- 今日关注 --- */}
        <section className="px-6 mb-7">
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-[15px] font-bold text-[#5D554D]">今天留意一下</h2>
            <button
              onClick={() => openSheet('health', '记录异常情况')}
              className="jelly-touch text-[11px] font-semibold text-[#D29E7A] px-3 py-1.5 rounded-full bg-[#FFF4E5]/70"
            >
              记录异常
            </button>
          </div>

          <div className="bg-white rounded-[26px] border border-[#F0EBE1] overflow-hidden shadow-[0_5px_20px_rgb(0,0,0,0.025)]">
            {attentionItems.length === 0 ? (
              <div className="px-5 py-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F0F5F1] text-[#A3BCA7] flex items-center justify-center">
                  <Icons.Check className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#5D554D]">今天没有特别需要留意的事</div>
                  <div className="text-[11px] text-[#A9A096] mt-0.5">小家目前照料得很好</div>
                </div>
              </div>
            ) : (
              attentionItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => openAttentionDestination(item)}
                  className={`jelly-touch w-full px-5 py-3.5 flex items-center gap-3 text-left ${idx !== attentionItems.length - 1 ? 'border-b border-[#F0EBE1]/70' : ''}`}
                >
                  <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.level === 'important' ? 'bg-[#D36B4F]' : 'bg-[#D9C27E]'}`} />
                  <div className="min-w-0 flex-1">
                    <div className={`text-sm font-bold ${item.level === 'important' ? 'text-[#D36B4F]' : 'text-[#5D554D]'}`}>{item.text}</div>
                    <div className="text-[10px] text-[#A9A096] mt-0.5">{item.detail}</div>
                  </div>
                  <Icons.ChevronDown className="w-4 h-4 text-[#C1B6AB] -rotate-90 shrink-0" />
                </button>
              ))
            )}
          </div>
        </section>

        {/* --- 低频照料入口 --- */}
        <section className="px-6 mb-7">
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-[15px] font-bold text-[#5D554D]">照料与档案</h2>
            <span className="text-[10px] text-[#A9A096]">进入照料中心</span>
          </div>
          <div className="space-y-2.5">
            {[
              {
                id: 'care',
                title: '日常护理',
                subtitle: careAttentionItems.length > 0 ? `${careAttentionItems.length} 项可以安排` : '目前没有到期事项',
                icon: AppIcons.Care,
                color: 'text-[#A3BCA7]',
                bg: 'bg-[#F0F5F1]'
              },
              {
                id: 'health',
                title: '健康档案',
                subtitle: showDewormAlert ? '驱虫已经到期' : currentWeight ? `当前体重 ${currentWeight} kg` : '体重、驱虫与疫苗',
                icon: AppIcons.Health,
                color: 'text-[#D29E7A]',
                bg: 'bg-[#FFF4E5]'
              },
              {
                id: 'stock',
                title: '家庭库存',
                subtitle: stockAttentionItems.length > 0
                  ? `${lowStockItems.length} 项需要补充${expiringStockItems.length > 0 ? `，${expiringStockItems.length} 项临近到期` : ''}`
                  : `管理 ${stockItems.length} 项，储备都很安心`,
                icon: AppIcons.Stock,
                color: 'text-[#8C7662]',
                bg: 'bg-[#F4EFE6]'
              }
            ].map(entry => {
              return (
                <button
                  key={entry.id}
                  onClick={() => {
                    setExpandedHomeSection(entry.id);
                    setCareCenterOpen(true);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="jelly-touch w-full px-4 py-3.5 rounded-[22px] border flex items-center gap-3 text-left transition-all bg-white/75 border-[#F0EBE1]"
                >
                  <div className="w-11 h-11 rounded-[16px] flex items-center justify-center">
                    <entry.icon className="w-11 h-11" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold text-[#4A443E]">{entry.title}</div>
                    <div className="text-[10px] text-[#A9A096] mt-0.5 truncate">{entry.subtitle}</div>
                  </div>
                  <Icons.ChevronDown className="w-4 h-4 text-[#A9A096] -rotate-90" />
                </button>
              );
            })}
          </div>
        </section>

        {/* --- 私人试用版：本机数据与备份 --- */}
        <section className="px-6 mb-8">
          <button
            onClick={() => setDataToolsOpen(value => !value)}
            className="jelly-touch w-full bg-[#F6F2F7] border border-[#EAE3ED] rounded-[24px] px-4 py-3.5 flex items-center gap-3 text-left"
            aria-expanded={dataToolsOpen}
          >
            <ArtworkIcon name="info" className="w-10 h-10 shrink-0" />
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-[#4A443E]">数据与隐私</div>
              <div className="text-[10px] text-[#8C8276] mt-0.5">记录只保存在这台设备，记得偶尔备份</div>
            </div>
            <Icons.ChevronDown className={`w-4 h-4 text-[#8C8276] transition-transform ${dataToolsOpen ? 'rotate-180' : ''}`} />
          </button>

          {dataToolsOpen && (
            <div className="mt-2.5 bg-white rounded-[24px] border border-[#F0EBE1] p-4 shadow-[0_4px_16px_rgba(0,0,0,0.025)]">
              <p className="text-xs leading-relaxed text-[#8C8276]">
                目前没有账号和云端同步。你的猫咪资料、照片与记录不会自动上传，也不会和朋友的数据混在一起。
              </p>
              <div className="mt-3 p-3 rounded-[18px] bg-[#F9F7F3] text-[11px] leading-relaxed text-[#8C8276]">
                <div className="font-bold text-[#6E6257] mb-1">添加到手机桌面</div>
                <div>iPhone：用 Safari 打开，点“分享”再选“添加到主屏幕”。</div>
                <div className="mt-1">Android：用 Chrome 打开，在菜单中选择“安装应用”或“添加到主屏幕”。</div>
                <div className="mt-2 text-[#A06F62]">换手机、清除浏览器数据或删除网站数据前，请先导出备份。</div>
              </div>
              <div className="grid grid-cols-2 gap-2.5 mt-4">
                <button
                  onClick={exportLocalBackup}
                  className="jelly-touch py-3 rounded-[18px] bg-[#5D554D] text-white text-xs font-bold"
                >
                  导出备份
                </button>
                <button
                  onClick={() => backupInputRef.current?.click()}
                  className="jelly-touch py-3 rounded-[18px] bg-[#F4EFE6] text-[#6E6257] text-xs font-bold"
                >
                  恢复备份
                </button>
              </div>
              <input
                ref={backupInputRef}
                type="file"
                accept="application/json,.json"
                onChange={importLocalBackup}
                className="hidden"
                aria-label="选择猫咪日常备份文件"
              />
              {backupNotice && (
                <p className="mt-3 text-[11px] text-[#708875] leading-relaxed">{backupNotice}</p>
              )}
            </div>
          )}
        </section>
        </>)}

        {careCenterOpen && (
          <section className="px-6 pt-10 mb-6">
            <div className="flex items-center gap-3 mb-5">
              <button
                onClick={() => {
                  setCareCenterOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="jelly-touch w-10 h-10 rounded-full bg-white border border-[#F0EBE1] text-[#8C8276] flex items-center justify-center shadow-sm"
                aria-label="返回首页"
              >
                <Icons.ChevronDown className="w-5 h-5 rotate-90" />
              </button>
              <div>
                <h2 className="text-xl font-bold text-[#4A443E]">照料中心</h2>
                <p className="text-[11px] text-[#A9A096] mt-0.5">
                  {expandedHomeSection === 'stock' ? '全家的日常储备' : `正在照料 ${currentCat?.name}`}
                </p>
              </div>
            </div>

            <div className="flex bg-[#F4EFE6]/70 rounded-full p-1">
              {[
                { id: 'care', label: '日常护理' },
                { id: 'health', label: '健康档案' },
                { id: 'stock', label: '家庭库存' }
              ].map(tabItem => (
                <button
                  key={`care-center-tab-${tabItem.id}`}
                  onClick={() => setExpandedHomeSection(tabItem.id)}
                  className={`jelly-touch flex-1 py-2.5 rounded-full text-xs font-bold transition-all ${
                    expandedHomeSection === tabItem.id
                      ? 'bg-white text-[#5D554D] shadow-sm'
                      : 'text-[#A9A096]'
                  }`}
                >
                  {tabItem.label}
                </button>
              ))}
            </div>

            {expandedHomeSection !== 'stock' && (
              <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
                {(data.cats || []).map(cat => {
                  const isActive = cat.id === currentCatId;
                  return (
                    <button
                      key={`care-center-cat-${cat.id}`}
                      onClick={() => switchCat(cat.id)}
                      className={`jelly-touch flex-shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-white border-[#D29E7A]/35 text-[#5D554D] shadow-sm'
                          : 'bg-[#FDFBF7] border-[#F0EBE1] text-[#A9A096]'
                      }`}
                    >
                      {React.createElement(CatAvatars[cat.avatar] || CatAvatars.orange, { className: "w-5 h-5" })}
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            )}
          </section>
        )}

        {/* --- 🌟 日常护理日程管理区 (CARE_MODULES) --- */}
        {careCenterOpen && expandedHomeSection === 'care' && <section className="px-6 mb-8">
          <div className="flex items-center justify-between mb-3 px-1">
            <div>
              <h2 className="text-[15px] text-[#5D554D] font-bold flex items-center gap-2"><ArtworkIcon name="care" className="w-8 h-8" />猫咪护理</h2>
              <p className="text-[10px] text-[#A9A096] mt-0.5">每只猫都可以使用自己的护理频率</p>
            </div>
            <button onClick={() => openCustomCareEditor('cat')} className="jelly-touch px-3 py-1.5 rounded-full bg-white border border-[#F0EBE1] text-[10px] font-bold text-[#D29E7A]">
              ＋ 自定义
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {catCareItems.map(item => {
              const catCare = careRecords[currentCatId] || {};
              const lastDone = catCare[item.id];
              const setting = getCareItemSetting(item, 'cat');
              const attention = setting.reminderEnabled && needsAttention(lastDone, setting.frequencyDays);
              const isSparkling = sparkleId === item.id;
              return (
                <div
                  key={item.id}
                  className={`relative overflow-hidden p-4 rounded-[26px] border transition-all ${
                    attention ? 'bg-[#FFF9EE] border-[#F2E5D0]' : 'bg-white border-[#F0EBE1]'
                  } ${isSparkling ? 'animate-sparkle' : ''}`}
                >
                  <div className="flex items-start justify-between">
                    {item.iconKey
                      ? <ArtworkIcon name={item.iconKey} className="w-10 h-10" />
                      : <span className="text-xl">{item.icon || '✨'}</span>}
                    <button onClick={() => openCareSettings(item, 'cat')} className="jelly-touch text-[10px] text-[#A9A096] px-2 py-1 rounded-full bg-white/80">设置</button>
                  </div>
                  <div className="font-bold text-xs text-[#4A443E] mt-2">{item.name}</div>
                  <div className="text-[10px] text-[#A9A096] mt-0.5">
                    {setting.reminderEnabled ? `每 ${setting.frequencyDays} 天提醒` : '不设固定提醒'}
                  </div>
                  <div className={`text-[10px] mt-1 ${attention ? 'text-[#A68F54]' : 'text-[#A9A096]'}`}>{getTimeText(lastDone)}</div>
                  <button onClick={() => handleCareAction(item.id, item.name, 'cat')} className="jelly-touch w-full mt-3 py-2 rounded-full bg-[#F4EFE6] text-[#8C7662] text-[10px] font-bold">完成一次</button>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between mt-7 mb-3 px-1">
            <div>
              <h2 className="text-[15px] text-[#5D554D] font-bold flex items-center gap-2"><ArtworkIcon name="clean_water_bowl" className="w-8 h-8" />家庭清洁</h2>
              <p className="text-[10px] text-[#A9A096] mt-0.5">全家共享，不绑定具体猫咪</p>
            </div>
            <button onClick={() => openCustomCareEditor('household')} className="jelly-touch px-3 py-1.5 rounded-full bg-white border border-[#F0EBE1] text-[10px] font-bold text-[#D29E7A]">
              ＋ 自定义
            </button>
          </div>

          <div className="space-y-2.5">
            {householdCareItems.map(item => {
              const lastDone = householdCleaningRecords[item.id];
              const setting = getCareItemSetting(item, 'household');
              const attention = setting.reminderEnabled && needsAttention(lastDone, setting.frequencyDays);
              return (
                <div key={item.id} className={`p-4 rounded-[24px] border flex items-center gap-3 ${attention ? 'bg-[#FFF9EE] border-[#F2E5D0]' : 'bg-white border-[#F0EBE1]'}`}>
                  <div className="w-11 h-11 rounded-[16px] flex items-center justify-center">
                    {item.iconKey
                      ? <ArtworkIcon name={item.iconKey} className="w-11 h-11" />
                      : <span className="text-lg">{item.icon || '✨'}</span>}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-[#4A443E]">{item.name}</div>
                    <div className="text-[10px] text-[#A9A096] mt-0.5">
                      {setting.reminderEnabled ? `每 ${setting.frequencyDays} 天 · ${getTimeText(lastDone)}` : `不设提醒 · ${getTimeText(lastDone)}`}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <button onClick={() => openCareSettings(item, 'household')} className="jelly-touch text-[10px] text-[#A9A096]">设置</button>
                    <button onClick={() => handleCareAction(item.id, item.name, 'household')} className="jelly-touch px-3 py-1.5 rounded-full bg-[#F4EFE6] text-[#8C7662] text-[10px] font-bold">完成</button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>}

        {careCenterOpen && expandedHomeSection === 'health' && <section className="px-6 mb-8 space-y-5">
          <div className="bg-white rounded-[30px] p-5 border border-[#F0EBE1] shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ArtworkIcon name="health" className="w-12 h-12" />
                <div>
                <div className="text-[11px] text-[#A9A096]">健康概览</div>
                <div className="text-xl font-bold text-[#4A443E] mt-1">{currentCat?.name}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-[#5D554D]">{currentWeight ? `${currentWeight} kg` : '尚未记录'}</div>
                {weightChange !== null && <div className="text-[10px] text-[#A9A096]">{weightChange >= 0 ? '+' : ''}{weightChange.toFixed(1)} kg 较上次</div>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="rounded-[18px] bg-[#FFF4E5] px-3 py-3"><div className="text-lg font-bold text-[#D36B4F]">{activeHealthRecords.length}</div><div className="text-[10px] text-[#A9A096]">观察中的异常</div></div>
              <div className="rounded-[18px] bg-[#F0F5F1] px-3 py-3"><div className="text-lg font-bold text-[#708875]">{pendingReminders.length}</div><div className="text-[10px] text-[#A9A096]">待办医疗提醒</div></div>
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-5 border border-[#F0EBE1]">
            <div className="flex items-center justify-between mb-4">
              <div><h3 className="font-bold text-[#5D554D]">体重记录</h3><p className="text-[10px] text-[#A9A096] mt-0.5">保留每次称重和备注</p></div>
              <button onClick={() => openHealthSheet('weight', '记录体重')} className="jelly-touch px-3 py-2 rounded-full bg-[#F4EFE6] text-xs font-bold text-[#8C7662]">＋ 记录</button>
            </div>
            <div className="h-12 relative">
              {weightHistory.length >= 2 ? <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none"><path d={weightCurvePath} fill="none" stroke="#D29E7A" strokeWidth="2.5" strokeLinecap="round" /></svg> : <div className="text-center text-xs text-[#D8D0C7] py-4">至少两次记录后显示趋势</div>}
            </div>
            {weightHistory.length > 0 && <button onClick={() => setShowWeightHistory(prev => !prev)} className="text-[11px] text-[#D29E7A] mt-2">{showWeightHistory ? '收起历史' : `查看全部 ${weightHistory.length} 条`}</button>}
            {showWeightHistory && <div className="mt-3 space-y-2">{[...weightHistory].reverse().map(item => <div key={item.id} className="flex justify-between text-xs bg-[#F9F7F3] rounded-[14px] px-3 py-2"><span>{item.date}{item.note ? ` · ${item.note}` : ''}</span><b>{item.weight} kg</b></div>)}</div>}
          </div>

          <div className="bg-white rounded-[28px] p-5 border border-[#F0EBE1]">
            <h3 className="font-bold text-[#5D554D] mb-3">预防记录</h3>
            {[
              { type: 'internal_deworm', title: '体内驱虫', latest: latestInternalDeworm, iconKey: 'internal_deworm' },
              { type: 'external_deworm', title: '体外驱虫', latest: latestExternalDeworm, iconKey: 'external_deworm' },
              { type: 'vaccine', title: '疫苗记录', latest: latestVaccine, iconKey: 'vaccine' }
            ].map(item => <div key={item.type} className="flex items-center justify-between py-3 border-b border-[#F0EBE1] last:border-0">
              <div className="flex items-center gap-3"><ArtworkIcon name={item.iconKey} className="w-10 h-10" /><div><div className="text-sm font-bold text-[#5D554D]">{item.title}</div><div className="text-[10px] text-[#A9A096] mt-0.5">{item.latest ? `${item.latest.date}${item.latest.name ? ` · ${item.latest.name}` : ''}${item.latest.product ? ` · ${item.latest.product}` : ''}` : '还没有记录'}</div></div></div>
              <button onClick={() => openHealthSheet(item.type, `记录${item.title}`)} className="jelly-touch text-xs font-bold text-[#D29E7A]">记录</button>
            </div>)}
          </div>

          <div className="bg-[#FFF4E5]/55 rounded-[28px] p-5 border border-[#FFE4C4]/60">
            <div className="flex justify-between items-center"><div className="flex items-center gap-3"><ArtworkIcon name="health_observation" className="w-10 h-10" /><div><h3 className="font-bold text-[#D36B4F]">异常观察</h3><p className="text-[10px] text-[#D36B4F]/70 mt-0.5">可以标记恢复或已就诊</p></div></div><button onClick={() => openSheet('health', '记录异常情况')} className="jelly-touch px-3 py-2 bg-[#FFB677] text-white rounded-full text-xs font-bold">＋ 记录</button></div>
            <div className="mt-3 space-y-2">
              {activeHealthRecords.length === 0 ? <div className="text-xs text-[#A9A096]">目前没有正在观察的异常</div> : activeHealthRecords.map(record => <div key={record.id} className="bg-white rounded-[18px] p-3">
                <div className="text-xs font-bold text-[#5D554D]">{record.tags?.join('、')}</div>
                <div className="flex gap-2 mt-2"><button onClick={() => updateHealthRecordStatus(record.id, 'resolved')} className="text-[10px] px-2.5 py-1.5 rounded-full bg-[#F0F5F1] text-[#708875]">已经恢复</button><button onClick={() => updateHealthRecordStatus(record.id, 'visited')} className="text-[10px] px-2.5 py-1.5 rounded-full bg-[#F4EFE6] text-[#8C7662]">已就诊</button></div>
              </div>)}
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-5 border border-[#F0EBE1]">
            <div className="flex justify-between items-center"><div className="flex items-center gap-3"><ArtworkIcon name="reminder" className="w-10 h-10" /><div><h3 className="font-bold text-[#5D554D]">医疗提醒</h3><p className="text-[10px] text-[#A9A096] mt-0.5">复诊、检查或其他事项</p></div></div><button onClick={() => openHealthSheet('reminder', '添加医疗提醒')} className="jelly-touch text-xs font-bold text-[#D29E7A]">＋ 添加</button></div>
            <div className="mt-3 space-y-2">{pendingReminders.length === 0 ? <div className="text-xs text-[#A9A096]">还没有待办提醒</div> : pendingReminders.map(item => <div key={item.id} className="flex items-center justify-between bg-[#F9F7F3] rounded-[16px] px-3 py-2.5"><div><div className="text-xs font-bold">{item.title}</div><div className="text-[10px] text-[#A9A096]">{item.dueDate}</div></div><button onClick={() => completeMedicalReminder(item.id)} className="text-[10px] text-[#708875]">完成</button></div>)}</div>
          </div>

          <div>
            <h3 className="font-bold text-[#5D554D] px-1 mb-3">健康时间线</h3>
            <div className="space-y-2">{healthTimeline.length === 0 ? <div className="text-xs text-[#A9A096] bg-white rounded-[20px] p-4">还没有健康记录</div> : healthTimeline.slice(0, 12).map(item => <div key={`${item.id}-${item.occurredAt}`} className="bg-white rounded-[18px] border border-[#F0EBE1] px-4 py-3"><div className="flex justify-between"><span className="text-xs font-bold text-[#5D554D]">{item.title}</span><span className="text-[10px] text-[#A9A096]">{new Date(item.occurredAt).toLocaleDateString('zh-CN')}</span></div>{item.detail && <div className="text-[10px] text-[#A9A096] mt-1">{item.detail}</div>}</div>)}</div>
          </div>
        </section>}

        {/* --- 家庭库存 --- */}
        {careCenterOpen && expandedHomeSection === 'stock' && <section className="px-6 mb-8">
          <div className="flex items-start justify-between mb-4 px-1">
            <div>
              <h2 className="text-lg font-bold text-[#4A443E] flex items-center gap-2"><ArtworkIcon name="stock" className="w-10 h-10" />家庭库存</h2>
              <p className="text-[11px] text-[#A9A096] mt-1">未来 7 天内到期的物资会轻轻提醒你</p>
            </div>
            <button onClick={() => openStockEditor()} className="jelly-touch px-3 py-2 rounded-full bg-[#4A443E] text-white text-xs font-bold">＋ 添加物资</button>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { label: '管理中', value: stockItems.length, color: 'text-[#5D554D]' },
              { label: '需要补充', value: lowStockItems.length, color: lowStockItems.length ? 'text-[#D36B4F]' : 'text-[#708875]' },
              { label: '7 天内到期', value: expiringStockItems.length, color: expiringStockItems.length ? 'text-[#C48A55]' : 'text-[#708875]' }
            ].map(item => <div key={item.label} className="bg-white rounded-[20px] border border-[#F0EBE1] px-2 py-3 text-center"><div className={`text-xl font-bold ${item.color}`}>{item.value}</div><div className="text-[9px] text-[#A9A096] mt-0.5">{item.label}</div></div>)}
          </div>

          {stockAttentionItems.length > 0 && <div className="bg-[#FFF8EC] rounded-[22px] border border-[#F1DFC2] p-4 mb-4">
            <div className="text-xs font-bold text-[#8C7662] mb-2">最近可以留意</div>
            <div className="space-y-2">{stockAttentionItems.slice(0, 4).map(item => <div key={item.id} className="flex items-start gap-2 text-[11px] text-[#6E6257]"><span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#D29E7A] shrink-0" /><span>{item.text}</span></div>)}</div>
          </div>}

          <div className="flex gap-2 overflow-x-auto no-scrollbar mb-3 pb-1">
            {[{ id: 'all', label: '全部' }, ...STOCK_CATEGORIES].map(category => <button key={category.id} onClick={() => setStockCategoryFilter(category.id)} className={`shrink-0 jelly-touch px-3.5 py-2 rounded-full text-xs font-bold border ${stockCategoryFilter === category.id ? 'bg-[#F4EFE6] border-[#D29E7A]/35 text-[#6E6257]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'}`}>{category.label}</button>)}
          </div>
          {data.cats.length > 1 && <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4 pb-1">
            <button onClick={() => setStockUsageFilter('all')} className={`shrink-0 jelly-touch px-3 py-1.5 rounded-full text-[10px] font-bold ${stockUsageFilter === 'all' ? 'bg-[#A3BCA7] text-white' : 'bg-[#EEF2ED] text-[#708875]'}`}>全家用途</button>
            {data.cats.map(cat => <button key={cat.id} onClick={() => setStockUsageFilter(cat.id)} className={`shrink-0 jelly-touch px-3 py-1.5 rounded-full text-[10px] font-bold ${stockUsageFilter === cat.id ? 'bg-[#A3BCA7] text-white' : 'bg-[#EEF2ED] text-[#708875]'}`}>{cat.name}</button>)}
          </div>}

          <div className="space-y-3">
            {filteredStockItems.length === 0 ? <div className="bg-white/70 border border-dashed border-[#E6DED2] rounded-[24px] py-8 text-center text-xs text-[#A9A096]">这个筛选下还没有物资</div> : filteredStockItems.map(item => {
              const category = STOCK_CATEGORIES.find(entry => entry.id === item.category);
              const expiryDays = getStockExpiryDays(item);
              const usageNames = item.usageCatIds?.map(id => data.cats.find(cat => cat.id === id)?.name).filter(Boolean) || [];
              return <div key={item.id} className="bg-white rounded-[24px] border border-[#F0EBE1] p-4 shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <ArtworkIcon name="stock_item" className="w-10 h-10 shrink-0" />
                    <div className="min-w-0">
                    <div className="flex items-center gap-2"><span className="font-bold text-sm text-[#4A443E] truncate">{item.name}</span>{isLowStock(item) && <span className="shrink-0 text-[9px] font-bold text-[#D36B4F] bg-[#FDF0ED] px-2 py-1 rounded-full">需要补充</span>}</div>
                    <div className="text-[10px] text-[#A9A096] mt-1">{category?.label || '其他'} · {usageNames.length ? `适合 ${usageNames.join('、')}` : '全家共用'}</div>
                    {item.expiresAt && <div className={`text-[10px] mt-1 ${expiryDays !== null && expiryDays <= 7 ? 'text-[#C47B4D] font-bold' : 'text-[#A9A096]'}`}>{expiryDays < 0 ? `已过期 ${Math.abs(expiryDays)} 天` : expiryDays === 0 ? '今天到期' : `${item.expiresAt} 到期`}</div>}
                    </div>
                  </div>
                  <button onClick={() => openStockEditor(item)} className="jelly-touch text-[10px] text-[#8C8276] bg-[#F8F5F0] px-2.5 py-1.5 rounded-full">编辑</button>
                </div>

                {item.trackingMode === 'simple' ? <div className="flex bg-[#F8F5F0] rounded-full p-1 mt-3">
                  {[
                    { id: 'full', label: '充足', active: 'bg-[#A3BCA7] text-white' },
                    { id: 'half', label: '一半', active: 'bg-[#D9C27E] text-[#5D554D]' },
                    { id: 'low', label: '见底啦', active: 'bg-[#D36B4F] text-white' }
                  ].map(level => <button key={level.id} onClick={() => updateSimpleStockLevel(item.id, level.id)} className={`jelly-touch flex-1 py-1.5 rounded-full text-xs font-bold transition-all ${item.simpleLevel === level.id ? `${level.active} shadow-sm` : 'text-[#A9A096]'}`}>{level.label}</button>)}
                </div> : <div className="mt-3 flex items-center justify-between gap-3 bg-[#F8F5F0] rounded-[18px] px-3 py-2.5">
                  <div><span className="text-xl font-bold text-[#5D554D]">{item.quantity}</span><span className="text-xs text-[#A9A096] ml-1">{item.unit}</span><div className="text-[9px] text-[#A9A096]">低于 {item.lowStockThreshold} {item.unit}提醒</div></div>
                  <div className="flex gap-2"><button onClick={() => consumeStockItem(item)} className="jelly-touch px-3 py-2 rounded-full bg-white text-[10px] font-bold text-[#8C8276]">使用 {item.consumeStep}{item.unit}</button><button onClick={() => setStockAdjust({ isOpen: true, itemId: item.id, amount: Number(item.consumeStep || 1) })} className="jelly-touch px-3 py-2 rounded-full bg-[#A3BCA7] text-white text-[10px] font-bold">补货</button></div>
                </div>}
                {item.note && <div className="text-[10px] text-[#8C8276] mt-2 pt-2 border-t border-[#F4EFE6]">{item.note}</div>}
              </div>;
            })}
          </div>
        </section>}

        {/* --- 今日动态区 (时间轴) --- */}
        {!careCenterOpen && hasCats && <section className="px-6 mb-12">
          <div className="flex justify-between items-center mb-5">
            <div>
              <h2 className="text-[16px] font-bold text-[#5D554D]">{viewMode === 'family' ? '最近家庭动态' : '最近动态'}</h2>
              <p className="text-[10px] text-[#A9A096] mt-0.5">今天最近的 {Math.min(todayTimelineEvents.length, 5)} 条记录</p>
            </div>
            <button onClick={() => setHistoryModalOpen(true)} className="text-[13px] text-[#A9A096] flex items-center gap-0.5 jelly-touch hover:text-[#D29E7A] transition-colors">
              查看全部 <Icons.Check className="w-4 h-4 rotate-[-90deg] -ml-0.5" />
            </button>
          </div>

          <div className="space-y-4">
            {recentTimelineEvents.length === 0 ? (
               <div className="text-center py-8 text-[#A9A096] text-sm bg-white/50 rounded-[24px] border border-[#F0EBE1] border-dashed">
                 今天还没有日常打卡哦～
               </div>
            ) : (
               recentTimelineEvents.map((event, idx) => {
                 const info = TYPE_INFO[event.type] || TYPE_INFO.health;
                 const Icon = info.icon;
                 const displayTitle = getRecordDisplayTitle(event, info);
                 return (
                   <div key={event.id || `timeline-${idx}`} className="flex gap-4 items-start relative">
                     <div className="flex flex-col items-center mt-0.5">
                       <div className="w-10 h-10 rounded-[14px] flex items-center justify-center shadow-sm z-10 relative"><Icon className="w-10 h-10" /></div>
                       {idx !== recentTimelineEvents.length - 1 && <div className="w-px h-full min-h-[30px] bg-gradient-to-b from-[#EAE3D9] to-transparent my-1 absolute top-10" />}
                     </div>
                     <div className="flex-1 pb-5 pt-2">
                       <div className="flex items-baseline gap-2 mb-2">
                         <span className="font-bold text-[#4A443E] text-[15px]">{displayTitle}</span>
                         <span className="text-xs text-[#A9A096] font-medium bg-white px-2 py-0.5 rounded-md border border-[#F0EBE1]/50 shadow-sm">{event.time}</span>
                         <button
                           onClick={() => setPendingDeleteRecord(event)}
                           className="jelly-touch ml-auto text-[10px] text-[#B98A80] px-2 py-1 rounded-full hover:bg-[#FDF0ED]"
                           aria-label={`删除${displayTitle}记录`}
                         >
                           删除
                         </button>
                       </div>
                       <div className="mb-2">
                         <span className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                           event.scope === 'unknown' ? 'bg-[#FFF4E5] text-[#D29E7A]' :
                           event.scope === 'shared' ? 'bg-[#F4EFE6] text-[#8C7662]' :
                           event.scope === 'multiple' ? 'bg-[#F0F5F1] text-[#708875]' :
                           'bg-[#F9F7F3] text-[#8C8276]'
                         }`}>
                           {getAssignmentLabel(event.scope, event.catIds)}
                         </span>
                       </div>
                       <div className="flex flex-wrap gap-2">
                         {event.tags && Array.isArray(event.tags) && event.tags.map((tag, tIdx) => (
                           <span key={`tag-${tag}-${tIdx}`} className="px-3 py-1 bg-white border border-[#F0EBE1] text-[#8C8276] text-xs rounded-full shadow-[0_2px_10px_rgb(0,0,0,0.02)]">{tag}</span>
                         ))}
                       </div>
                       {event.photo && (
                         <div className="mt-3 w-16 h-16 rounded-[12px] overflow-hidden border border-[#F0EBE1] shadow-[0_4px_15px_rgba(0,0,0,0.03)] cursor-pointer hover:scale-105 transition-transform">
                           <img src={event.photo} alt="患处记录" className="w-full h-full object-cover" />
                         </div>
                       )}
                     </div>
                   </div>
                 )
               })
            )}
          </div>
        </section>}

        {/* --- 通用/饮食/健康异常 Bottom Sheet 容器 --- */}
        <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${sheetConfig.isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" onClick={() => setSheetConfig({isOpen: false})} />
          <div className={`absolute bottom-0 left-0 right-0 max-w-md mx-auto bg-white rounded-t-[40px] shadow-[0_-10px_40px_rgb(0,0,0,0.08)] transition-transform duration-400 cubic-bezier(0.2, 0.8, 0.2, 1) ${sheetConfig.isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="p-6 pb-10 max-h-[90vh] overflow-y-auto no-scrollbar">
              <div className="w-12 h-1.5 bg-[#F0EBE1] rounded-full mx-auto mb-6" />
              
              {/* 记录归属选择器 */}
              {sheetConfig.isOpen && (
                <div id="record-assignment-editor" className="mb-4 pb-4 border-b border-[#F0EBE1]/50 scroll-mt-4">
                  <button
                    type="button"
                    onClick={() => setAssignmentExpanded(prev => !prev)}
                    className="jelly-touch w-full flex items-center justify-between gap-3 p-3 rounded-[20px] bg-[#FDFBF7] border border-[#F0EBE1] text-left"
                  >
                    <div>
                      <label className="text-sm text-[#5D554D] font-bold block">这次是谁呀？</label>
                      <p className="text-xs text-[#8C8276] mt-1">{currentAssignmentLabel}</p>
                    </div>
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-[#D29E7A]">
                      {assignmentExpanded ? '收起' : '修改'}
                      <Icons.ChevronDown className={`w-4 h-4 transition-transform ${assignmentExpanded ? 'rotate-180' : ''}`} />
                    </span>
                  </button>

                  {assignmentExpanded && (
                    <div className="mt-3 p-3 rounded-[20px] bg-[#FDFBF7] border border-[#F0EBE1]">
                      <p className="text-[10px] text-[#A9A096] mb-3 px-1">分不清也没关系，先记下来就很好。</p>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[10px] font-semibold text-[#A9A096] px-1">
                          {isMultiOwnerMode ? '可以选择多只猫咪' : '明确是某只猫'}
                        </span>
                        {(data.cats || []).length > 1 && (
                          <button
                            type="button"
                            onClick={() => {
                              setAssignmentSource('manual');
                              setIsMultiOwnerMode(prev => !prev);
                              if (!isMultiOwnerMode && !['single', 'multiple'].includes(recordAssignment?.scope)) {
                                setRecordAssignment({ scope: 'single', catIds: [] });
                              }
                            }}
                            className={`jelly-touch px-3 py-1.5 rounded-full text-[10px] font-bold border ${
                              isMultiOwnerMode ? 'bg-[#F0F5F1] border-[#A3BCA7]/50 text-[#708875]' : 'bg-white border-[#F0EBE1] text-[#8C8276]'
                            }`}
                          >
                            {isMultiOwnerMode ? '取消多选' : '选择多只猫'}
                          </button>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {(data.cats || []).map((cat, idx) => {
                          const isSelected = recordAssignment?.catIds?.includes(cat.id)
                            && ['single', 'multiple'].includes(recordAssignment?.scope);
                          return (
                            <button
                              key={`record-owner-${cat.id}`}
                              type="button"
                              onClick={() => isMultiOwnerMode ? toggleMultipleOwner(cat.id) : selectSingleOwner(cat.id)}
                              className={`jelly-touch flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all border ${
                                isSelected
                                  ? `${idx % 2 === 0 ? 'bg-[#E0CF9A] text-[#6A5A30]' : 'bg-[#A3BCA7] text-[#4A5D4E]'} border-transparent shadow-sm`
                                  : 'bg-white border-[#F0EBE1] text-[#A9A096]'
                              }`}
                            >
                              {React.createElement(CatAvatars[cat.avatar] || CatAvatars.orange, { className: "w-5 h-5" })}
                              {cat.name}
                            </button>
                          );
                        })}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setManualAssignment({ scope: 'shared', catIds: [] })}
                          className={`jelly-touch px-3 py-2.5 rounded-[16px] text-xs font-bold border ${
                            currentAssignment.scope === 'shared' ? 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'
                          }`}
                        >
                          🏠 两只都可能 / 共同
                        </button>
                        <button
                          type="button"
                          onClick={() => setManualAssignment({ scope: 'unknown', catIds: [] })}
                          className={`jelly-touch px-3 py-2.5 rounded-[16px] text-xs font-bold border ${
                            currentAssignment.scope === 'unknown' ? 'bg-[#FFF4E5] border-[#D29E7A]/30 text-[#D29E7A]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'
                          }`}
                        >
                          ☁️ 分不清，先记下来
                        </button>
                      </div>

                      {isMultiOwnerMode && (
                        <button
                          type="button"
                          onClick={() => {
                            setIsMultiOwnerMode(false);
                            setAssignmentExpanded(false);
                          }}
                          disabled={!recordAssignment?.catIds?.length}
                          className="jelly-touch w-full mt-2.5 py-2.5 rounded-[16px] bg-[#A3BCA7] text-white text-xs font-bold disabled:opacity-40"
                        >
                          选好啦
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}

              {sheetConfig.type === 'food' ? (
                // --- 吃饭专属柔软面板 ---
                <div className="flex flex-col gap-6">
                  <div className="flex bg-[#F9F7F3] rounded-full p-1 border border-[#F0EBE1]/50">
                    {Object.entries(FOOD_CATEGORIES).map(([key, config]) => (
                      <button 
                        key={`tab-${key}`}
                        onClick={() => {
                          const firstSub = config.subs[0];
                          setFoodState({ tab: key, subType: firstSub, brand: '', amount: 50 });
                          applyScenarioAssignment('food', key, waterMode);
                          setIsAddingFoodSub(false);
                        }}
                        className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${foodState.tab === key ? 'bg-white text-[#4A443E] shadow-[0_2px_8px_rgba(0,0,0,0.04)]' : 'text-[#A9A096] hover:text-[#8C8276]'}`}
                      >
                        {config.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1 px-1 items-center">
                    {(FOOD_CATEGORIES[foodState.tab] || FOOD_CATEGORIES.main).subs.map((sub, sIdx) => (
                      <button 
                        key={`sub-${sub}-${sIdx}`}
                        onClick={() => setFoodState(prev => ({ ...prev, subType: sub }))}
                        className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${foodState.subType === sub ? 'bg-[#F4EFE6] border-[#D29E7A]/40 text-[#8C7662]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'}`}
                      >
                        {sub}
                      </button>
                    ))}
                    {(data.customFoodSubs?.[foodState.tab] || []).map((sub, sIdx) => (
                      <button 
                        key={`custom-sub-${sub}-${sIdx}`}
                        onClick={() => setFoodState(prev => ({ ...prev, subType: sub }))}
                        className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${foodState.subType === sub ? 'bg-[#F4EFE6] border-[#D29E7A]/40 text-[#8C7662]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'}`}
                      >
                        {sub}
                      </button>
                    ))}
                    
                    {!isAddingFoodSub ? (
                      <button 
                        onClick={() => setIsAddingFoodSub(true)} 
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-dashed border-[#D29E7A]/50 text-[#D29E7A] jelly-touch"
                      >
                        <Icons.Plus className="w-4 h-4" />
                      </button>
                    ) : (
                      <div className="flex-shrink-0 flex items-center gap-1 bg-[#F9F7F3] rounded-full p-1 border border-[#EAE3D9]">
                        <input 
                          type="text" 
                          autoFocus
                          className="bg-transparent border-none outline-none text-sm px-2 w-20 text-[#5D554D] placeholder-gray-400"
                          placeholder="输入..."
                          value={newFoodSubInput}
                          onChange={(e) => setNewFoodSubInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleAddCustomFoodSub()}
                          onBlur={() => { if(!newFoodSubInput) setIsAddingFoodSub(false); }}
                        />
                        <button onClick={handleAddCustomFoodSub} className="bg-white p-1 rounded-full shadow-sm text-[#8C8276]">
                          <Icons.Check className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="bg-[#FDFBF7] rounded-[28px] p-5 border border-[#F0EBE1] shadow-sm flex flex-col gap-5">
                    <div className="relative">
                      <label className="text-xs text-[#A9A096] font-semibold mb-1.5 block px-2">食物品牌 / 口味</label>
                      <input 
                        type="text"
                        value={foodState.brand}
                        onChange={(e) => {
                          setFoodState(prev => ({ ...prev, brand: e.target.value }));
                          setIsBrandDropdownOpen(true);
                        }}
                        onFocus={() => setIsBrandDropdownOpen(true)}
                        onBlur={() => setTimeout(() => setIsBrandDropdownOpen(false), 200)}
                        placeholder="今天吃的是什么牌子呀？"
                        className="w-full bg-[#F4EFE6]/50 rounded-[20px] py-3.5 px-4 text-[#5D554D] placeholder-[#A9A096]/70 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] border-none outline-none focus:bg-[#F4EFE6]"
                      />
                      {isBrandDropdownOpen && data.brandHistory && data.brandHistory.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#F0EBE1] z-20 overflow-hidden max-h-40 overflow-y-auto">
                          {data.brandHistory
                            .filter(b => b && typeof b === 'string' && b.toLowerCase().includes(foodState.brand.toLowerCase()))
                            .map((brand, idx) => (
                              <div 
                                key={`brand-history-${idx}`} 
                                onClick={() => {
                                  setFoodState(prev => ({ ...prev, brand }));
                                  setIsBrandDropdownOpen(false);
                                }}
                                className="px-4 py-3 text-[#8C8276] hover:bg-[#F9F7F3] cursor-pointer border-b border-[#F0EBE1]/50 last:border-0"
                              >
                                {brand}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between px-2">
                       <label className="text-sm text-[#8C8276] font-semibold">投喂分量</label>
                       <div className="flex items-center bg-[#F9F7F3] rounded-full p-1 border border-[#F0EBE1]">
                         <button onClick={() => handleFoodAmountChange(foodState.amount - 5)} className="w-10 h-10 flex items-center justify-center rounded-full text-[#A9A096] hover:bg-white hover:text-[#5D554D] transition-colors jelly-touch"><span className="text-xl leading-none -mt-1">-</span></button>
                         <div className="w-16 h-10 flex items-center justify-center overflow-hidden relative text-[#4A443E] font-bold text-lg">
                           <div key={foodState.amount} className={`absolute ${scrollDir === 'up' ? 'slide-up-enter' : 'slide-down-enter'}`}>
                             {foodState.amount}<span className="text-xs font-normal ml-0.5 text-[#8C8276]">g</span>
                           </div>
                         </div>
                         <button onClick={() => handleFoodAmountChange(foodState.amount + 5)} className="w-10 h-10 flex items-center justify-center rounded-full text-[#A9A096] hover:bg-white hover:text-[#5D554D] transition-colors jelly-touch"><span className="text-xl leading-none -mt-0.5">+</span></button>
                       </div>
                    </div>
                  </div>

                  <AssignmentConfirmation />
                  <button 
                    onClick={saveRecord} 
                    className="jelly-touch w-full py-4 rounded-[24px] font-bold text-lg transition-all duration-300 bg-[#4A443E] text-white shadow-[0_8px_20px_rgba(74,68,62,0.2)]"
                  >
                    确认投喂
                  </button>
                </div>
              ) : sheetConfig.type === 'health' ? (
                // --- 异常与健康专属风琴面板 ---
                <div className="flex flex-col gap-4">
                  <div className="max-h-[52vh] overflow-y-auto no-scrollbar pb-4 space-y-3 px-1">
                    {HEALTH_CATEGORIES.map(category => {
                      const categoryTags = [
                        ...category.tags,
                        ...(data.customHealthTags?.[category.id] || [])
                      ];

                      return (
                        <div key={`category-accordion-${category.id}`} className="bg-[#FDFBF7] rounded-[24px] border border-[#F0EBE1] overflow-hidden transition-all duration-300">
                          <button 
                            onClick={() => setActiveAccordion(activeAccordion === category.id ? null : category.id)}
                            className="w-full flex items-center justify-between p-4 text-[#5D554D] font-bold jelly-touch"
                          >
                            {category.title}
                            <Icons.ChevronDown className={`w-5 h-5 text-[#A9A096] transition-transform duration-300 ${activeAccordion === category.id ? 'rotate-180' : ''}`} />
                          </button>
                          
                          <div className={`transition-all duration-300 overflow-hidden ${activeAccordion === category.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="flex flex-wrap gap-2.5 p-4 pt-0 items-center">
                              {categoryTags.map((tag, tIdx) => {
                                const isUrgent = URGENT_TAGS.includes(tag);
                                const isSelected = selectedTags.includes(tag);
                                
                                return (
                                  <button
                                    key={`health-tag-${tag}-${tIdx}`}
                                    onClick={() => setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])}
                                    className={`jelly-touch px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                                      isSelected 
                                        ? (isUrgent ? 'bg-[#FFEDE8] border-[#D36B4F]/30 text-[#D36B4F]' : 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662]') 
                                        : (isUrgent ? 'bg-white border-[#FFE4C4]/60 text-[#D36B4F]/80 hover:bg-[#FFF4E5]' : 'bg-white border-[#F0EBE1] text-[#8C8276] hover:bg-gray-50')
                                    }`}
                                  >
                                    {tag}
                                  </button>
                                )
                              })}

                              {addingHealthTagCatId === category.id ? (
                                <div className="flex items-center gap-1.5 bg-[#F9F7F3] rounded-full p-1 border border-[#EAE3D9]">
                                  <input 
                                    type="text" 
                                    autoFocus
                                    className="bg-transparent border-none outline-none text-xs px-2.5 py-1 w-20 text-[#5D554D] placeholder-gray-400 font-semibold"
                                    placeholder="输入新症状"
                                    value={newHealthTagInput}
                                    onChange={(e) => setNewHealthTagInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleAddCustomHealthTag(category.id)}
                                    onBlur={() => { if(!newHealthTagInput) setAddingHealthTagCatId(null); }}
                                  />
                                  <button onClick={() => handleAddCustomHealthTag(category.id)} className="bg-white p-1 rounded-full shadow-sm text-[#8C8276] jelly-touch">
                                    <Icons.Check className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              ) : (
                                <button 
                                  onClick={() => {
                                    setAddingHealthTagCatId(category.id);
                                    setNewHealthTagInput('');
                                  }} 
                                  className="px-3 py-1.5 rounded-full border border-dashed border-[#D29E7A]/50 text-[#D29E7A] text-xs font-semibold flex items-center gap-1 jelly-touch hover:bg-[#F9F7F3]"
                                >
                                  <Icons.Plus className="w-3.5 h-3.5" /> 自定义
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}

                    {selectedTags.length > 0 && (
                      <div className="mt-2 p-4 rounded-[24px] bg-[#F9F7F3] border border-dashed border-[#D29E7A]/40 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300">
                        {healthPhoto ? (
                          <div className="relative w-full h-32 rounded-[16px] overflow-hidden">
                            <img src={healthPhoto} alt="异常记录照" className="w-full h-full object-cover" />
                            <button onClick={() => setHealthPhoto(null)} className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-[#4A443E] shadow-sm backdrop-blur-sm jelly-touch z-10">
                              <Icons.Plus className="w-4 h-4 rotate-45" />
                            </button>
                          </div>
                        ) : (
                          <>
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D29E7A] shadow-[0_2px_10px_rgba(0,0,0,0.03)] mb-2">
                              <Icons.Camera className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-semibold text-[#8C7662]">上传状态照片 (可选)</span>
                            <span className="text-xs text-[#A9A096] mt-1">留底猫咪实时状态，更方便问诊与观察</span>
                            <input 
                              type="file" 
                              accept="image/*"
                              onChange={handlePhotoUpload}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <AssignmentConfirmation />
                  <button 
                    onClick={saveRecord} 
                    disabled={selectedTags.length === 0} 
                    className={`jelly-touch w-full py-4 rounded-[24px] font-bold text-lg transition-all mt-2 ${selectedTags.length > 0 ? 'bg-[#D36B4F] text-white shadow-[0_8px_20px_rgba(211,107,79,0.2)]' : 'bg-[#F4EFE6] text-[#A9A096] cursor-not-allowed'}`}
                  >
                    保存记录
                  </button>
                </div>
              ) : sheetConfig.type === 'poop' ? (
                // --- 💩 拉粑粑专属柔软面板 ---
                <div className="flex flex-col gap-6">
                  {/* 第一层级：大便质地 (多选胶囊) */}
                  <div>
                    <label className="text-xs text-[#A9A096] font-semibold mb-2.5 block px-1">大便质地 (多选)</label>
                    <div className="flex flex-wrap gap-2.5">
                      {DEFAULT_TAGS.poop.map((tag, tIdx) => {
                        const isSelected = selectedTags.includes(tag);
                        return (
                          <button
                            key={`poop-tag-${tag}-${tIdx}`}
                            onClick={() => {
                              setSelectedTags(prev => isSelected ? prev.filter(t => t !== tag) : [...prev, tag]);
                            }}
                            className={`jelly-touch px-4 py-2.5 rounded-full text-sm font-semibold transition-colors border ${
                              isSelected 
                                ? 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662]' 
                                : 'bg-white border-[#F0EBE1] text-[#8C8276]'
                            }`}
                          >
                            {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 第二层级：大便颜色 (多选胶囊) */}
                  <div>
                    <label className="text-xs text-[#A9A096] font-semibold mb-1 block px-1">大便颜色 (可多选)</label>
                    <p className="text-[10px] text-[#C1B6AB] mb-2.5 px-1">便便有混色时，可以同时选择多个颜色</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: '棕色', bg: 'bg-[#8C7662]' },
                        { id: '深棕', bg: 'bg-[#5D4636]' },
                        { id: '偏黑', bg: 'bg-[#3F3A36]' },
                        { id: '偏黄', bg: 'bg-[#D9C27E]' },
                        { id: '偏绿', bg: 'bg-[#A3BCA7]' },
                        { id: '灰白', bg: 'bg-[#C9C4BC]' }
                      ].map(colOpt => {
                        const isSelected = poopColors.includes(colOpt.id);
                        return (
                          <button
                            key={colOpt.id}
                            onClick={() => setPoopColors(prev => isSelected ? prev.filter(color => color !== colOpt.id) : [...prev, colOpt.id])}
                            className={`jelly-touch flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-xs font-bold transition-all border ${
                              isSelected
                                ? 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662]'
                                : 'bg-white border-[#F0EBE1] text-[#A9A096]'
                            }`}
                          >
                            <span className={`w-2.5 h-2.5 rounded-full ${colOpt.bg}`}></span>
                            {colOpt.id}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 第三层级：排便量 (单选圆润大卡片) */}
                  <div>
                    <label className="text-xs text-[#A9A096] font-semibold mb-2.5 block px-1">排便分量 (Volume)</label>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { id: '只有一点', scale: 0.55, count: 1 },
                        { id: '正常量', scale: 0.8, count: 1 },
                        { id: '一大坨', scale: 0.8, count: 2 },
                        { id: '惊人的多', scale: 0.7, count: 3, shock: true }
                      ].map(volOpt => {
                        const isSelected = poopVolume === volOpt.id;
                        return (
                          <button
                            key={volOpt.id}
                            onClick={() => setPoopVolume(volOpt.id)}
                            className={`jelly-touch flex flex-col items-center gap-2 py-3 px-1 rounded-2xl border transition-all duration-300 ${
                              isSelected 
                                ? 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662] scale-105 shadow-[0_4px_12px_rgba(210,158,122,0.1)]' 
                                : 'bg-white border-[#F0EBE1] text-[#A9A096]'
                            }`}
                          >
                            <PoopVolumeIcon count={volOpt.count} scale={volOpt.scale} showShockLines={volOpt.shock && isSelected} isSelected={isSelected} />
                            <span className="text-[10px] font-bold tracking-tight">{volOpt.id}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <AssignmentConfirmation />
                  <button 
                    onClick={saveRecord} 
                    disabled={selectedTags.length === 0 && !poopVolume}
                    className={`jelly-touch w-full py-4 rounded-[24px] font-bold text-lg transition-all mt-2 ${
                      (selectedTags.length > 0 || poopVolume) ? 'bg-[#4A443E] text-white shadow-[0_8px_20px_rgba(74,68,62,0.2)]' : 'bg-[#F4EFE6] text-[#A9A096] cursor-not-allowed'
                    }`}
                  >
                    确认记录
                  </button>
                </div>
              ) : sheetConfig.type === 'pee' ? (
                // --- 💧 铲砂时的尿团记录 ---
                <div className="flex flex-col gap-6">
                  <div className="bg-[#FDFBF7] rounded-[26px] p-5 border border-[#F0EBE1]">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm text-[#5D554D] font-bold block">这次铲到几团？</label>
                        <p className="text-[10px] text-[#A9A096] mt-1">记录本次铲砂看到的尿团总数</p>
                      </div>
                      <div className="flex items-center bg-white rounded-full p-1 border border-[#F0EBE1] shadow-sm">
                        <button
                          onClick={() => setPeeCount(prev => Math.max(1, prev - 1))}
                          className="jelly-touch w-9 h-9 rounded-full text-[#A9A096] text-xl"
                        >
                          -
                        </button>
                        <div className="w-16 text-center font-bold text-lg text-[#4A443E]">
                          {peeCount}<span className="text-xs text-[#8C8276] ml-1">团</span>
                        </div>
                        <button
                          onClick={() => setPeeCount(prev => Math.min(20, prev + 1))}
                          className="jelly-touch w-9 h-9 rounded-full text-[#8C8276] text-xl"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-[#A9A096] font-semibold mb-1 block px-1">尿团大小分布 (可多选)</label>
                    <p className="text-[10px] text-[#C1B6AB] mb-2.5 px-1">选择这一批尿团整体看起来的情况</p>
                    <div className="flex flex-wrap gap-2.5">
                      {['小团为主', '正常大小为主', '大团为主', '大小不一'].map(sizeOption => {
                        const isSelected = peeSizeDistribution.includes(sizeOption);
                        return (
                          <button
                            key={sizeOption}
                            onClick={() => setPeeSizeDistribution(prev => isSelected ? prev.filter(item => item !== sizeOption) : [...prev, sizeOption])}
                            className={`jelly-touch px-4 py-2.5 rounded-full text-sm font-semibold transition-colors border ${
                              isSelected ? 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662]' : 'bg-white border-[#F0EBE1] text-[#8C8276]'
                            }`}
                          >
                            {sizeOption}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-[#A9A096] font-semibold mb-1 block px-1">有没有特别的情况？(可多选)</label>
                    <p className="text-[10px] text-[#C1B6AB] mb-2.5 px-1">没有发现异常时可以不选</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: '频繁出现小尿团', color: 'bg-[#E8B042]' },
                        { id: '带粉红 / 血色', color: 'bg-[#D36B4F]' },
                        { id: '颜色明显偏深', color: 'bg-[#8C7662]' },
                        { id: '碎散不成团', color: 'bg-[#A9A096]' },
                        { id: '尿在盆外', color: 'bg-[#C1B6AB]' },
                        { id: '气味和平时不同', color: 'bg-[#D9C27E]' }
                      ].map(statusOpt => {
                        const isSelected = peeAbnormalities.includes(statusOpt.id);
                        return (
                          <button
                            key={statusOpt.id}
                            onClick={() => {
                              setPeeAbnormalities(prev => isSelected ? prev.filter(item => item !== statusOpt.id) : [...prev, statusOpt.id]);
                            }}
                            className={`jelly-touch flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-xs font-bold transition-all border ${
                              isSelected ? 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'
                            }`}
                          >
                            <span className={`w-2.5 h-2.5 rounded-full ${statusOpt.color}`}></span>
                            {statusOpt.id}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <AssignmentConfirmation />
                  <button 
                    onClick={saveRecord} 
                    disabled={peeSizeDistribution.length === 0}
                    className="jelly-touch w-full py-4 rounded-[24px] font-bold text-lg transition-all mt-2 bg-[#4A443E] text-white shadow-[0_8px_20px_rgba(74,68,62,0.2)]"
                  >
                    记下这次铲砂
                  </button>
                </div>
              ) : sheetConfig.type === 'water' ? (
                // --- 💧 喝水的三种真实记录场景 ---
                <div className="flex flex-col gap-5">
                  <div>
                    <h2 className="text-xl font-bold text-center text-[#4A443E]">这次怎么记录喝水？</h2>
                    <p className="text-xs text-[#A9A096] text-center mt-1.5">不必追求绝对准确，记录能看到的就好</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'observed', title: '观察到喝水', hint: '看到喝了几次', icon: AppIcons.Water },
                      { id: 'refill', title: '补水 / 换水', hint: '记录加水量', icon: AppIcons.Water },
                      { id: 'food_added', title: '食物里加水', hint: '湿粮或零食', icon: AppIcons.Food }
                    ].map(mode => {
                      const ModeIcon = mode.icon;
                      const isSelected = waterMode === mode.id;
                      return (
                        <button
                          key={mode.id}
                          onClick={() => {
                            setWaterMode(mode.id);
                            applyScenarioAssignment('water', foodState.tab, mode.id);
                          }}
                          className={`jelly-touch rounded-[20px] px-2 py-3 border flex flex-col items-center text-center gap-1.5 ${
                            isSelected ? 'bg-[#EAF2FF] border-[#6A98D7]/30 text-[#547CB4]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'
                          }`}
                        >
                          <ModeIcon className="w-5 h-5" />
                          <span className="text-[11px] font-bold leading-tight">{mode.title}</span>
                          <span className="text-[9px] opacity-75 leading-tight">{mode.hint}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="bg-[#FDFBF7] rounded-[26px] p-5 border border-[#F0EBE1]">
                    {waterMode === 'observed' ? (
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-bold text-[#5D554D]">今天看到喝了几次？</div>
                          <div className="text-[10px] text-[#A9A096] mt-1">只代表观察到的次数</div>
                        </div>
                        <div className="flex items-center bg-white rounded-full p-1 border border-[#F0EBE1]">
                          <button onClick={() => setWaterObservedCount(prev => Math.max(1, prev - 1))} className="jelly-touch w-9 h-9 text-xl text-[#A9A096]">-</button>
                          <div className="w-14 text-center font-bold text-[#4A443E]">{waterObservedCount}<span className="text-xs ml-1">次</span></div>
                          <button onClick={() => setWaterObservedCount(prev => Math.min(20, prev + 1))} className="jelly-touch w-9 h-9 text-xl text-[#6A98D7]">+</button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <label className="text-xs text-[#A9A096] font-semibold mb-2 block">
                            {waterMode === 'refill' ? '这次做了什么？' : '加在什么里面？'}
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {(waterMode === 'refill' ? ['补水', '完全换水'] : ['湿粮加水', '猫条兑水', '其他食物加水']).map(option => {
                              const isSelected = waterMode === 'refill' ? waterAction === option : waterFoodSource === option;
                              return (
                                <button
                                  key={option}
                                  onClick={() => waterMode === 'refill' ? setWaterAction(option) : setWaterFoodSource(option)}
                                  className={`jelly-touch px-3.5 py-2 rounded-full text-xs font-bold border ${
                                    isSelected ? 'bg-[#EAF2FF] border-[#6A98D7]/30 text-[#547CB4]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'
                                  }`}
                                >
                                  {option}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-bold text-[#5D554D]">记录水量</div>
                            <div className="text-[10px] text-[#A9A096] mt-1">
                              {waterMode === 'refill' ? '补水量不等于实际喝水量' : '记录额外加入的水'}
                            </div>
                          </div>
                          <div className="flex items-center bg-white rounded-full p-1 border border-[#F0EBE1]">
                            <button onClick={() => setWaterAmount(prev => Math.max(10, prev - 10))} className="jelly-touch w-9 h-9 text-xl text-[#A9A096]">-</button>
                            <div className="w-16 text-center font-bold text-[#4A443E]">{waterAmount}<span className="text-[10px] ml-0.5">ml</span></div>
                            <button onClick={() => setWaterAmount(prev => Math.min(3000, prev + 10))} className="jelly-touch w-9 h-9 text-xl text-[#6A98D7]">+</button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <AssignmentConfirmation />
                  <button
                    onClick={saveRecord}
                    className="jelly-touch w-full py-4 rounded-[24px] font-bold text-lg bg-[#4A443E] text-white shadow-[0_8px_20px_rgba(74,68,62,0.2)]"
                  >
                    保存喝水记录
                  </button>
                </div>
              ) : (
                // --- 通用日常面板 ---
                <div>
                  <h2 className="text-xl font-bold text-center mb-6 text-[#4A443E]">{sheetConfig.title}</h2>
                  <div className="flex flex-wrap gap-3 mb-8 min-h-[100px] content-start">
                    {(sheetConfig.type ? [...(DEFAULT_TAGS[sheetConfig.type] || []), ...(customTags[sheetConfig.type] || [])] : []).map((tag, tIdx) => (
                      <button key={`general-tag-${tag}-${tIdx}`} onClick={() => {
                        setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
                      }} className={`jelly-touch px-4 py-2.5 rounded-full text-sm font-semibold transition-colors border ${selectedTags.includes(tag) ? 'bg-[#F4EFE6] border-[#D29E7A]/30 text-[#8C7662]' : 'bg-white border-[#F0EBE1] text-[#8C8276]'}`}>{tag}</button>
                    ))}
                  </div>
                  <AssignmentConfirmation />
                  <button onClick={saveRecord} disabled={selectedTags.length === 0} className={`jelly-touch w-full mt-3 py-4 rounded-[24px] font-bold text-lg transition-all ${selectedTags.length > 0 ? 'bg-[#4A443E] text-white shadow-md' : 'bg-[#F4EFE6] text-[#A9A096] cursor-not-allowed'}`}>确认记录</button>
                </div>
              )}
              
            </div>
          </div>
        </div>

        {/* --- 库存添加与编辑 Sheet --- */}
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${stockEditor.isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" onClick={() => setStockEditor(prev => ({ ...prev, isOpen: false }))} />
          <div className={`absolute bottom-0 left-0 right-0 max-w-md mx-auto bg-[#FDFBF7] rounded-t-[40px] shadow-[0_-10px_40px_rgb(0,0,0,0.1)] transition-transform duration-300 ${stockEditor.isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="p-6 pb-10 max-h-[90vh] overflow-y-auto no-scrollbar">
              <div className="w-12 h-1.5 bg-[#EAE3D9] rounded-full mx-auto mb-6" />
              <h2 className="text-xl font-bold text-center text-[#4A443E]">{stockEditor.mode === 'create' ? '添加家庭物资' : '编辑家庭物资'}</h2>
              <p className="text-xs text-[#A9A096] text-center mt-1.5">按家里的实际习惯，记到刚刚好就可以</p>

              {stockEditor.mode === 'create' && <div className="mt-5">
                <label className="text-xs font-semibold text-[#8C8276] px-1">常用物资</label>
                <div className="flex gap-2 overflow-x-auto no-scrollbar mt-2 pb-1">
                  {[
                    { name: '猫粮', category: 'food', unit: '袋' },
                    { name: '主食罐', category: 'food', unit: '罐' },
                    { name: '猫条', category: 'snack', unit: '包' },
                    { name: '冻干', category: 'snack', unit: '袋' },
                    { name: '猫砂', category: 'cleaning', unit: '袋' },
                    { name: '驱虫药', category: 'health', unit: '支' },
                    { name: '常备药', category: 'health', unit: '盒' }
                  ].map(template => <button key={template.name} onClick={() => setStockForm(prev => ({ ...prev, ...template }))} className="shrink-0 jelly-touch px-3 py-2 rounded-full bg-white border border-[#F0EBE1] text-[11px] font-bold text-[#8C8276]">{template.name}</button>)}
                </div>
              </div>}

              <div className="mt-4">
                <label className="text-xs font-semibold text-[#8C8276] px-1">物资名称</label>
                <input value={stockForm.name} onChange={e => setStockForm(prev => ({ ...prev, name: e.target.value }))} placeholder="例如：低敏猫粮" className="mt-2 w-full bg-white border border-[#F0EBE1] rounded-[18px] px-4 py-3 text-sm text-[#5D554D] outline-none" />
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold text-[#8C8276] px-1">分类</label>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {STOCK_CATEGORIES.map(category => <button key={category.id} onClick={() => setStockForm(prev => ({ ...prev, category: category.id }))} className={`jelly-touch py-2.5 rounded-[14px] border text-[10px] font-bold ${stockForm.category === category.id ? 'bg-[#F4EFE6] border-[#D29E7A]/40 text-[#5D554D]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'}`}>{category.label}</button>)}
                </div>
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold text-[#8C8276] px-1">怎么记录余量？</label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {[{ id: 'simple', label: '简单三档', desc: '随手更新状态' }, { id: 'quantity', label: '精确数量', desc: '手动使用与补货' }].map(mode => <button key={mode.id} onClick={() => setStockForm(prev => ({ ...prev, trackingMode: mode.id }))} className={`jelly-touch p-3 rounded-[18px] border text-left ${stockForm.trackingMode === mode.id ? 'bg-white border-[#A3BCA7] shadow-sm' : 'border-[#F0EBE1]'}`}><div className="text-xs font-bold text-[#5D554D]">{mode.label}</div><div className="text-[9px] text-[#A9A096] mt-1">{mode.desc}</div></button>)}
                </div>
              </div>

              {stockForm.trackingMode === 'simple' ? <div className="mt-4 flex bg-[#F4EFE6] rounded-full p-1">
                {[{ id: 'full', label: '充足' }, { id: 'half', label: '一半' }, { id: 'low', label: '见底啦' }].map(level => <button key={level.id} onClick={() => setStockForm(prev => ({ ...prev, simpleLevel: level.id }))} className={`jelly-touch flex-1 py-2 rounded-full text-xs font-bold ${stockForm.simpleLevel === level.id ? 'bg-white text-[#5D554D] shadow-sm' : 'text-[#A9A096]'}`}>{level.label}</button>)}
              </div> : <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { key: 'quantity', label: '当前数量', min: 0, step: 0.1 },
                  { key: 'unit', label: '单位', type: 'text' },
                  { key: 'lowStockThreshold', label: '低库存提醒值', min: 0, step: 0.1 },
                  { key: 'consumeStep', label: '每次使用数量', min: 0.01, step: 0.1 }
                ].map(field => <label key={field.key} className="text-[10px] text-[#A9A096]">{field.label}<input type={field.type || 'number'} min={field.min} step={field.step} value={stockForm[field.key]} onChange={e => setStockForm(prev => ({ ...prev, [field.key]: e.target.value }))} className="mt-1.5 w-full bg-white border border-[#F0EBE1] rounded-[15px] px-3 py-2.5 text-sm font-bold text-[#5D554D] outline-none" /></label>)}
              </div>}

              <div className="mt-4 grid grid-cols-2 gap-3">
                <label className="text-[10px] text-[#A9A096]">开封日期<input type="date" value={stockForm.openedAt} onChange={e => setStockForm(prev => ({ ...prev, openedAt: e.target.value }))} className="mt-1.5 w-full bg-white border border-[#F0EBE1] rounded-[15px] px-3 py-2.5 text-xs text-[#5D554D]" /></label>
                <label className="text-[10px] text-[#A9A096]">到期日期<input type="date" value={stockForm.expiresAt} onChange={e => setStockForm(prev => ({ ...prev, expiresAt: e.target.value }))} className="mt-1.5 w-full bg-white border border-[#F0EBE1] rounded-[15px] px-3 py-2.5 text-xs text-[#5D554D]" /></label>
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold text-[#8C8276] px-1">主要给谁使用？</label>
                <p className="text-[9px] text-[#A9A096] px-1 mt-1">仅用于备注和筛选，不会根据猫咪记录自动扣减库存</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {data.cats.map(cat => {
                    const selected = stockForm.usageCatIds.includes(cat.id);
                    return <button key={cat.id} onClick={() => setStockForm(prev => ({ ...prev, usageCatIds: selected ? prev.usageCatIds.filter(id => id !== cat.id) : [...prev.usageCatIds, cat.id] }))} className={`jelly-touch px-3.5 py-2 rounded-full border text-xs font-bold ${selected ? 'bg-[#EEF2ED] border-[#A3BCA7] text-[#708875]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'}`}>{cat.name}</button>;
                  })}
                </div>
              </div>

              <textarea value={stockForm.note} onChange={e => setStockForm(prev => ({ ...prev, note: e.target.value }))} placeholder="品牌、放置位置或其他备注（可选）" className="mt-4 w-full bg-white border border-[#F0EBE1] rounded-[18px] px-4 py-3 text-sm outline-none resize-none" />

              <button onClick={() => setStockForm(prev => ({ ...prev, reminderEnabled: !prev.reminderEnabled }))} className="jelly-touch w-full mt-3 flex items-center justify-between px-4 py-3 rounded-[18px] bg-white border border-[#F0EBE1]">
                <div className="text-left"><div className="text-sm font-bold text-[#5D554D]">库存与到期提醒</div><div className="text-[9px] text-[#A9A096] mt-0.5">到期范围默认未来 7 天</div></div>
                <div className={`w-11 h-6 rounded-full p-1 transition-colors ${stockForm.reminderEnabled ? 'bg-[#A3BCA7]' : 'bg-[#EAE3D9]'}`}><div className={`w-4 h-4 bg-white rounded-full transition-transform ${stockForm.reminderEnabled ? 'translate-x-5' : ''}`} /></div>
              </button>

              <button onClick={saveStockItem} disabled={!stockForm.name.trim()} className="jelly-touch w-full mt-5 py-4 rounded-[22px] bg-[#4A443E] text-white text-base font-bold disabled:bg-[#EAE3D9] disabled:text-[#A9A096]">{stockEditor.mode === 'create' ? '添加到库存' : '保存修改'}</button>
              {stockEditor.mode === 'edit' && <button onClick={() => {
                setData(prev => ({ ...prev, stockItems: migrateStockItems(prev.stockItems, prev.stocks).map(item => item.id === stockEditor.itemId ? { ...item, active: false, updatedAt: new Date().toISOString() } : item) }));
                setStockEditor({ isOpen: false, mode: 'create', itemId: null });
              }} className="jelly-touch w-full mt-2 py-3 text-xs font-bold text-[#A9A096]">停止管理这项物资</button>}
            </div>
          </div>
        </div>

        {/* --- 库存补货 Sheet --- */}
        <div className={`fixed inset-0 z-[60] transition-opacity duration-300 ${stockAdjust.isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" onClick={() => setStockAdjust({ isOpen: false, itemId: null, amount: 1 })} />
          <div className={`absolute bottom-0 left-0 right-0 max-w-md mx-auto bg-[#FDFBF7] rounded-t-[40px] shadow-[0_-10px_40px_rgb(0,0,0,0.1)] transition-transform duration-300 ${stockAdjust.isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            {(() => {
              const item = stockItems.find(entry => entry.id === stockAdjust.itemId);
              if (!item) return <div className="p-8" />;
              const amount = Math.max(0, Number(stockAdjust.amount) || 0);
              return <div className="p-6 pb-10">
                <div className="w-12 h-1.5 bg-[#EAE3D9] rounded-full mx-auto mb-6" />
                <h2 className="text-xl font-bold text-center text-[#4A443E]">补充 {item.name}</h2>
                <div className="mt-5 bg-white rounded-[22px] border border-[#F0EBE1] p-4 text-center"><div className="text-[10px] text-[#A9A096]">当前 {item.quantity} {item.unit}</div><div className="mt-2 flex items-center justify-center gap-2"><span className="text-[#A9A096]">＋</span><input type="number" min="0" step="0.1" value={stockAdjust.amount} onChange={e => setStockAdjust(prev => ({ ...prev, amount: e.target.value }))} className="w-24 bg-[#F8F5F0] rounded-[14px] px-3 py-2 text-center text-xl font-bold text-[#5D554D] outline-none" /><span className="text-xs text-[#A9A096]">{item.unit}</span></div><div className="text-xs font-bold text-[#708875] mt-3">补货后 {Number(item.quantity || 0) + amount} {item.unit}</div></div>
                <button onClick={confirmStockRestock} className="jelly-touch w-full mt-5 py-4 rounded-[22px] bg-[#A3BCA7] text-white text-base font-bold">确认补货</button>
              </div>;
            })()}
          </div>
        </div>

        {/* --- 护理频率与自定义项目 Sheet --- */}
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${careEditor.isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" onClick={() => setCareEditor(prev => ({ ...prev, isOpen: false }))} />
          <div className={`absolute bottom-0 left-0 right-0 max-w-md mx-auto bg-[#FDFBF7] rounded-t-[40px] shadow-[0_-10px_40px_rgb(0,0,0,0.1)] transition-transform duration-300 ${careEditor.isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="p-6 pb-10">
              <div className="w-12 h-1.5 bg-[#EAE3D9] rounded-full mx-auto mb-6" />
              <h2 className="text-xl font-bold text-center text-[#4A443E]">
                {careEditor.mode === 'create' ? '添加护理项目' : `设置${careEditor.item?.name || ''}`}
              </h2>
              <p className="text-xs text-[#A9A096] text-center mt-1.5">
                常见频率只是起点，可以按家里的习惯调整
              </p>

              {careEditor.mode === 'create' && (
                <div className="mt-5">
                  <label className="text-xs font-semibold text-[#8C8276] px-1">项目属于哪里？</label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {[
                      { id: 'cat', label: `猫咪护理 · ${currentCat?.name}` },
                      { id: 'household', label: '家庭清洁' }
                    ].map(option => (
                      <button
                        key={option.id}
                        onClick={() => setCareForm(prev => ({ ...prev, target: option.id, icon: option.id === 'household' ? '🧽' : '✨' }))}
                        className={`jelly-touch py-2.5 rounded-[16px] border text-xs font-bold ${
                          careForm.target === option.id ? 'bg-white border-[#D29E7A]/40 text-[#5D554D]' : 'border-[#F0EBE1] text-[#A9A096]'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {careEditor.mode === 'create' && (
                <div className="mt-4 grid grid-cols-[72px_1fr] gap-3">
                  <div>
                    <label className="text-xs font-semibold text-[#8C8276] px-1">图标</label>
                    <input
                      value={careForm.icon}
                      onChange={(e) => setCareForm(prev => ({ ...prev, icon: e.target.value.slice(0, 2) }))}
                      className="mt-2 w-full bg-white border border-[#F0EBE1] rounded-[18px] px-3 py-3 text-center text-lg outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#8C8276] px-1">项目名称</label>
                    <input
                      value={careForm.name}
                      onChange={(e) => setCareForm(prev => ({ ...prev, name: e.target.value }))}
                      placeholder={careForm.target === 'household' ? '例如：清洁猫窝' : '例如：滴眼药'}
                      className="mt-2 w-full bg-white border border-[#F0EBE1] rounded-[18px] px-4 py-3 text-sm text-[#5D554D] outline-none"
                    />
                  </div>
                </div>
              )}

              <div className="mt-5">
                <label className="text-xs font-semibold text-[#8C8276] px-1">提醒频率</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[1, 2, 3, 7, 14, 30].map(days => (
                    <button
                      key={days}
                      onClick={() => setCareForm(prev => ({ ...prev, frequencyDays: days }))}
                      className={`jelly-touch px-3.5 py-2 rounded-full border text-xs font-bold ${
                        Number(careForm.frequencyDays) === days ? 'bg-[#F4EFE6] border-[#D29E7A]/35 text-[#8C7662]' : 'bg-white border-[#F0EBE1] text-[#A9A096]'
                      }`}
                    >
                      {days === 1 ? '每天' : `每 ${days} 天`}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-3 bg-white border border-[#F0EBE1] rounded-[18px] px-4 py-3">
                  <span className="text-xs text-[#8C8276]">自定义</span>
                  <input
                    type="number"
                    min="1"
                    max="3650"
                    value={careForm.frequencyDays}
                    onChange={(e) => setCareForm(prev => ({ ...prev, frequencyDays: e.target.value }))}
                    className="w-16 bg-[#F9F7F3] rounded-xl px-2 py-1.5 text-center text-sm font-bold text-[#5D554D] outline-none"
                  />
                  <span className="text-xs text-[#A9A096]">天</span>
                </div>
              </div>

              <button
                onClick={() => setCareForm(prev => ({ ...prev, reminderEnabled: !prev.reminderEnabled }))}
                className="jelly-touch w-full mt-4 flex items-center justify-between px-4 py-3.5 rounded-[18px] bg-white border border-[#F0EBE1]"
              >
                <div className="text-left">
                  <div className="text-sm font-bold text-[#5D554D]">到期提醒</div>
                  <div className="text-[10px] text-[#A9A096] mt-0.5">关闭后仍然可以手动完成记录</div>
                </div>
                <div className={`w-11 h-6 rounded-full p-1 transition-colors ${careForm.reminderEnabled ? 'bg-[#A3BCA7]' : 'bg-[#EAE3D9]'}`}>
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${careForm.reminderEnabled ? 'translate-x-5' : ''}`} />
                </div>
              </button>

              <button
                onClick={saveCareEditor}
                disabled={careEditor.mode === 'create' && !careForm.name.trim()}
                className="jelly-touch w-full mt-5 py-4 rounded-[22px] bg-[#4A443E] text-white text-base font-bold disabled:bg-[#EAE3D9] disabled:text-[#A9A096]"
              >
                {careEditor.mode === 'create' ? '添加项目' : '保存设置'}
              </button>
            </div>
          </div>
        </div>

        {/* --- 医疗/体重/接种 Bottom Sheet --- */}
        <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${healthSheet.isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" onClick={() => setHealthSheet({isOpen: false})} />
          <div className={`absolute bottom-0 left-0 right-0 max-w-md mx-auto bg-[#FDFBF7] rounded-t-[40px] shadow-[0_-10px_40px_rgb(0,0,0,0.1)] transition-transform duration-400 cubic-bezier(0.2, 0.8, 0.2, 1) ${healthSheet.isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="p-6 pb-10 max-h-[88vh] overflow-y-auto no-scrollbar">
              <div className="w-12 h-1.5 bg-[#EAE3D9] rounded-full mx-auto mb-6" />
              <h2 className="text-xl font-bold mb-6 text-center text-[#4A443E]">{healthSheet.title}</h2>
              
              {healthSheet.type === 'weight' ? (
                <div className="mb-5">
                  <div className="bg-white rounded-[24px] shadow-sm border border-[#F0EBE1] flex items-center justify-center p-4">
                    <input 
                      type="number" step="0.1"
                      value={healthInput}
                      onChange={(e) => setHealthInput(e.target.value)}
                      placeholder="0.0"
                      className="w-24 text-center bg-transparent border-none outline-none text-3xl font-bold text-[#5D554D] placeholder-[#D29E7A]/40"
                    />
                    <span className="text-lg font-bold text-[#A9A096] ml-2">kg</span>
                  </div>
                  <input value={healthForm.note} onChange={e => setHealthForm(prev => ({...prev, note:e.target.value}))} placeholder="备注，例如饭前称重（可选）" className="mt-3 w-full bg-white border border-[#F0EBE1] rounded-[18px] px-4 py-3 text-sm outline-none" />
                </div>
              ) : healthSheet.type === 'vaccine' ? (
                <div className="space-y-3 mb-5">
                  <div className="grid grid-cols-3 gap-2">{['猫三联','狂犬疫苗','自定义疫苗'].map(name => <button key={name} onClick={() => setHealthForm(prev => ({...prev,name}))} className={`py-2 rounded-full border text-[11px] font-bold ${healthForm.name===name?'bg-[#F4EFE6] border-[#D29E7A]/40':'bg-white border-[#F0EBE1]'}`}>{name}</button>)}</div>
                  <input value={healthForm.name} onChange={e => setHealthForm(prev => ({...prev,name:e.target.value}))} placeholder="疫苗名称" className="w-full bg-white border border-[#F0EBE1] rounded-[18px] px-4 py-3 text-sm outline-none" />
                  <div className="grid grid-cols-2 gap-3"><label className="text-xs text-[#A9A096]">接种日期<input type="date" value={healthForm.date} onChange={e => setHealthForm(prev => ({...prev,date:e.target.value}))} className="mt-1 w-full bg-white border border-[#F0EBE1] rounded-[14px] px-3 py-2 text-[#5D554D]" /></label><label className="text-xs text-[#A9A096]">下次日期<input type="date" value={healthForm.nextDate} onChange={e => setHealthForm(prev => ({...prev,nextDate:e.target.value}))} className="mt-1 w-full bg-white border border-[#F0EBE1] rounded-[14px] px-3 py-2 text-[#5D554D]" /></label></div>
                  <textarea value={healthForm.note} onChange={e => setHealthForm(prev => ({...prev,note:e.target.value}))} placeholder="医院、针次或备注（可选）" className="w-full bg-white border border-[#F0EBE1] rounded-[18px] px-4 py-3 text-sm outline-none resize-none" />
                </div>
              ) : healthSheet.type === 'reminder' ? (
                <div className="space-y-3 mb-5">
                  <input value={healthForm.title} onChange={e => setHealthForm(prev => ({...prev,title:e.target.value}))} placeholder="例如：复诊、尿检、口腔检查" className="w-full bg-white border border-[#F0EBE1] rounded-[18px] px-4 py-3 text-sm outline-none" />
                  <label className="text-xs text-[#A9A096] block">提醒日期<input type="date" value={healthForm.nextDate} onChange={e => setHealthForm(prev => ({...prev,nextDate:e.target.value}))} className="mt-1 w-full bg-white border border-[#F0EBE1] rounded-[14px] px-3 py-2 text-[#5D554D]" /></label>
                  <textarea value={healthForm.note} onChange={e => setHealthForm(prev => ({...prev,note:e.target.value}))} placeholder="备注（可选）" className="w-full bg-white border border-[#F0EBE1] rounded-[18px] px-4 py-3 text-sm outline-none resize-none" />
                </div>
              ) : (
                <div className="space-y-3 mb-5">
                  <input value={healthForm.product} onChange={e => setHealthForm(prev => ({...prev,product:e.target.value}))} placeholder="产品名称（可选）" className="w-full bg-white border border-[#F0EBE1] rounded-[18px] px-4 py-3 text-sm outline-none" />
                  <div className="grid grid-cols-2 gap-3"><label className="text-xs text-[#A9A096]">完成日期<input type="date" value={healthForm.date} onChange={e => setHealthForm(prev => ({...prev,date:e.target.value}))} className="mt-1 w-full bg-white border border-[#F0EBE1] rounded-[14px] px-3 py-2 text-[#5D554D]" /></label><label className="text-xs text-[#A9A096]">下次提醒<input type="date" value={healthForm.nextDate} onChange={e => setHealthForm(prev => ({...prev,nextDate:e.target.value}))} className="mt-1 w-full bg-white border border-[#F0EBE1] rounded-[14px] px-3 py-2 text-[#5D554D]" /></label></div>
                  <textarea value={healthForm.note} onChange={e => setHealthForm(prev => ({...prev,note:e.target.value}))} placeholder="剂量或备注（可选）" className="w-full bg-white border border-[#F0EBE1] rounded-[18px] px-4 py-3 text-sm outline-none resize-none" />
                </div>
              )}

              <button 
                onClick={saveHealthRecord} 
                disabled={(healthSheet.type === 'weight' && !healthInput) || (healthSheet.type === 'reminder' && !healthForm.title.trim())}
                className={`jelly-touch w-full py-4 rounded-[24px] font-bold text-lg transition-all duration-300 ${((healthSheet.type !== 'weight' || healthInput) && (healthSheet.type !== 'reminder' || healthForm.title.trim())) ? 'bg-[#D36B4F] text-white shadow-[0_8px_20px_rgba(211,107,79,0.2)]' : 'bg-[#EAE3D9] text-[#A9A096] cursor-not-allowed'}`}
              >
                保存档案
              </button>
            </div>
          </div>
        </div>

        {/* --- 猫咪资料编辑/添加 Sheet --- */}
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${catModal.isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" onClick={() => setCatModal({ ...catModal, isOpen: false })} />
          <div className={`absolute bottom-0 left-0 right-0 max-w-md mx-auto bg-[#FDFBF7] rounded-t-[40px] shadow-[0_-10px_40px_rgb(0,0,0,0.1)] transition-transform duration-400 cubic-bezier(0.2, 0.8, 0.2, 1) ${catModal.isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="p-6 pb-10">
              <div className="w-12 h-1.5 bg-[#EAE3D9] rounded-full mx-auto mb-6" />
              <h2 className="text-xl font-bold text-center mb-6 text-[#4A443E]">{catModal.mode === 'add' ? '迎接新主子' : '编辑主子信息'}</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#8C8276] mb-3 px-1">选择猫咪花色</label>
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-1">
                  {AVATAR_OPTIONS.map(opt => {
                    const Icon = CatAvatars[opt.id];
                    const isSelected = catForm.avatar === opt.id;
                    return (
                      <div key={opt.id} onClick={() => setCatForm(prev => ({ ...prev, avatar: opt.id }))} className={`flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer jelly-touch ${isSelected ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}>
                        <div className={`w-[60px] h-[60px] rounded-[24px] flex items-center justify-center transition-all ${isSelected ? 'bg-white shadow-md border-2 border-[#D29E7A]' : 'bg-[#F4EFE6] border-2 border-transparent'}`}>
                          <Icon className="w-10 h-10 text-[#5D554D]" />
                        </div>
                        <span className={`text-xs font-semibold ${isSelected ? 'text-[#D29E7A]' : 'text-[#A9A096]'}`}>{opt.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-[#8C8276] mb-3 px-1">主子大名</label>
                <div className="bg-white rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#F0EBE1] p-1.5">
                  <input 
                    type="text" 
                    value={catForm.name} 
                    onChange={(e) => setCatForm(prev => ({ ...prev, name: e.target.value }))} 
                    placeholder="输入猫咪名字..." 
                    className="w-full bg-transparent border-none outline-none px-4 py-3 text-[#5D554D] placeholder-[#A9A096] font-semibold" 
                  />
                </div>
              </div>

              <button 
                onClick={saveCatProfile} 
                disabled={!catForm.name || !catForm.name.trim()} 
                className={`jelly-touch w-full py-4 rounded-[24px] font-bold text-lg transition-all duration-300 ${catForm.name && catForm.name.trim() ? 'bg-[#4A443E] text-white shadow-[0_8px_20px_rgba(74,68,62,0.2)]' : 'bg-[#EAE3D9] text-[#A9A096] cursor-not-allowed'}`}
              >
                保存档案
              </button>
              {catModal.mode === 'edit' && (
                <button
                  onClick={() => setPendingDeleteCat(data.cats?.find(cat => cat.id === catModal.catId) || null)}
                  className="jelly-touch w-full mt-3 py-3 rounded-[20px] text-sm font-bold text-[#B56F62] bg-[#FDF0ED]"
                >
                  删除这只猫咪
                </button>
              )}
            </div>
          </div>
        </div>

        {/* --- 历史记录查看弹窗 (全部历史) --- */}
        <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${historyModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" onClick={() => setHistoryModalOpen(false)} />
          <div className={`absolute bottom-0 left-0 right-0 h-[85vh] max-w-md mx-auto bg-[#FDFBF7] rounded-t-[40px] shadow-[0_-10px_40px_rgb(0,0,0,0.1)] transition-transform duration-400 flex flex-col cubic-bezier(0.2, 0.8, 0.2, 1) ${historyModalOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="p-6 pb-2 shrink-0">
              <div className="w-12 h-1.5 bg-[#EAE3D9] rounded-full mx-auto mb-6" />
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#4A443E]">全部历史记录</h2>
                  <p className="text-[11px] text-[#A9A096] mt-1">{viewMode === 'family' ? '全家记录，包含共同与待确认事项' : `${currentCat?.name}的明确记录与相关共同记录`}</p>
                </div>
                <button onClick={() => setHistoryModalOpen(false)} className="w-8 h-8 flex items-center justify-center bg-[#F4EFE6] rounded-full text-[#8C8276] jelly-touch"><Icons.Plus className="w-5 h-5 rotate-45" /></button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-8 no-scrollbar">
               {sortedHistoryDates.length === 0 ? (
                 <div className="flex flex-col items-center justify-center h-40 text-[#A9A096]">
                   <Icons.Paw className="w-12 h-12 text-[#EAE3D9] mb-3" />
                   <p>这里还是一片空白哦</p>
                 </div>
               ) : (
                 sortedHistoryDates.map(date => {
                    const events = getTimelineEvents(date);
                    if (events.length === 0) return null;
                    return (
                      <div key={`history-date-${date}`} className="relative">
                        <h3 className="font-bold text-[#8C8276] mb-4 sticky top-0 bg-[#FDFBF7]/95 py-2 backdrop-blur-md z-10 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#D29E7A]" />{date}</h3>
                        <div className="space-y-4 bg-white p-5 rounded-[24px] border border-[#F0EBE1] shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                          {events.map((event, idx) => {
                             const info = TYPE_INFO[event.type] || TYPE_INFO.health;
                             const displayTitle = getRecordDisplayTitle(event, info);
                             return (
                               <div key={event.id || `history-event-${idx}`} className="flex gap-4 items-start">
                                 <div className="w-10 h-10 rounded-[14px] flex shrink-0 items-center justify-center"><info.icon className="w-10 h-10" /></div>
                                 <div className="flex-1 border-b border-[#F0EBE1]/60 pb-3 last:border-0 last:pb-0">
                                   <div className="flex items-center justify-between gap-2">
                                     <span className="font-semibold text-[#5D554D] text-[14px]">{displayTitle}</span>
                                     <div className="flex items-center gap-2">
                                       <span className="text-xs text-[#A9A096]">{event.time}</span>
                                       <button
                                         onClick={() => setPendingDeleteRecord(event)}
                                         className="jelly-touch text-[10px] text-[#B98A80] px-2 py-1 rounded-full bg-[#FDF0ED]"
                                         aria-label={`删除${displayTitle}记录`}
                                       >
                                         删除
                                       </button>
                                     </div>
                                   </div>
                                   <div className="text-xs text-[#8C8276] mt-1.5 leading-relaxed">
                                     {(event.tags && Array.isArray(event.tags)) ? event.tags.join(' · ') : ''}
                                   </div>
                                   <div className="text-[10px] text-[#A9A096] mt-1.5">
                                     {getAssignmentLabel(event.scope, event.catIds)}
                                   </div>
                                   {event.photo && (
                                     <div className="mt-2 w-14 h-14 rounded-[8px] overflow-hidden border border-[#F0EBE1]">
                                       <img src={event.photo} alt="患处" className="w-full h-full object-cover" />
                                     </div>
                                   )}
                                 </div>
                               </div>
                             )
                          })}
                        </div>
                      </div>
                    )
                 })
               )}
            </div>
          </div>
        </div>

        {/* --- 删除记录确认 --- */}
        {pendingDeleteRecord && (
          <div className="fixed inset-0 z-[70] bg-black/20 backdrop-blur-[2px] flex items-center justify-center px-6">
            <div role="dialog" aria-modal="true" aria-labelledby="delete-record-title" className="w-full max-w-sm bg-white rounded-[28px] p-6 shadow-[0_18px_60px_rgba(74,68,62,0.18)]">
              <ArtworkIcon name="remove" className="w-12 h-12 mx-auto" />
              <h2 id="delete-record-title" className="text-lg font-bold text-center text-[#4A443E] mt-3">确定删除这条记录吗？</h2>
              <p className="text-xs text-center text-[#8C8276] leading-relaxed mt-2">
                {pendingDeleteRecord.scope === 'shared' || pendingDeleteRecord.scope === 'multiple'
                  ? '这是一条共同记录，删除后其他猫咪和家庭视角中也不会再显示。'
                  : `将删除这条${getRecordDisplayTitle(pendingDeleteRecord, TYPE_INFO[pendingDeleteRecord.type] || TYPE_INFO.health)}记录。`}
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button onClick={() => setPendingDeleteRecord(null)} className="jelly-touch py-3 rounded-[18px] bg-[#F4EFE6] text-[#6E6257] text-sm font-bold">保留记录</button>
                <button onClick={confirmDeleteRecord} className="jelly-touch py-3 rounded-[18px] bg-[#B56F62] text-white text-sm font-bold">确认删除</button>
              </div>
            </div>
          </div>
        )}

        {/* --- 删除猫咪档案确认 --- */}
        {pendingDeleteCat && (
          <div className="fixed inset-0 z-[70] bg-black/20 backdrop-blur-[2px] flex items-center justify-center px-6">
            <div role="dialog" aria-modal="true" aria-labelledby="delete-cat-title" className="w-full max-w-sm bg-white rounded-[28px] p-6 shadow-[0_18px_60px_rgba(74,68,62,0.18)]">
              {React.createElement(CatAvatars[pendingDeleteCat.avatar] || CatAvatars.orange, { className: 'w-16 h-16 mx-auto' })}
              <h2 id="delete-cat-title" className="text-lg font-bold text-center text-[#4A443E] mt-3">确定删除「{pendingDeleteCat.name}」吗？</h2>
              <p className="text-xs text-center text-[#8C8276] leading-relaxed mt-2">
                档案会从猫咪列表中移除，以前的记录会继续保留，并标记为“已删除”。
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button onClick={() => setPendingDeleteCat(null)} className="jelly-touch py-3 rounded-[18px] bg-[#F4EFE6] text-[#6E6257] text-sm font-bold">先不删除</button>
                <button onClick={confirmDeleteCat} className="jelly-touch py-3 rounded-[18px] bg-[#B56F62] text-white text-sm font-bold">确认删除</button>
              </div>
            </div>
          </div>
        )}

        {undoDeletion && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] w-[calc(100%-32px)] max-w-sm bg-[#4A443E] text-white rounded-[20px] px-4 py-3 shadow-[0_12px_36px_rgba(74,68,62,0.25)] flex items-center gap-3">
            <span className="text-xs font-semibold flex-1">{undoDeletion.message}</span>
            <button onClick={undoLastDeletion} className="jelly-touch text-xs font-bold text-[#F4D9C9] px-2 py-1">撤销</button>
          </div>
        )}

      </div>
    </div>
  );
}
