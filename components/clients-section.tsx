"use client";

import Image from "next/image";

const clients = [
    {
        name: "CTE",
        image: "/images/cte.png",
        alt: "CTE Logo",
    },
    {
        name: "LACC",
        image: "/images/lacc.png",
        alt: "LACC Logo",
    },
    {
        name: "MESA",
        image: "/images/mesa-logo_final.png",
        alt: "MESA Logo",
    },
];

export function ClientsSection() {
    return (
        <section className="container mx-auto px-4 pb-24">
            <div className="space-y-5 max-w-3xl mx-auto text-center mb-16">
                <h3 className="text-sm text-gray-600 dark:text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit">
                    Clients
                </h3>
                <h2 className="text-3xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-4xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                    Trusted by leading
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
                        {" "}
                        departments
                    </span>
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                    Join these departments from Los Angeles City College that
                    trust Dash Technologies for their attendance tracking needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {clients.map((client, i) => (
                    <div
                        key={i}
                        className="aspect-[3/2] relative bg-white dark:bg-white/5 rounded-lg overflow-hidden flex items-center justify-center p-6"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20" />
                        <Image
                            src={client.image}
                            alt={client.alt}
                            fill
                            className="object-contain p-4"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
