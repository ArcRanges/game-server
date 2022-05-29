export default function HeroBanner() {
  return (
    <div
      className="absolute w-full h-screen md:h-screen top-0 left-0"
      style={{
        backgroundColor: "black",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('/img/game-bg-2.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
      }}
    />
  );
}
