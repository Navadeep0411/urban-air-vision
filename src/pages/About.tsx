import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Target, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-earth bg-clip-text text-transparent">
                About AirWatch Delhi
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced environmental monitoring system providing real-time air quality data 
                and forecasting for the Delhi National Capital Region
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-data">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To provide accurate, real-time air quality monitoring and forecasting 
                    to protect public health in rapidly urbanizing megacities like Delhi.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-data">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Public Health Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Addressing the persistent threat to public health posed by gaseous 
                    pollutants like NO₂ and O₃ that surpass global safety thresholds.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-data">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Global Standards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monitoring air quality against WHO guidelines and providing 
                    high-resolution, temporally consistent datasets for accurate forecasting.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-data">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Key Pollutants Monitored
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-no2-color">Nitrogen Dioxide (NO₂)</h3>
                    <p className="text-sm text-muted-foreground">
                      Primary traffic-related pollutant causing respiratory issues. 
                      WHO limit: 40 µg/m³ annual average.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-o3-color">Ground-level Ozone (O₃)</h3>
                    <p className="text-sm text-muted-foreground">
                      Secondary pollutant formed from vehicle emissions and industrial activity. 
                      WHO limit: 100 µg/m³ 8-hour average.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-pm25-color">Fine Particulate Matter (PM2.5)</h3>
                    <p className="text-sm text-muted-foreground">
                      Microscopic particles that penetrate deep into lungs and bloodstream. 
                      WHO limit: 15 µg/m³ annual average.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-data">
              <CardHeader>
                <CardTitle>Technology & Methodology</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Data Sources</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Network of ground-based monitoring stations</li>
                      <li>• Satellite-based atmospheric observations</li>
                      <li>• Weather pattern integration</li>
                      <li>• Traffic and industrial emission data</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Forecasting Models</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Machine learning algorithms</li>
                      <li>• Atmospheric dispersion models</li>
                      <li>• Meteorological data integration</li>
                      <li>• Short-term prediction pipeline</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;