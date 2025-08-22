import { PrismaClient } from "@prisma/client";
import { categorySchema } from "../src/schemas/category";
import { postSchema } from "../src/schemas/post";

const prisma = new PrismaClient();

const posts = postSchema.array().parse([
	{
		id: 1,
		title: "高松まつり開催決定！",
		content:
			"今年も高松まつりが8月12日〜14日に開催されます。瀬戸内海を背景にした夏の風物詩をお楽しみください。",
		category: "イベント",
		author: "まつり実行委員会",
		likes: 15,
		commentCount: 2,
		createdAt: new Date("2025-01-15"),
		imageUrl: "http://localhost:3001/assets/images/event.jpg",
	},
	{
		id: 2,
		title: "讃岐うどん新店オープン",
		content:
			"香川県の老舗製麺所が新たな店舗を高松市内にオープン。こだわりの自家製麺とだしをご堪能ください。",
		category: "グルメ",
		author: "うどん太郎",
		likes: 8,
		commentCount: 1,
		createdAt: new Date("2025-01-14"),
		imageUrl: "http://localhost:3001/assets/images/gourmet.jpg",
	},
	{
		id: 3,
		title: "栗林公園の桜開花情報",
		content:
			"国の特別名勝に指定されている栗林公園では、春の訪れと共に美しい桜が開花し始めました。",
		category: "観光",
		author: "観光太郎",
		likes: 23,
		commentCount: 1,
		createdAt: new Date("2025-01-13"),
		imageUrl: "http://localhost:3001/assets/images/tourism.jpg",
	},
	{
		id: 4,
		title: "オリーブオイル新商品発売",
		content:
			"小豆島産のオリーブを使用した新商品が発売されました。香り豊かなエクストラバージンオリーブオイルです。",
		category: "グルメ",
		author: "オリーブ農家",
		likes: 12,
		commentCount: 0,
		createdAt: new Date("2025-01-12"),
		imageUrl: "http://localhost:3001/assets/images/specialty.jpg",
	},
	{
		id: 5,
		title: "瀬戸内海アート展開催",
		content:
			"瀬戸内海の島々で現代アート展が開催されます。自然と芸術の融合をお楽しみください。",
		category: "イベント",
		author: "アート愛好家",
		likes: 7,
		commentCount: 0,
		createdAt: new Date("2025-01-11"),
		imageUrl: "http://localhost:3001/assets/images/event.jpg",
	},
	{
		id: 6,
		title: "こんぴらさん参拝ガイド",
		content:
			"金刀比羅宮への参拝のコツをご紹介。階段攻略法から周辺グルメまで完全ガイドです。",
		category: "観光",
		author: "ガイド花子",
		likes: 19,
		commentCount: 0,
		createdAt: new Date("2025-01-10"),
		imageUrl: "http://localhost:3001/assets/images/tourism.jpg",
	},
]);

const categories = categorySchema.array().parse([
	{ id: 1, name: "イベント" },
	{ id: 2, name: "グルメ" },
	{ id: 3, name: "観光" },
]);

const comments = [
	{
		id: 1,
		postId: 1,
		author: "地元民",
		content: "今年も楽しみです！毎年参加しています。",
		createdAt: new Date("2025-01-15"),
	},
	{
		id: 2,
		postId: 1,
		author: "観光客",
		content: "初めて参加予定です。おすすめの観覧スポットはありますか？",
		createdAt: new Date("2025-01-15"),
	},
	// Post 2 (commentCount: 1)
	{
		id: 3,
		postId: 2,
		author: "食通",
		content: "早速行ってきました。麺のコシといりこだしの香りが最高でした！",
		createdAt: new Date("2025-01-14"),
	},
	// Post 3 (commentCount: 1)
	{
		id: 4,
		postId: 3,
		author: "写真愛好家",
		content: "今週末に行く予定です。朝の柔らかい光で桜を撮るのが楽しみ。",
		createdAt: new Date("2025-01-13"),
	},
];

async function main() {
	// 依存関係: Comment -> Post -> Category の順で削除
	await prisma.comment.deleteMany();
	await prisma.post.deleteMany();
	await prisma.category.deleteMany();

	for (const category of categories) {
		await prisma.category.create({ data: category });
	}
	console.log(`✅ ${categories.length}件のカテゴリーを挿入しました`);

	for (const post of posts) {
		await prisma.post.create({ data: post });
	}
	console.log(`✅ ${posts.length}件の投稿データを挿入しました`);

	for (const comment of comments) {
		await prisma.comment.create({ data: comment });
	}
	console.log(`✅ ${comments.length}件のコメントデータを挿入しました`);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
