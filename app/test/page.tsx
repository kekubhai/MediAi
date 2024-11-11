'use client'

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/modetoggle"
import { Bot, MessageSquare, Settings, Menu } from "lucide-react"
import ReportComponent from "@/components/ReportComponent"
import ChatComponent from "@/components/chatcomponent"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  const { toast } = useToast()
  const [reportData, setReportData] = useState("")

  const onReportConfirmation = (data: string) => {
    setReportData(data)
    toast({
      description: "Report updated successfully!",
    })
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar for larger screens */}
      <aside className="hidden w-64 border-r bg-muted lg:block">
        <SidebarContent onReportConfirmation={onReportConfirmation} />
      </aside>

      {/* Main content area */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center space-x-4">
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <SidebarContent onReportConfirmation={onReportConfirmation} />
              </SheetContent>
            </Sheet>
            <h1 className="text-xl font-semibold text-primary">MediAi AnalyZer</h1>
          </div>
          <ModeToggle />
        </header>

        <main className="flex-1 overflow-auto p-4">
          <ChatComponent reportData={reportData} />
        </main>
      </div>
    </div>
  )
}

function SidebarContent({ onReportConfirmation }: { onReportConfirmation: (data: string) => void }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center border-b px-4">
        <Bot className="h-6 w-6 text-primary" />
        <span className="ml-2 text-lg font-semibold">AI Assistant</span>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        <Button variant="ghost" className="w-full justify-start">
          <MessageSquare className="mr-2 h-4 w-4" />
          Chat
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </nav>
      <div className="border-t p-4">
        <ReportComponent onReportConfirmation={onReportConfirmation} />
      </div>
    </div>
  )
}