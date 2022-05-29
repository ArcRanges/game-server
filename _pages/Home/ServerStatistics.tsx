import Container from "components/Container";
import CardBarChart from "components/Cards/CardBarChart";
import CardLineChart from "components/Cards/CardLineChart";
import CardSocialTraffic from "components/Cards/CardSocialTraffic";

export default function ServerStatistics() {
  return (
    <Container className="px-10 md:px-0">
      <h2 className="text-center text-2xl font-bold mb-5 text-white">
        Server Statistics
      </h2>

      <CardLineChart />

      <div className="grid md:grid-cols-2 gap-8 mb-3">
        <CardBarChart />
        <CardSocialTraffic />
      </div>
    </Container>
  );
}
