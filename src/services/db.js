// Swords
import sword_1 from "@/assets/images/swords/sword-1.png";
import sword_2 from "@/assets/images/swords/sword-2.png";
import sword_3 from "@/assets/images/swords/sword-3.png";
import sword_4 from "@/assets/images/swords/sword-4.png";
import sword_5 from "@/assets/images/swords/sword-5.png";
import sword_6 from "@/assets/images/swords/sword-6.png";
import sword_7 from "@/assets/images/swords/sword-7.png";
import sword_8 from "@/assets/images/swords/sword-8.png";
import sword_9 from "@/assets/images/swords/sword-9.png";
import sword_10 from "@/assets/images/swords/sword-10.png";
import sword_11 from "@/assets/images/swords/sword-11.png";
import sword_12 from "@/assets/images/swords/sword-12.png";
import sword_13 from "@/assets/images/swords/sword-13.png";
import sword_14 from "@/assets/images/swords/sword-14.png";
import sword_15 from "@/assets/images/swords/sword-15.png";
import sword_16 from "@/assets/images/swords/sword-16.png";

// Axes
import axe_1 from "@/assets/images/axes/axe-1.png";
import axe_2 from "@/assets/images/axes/axe-2.png";
import axe_3 from "@/assets/images/axes/axe-3.png";
import axe_4 from "@/assets/images/axes/axe-4.png";
import axe_5 from "@/assets/images/axes/axe-5.png";
import axe_6 from "@/assets/images/axes/axe-6.png";
import axe_7 from "@/assets/images/axes/axe-7.png";
import axe_8 from "@/assets/images/axes/axe-8.png";
import axe_9 from "@/assets/images/axes/axe-9.png";

// Bows
import bow_1 from "@/assets/images/bows/bow-1.png";
import bow_2 from "@/assets/images/bows/bow-2.png";
import bow_3 from "@/assets/images/bows/bow-3.png";
import bow_4 from "@/assets/images/bows/bow-4.png";
import bow_5 from "@/assets/images/bows/bow-5.png";
import bow_6 from "@/assets/images/bows/bow-6.png";
import bow_7 from "@/assets/images/bows/bow-7.png";
import bow_8 from "@/assets/images/bows/bow-8.png";
import bow_9 from "@/assets/images/bows/bow-9.png";
import bow_10 from "@/assets/images/bows/bow-10.png";
import bow_11 from "@/assets/images/bows/bow-11.png";
import bow_12 from "@/assets/images/bows/bow-12.png";
import bow_13 from "@/assets/images/bows/bow-13.png";
import bow_14 from "@/assets/images/bows/bow-14.png";
import bow_15 from "@/assets/images/bows/bow-15.png";

// Crossbows
import crossbow_1 from "@/assets/images/crossbows/crossbow-1.png";
import crossbow_2 from "@/assets/images/crossbows/crossbow-2.png";
import crossbow_3 from "@/assets/images/crossbows/crossbow-3.png";
import crossbow_4 from "@/assets/images/crossbows/crossbow-4.png";
import crossbow_5 from "@/assets/images/crossbows/crossbow-5.png";
import crossbow_6 from "@/assets/images/crossbows/crossbow-6.png";
import crossbow_7 from "@/assets/images/crossbows/crossbow-7.png";
import crossbow_8 from "@/assets/images/crossbows/crossbow-8.png";

const SwordRarity = {
  UNCOMMON: "uncommon", // 0 - 1000
  RARE: "rare", // 1000 - 3000
  EPIC: "epic", // 3000 - 7000
  LEGENDARY: "legendary", // 7000 - 16000
  MYTHIC: "mythic", // 16000+
};

const swords = [
  {
    id: 0,
    name: "Elven sword",
    img: sword_1,
    price: 250,
    rarity: SwordRarity.UNCOMMON,
    type: "sword",
  },
  {
    id: 2,
    name: "Rubedite Sword",
    img: sword_2,
    price: 1560,
    rarity: SwordRarity.RARE,
    type: "sword",
  },
  {
    id: 3,
    name: "Voidsteel Sword",
    img: sword_3,
    price: 970,
    rarity: SwordRarity.UNCOMMON,
    type: "sword",
  },
  {
    id: 4,
    name: "Galatite Sword",
    img: sword_4,
    price: 3300,
    rarity: SwordRarity.EPIC,
    type: "sword",
  },
  {
    id: 5,
    name: "Kusanagi Sword",
    img: sword_5,
    price: 15900,
    rarity: SwordRarity.LEGENDARY,
    type: "sword",
  },
  {
    id: 6,
    name: "Dwarven Sword",
    img: sword_6,
    price: 800,
    rarity: SwordRarity.UNCOMMON,
    type: "sword",
  },
  {
    id: 7,
    name: "Orichalcum Sword",
    img: sword_7,
    price: 4500,
    rarity: SwordRarity.EPIC,
    type: "sword",
  },
  {
    id: 8,
    name: "Titan's Sword",
    img: sword_8,
    price: 2400,
    rarity: SwordRarity.RARE,
    type: "sword",
  },
  {
    id: 9,
    name: "Magic Sword",
    img: sword_9,
    price: 11300,
    rarity: SwordRarity.LEGENDARY,
    type: "sword",
  },
  {
    id: 10,
    name: "Thunderstrike",
    img: sword_10,
    price: 6350,
    rarity: SwordRarity.EPIC,
    type: "sword",
  },
  {
    id: 11,
    name: "Whisperwind",
    img: sword_11,
    price: 5700,
    rarity: SwordRarity.EPIC,
    type: "sword",
  },
  {
    id: 12,
    name: "Swords of eternity",
    img: sword_12,
    price: 27800,
    rarity: SwordRarity.MYTHIC,
    type: "sword",
  },
  {
    id: 13,
    name: "Calcinium Sword",
    img: sword_13,
    price: 440,
    rarity: SwordRarity.UNCOMMON,
    type: "sword",
  },
  {
    id: 14,
    name: "Shadow Striker Sword",
    img: sword_14,
    price: 31600,
    rarity: SwordRarity.MYTHIC,
    type: "sword",
  },
  {
    id: 15,
    name: "Silver Sword",
    img: sword_15,
    price: 1900,
    rarity: SwordRarity.RARE,
    type: "sword",
  },
  {
    id: 16,
    name: "Ebon Sword",
    img: sword_16,
    price: 670,
    rarity: SwordRarity.UNCOMMON,
    type: "sword",
  },
];

const axes = [
  {
    id: 0,
    name: "Artisan's Axe",
    img: axe_1,
    price: 460,
    rarity: "uncommon",
    type: "axe",
  },
  {
    id: 2,
    name: "Magic Axe",
    img: axe_2,
    price: 8800,
    rarity: SwordRarity.LEGENDARY,
    type: "axe",
  },
  {
    id: 3,
    name: "Bloodied Axe",
    img: axe_3,
    price: 6800,
    rarity: SwordRarity.EPIC,
    type: "axe",
  },
  {
    id: 4,
    name: "Mithril Axe",
    img: axe_4,
    price: 1100,
    rarity: SwordRarity.RARE,
    type: "axe",
  },
  {
    id: 5,
    name: "Axe of the Fallen God",
    img: axe_5,
    price: 3500,
    rarity: SwordRarity.EPIC,
    type: "axe",
  },
  {
    id: 6,
    name: "Hand Axe",
    img: axe_6,
    price: 310,
    rarity: SwordRarity.UNCOMMON,
    type: "axe",
  },
  {
    id: 7,
    name: "Thunder Axe",
    img: axe_7,
    price: 2650,
    rarity: SwordRarity.RARE,
    type: "axe",
  },
  {
    id: 8,
    name: "Axe of Destiny",
    img: axe_8,
    price: 690,
    rarity: SwordRarity.UNCOMMON,
    type: "axe",
  },
  {
    id: 9,
    name: "Void Axe",
    img: axe_9,
    price: 1600,
    rarity: SwordRarity.RARE,
    type: "axe",
  },
];

const bows = [
  {
    id: 0,
    name: "Bow of Accuracy",
    img: bow_1,
    price: 220,
    rarity: SwordRarity.UNCOMMON,
    type: "bow",
  },
  {
    id: 2,
    name: "Sturdy Bow",
    img: bow_2,
    price: 1180,
    rarity: SwordRarity.RARE,
    type: "bow",
  },
  {
    id: 3,
    name: "Long Bow",
    img: bow_3,
    price: 800,
    rarity: SwordRarity.UNCOMMON,
    type: "bow",
  },
  {
    id: 4,
    name: "Bow of Swiftness",
    img: bow_4,
    price: 1300,
    rarity: SwordRarity.RARE,
    type: "bow",
  },
  {
    id: 5,
    name: "Elven Bow",
    img: bow_5,
    price: 12600,
    rarity: SwordRarity.LEGENDARY,
    type: "bow",
  },
  {
    id: 6,
    name: "Whispering Bow",
    img: bow_6,
    price: 5200,
    rarity: SwordRarity.EPIC,
    type: "bow",
  },
  {
    id: 7,
    name: "Pathfinder's Bow",
    img: bow_7,
    price: 28000,
    rarity: SwordRarity.MYTHIC,
  },
  {
    id: 8,
    name: "Sun Bow",
    img: bow_8,
    price: 780,
    rarity: SwordRarity.UNCOMMON,
    type: "bow",
  },
  {
    id: 9,
    name: "Life bow",
    img: bow_9,
    price: 1500,
    rarity: SwordRarity.RARE,
    type: "bow",
  },
  {
    id: 10,
    name: "Storm Bow",
    img: bow_10,
    price: 4270,
    rarity: SwordRarity.EPIC,
    type: "bow",
  },
  {
    id: 11,
    name: "Odin's Bow",
    img: bow_11,
    price: 1580,
    rarity: SwordRarity.RARE,
    type: "bow",
  },
  {
    id: 12,
    name: "Sinew Bow",
    img: bow_12,
    price: 500,
    rarity: SwordRarity.UNCOMMON,
    type: "bow",
  },
  {
    id: 13,
    name: "Apollo's Bow",
    img: bow_13,
    price: 1100,
    rarity: SwordRarity.RARE,
    type: "bow",
  },
  {
    id: 14,
    name: "Dragon Bow",
    img: bow_14,
    price: 1900,
    rarity: SwordRarity.RARE,
    type: "bow",
  },
  {
    id: 15,
    name: "Giant Bow",
    img: bow_15,
    price: 610,
    rarity: SwordRarity.UNCOMMON,
  },
];

const crossbows = [
  {
    id: 0,
    name: "Hand Crossbow",
    img: crossbow_1,
    price: 500,
    rarity: SwordRarity.UNCOMMON,
    type: "crossbow",
  },
  {
    id: 2,
    name: "Heavy Crossbow",
    img: crossbow_2,
    price: 900,
    rarity: SwordRarity.UNCOMMON,
    type: "crossbow",
  },
  {
    id: 3,
    name: "Shadow Crossbow",
    img: crossbow_3,
    price: 10000,
    rarity: SwordRarity.LEGENDARY,
    type: "crossbow",
  },
  {
    id: 4,
    name: "Griffin Crossbow",
    img: crossbow_4,
    price: 7000,
    rarity: SwordRarity.EPIC,
    type: "crossbow",
  },
  {
    id: 5,
    name: "Pathfinder's Crossbow",
    img: crossbow_5,
    price: 1700,
    rarity: SwordRarity.RARE,
    type: "crossbow",
  },
  {
    id: 6,
    name: "Crossbow of the Eternal Hunt",
    img: crossbow_6,
    price: 22500,
    rarity: SwordRarity.MYTHIC,
    type: "crossbow",
  },
  {
    id: 7,
    name: "Bonecrusher",
    img: crossbow_7,
    price: 1300,
    rarity: SwordRarity.RARE,
    type: "crossbow",
  },
  {
    id: 8,
    name: "Storm Crossbow",
    img: crossbow_8,
    price: 5800,
    rarity: SwordRarity.EPIC,
    type: "crossbow",
  },
];

export default {swords, axes, bows, crossbows};
