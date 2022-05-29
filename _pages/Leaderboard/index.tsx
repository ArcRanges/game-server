import Container from "components/Container";
import IndexNavbar from "components/Navbars/IndexNavbar";
import Pulse from "components/Pulse";
import React from "react";
import HeroBanner from "_pages/Home/HeroBanner";
import Table from "_pages/shared/Table";

const S = ["Valhalla", "Bora", "Bardos", "Terracoma"];
const N = ["Marco", "Palo", "Moant", "Arkansa"];

export default function index() {
  return (
    <div className="relative">
      <div className="fixed w-screen h-screen -z-2 bg-black" />
      <IndexNavbar fixed />
      <HeroBanner />

      <div className="pt-20" />
      <Container>
        <h2 className="font-bold text-xl text-white mb-3">Leaderboard</h2>

        <Table headers={["Name", "Level", "Server"]}>
          <tbody>
            {new Array(20).fill(0).map((_: any, index: number) => (
              <tr className="border" key={index}>
                <Table.Td className="flex flex-row items-center h-full">
                  <span className="mr-2">
                    {N[`${index % 4}`]}-{index}
                  </span>{" "}
                  <Pulse />
                </Table.Td>
                <Table.Td>{100 - index}</Table.Td>
                <Table.Td>{S[`${index % 4}`]}</Table.Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
