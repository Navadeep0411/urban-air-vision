import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Wind, Thermometer, Droplets } from "lucide-react";

const Monitoring = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">Live Environmental Monitoring</h1>
              <p className="text-muted-foreground">Real-time data from monitoring stations across Delhi NCR</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-data">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Activity className="h-5 w-5 text-primary" />
                    Air Quality Index
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-air-unhealthy">168</div>
                    <Badge 
                      variant="secondary"
                      style={{
                        backgroundColor: "hsl(var(--air-unhealthy) / 0.2)",
                        color: "hsl(var(--air-unhealthy))",
                      }}
                    >
                      Unhealthy
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-data">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Wind className="h-5 w-5 text-primary" />
                    Wind Speed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">12 km/h</div>
                    <p className="text-sm text-muted-foreground">Northwest direction</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-data">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Thermometer className="h-5 w-5 text-primary" />
                    Temperature
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">28°C</div>
                    <p className="text-sm text-muted-foreground">Feels like 32°C</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-data">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Droplets className="h-5 w-5 text-primary" />
                    Humidity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold">65%</div>
                    <p className="text-sm text-muted-foreground">High humidity</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-data">
              <CardHeader>
                <CardTitle>Monitoring Stations Status</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Live monitoring dashboard coming soon...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Monitoring;