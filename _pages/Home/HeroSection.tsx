import Container from "components/Container";
import Pulse from "components/Pulse";
import Table from "_pages/shared/Table";

export default function HeroSection() {
  return (
    <Container className="pt-24 px-10 md:px-0">
      <div className="mb-5">
        <p className="text-md md:text-xl p-5 md:p-10 mb-3 shadow bg-red-600 text-white">
          Welcome to Game Master! Founded by 2 friends with the main goal to
          maintain a fun environment for folks to enjoy from all walks of life!!
          Game Masters has a wonderful helpful and very skilled staff who can
          answer just about any question you throw at them! The Community itself
          is made up of thousands of AMAZING people and always eager to welcome
          more! We host 5 unique 7 days to die Servers (among other games) a lil
          something for everyone. Pop in our Discord and say Hello, cant wait to
          meet ya!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-10 mb-5">
        <div className="flex flex-col h-full mb-5">
          <div className="flex flex-row justify-between items-center mb-5">
            <h2 className="font-bold  text-md md:text-xl text-white">
              Top Players
            </h2>
            <h4 className="text-gray-100 text-sm font-bold cursor-pointer">
              View More
            </h4>
          </div>
          <Table headers={["#", "Name", "Level", "Server"]}>
            <tbody>
              <tr className="border">
                <Table.Td>1</Table.Td>
                <Table.Td>Malcolm</Table.Td>
                <Table.Td>100</Table.Td>
                <Table.Td>Lawolf</Table.Td>
              </tr>
              <tr className="border">
                <Table.Td>2</Table.Td>
                <Table.Td>TheBrink</Table.Td>
                <Table.Td>90</Table.Td>
                <Table.Td>Aibatt</Table.Td>
              </tr>
              <tr className="border">
                <Table.Td>3</Table.Td>
                <Table.Td>Avatar</Table.Td>
                <Table.Td>35</Table.Td>
                <Table.Td>Terra</Table.Td>
              </tr>
              <tr className="border">
                <Table.Td>4</Table.Td>
                <Table.Td>Avatar</Table.Td>
                <Table.Td>34</Table.Td>
                <Table.Td>Terra</Table.Td>
              </tr>
              <tr className="border">
                <Table.Td>5</Table.Td>
                <Table.Td>Avatar</Table.Td>
                <Table.Td>32</Table.Td>
                <Table.Td>Terra</Table.Td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="flex flex-col h-full">
          <div className="flex flex-row justify-between items-center mb-5">
            <h2 className="font-bold text-md md:text-xl text-white">
              <div className="flex flex-row items-center">
                <span className="mr-1">Online Players (991 Online </span>
                <Pulse />)
              </div>
            </h2>
            <h4 className="text-gray-100 text-sm font-bold cursor-pointer">
              View More
            </h4>
          </div>
          <Table headers={["Name", "Level", "Server"]}>
            <tbody>
              <tr className="border">
                <Table.Td className="flex flex-row items-center h-full">
                  <span className="mr-2">Malcolm</span> <Pulse />
                </Table.Td>
                <Table.Td>100</Table.Td>
                <Table.Td>Lawolf</Table.Td>
              </tr>
              <tr className="border">
                <Table.Td className="flex flex-row items-center h-full">
                  <span className="mr-2">TheBrink</span> <Pulse />
                </Table.Td>
                <Table.Td>90</Table.Td>
                <Table.Td>Aibatt</Table.Td>
              </tr>
              <tr className="border">
                <Table.Td className="flex flex-row items-center h-full">
                  <span className="mr-2">Avatar</span> <Pulse />
                </Table.Td>
                <Table.Td>35</Table.Td>
                <Table.Td>Terra</Table.Td>
              </tr>
              <tr className="border">
                <Table.Td className="flex flex-row items-center h-full">
                  <span className="mr-2">Aang</span> <Pulse />
                </Table.Td>
                <Table.Td>34</Table.Td>
                <Table.Td>Terra</Table.Td>
              </tr>
              <tr className="border">
                <Table.Td className="flex flex-row items-center h-full">
                  <span className="mr-2">Marco</span> <Pulse />
                </Table.Td>
                <Table.Td>32</Table.Td>
                <Table.Td>Terra</Table.Td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
}
