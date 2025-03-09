import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { developers } from "@/config/team";

export function Developers() {
  return (
    <div className="py-12 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((developer, index) => (
            <div
              key={index}
              className="flex bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-1/3 relative">
                <Image
                  src={developer.image}
                  alt={developer.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {developer.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {developer.role}
                  </p>
                </div>
                <div className="flex gap-4 mt-4">
                  {developer.github && (
                    <a
                      href={developer.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {developer.linkedin && (
                    <a
                      href={developer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
