"use client";

import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogFooter, DialogDescription } from "@/components/ui/dialog"; //constant rerouting imports is a pain in the vein.
import { useProModal } from "@/hooks/use-pro-modal";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon, Check, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";


const tools = [ //this is the same as the one in app/(dashboard)/(routes)/dashboard/page.tsx
    {           //but it's here because I don't want to import the whole page, just the tools and TODO: move tools to a separate file with different directory.
      label: "Conversation",
      icon: MessageSquare,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      label: "Music Generation",
      icon: Music,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
    }
  ]

export const ProModal = () => {
    const ProModal = useProModal();


    return(
        <Dialog open={ProModal.isOpen} onOpenChange={ProModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                            Upgrade to ArtiFusion 
                            <Badge variant="premium" className="bg-green-800 text-white    text-sm py-1">
                                CREATOR
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font medium">
                        {tools.map((tool) => (
                            <Card
                                key={tool.label}
                                className="flex items-center justify-between px-4 py-2"
                            >
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor, "bf-opacity-10")}>
                                        <tool.icon className={cn(tool.color, "w-6 h-6")} />
                                    </div>
                                    <div className="font-semibold text-sm">                                
                                        {tool.label}
                                    </div>
                                </div>
                                <Check className="text-primary w-5 h-5" />
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        size="lg"
                        variant="premium"
                        className="w-full"
                    >
                        Upgrade
                        <Zap className="w-4 h-4 ml-2 fill-white"/>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )  
}