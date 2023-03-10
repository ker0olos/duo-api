// deno-lint-ignore-file

// this file is autogenerated

export interface User {
  emailComment: boolean;
  acquisitionSurveyReason: string;
  currentCourse: CurrentCourse;
  monthlyXp: number;
  stateNeedsTOS: boolean;
  deactivated: boolean;
  shakeToReportEnabled: null;
  emailEditSuggested: boolean;
  experiments: { [key: string]: Experiment };
  emailStreakFreezeUsed: boolean;
  gems: number;
  plusDiscounts: PlusDiscount[];
  literacyAdGroup: null;
  pushEditSuggested: boolean;
  paymentMethods: any[];
  location: string;
  practiceReminderSettings: PracticeReminderSettings;
  bio: string;
  hasGoogleId: boolean;
  pushAnnouncement: boolean;
  feedbackProperties: FeedbackProperties;
  hasPhoneNumber: boolean;
  creationDate: number;
  tutorConfig: TutorConfig;
  name: string;
  webNotificationIds: any[];
  requiresParentalConsent: boolean;
  courses: Course[];
  autoUpdatePreloadedCourses: string;
  enableMicrophone: boolean;
  insiteImmersionLingots: boolean;
  totalXp: number;
  xpConfig: XpConfig;
  emailStreakSaver: boolean;
  achievements: any[];
  emailResearch: boolean;
  insiteSentenceEdited: boolean;
  gemsConfig: GemsConfig;
  canCreatePearsonClassroom: boolean;
  inviteURL: string;
  canUseModerationTools: boolean;
  betaStatus: string;
  xpGoal: number;
  privacySettings: string[];
  hasRecentActivity15: boolean;
  trackingProperties: UserTrackingProperties;
  emailSchoolsPromotion: boolean;
  health: Health;
  pushPassed: boolean;
  enableSoundEffects: boolean;
  observedClassroomIds: any[];
  emailEventsDigest: boolean;
  plusStatus: string;
  email: string;
  timezoneOffset: string;
  unconsumedGiftIds: any[];
  profileCountry: string;
  pushNightOwl: boolean;
  snoozeExpirationTime: number;
  globalAmbassadorStatus: GlobalAmbassadorStatus;
  liveOpsFeatures: any[];
  optionalFeatures: OptionalFeature[];
  pushPromotion: boolean;
  emailClubs: boolean;
  emailWordOfTheDay: boolean;
  emailSchoolsNewsletter: boolean;
  emailVerified: boolean;
  coachOutfit: string;
  emailFollow: boolean;
  xpChallenges: any[];
  joinedClassroomIds: any[];
  rewardBundles: RewardBundle[];
  emailPass: boolean;
  emailSchoolsProductUpdate: boolean;
  shouldForceConnectPhoneNumber: boolean;
  pushResurrectRewards: boolean;
  persistentNotifications: string[];
  pushSchoolsAssignment: boolean;
  roles: string[];
  _achievements: any[];
  blockedUserIds: any[];
  smsAll: boolean;
  username: string;
  weeklyXp: number;
  autoFacebookPost: boolean;
  pushStreakFreezeUsed: boolean;
  emailPromotion: boolean;
  currentCourseId: string;
  emailStreamPost: boolean;
  whatsappAll: boolean;
  adsConfig: AdsConfig;
  hasPlus: boolean;
  hasFacebookId: boolean;
  classroomLeaderboardsEnabled: boolean;
  currencyRewardBundles: RewardBundle[];
  emailDetMarketing: boolean;
  emailClassroomLeave: boolean;
  lingots: number;
  streak: number;
  motivation: string;
  countryCode: string;
  learningLanguage: string;
  shopItems: ShopItem[];
  subscriptionConfigs: SubscriptionConfig[];
  lastStreak: LastStreak;
  timezone: string;
  iterativeAbTests: IterativeAbTests;
  pushStreamPost: boolean;
  id: number;
  adsEnabled: boolean;
  fromLanguage: string;
  emailSchoolsAnnouncement: boolean;
  longestStreak: number;
  goalRewards: any[];
  emailWeeklyReport: boolean;
  pushComment: boolean;
  pushFollow: boolean;
  emailClassroomJoin: boolean;
  phoneNumber: null;
  blockerUserIds: any[];
  emailAssignment: boolean;
  emailAssignmentComplete: boolean;
  pushStreakSaver: boolean;
  picture: string;
  pushClubs: boolean;
  emailWeeklyProgressReport: boolean;
  zapsRemaining: number;
  lastResurrectionTimestamp: number;
  referralInfo: ReferralInfo;
  pushLeaderboards: boolean;
  pushHappyHour: boolean;
  pushEarlyBird: boolean;
  wechatAll: boolean;
  streakData: StreakData;
  xpGains: XpGain[];
  enableSpeaker: boolean;
  timerBoostConfig: TimerBoostConfig;
  emailAnnouncement: boolean;
  xpGoalMetToday: boolean;
}

export interface AdsConfig {
  units: Units;
  allowPersonalizedAds: boolean;
}

export interface Units {
  SESSION_END: Forum;
  TREE: Forum;
  FORUM: Forum;
}

export interface Forum {
  id: string;
  familySafe: boolean;
}

export interface Course {
  preload: boolean;
  placementTestAvailable: boolean;
  authorId: string;
  title: string;
  learningLanguage: string;
  xp: number;
  healthEnabled: boolean;
  fromLanguage: string;
  crowns: number;
  id: string;
}

export interface RewardBundle {
  rewards: Reward[];
  id: string;
  empty: boolean;
  rewardBundleType: string;
}

export interface Reward {
  tags: any[];
  consumed: boolean;
  rewardType: string;
  currency?: Currency;
  amount?: number;
  id: string;
  itemId?: string;
  items?: Item[];
}

export enum Currency {
  Lingots = 'LINGOTS',
}

export interface Item {
  count: number;
  itemType: string;
}

export interface CurrentCourse {
  status: string;
  learningLanguage: string;
  healthEnabled: boolean;
  crowns: number;
  xp: number;
  wordsLearned: number;
  id: string;
  managedInHouse: boolean;
  fromLanguage: string;
  numberOfSentences: number;
  title: string;
  smartTips: any[];
  trackingProperties: CurrentCourseTrackingProperties;
  storiesTabPromotionLocation: null;
  inLessonAvatars: any[];
  progressQuizHistory: ProgressQuizHistory[];
  finalCheckpointSession: string;
  checkpointTests: any[];
  sections: Section[];
  preload: boolean;
  extraCrowns: number;
  placementTestAvailable: boolean;
  numberOfWords: number;
  authorId: string;
  progressVersion: number;
  skills: Array<Skill[]>;
}

export interface ProgressQuizHistory {
  endTime: number;
  score: number;
  startTime: number;
  maxRowReachedDuringMigration: number;
}

export interface Section {
  checkpointFinished: boolean;
  checkpointSessionType: string;
  name: string;
  checkpointAccessible: boolean;
  summary: null;
  numRows: number;
  masteryScore: null;
  cefrLevel: null;
}

export interface Skill {
  lessons: number;
  accessible?: boolean;
  strength?: number;
  name: string;
  iconId: number;
  experimentalLessons: any[];
  explanation?: Explanation;
  skillType: SkillType;
  lastLessonPerfect: boolean;
  finishedLevels: number;
  levels: number;
  tipsAndNotes: null | string;
  finishedLessons: number;
  perfectLessonStreak: number;
  experimentIds: any[];
  urlName: string;
  shortName: string;
  hasFinalLevel: boolean;
  id: string;
  finalLevelTimeLimit: number;
}

export interface Explanation {
  url: string;
  intro: null;
  title: string;
}

export enum SkillType {
  Normal = 'NORMAL',
}

export interface CurrentCourseTrackingProperties {
  direction: string;
  took_placementtest: boolean;
  max_cefr_level: null;
  max_section_index: number;
  final_level_skill_count: number;
  gold_tree_percent: number;
  final_level_tree_percent: number;
  total_crowns: number;
  max_completed_skill_y_coord: number;
  learning_language: string;
  gold_skill_count: number;
  gold_level_skill_count: number;
  num_skills_newly_decayed: number;
  gold_level_tree_percent: number;
  num_skills_decayed: number;
  ui_language: string;
  max_tree_level: number;
}

export interface Experiment {
  name: string;
  eligible: boolean;
  contexts: string[];
  treated: boolean;
  condition: string;
  destiny: string;
  iterativeAbTestId?: string;
}

export interface FeedbackProperties {
  Username: string;
  Course: string;
  Tags: string;
}

export interface GemsConfig {
  gems: number;
  gemsPerSkill: number;
  useGems: boolean;
}

export interface GlobalAmbassadorStatus {
}

export interface Health {
  maxHearts: number;
  eligibleForFreeRefill: boolean;
  healthEnabled: boolean;
  secondsPerHeartSegment: number;
  unlimitedHeartsAvailable: boolean;
  hearts: number;
  secondsUntilNextHeartSegment: null;
  useHealth: boolean;
}

export interface IterativeAbTests {
  elliot_test_experiment_456: Experiment;
  elliot_test_experiment_321: Experiment;
  test_id_1: Experiment;
  test_id_2: Experiment;
  elliot_test_experiment_789: Experiment;
  elliot_test_experiment_123: Experiment;
}

export interface LastStreak {
  isAvailableForRepair: boolean;
  googlePlayProductId: string;
  googlePlayDevPayload: string;
  length: number;
  daysAgo: number;
  lastReachedGoal: number;
  shortenedProductId: string;
}

export interface OptionalFeature {
  status: Status;
  id: string;
}

export enum Status {
  Available = 'AVAILABLE',
  On = 'ON',
}

export interface PlusDiscount {
  secondsUntilExpiration: number;
  discountType: string;
}

export interface PracticeReminderSettings {
  ar: Ar;
  ja: Ar;
  es: Ar;
}

export interface Ar {
  timeInMinutes: number;
  pushEnabled: boolean;
  useSmartReminderTime: boolean;
  emailEnabled: boolean;
}

export interface ReferralInfo {
  inviterName: null;
  isEligibleForOffer: boolean;
  unconsumedInviteeName: null;
  unconsumedInviteeIds: any[];
  numBonusesReady: number;
  hasReachedCap: boolean;
  isEligibleForBonus: boolean;
}

export interface ShopItem {
  wagerDay?: number;
  purchaseDate: number;
  purchasePrice: number;
  purchaseId: string;
  itemName: string;
  id: string;
  quantity?: number;
}

export interface StreakData {
  churnedStreakTimestamp: number;
  longestStreak: Streak;
  startTimestamp: number;
  xpGoal: number;
  updatedTimestamp: number;
  length: number;
  updatedTimeZone: string;
  currentStreak: Streak;
  previousStreak: Streak;
}

export interface Streak {
  startDate: Date;
  length: number;
  endDate: Date;
  achieveDate?: null;
}

export interface SubscriptionConfig {
  vendorPurchaseId: string;
  isInBillingRetryPeriod: boolean;
  pauseStart: null;
  pauseEnd: null;
  productId: string;
}

export interface TimerBoostConfig {
  timerBoosts: number;
  timePerBoost: number;
  hasPurchasedTimerBoost: boolean;
  hasFreeTimerBoost: boolean;
}

export interface UserTrackingProperties {
  streak: number;
  username: string;
  creation_age: number;
  disable_leaderboards: boolean;
  has_observer: boolean;
  has_picture: boolean;
  is_age_restricted: boolean;
  acquisition_last_landing_page: string;
  acquisition_survey_reason: string;
  premium_had_previous_item: boolean;
  creation_date: Date;
  num_followers: number;
  is_pearson_user: boolean;
  placement_section_index: null;
  disable_social: boolean;
  notification_wechat_enabled: boolean;
  has_item_weekend_amulet: boolean;
  disable_clubs: boolean;
  gems: number;
  has_fullname: boolean;
  beta_shake_to_report_enabled: null;
  user_id: number;
  goal: number;
  disable_personalized_ads: boolean;
  has_item_gold_subscription: boolean;
  has_item_rupee_wager: boolean;
  disable_events: boolean;
  disable_third_party_tracking: boolean;
  disable_stream: boolean;
  disable_discussions: boolean;
  disable_kudos: boolean;
  has_item_streak_repair: boolean;
  creation_date_new: Date;
  disable_mature_words: boolean;
  skill_tree_id: string;
  has_item_premium_subscription: boolean;
  placement_depth: null;
  has_item_streak_freeze: boolean;
  direction: string;
  has_item_immersive_subscription: boolean;
  learning_reason: string;
  has_item_live_subscription: boolean;
  num_sections_unlocked: number;
  num_classrooms: number;
  creation_date_millis: number;
  beta_enrollment_status: string;
  disable_profile_country: boolean;
  distinct_id: number;
  num_skills_unlocked: number;
  has_facebook: boolean;
  num_observees: number;
  disable_friends_quests: boolean;
  acquisition_last_landing_url: string;
  notification_whatsapp_enabled: boolean;
  trial_account: boolean;
  lingots: number;
  skill_tree_level: number;
  prior_proficiency_onboarding: null;
  level: number;
  notification_sms_enabled: boolean;
  learning_language: string;
  is_self_observer: boolean;
  num_sessions_completed: number;
  has_item_streak_wager: boolean;
  disable_immersion: boolean;
  acquisition_last_landing_page_date: number;
  utc_offset: number;
  leaderboard_league: number;
  ui_language: string;
  num_item_streak_freeze: number;
  has_phone_number: boolean;
  num_following: number;
  has_location: boolean;
}

export interface TutorConfig {
  enableTutor: boolean;
}

export interface XpConfig {
  maxPlacementTestXp: number;
  maxSkillTestXp: number;
  maxCheckpointTestXp: number;
}

export interface XpGain {
  eventType: EventType | null;
  xp: number;
  skillId: SkillId | null;
  time: number;
}

export enum EventType {
  Lesson = 'LESSON',
  Practice = 'PRACTICE',
}

export enum SkillId {
  The19E20D5214268Dacf4Ca2B8C9Df59A0E = '19e20d5214268dacf4ca2b8c9df59a0e',
  The9Df87A3Cc262680B3Ec00Bd34B138137 = '9df87a3cc262680b3ec00bd34b138137',
}
