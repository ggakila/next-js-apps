import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ShopItems from "@/components/ShopItems";

export default function Home() {
	return (
		<main
			className={"flex gap-20 h-full w-full flex-col items-center"}
		>
			<Header/>
			<Hero className=""/>
			<ShopItems />
		</main>
	);
}
