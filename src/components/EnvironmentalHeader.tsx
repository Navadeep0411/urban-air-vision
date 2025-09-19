import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, MapPin, Clock, AlertCircle } from "lucide-react";

const EnvironmentalHeader = () => {
  const currentTime = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="space-y-6">
      {/* Main Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 rounded-full bg-gradient-earth shadow-environmental">
            <Leaf className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-earth bg-clip-text text-transparent">
              AirWatch Delhi
            </h1>
            <p className="text-muted-foreground text-lg">
              Real-time Air Quality Monitoring & Forecasting System
            </p>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <Card className="shadow-data">
        <CardContent className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">Delhi NCR</p>
                <p className="text-sm text-muted-foreground">National Capital Region</p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">Last Updated</p>
                <p className="text-sm text-muted-foreground">{currentTime} IST</p>
              </div>
            </div>

            {/* Overall Status */}
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-air-unhealthy" />
              <div>
                <p className="font-semibold">Air Quality Status</p>
                <Badge 
                  variant="secondary"
                  className="mt-1"
                  style={{ 
                    backgroundColor: "hsl(var(--air-unhealthy) / 0.2)",
                    color: "hsl(var(--air-unhealthy))",
                    borderColor: "hsl(var(--air-unhealthy) / 0.4)"
                  }}
                >
                  Unhealthy for Sensitive Groups
                </Badge>
              </div>
            </div>

            {/* Active Monitoring */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-3 h-3 bg-air-good rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-air-good rounded-full animate-ping opacity-75"></div>
              </div>
              <div>
                <p className="font-semibold">Monitoring Status</p>
                <p className="text-sm text-air-good font-medium">Active • Real-time</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Pollutants Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-data">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-no2-color">Nitrogen Dioxide</h3>
                <p className="text-2xl font-bold">78 µg/m³</p>
                <p className="text-sm text-muted-foreground">WHO Limit: 40 µg/m³</p>
              </div>
              <div className="text-right">
                <Badge 
                  variant="secondary"
                  style={{ 
                    backgroundColor: "hsl(var(--air-unhealthy) / 0.2)",
                    color: "hsl(var(--air-unhealthy))",
                    borderColor: "hsl(var(--air-unhealthy) / 0.4)"
                  }}
                >
                  195% of limit
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-data">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-o3-color">Ground-level Ozone</h3>
                <p className="text-2xl font-bold">142 µg/m³</p>
                <p className="text-sm text-muted-foreground">WHO Limit: 100 µg/m³</p>
              </div>
              <div className="text-right">
                <Badge 
                  variant="secondary"
                  style={{ 
                    backgroundColor: "hsl(var(--air-unhealthy) / 0.2)",
                    color: "hsl(var(--air-unhealthy))",
                    borderColor: "hsl(var(--air-unhealthy) / 0.4)"
                  }}
                >
                  142% of limit
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-data">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-pm25-color">PM2.5</h3>
                <p className="text-2xl font-bold">89 µg/m³</p>
                <p className="text-sm text-muted-foreground">WHO Limit: 15 µg/m³</p>
              </div>
              <div className="text-right">
                <Badge 
                  variant="secondary"
                  style={{ 
                    backgroundColor: "hsl(var(--air-hazardous) / 0.2)",
                    color: "hsl(var(--air-hazardous))",
                    borderColor: "hsl(var(--air-hazardous) / 0.4)"
                  }}
                >
                  593% of limit
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnvironmentalHeader;