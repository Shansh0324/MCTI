import Button from "@/components/Button";
import designExample1Image from "../assets/images/metamask.png";
import designExample2Image from "../assets/images/tokens.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-72 -top-5 hidden lg:block">
                    <Image src={designExample1Image} alt="Design 1 image" />
                </div>
                <div className="absolute -right-24 -top-16 hidden lg:block">
                    <Image
                        src={designExample2Image}
                        alt="Design 2 image"
                        width={320}
                        height={220}
                        style={{
                            width: "320px",
                            height: "300px",
                            objectFit: "contain",
                        }}
                    />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-4 px-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl text-white-950 font-semibold rounded-tl-none rounded-br-none">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <div className="absolute left-36 bottom-0 hidden lg:block">
                    <Pointer name="Metamask" />
                </div>
                <div className="absolute right-1 bottom-40 hidden lg:block rotate-12">
                    <Pointer name="Bitcoin" color="red" />
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessely
                </h1>
                <p className="text-center text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
                    Design tools shouldn&apos;t slow you down. Layers combines
                    powerful features with an intutive interface that keeps you
                    in your creative flow.
                </p>
                <form className="flex flex-col sm:flex-row border border-border rounded-full p-2 mt-8 max-w-lg mx-auto gap-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 flex-1 min-w-0"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full sm:w-auto"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
