import Navbar from "@/components/Navbar";
import EnvironmentalHeader from "@/components/EnvironmentalHeader";
import AirQualityMap from "@/components/AirQualityMap";
import PollutantChart from "@/components/PollutantChart";
import heroImage from "@/assets/hero-dashboard.jpg";

const Index = () => {
  // Mock forecast data for demonstration
  const no2Forecast = [78, 82, 85, 88, 92, 89, 86, 83, 80, 77, 75, 73, 70, 68, 72, 75, 78, 81, 85, 88, 91, 89, 86, 82];
  const o3Forecast = [142, 145, 149, 152, 155, 158, 160, 162, 159, 156, 153, 150, 148, 145, 142, 140, 138, 141, 144, 147, 150, 153, 156, 154];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-foreground">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-earth bg-clip-text text-transparent">
              AirWatch Delhi
            </h1>
            <p className="text-xl opacity-90">
              Advanced Air Pollution Monitoring & Forecasting System
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        <EnvironmentalHeader />
        
        {/* Geospatial Map Section */}
        <section>
          <AirQualityMap />
        </section>

        {/* Pollutant Details */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Detailed Pollutant Analysis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PollutantChart
              title="Nitrogen Dioxide Concentration"
              pollutant="NO2"
              currentValue={78}
              unit="µg/m³"
              trend="up"
              trendValue={12}
              safetyThreshold={40}
              forecast={no2Forecast}
            />
            <PollutantChart
              title="Ground-level Ozone"
              pollutant="O3"
              currentValue={142}
              unit="µg/m³"
              trend="up"
              trendValue={8}
              safetyThreshold={100}
              forecast={o3Forecast}
            />
          </div>
        </section>

        {/* Health Advisory */}
        <section className="bg-card border rounded-lg p-6 shadow-data">
          <h3 className="text-xl font-semibold mb-4 text-card-foreground">Health Advisory</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-air-unhealthy mb-2">For Sensitive Groups</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Avoid outdoor activities during peak pollution hours (7-10 AM, 7-10 PM)</li>
                <li>• Use N95 masks when stepping outside</li>
                <li>• Keep windows closed and use air purifiers indoors</li>
                <li>• Consider rescheduling outdoor exercise</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-air-moderate mb-2">General Population</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Limit prolonged outdoor exposure</li>
                <li>• Monitor air quality before outdoor activities</li>
                <li>• Use public transport to reduce emissions</li>
                <li>• Stay hydrated and maintain indoor air quality</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
};

export default Index;
