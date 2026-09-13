export type Sentiment = "Positive" | "Negative" | "Neutral";

export interface Post {
  id: number;
  time: string; // HH:mm
  date: string;
  platform: string;
  user: string;
  followers: number;
  text: string;
  likes: number;
  retweets: number;
  sentiment: Sentiment;
}

export const posts: Post[] = [
  { id: 1, time: "10:15", date: "01-07-2024", platform: "Twitter", user: "user_1", followers: 1200, text: "Absolutely love the new XPhone battery life, lasts all day!", likes: 45, retweets: 12, sentiment: "Positive" },
  { id: 2, time: "10:20", date: "01-07-2024", platform: "Twitter", user: "user_2", followers: 540, text: "The camera on the new XPhone is disappointing, too much noise.", likes: 12, retweets: 4, sentiment: "Negative" },
  { id: 3, time: "10:25", date: "01-07-2024", platform: "Twitter", user: "user_3", followers: 980, text: "Got my XPhone yesterday. It's okay so far.", likes: 8, retweets: 2, sentiment: "Neutral" },
  { id: 4, time: "10:30", date: "01-07-2024", platform: "Twitter", user: "user_4", followers: 5000, text: "XPhone performance is blazing fast!", likes: 60, retweets: 20, sentiment: "Positive" },
  { id: 5, time: "10:35", date: "01-07-2024", platform: "Twitter", user: "user_5", followers: 150, text: "Battery drains too quickly on my new XPhone.", likes: 5, retweets: 3, sentiment: "Negative" },
  { id: 6, time: "10:40", date: "01-07-2024", platform: "Twitter", user: "user_6", followers: 2200, text: "Not sure what to think about the XPhone yet.", likes: 3, retweets: 1, sentiment: "Neutral" },
  { id: 7, time: "10:45", date: "01-07-2024", platform: "Twitter", user: "user_7", followers: 750, text: "Best phone I've used in years. Smooth UI.", likes: 40, retweets: 10, sentiment: "Positive" },
  { id: 8, time: "10:50", date: "01-07-2024", platform: "Twitter", user: "user_8", followers: 430, text: "XPhone keeps overheating when gaming.", likes: 7, retweets: 3, sentiment: "Negative" },
  { id: 9, time: "10:55", date: "01-07-2024", platform: "Twitter", user: "user_9", followers: 900, text: "Just bought the XPhone, will test it this week.", likes: 4, retweets: 1, sentiment: "Neutral" },
  { id: 10, time: "11:00", date: "01-07-2024", platform: "Twitter", user: "user_10", followers: 3100, text: "Loving the design and camera!", likes: 55, retweets: 18, sentiment: "Positive" },
  { id: 11, time: "11:05", date: "01-07-2024", platform: "Twitter", user: "user_11", followers: 800, text: "The new update made my XPhone slower.", likes: 10, retweets: 3, sentiment: "Negative" },
  { id: 12, time: "11:10", date: "01-07-2024", platform: "Twitter", user: "user_12", followers: 120, text: "Pretty decent phone for the price.", likes: 6, retweets: 2, sentiment: "Neutral" },
  { id: 13, time: "11:15", date: "01-07-2024", platform: "Twitter", user: "user_13", followers: 2000, text: "Amazing display quality!", likes: 48, retweets: 14, sentiment: "Positive" },
  { id: 14, time: "11:20", date: "01-07-2024", platform: "Twitter", user: "user_14", followers: 600, text: "My XPhone freezes randomly.", likes: 9, retweets: 2, sentiment: "Negative" },
  { id: 15, time: "11:25", date: "01-07-2024", platform: "Twitter", user: "user_15", followers: 450, text: "Still exploring features.", likes: 3, retweets: 1, sentiment: "Neutral" },
  { id: 16, time: "11:30", date: "01-07-2024", platform: "Twitter", user: "user_16", followers: 3300, text: "Super impressed with the battery optimization.", likes: 52, retweets: 16, sentiment: "Positive" },
  { id: 17, time: "11:35", date: "01-07-2024", platform: "Twitter", user: "user_17", followers: 700, text: "Camera struggles in low light.", likes: 11, retweets: 3, sentiment: "Negative" },
  { id: 18, time: "11:40", date: "01-07-2024", platform: "Twitter", user: "user_18", followers: 900, text: "Feels like a normal phone.", likes: 4, retweets: 1, sentiment: "Neutral" },
  { id: 19, time: "11:45", date: "01-07-2024", platform: "Twitter", user: "user_19", followers: 5000, text: "The new XPhone is a beast!", likes: 65, retweets: 22, sentiment: "Positive" },
  { id: 20, time: "11:50", date: "01-07-2024", platform: "Twitter", user: "user_20", followers: 350, text: "Battery heating issues again.", likes: 6, retweets: 2, sentiment: "Negative" },
  { id: 21, time: "11:55", date: "01-07-2024", platform: "Twitter", user: "user_21", followers: 1000, text: "Not bad, not great.", likes: 5, retweets: 1, sentiment: "Neutral" },
  { id: 22, time: "12:00", date: "01-07-2024", platform: "Twitter", user: "user_22", followers: 2500, text: "Love the fast charging!", likes: 58, retweets: 19, sentiment: "Positive" },
  { id: 23, time: "12:05", date: "01-07-2024", platform: "Twitter", user: "user_23", followers: 600, text: "Touchscreen feels unresponsive sometimes.", likes: 8, retweets: 2, sentiment: "Negative" },
  { id: 24, time: "12:10", date: "01-07-2024", platform: "Twitter", user: "user_24", followers: 800, text: "Trying out the camera today.", likes: 4, retweets: 1, sentiment: "Neutral" },
  { id: 25, time: "12:15", date: "01-07-2024", platform: "Twitter", user: "user_25", followers: 1500, text: "Great audio quality!", likes: 50, retweets: 15, sentiment: "Positive" },
  { id: 26, time: "12:20", date: "01-07-2024", platform: "Twitter", user: "user_26", followers: 300, text: "Apps keep crashing.", likes: 7, retweets: 2, sentiment: "Negative" },
  { id: 27, time: "12:25", date: "01-07-2024", platform: "Twitter", user: "user_27", followers: 950, text: "Feels smooth so far.", likes: 5, retweets: 1, sentiment: "Neutral" },
  { id: 28, time: "12:30", date: "01-07-2024", platform: "Twitter", user: "user_28", followers: 4000, text: "Best flagship this year!", likes: 62, retweets: 21, sentiment: "Positive" },
  { id: 29, time: "12:35", date: "01-07-2024", platform: "Twitter", user: "user_29", followers: 500, text: "Battery life is terrible.", likes: 6, retweets: 2, sentiment: "Negative" },
  { id: 30, time: "12:40", date: "01-07-2024", platform: "Twitter", user: "user_30", followers: 1100, text: "Still learning features.", likes: 3, retweets: 1, sentiment: "Neutral" },
  { id: 31, time: "12:45", date: "01-07-2024", platform: "Twitter", user: "user_31", followers: 2500, text: "Amazing gaming performance!", likes: 59, retweets: 18, sentiment: "Positive" },
  { id: 32, time: "12:50", date: "01-07-2024", platform: "Twitter", user: "user_32", followers: 700, text: "Phone heats up quickly.", likes: 9, retweets: 3, sentiment: "Negative" },
  { id: 33, time: "12:55", date: "01-07-2024", platform: "Twitter", user: "user_33", followers: 900, text: "Neutral experience so far.", likes: 4, retweets: 1, sentiment: "Neutral" },
  { id: 34, time: "13:00", date: "01-07-2024", platform: "Twitter", user: "user_34", followers: 5000, text: "Love the camera clarity!", likes: 63, retweets: 20, sentiment: "Positive" },
  { id: 35, time: "13:05", date: "01-07-2024", platform: "Twitter", user: "user_35", followers: 350, text: "Lagging issues after update.", likes: 7, retweets: 2, sentiment: "Negative" },
  { id: 36, time: "13:10", date: "01-07-2024", platform: "Twitter", user: "user_36", followers: 1000, text: "Feels okay.", likes: 5, retweets: 1, sentiment: "Neutral" },
  { id: 37, time: "13:15", date: "01-07-2024", platform: "Twitter", user: "user_37", followers: 3000, text: "Battery lasts two days!", likes: 70, retweets: 25, sentiment: "Positive" },
  { id: 38, time: "13:20", date: "01-07-2024", platform: "Twitter", user: "user_38", followers: 450, text: "Camera is below average.", likes: 8, retweets: 2, sentiment: "Negative" },
  { id: 39, time: "13:25", date: "01-07-2024", platform: "Twitter", user: "user_39", followers: 900, text: "Still testing.", likes: 3, retweets: 1, sentiment: "Neutral" },
  { id: 40, time: "13:30", date: "01-07-2024", platform: "Twitter", user: "user_40", followers: 3500, text: "Love the sleek design!", likes: 61, retweets: 19, sentiment: "Positive" },
  { id: 41, time: "13:35", date: "01-07-2024", platform: "Twitter", user: "user_41", followers: 600, text: "Phone restarts randomly.", likes: 10, retweets: 3, sentiment: "Negative" },
  { id: 42, time: "13:40", date: "01-07-2024", platform: "Twitter", user: "user_42", followers: 800, text: "Nothing special yet.", likes: 4, retweets: 1, sentiment: "Neutral" },
  { id: 43, time: "13:45", date: "01-07-2024", platform: "Twitter", user: "user_43", followers: 2000, text: "Amazing camera colors!", likes: 55, retweets: 17, sentiment: "Positive" },
  { id: 44, time: "13:50", date: "01-07-2024", platform: "Twitter", user: "user_44", followers: 500, text: "Battery drains fast.", likes: 7, retweets: 2, sentiment: "Negative" },
  { id: 45, time: "13:55", date: "01-07-2024", platform: "Twitter", user: "user_45", followers: 1000, text: "Neutral thoughts.", likes: 4, retweets: 1, sentiment: "Neutral" },
  { id: 46, time: "14:00", date: "01-07-2024", platform: "Twitter", user: "user_46", followers: 3000, text: "Super smooth UI!", likes: 60, retweets: 20, sentiment: "Positive" },
  { id: 47, time: "14:05", date: "01-07-2024", platform: "Twitter", user: "user_47", followers: 450, text: "Heating issues persist.", likes: 8, retweets: 3, sentiment: "Negative" },
  { id: 48, time: "14:10", date: "01-07-2024", platform: "Twitter", user: "user_48", followers: 900, text: "Still exploring.", likes: 3, retweets: 1, sentiment: "Neutral" },
  { id: 49, time: "14:15", date: "01-07-2024", platform: "Twitter", user: "user_49", followers: 5000, text: "Best phone ever!", likes: 72, retweets: 26, sentiment: "Positive" },
];

export const topicKeywords: Record<string, string[]> = {
  battery: ["battery", "charging", "drains", "drain"],
  camera: ["camera", "photo", "low light", "clarity", "colors"],
  performance: ["performance", "fast", "blazing", "slower", "lag", "lagging"],
  design: ["design", "sleek", "display"],
  heating: ["overheating", "heats", "heating"],
  ui: ["ui", "smooth", "touchscreen"],
  stability: ["crashing", "freezes", "restarts"],
  audio: ["audio"],
  price: ["price"],
  gaming: ["gaming"],
  update: ["update"],
};

export function formatTime12h(time: string) {
  const [h, m] = time.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, "0")} ${suffix}`;
}
