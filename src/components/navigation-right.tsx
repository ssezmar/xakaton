import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  FolderKanban,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProfileDropdownMenu } from "@/components/profile-dropdown"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { NavigationMenu } from "@radix-ui/react-navigation-menu"

export function NavigationRight() {
  return (
    <><NavigationMenu>
        <div className="flex justify-end">
          <div className="m-[10px]">
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <ModeToggle/>
            </ThemeProvider>
          </div>
          
            <Button className="m-[10px]"  variant="outline" size="icon">
              <Settings className="h-[1.2rem] w-[1.2rem]"/>
              <span className="sr-only">Settings</span>
            </Button>
            <div className="m-[10px]">
            <ProfileDropdownMenu/>
            </div>
            
        </div>
    </NavigationMenu>
      
      
    </>
    

  )
}
