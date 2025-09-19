import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wind, AlertTriangle } from "lucide-react";

const AirQualityMap = () => {
  // Mock data for demonstration
  const pollutionData = [
    { id: 1, location: "Delhi Central", no2: 85, o3: 120, lat: 28.6139, lng: 77.2090, level: "unhealthy" },
    { id: 2, location: "Gurgaon", no2: 65, o3: 95, lat: 28.4595, lng: 77.0266, level: "moderate" },
    { id: 3, location: "Noida", no2: 75, o3: 110, lat: 28.5355, lng: 77.3910, level: "unhealthy" },
    { id: 4, location: "Faridabad", no2: 70, o3: 100, lat: 28.4089, lng: 77.3178, level: "moderate" },
  ];

  const getAirQualityColor = (level: string) => {
    switch (level) {
      case "excellent": return "hsl(var(--air-excellent))";
      case "good": return "hsl(var(--air-good))";
      case "moderate": return "hsl(var(--air-moderate))";
      case "unhealthy": return "hsl(var(--air-unhealthy))";
      case "hazardous": return "hsl(var(--air-hazardous))";
      default: return "hsl(var(--muted))";
    }
  };

  const getAirQualityLabel = (level: string) => {
    switch (level) {
      case "excellent": return "Excellent";
      case "good": return "Good";
      case "moderate": return "Moderate";
      case "unhealthy": return "Unhealthy";
      case "hazardous": return "Hazardous";
      default: return "Unknown";
    }
  };

  return (
    <Card className="w-full shadow-environmental">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Delhi NCR - Air Quality Concentration Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Map Container - Placeholder for actual map implementation */}
        <div className="relative h-96 bg-gradient-to-br from-background via-muted/30 to-accent/20 rounded-lg border overflow-hidden">
          {/* Map background pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" className="text-muted-foreground/20">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Pollution data points */}
          {pollutionData.map((point, index) => (
            <div
              key={point.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{
                left: `${25 + index * 20}%`,
                top: `${30 + (index % 2) * 30}%`,
              }}
            >
              {/* Pollution circle */}
              <div
                className="w-8 h-8 rounded-full border-2 border-background shadow-lg animate-pulse"
                style={{
                  backgroundColor: getAirQualityColor(point.level),
                  boxShadow: `0 0 20px ${getAirQualityColor(point.level)}40`,
                }}
              />
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-card border rounded-lg p-3 min-w-48 shadow-data">
                <h4 className="font-semibold text-card-foreground">{point.location}</h4>
                <div className="space-y-1 mt-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">NO₂:</span>
                    <span style={{ color: "hsl(var(--no2-color))" }}>{point.no2} µg/m³</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">O₃:</span>
                    <span style={{ color: "hsl(var(--o3-color))" }}>{point.o3} µg/m³</span>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="mt-1"
                    style={{ 
                      backgroundColor: getAirQualityColor(point.level) + "20",
                      color: getAirQualityColor(point.level),
                      borderColor: getAirQualityColor(point.level) + "40"
                    }}
                  >
                    {getAirQualityLabel(point.level)}
                  </Badge>
                </div>
              </div>
            </div>
          ))}

          {/* Wind direction indicator */}
          <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm border rounded-lg p-2">
            <div className="flex items-center gap-2 text-sm">
              <Wind className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Wind: NW 12 km/h</span>
            </div>
          </div>

          {/* Alert indicator */}
          <div className="absolute top-4 left-4 bg-card/80 backdrop-blur-sm border rounded-lg p-2">
            <div className="flex items-center gap-2 text-sm">
              <AlertTriangle className="h-4 w-4 text-air-unhealthy" />
              <span className="text-muted-foreground">Air Quality Alert</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
          {["excellent", "good", "moderate", "unhealthy", "hazardous"].map((level) => (
            <div key={level} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getAirQualityColor(level) }}
              />
              <span className="text-sm text-muted-foreground capitalize">{level}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AirQualityMap;