"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    name: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation"
  },
  {
    name: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music"
  },
  {
    name: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image"
  },
  // {
  //   name: "Video Generation",
  //   icon: VideoIcon,
  //   color: "text-orange-500",
  //   bgColor: "bg-orange-500/10",
  //   href: "/video"
  // },
  // {
  //   name: "Code Generation",
  //   icon: Code,
  //   color: "text-gree-700",
  //   bgColor: "bg-violet-700/10",
  //   href: "/code"
  // }
]



const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Where AI becomes Art
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-center">
          Experience the power of creativity without boundaries
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)} 
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold flex-grow">
                {tool.name}
              </div>
            </div>
            <ArrowRight className="w-6 h-6" />
          </Card>
        ))}
      </div>
    </div> // after sign out reach landing page security feat
  )
}

export default DashboardPage;
