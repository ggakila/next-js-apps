import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<main
			className={"flex h-screen flex-col items-center p-0"}
		>
			<Header/>
			<Hero/>
		</main>
	);
}
