import Container from "components/Container";
import IndexNavbar from "components/Navbars/IndexNavbar";
import ServerCard from "components/ServerCard";
import React from "react";
import HeroBanner from "_pages/Home/HeroBanner";

export default function Index() {
  return (
    <div className="relative">
      <div className="fixed w-screen h-screen -z-2 bg-black" />
      <IndexNavbar fixed />
      <HeroBanner />

      <div className="pt-10 md:pt-20" />
      <Container>
        <h2 className="font-bold text-xl text-white mb-3">Our Servers</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="w-full">
            <ServerCard
              backgroundImgUrl="https://dash.gameserverapp.com/storage/h9ua8CuiCsQcm8xJK1B4S4bY7RoadVazGQAMfv7x.jpg"
              title="Valhalla"
              serverIp="108.170.5.202:26920 // 7dtd"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-white mb-4 font-bold">Valhalla - Hard PVE</h2>
              <p className="text-white mb-4">
                Valhalla is for those who are seeking a challenge, with a
                terrifying surprise around every corner! Feral sense has been
                activated all should proceed with caution!
              </p>
            </div>
            <div className="text-white mb-4">
              <h4 className="font-bold mb-2">Difficulty</h4>
              <ul className="list-disc ml-4">
                <li>Zombie Day Speed </li>
                <li>Zombie Night Speed </li>
                <li>Zombie Feral Speed </li>
                <li>Zombie Blood Moon Speed </li>
                <li>Zombie Feral Sense </li>
                <li>XP Multiplier </li>
                <li>Loot Abundance </li>
                <li>Drop On Death </li>
                <li>Blood Moon Count </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 my-10">
          <div className="grid md:grid-cols-2 gap-8 order-2 md:order-1">
            <div>
              <h2 className="text-white mb-4 font-bold">
                Terracoma - Hard PVE
              </h2>
              <p className="text-white mb-4">
                Terracoma is for those who are seeking a challenge, with a
                terrifying surprise around every corner! Feral sense has been
                activated all should proceed with caution!
              </p>
            </div>
            <div className="text-white mb-4">
              <h4 className="font-bold mb-2">Difficulty</h4>
              <ul className="list-disc ml-4">
                <li>Zombie Day Speed </li>
                <li>Zombie Night Speed </li>
                <li>Zombie Feral Speed </li>
                <li>Zombie Blood Moon Speed </li>
                <li>Zombie Feral Sense </li>
                <li>XP Multiplier </li>
                <li>Loot Abundance </li>
                <li>Drop On Death </li>
                <li>Blood Moon Count </li>
              </ul>
            </div>
          </div>
          <div className="w-full order-1 md:order-2">
            <ServerCard
              backgroundImgUrl="https://dash.gameserverapp.com/storage/h9ua8CuiCsQcm8xJK1B4S4bY7RoadVazGQAMfv7x.jpg"
              title="Terracoma"
              serverIp="108.170.5.202:26920 // 7dtd"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="w-full">
            <ServerCard
              backgroundImgUrl="https://dash.gameserverapp.com/storage/h9ua8CuiCsQcm8xJK1B4S4bY7RoadVazGQAMfv7x.jpg"
              title="Hardol"
              serverIp="108.170.5.202:26920 // 7dtd"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-white mb-4">
              <h4 className="font-bold mb-2">Difficulty</h4>
              <ul className="list-disc ml-4">
                <li>Zombie Day Speed </li>
                <li>Zombie Night Speed </li>
                <li>Zombie Feral Speed </li>
                <li>Zombie Blood Moon Speed </li>
                <li>Zombie Feral Sense </li>
                <li>XP Multiplier </li>
                <li>Loot Abundance </li>
                <li>Drop On Death </li>
                <li>Blood Moon Count </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white mb-4 font-bold">Valhalla - Hard PVE</h2>
              <p className="text-white mb-4">
                Valhalla is for those who are seeking a challenge, with a
                terrifying surprise around every corner! Feral sense has been
                activated all should proceed with caution!
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 my-10">
          <div className="grid md:grid-cols-2 gap-8 order-2 md:order-1">
            <div className="text-white mb-4">
              <h4 className="font-bold mb-2">Difficulty</h4>
              <ul className="list-disc ml-4">
                <li>Zombie Day Speed </li>
                <li>Zombie Night Speed </li>
                <li>Zombie Feral Speed </li>
                <li>Zombie Blood Moon Speed </li>
                <li>Zombie Feral Sense </li>
                <li>XP Multiplier </li>
                <li>Loot Abundance </li>
                <li>Drop On Death </li>
                <li>Blood Moon Count </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white mb-4 font-bold">Valhalla - Hard PVE</h2>
              <p className="text-white mb-4">
                Valhalla is for those who are seeking a challenge, with a
                terrifying surprise around every corner! Feral sense has been
                activated all should proceed with caution!
              </p>
            </div>
          </div>
          <div className="w-full order-1 md:order-2">
            <ServerCard
              backgroundImgUrl="https://dash.gameserverapp.com/storage/h9ua8CuiCsQcm8xJK1B4S4bY7RoadVazGQAMfv7x.jpg"
              title="Bardo"
              serverIp="108.170.5.202:26920 // 7dtd"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="w-full">
            <ServerCard
              backgroundImgUrl="https://dash.gameserverapp.com/storage/h9ua8CuiCsQcm8xJK1B4S4bY7RoadVazGQAMfv7x.jpg"
              title="Polis"
              serverIp="108.170.5.202:26920 // 7dtd"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-white mb-4">
              <h4 className="font-bold mb-2">Difficulty</h4>
              <ul className="list-disc ml-4">
                <li>Zombie Day Speed </li>
                <li>Zombie Night Speed </li>
                <li>Zombie Feral Speed </li>
                <li>Zombie Blood Moon Speed </li>
                <li>Zombie Feral Sense </li>
                <li>XP Multiplier </li>
                <li>Loot Abundance </li>
                <li>Drop On Death </li>
                <li>Blood Moon Count </li>
              </ul>
            </div>
            <div>
              <h2 className="text-white mb-4 font-bold">Valhalla - Hard PVE</h2>
              <p className="text-white mb-4">
                Valhalla is for those who are seeking a challenge, with a
                terrifying surprise around every corner! Feral sense has been
                activated all should proceed with caution!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
