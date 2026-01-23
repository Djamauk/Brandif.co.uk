import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/layout/MobileNav";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  to?: string; // Add the 'to' prop for internal routing
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, title, children, to, ...props }, ref) => {
  const content = (
    <>
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </>
  );

  return (
    <li>
      <NavigationMenuLink asChild>
        {to ? (
          <Link
            ref={ref as React.Ref<HTMLAnchorElement>} // Cast ref for Link component
            to={to}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            {content}
          </Link>
        ) : (
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            {content}
          </a>
        )}
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-primary">
        <Link to="/">Innovate Agency</Link>
      </div>
      {!isMobile && (
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about-us" className={navigationMenuTriggerStyle()}>
                About Us
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <ListItem to="/website-design-development" title="Website Design & Development">
                    Crafting high-performance, conversion-focused websites.
                  </ListItem>
                  <ListItem to="/ai-voice-agents" title="AI Voice Agents">
                    Automate customer interactions with intelligent voice solutions.
                  </ListItem>
                  <ListItem to="/ai-chatbots" title="AI Chatbots">
                    Deploy smart chatbots for 24/7 support and lead generation.
                  </ListItem>
                  <ListItem to="/ai-solutions" title="AI Solutions Overview">
                    Explore our full suite of AI-powered business tools.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/case-studies" className={navigationMenuTriggerStyle()}>
                Case Studies
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/pricing" className={navigationMenuTriggerStyle()}>
                Pricing
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/blog" className={navigationMenuTriggerStyle()}>
                Insights
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/our-team" className={navigationMenuTriggerStyle()}>
                Our Team
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className={navigationMenuTriggerStyle()}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
      {!isMobile && (
        <Button asChild className="hidden md:inline-flex">
          <a href="https://example.com/booking" target="_blank" rel="noopener noreferrer">Book a Discovery Call</a>
        </Button>
      )}
      {isMobile && <MobileNav />}
    </header>
  );
};

export default Header;