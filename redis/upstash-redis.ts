import { Redis } from "@upstash/redis";

const url: string = process.env.UPSTASH_REDIS_REST_URL || "";
const token: string = process.env.UPSTASH_REDIS_REST_TOKEN || "";

export const redis = new Redis({ url, token });

// await redis.set("key", "value");
// let data = await redis.get("key");
// console.log(data);

// await redis.set("key2", "value2", { ex: 1 });

// await redis.zadd("scores", { score: 1, member: "team1" });
// data = await redis.zrange("scores", 0, 100);
// console.log(data);

// await redis.lpush("elements", "magnesium");
// data = await redis.lrange("elements", 0, 100);
// console.log(data);
