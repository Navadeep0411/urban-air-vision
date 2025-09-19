import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

interface PollutantChartProps {
  title: string;
  pollutant: "NO2" | "O3" | "PM2.5";
  currentValue: number;
  unit: string;
  trend: "up" | "down" | "stable";
  trendValue: number;
  safetyThreshold: number;
  forecast: number[];
}

const PollutantChart = ({ 
  title, 
  pollutant, 
  currentValue, 
  unit, 
  trend, 
  trendValue, 
  safetyThreshold,
  forecast 
}: PollutantChartProps) => {
  const getPollutantColor = (pollutant: string) => {
    switch (pollutant) {
      case "NO2": return "hsl(var(--no2-color))";
      case "O3": return "hsl(var(--o3-color))";
      case "PM2.5": return "hsl(var(--pm25-color))";
      default: return "hsl(var(--primary))";
    }
  };

  const getStatusColor = (value: number, threshold: number) => {
    if (value <= threshold * 0.5) return "hsl(var(--air-excellent))";
    if (value <= threshold) return "hsl(var(--air-good))";
    if (value <= threshold * 1.5) return "hsl(var(--air-moderate))";
    if (value <= threshold * 2) return "hsl(var(--air-unhealthy))";
    return "hsl(var(--air-hazardous))";
  };

  const getStatusLabel = (value: number, threshold: number) => {
    if (value <= threshold * 0.5) return "Excellent";
    if (value <= threshold) return "Good";
    if (value <= threshold * 1.5) return "Moderate";
    if (value <= threshold * 2) return "Unhealthy";
    return "Hazardous";
  };

  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Activity;
  const trendColor = trend === "up" ? "hsl(var(--air-unhealthy))" : trend === "down" ? "hsl(var(--air-good))" : "hsl(var(--muted-foreground))";

  return (
    <Card className="shadow-data">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center justify-between">
          <span>{title}</span>
          <Badge 
            variant="secondary"
            style={{ 
              backgroundColor: getPollutantColor(pollutant) + "20",
              color: getPollutantColor(pollutant),
              borderColor: getPollutantColor(pollutant) + "40"
            }}
          >
            {pollutant}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Value */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span 
                className="text-3xl font-bold"
                style={{ color: getStatusColor(currentValue, safetyThreshold) }}
              >
                {currentValue}
              </span>
              <span className="text-muted-foreground">{unit}</span>
            </div>
            <Badge 
              variant="secondary"
              className="mt-1"
              style={{ 
                backgroundColor: getStatusColor(currentValue, safetyThreshold) + "20",
                color: getStatusColor(currentValue, safetyThreshold),
                borderColor: getStatusColor(currentValue, safetyThreshold) + "40"
              }}
            >
              {getStatusLabel(currentValue, safetyThreshold)}
            </Badge>
          </div>
          
          <div className="flex items-center gap-1 text-sm">
            <TrendIcon className="h-4 w-4" style={{ color: trendColor }} />
            <span style={{ color: trendColor }}>
              {trend === "up" ? "+" : trend === "down" ? "-" : "±"}{Math.abs(trendValue)}%
            </span>
          </div>
        </div>

        {/* Safety Threshold */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">WHO Safety Threshold:</span>
          <span className="font-medium">{safetyThreshold} {unit}</span>
        </div>

        {/* Mini forecast chart */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">24h Forecast</h4>
          <div className="flex items-end gap-1 h-16">
            {forecast.map((value, index) => {
              const height = (value / Math.max(...forecast)) * 100;
              return (
                <div 
                  key={index} 
                  className="flex-1 rounded-t transition-all hover:opacity-80"
                  style={{ 
                    height: `${height}%`,
                    backgroundColor: getPollutantColor(pollutant) + "60",
                    minHeight: "8px"
                  }}
                  title={`Hour ${index + 1}: ${value} ${unit}`}
                />
              );
            })}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Now</span>
            <span>+24h</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PollutantChart;