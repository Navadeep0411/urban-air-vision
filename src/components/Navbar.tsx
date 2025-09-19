import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Home,
  Activity,
  TrendingUp,
  Database,
  Bell,
  Info,
  Settings,
  Menu,
  Leaf,
  ChevronDown,
  MapPin,
  BarChart3,
  AlertTriangle,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Live Monitoring", href: "/monitoring", icon: Activity },
    { name: "Forecasting", href: "/forecast", icon: TrendingUp },
    { name: "Historical Data", href: "/history", icon: Database },
    { name: "Alerts", href: "/alerts", icon: Bell, badge: "3" },
  ];

  const dataMenuItems = [
    { name: "Air Quality Map", href: "/map", icon: MapPin },
    { name: "Pollutant Analysis", href: "/analysis", icon: BarChart3 },
    { name: "Health Impact", href: "/health", icon: AlertTriangle },
  ];

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? "bg-primary text-primary-foreground"
        : "text-muted-foreground hover:text-foreground hover:bg-accent"
    }`;

  const currentAQI = 168; // Mock current AQI value
  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return "hsl(var(--air-excellent))";
    if (aqi <= 100) return "hsl(var(--air-good))";
    if (aqi <= 150) return "hsl(var(--air-moderate))";
    if (aqi <= 200) return "hsl(var(--air-unhealthy))";
    return "hsl(var(--air-hazardous))";
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-earth shadow-environmental">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-earth bg-clip-text text-transparent">
                  AirWatch Delhi
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  Environmental Monitoring System
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  <NavLink to={item.href} className={getNavLinkClass}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                    {item.badge && (
                      <Badge
                        variant="secondary"
                        className="ml-1 h-5 px-1.5 text-xs"
                        style={{
                          backgroundColor: "hsl(var(--air-unhealthy) / 0.2)",
                          color: "hsl(var(--air-unhealthy))",
                        }}
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </NavLink>
                </div>
              ))}

              {/* Data Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1">
                    <BarChart3 className="h-4 w-4" />
                    <span>Data</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  className="w-56 bg-card border shadow-data z-50"
                >
                  {dataMenuItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <NavLink
                        to={item.href}
                        className="flex items-center gap-2 w-full px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </NavLink>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <NavLink
                      to="/info"
                      className="flex items-center gap-2 w-full px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer"
                    >
                      <Info className="h-4 w-4" />
                      <span>About System</span>
                    </NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Current AQI & Settings */}
          <div className="flex items-center gap-4">
            {/* Current AQI Display */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border">
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: getAQIColor(currentAQI) }}
                />
                <div>
                  <p className="text-xs text-muted-foreground">Current AQI</p>
                  <p
                    className="text-sm font-bold"
                    style={{ color: getAQIColor(currentAQI) }}
                  >
                    {currentAQI}
                  </p>
                </div>
              </div>
            </div>

            {/* Settings */}
            <Button variant="ghost" size="sm" asChild className="hidden md:flex">
              <NavLink to="/settings">
                <Settings className="h-4 w-4" />
              </NavLink>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-card border-l">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    AirWatch Delhi
                  </SheetTitle>
                </SheetHeader>
                
                <div className="mt-6 space-y-4">
                  {/* Mobile AQI Display */}
                  <div className="p-4 rounded-lg bg-background border">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full animate-pulse"
                        style={{ backgroundColor: getAQIColor(currentAQI) }}
                      />
                      <div>
                        <p className="text-sm text-muted-foreground">Current AQI</p>
                        <p
                          className="text-lg font-bold"
                          style={{ color: getAQIColor(currentAQI) }}
                        >
                          {currentAQI} - Unhealthy
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="space-y-1">
                    {navigationItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "text-card-foreground hover:bg-accent"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                        {item.badge && (
                          <Badge
                            variant="secondary"
                            className="ml-auto h-5 px-1.5 text-xs"
                            style={{
                              backgroundColor: "hsl(var(--air-unhealthy) / 0.2)",
                              color: "hsl(var(--air-unhealthy))",
                            }}
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </NavLink>
                    ))}

                    {/* Mobile Data Menu */}
                    <div className="pt-2">
                      <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Data & Analysis
                      </p>
                      {dataMenuItems.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                              isActive
                                ? "bg-primary text-primary-foreground"
                                : "text-card-foreground hover:bg-accent"
                            }`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </NavLink>
                      ))}
                    </div>

                    {/* Mobile Settings & Info */}
                    <div className="pt-2 border-t">
                      <NavLink
                        to="/info"
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "text-card-foreground hover:bg-accent"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        <Info className="h-4 w-4" />
                        <span>About System</span>
                      </NavLink>
                      <NavLink
                        to="/settings"
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "text-card-foreground hover:bg-accent"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;