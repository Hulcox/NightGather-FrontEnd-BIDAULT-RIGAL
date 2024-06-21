import { cn } from "@/lib/utils";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const Header = () => {
  return (
    <div className="m-auto w-3/4 p-8">
      <div className="flex justify-between items-center">
        <div>
          <div
            className={cn(
              "group relative mx-auto text-4xl font-bold backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] dark:bg-black/40"
            )}
          >
            <h1
              className={cn(
                `inline animate-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
              )}
            >
              Night Gather
            </h1>
          </div>
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href={"/home"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Soirées
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={"/my-parties"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Mes soirée
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={"/friends"} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Mes amis
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <h3>CCCCCCCNNNNNN</h3>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="h-px bg-foreground w-full my-2"></div>
    </div>
  );
};

export default Header;
