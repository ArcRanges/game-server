import Container from "components/Container";
import Button from "components/Button";
import ServerCard from "components/ServerCard";

export default function AvailableServers() {
  return (
    <div className="bg-gray-100 px-10">
      <Container>
        <h2 className="text-center text-2xl font-bold mb-5">
          Available Servers
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-8 md:mb-0">
          <ServerCard
            backgroundImgUrl="https://dash.gameserverapp.com/storage/h9ua8CuiCsQcm8xJK1B4S4bY7RoadVazGQAMfv7x.jpg"
            title="Valhalla"
            serverIp="108.170.5.202:26920 // 7dtd"
          />
          <ServerCard
            backgroundImgUrl="https://dash.gameserverapp.com/storage/h9ua8CuiCsQcm8xJK1B4S4bY7RoadVazGQAMfv7x.jpg"
            title="Terracoma"
            serverIp="108.170.5.202:26920 // 7dtd"
          />
          <ServerCard
            backgroundImgUrl="https://dash.gameserverapp.com/storage/h9ua8CuiCsQcm8xJK1B4S4bY7RoadVazGQAMfv7x.jpg"
            title="Hardol"
            serverIp="108.170.5.202:26920 // 7dtd"
          />
        </div>

        <div className="hidden md:block my-10" />

        <div className="grid md:grid-cols-2 gap-8 mb-3">
          <ServerCard
            backgroundImgUrl="https://dash.gameserverapp.com/storage/h9ua8CuiCsQcm8xJK1B4S4bY7RoadVazGQAMfv7x.jpg"
            title="Bardo"
            serverIp="108.170.5.202:26920 // 7dtd"
          />
          <ServerCard
            backgroundImgUrl="https://dash.gameserverapp.com/storage/h9ua8CuiCsQcm8xJK1B4S4bY7RoadVazGQAMfv7x.jpg"
            title="Polis"
            serverIp="108.170.5.202:26920 // 7dtd"
          />
        </div>
      </Container>
    </div>
  );
}
