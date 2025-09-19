import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const Forecast = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold">Air Quality Forecasting</h1>
              <p className="text-muted-foreground">Predictive models for short-term air pollution trends</p>
            </div>

            <Card className="shadow-data">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Forecasting Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Advanced forecasting models and predictions coming soon...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forecast;