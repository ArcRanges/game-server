/* eslint-disable react/jsx-no-target-blank */
import Footer from "components/Footers/Footer";
import IndexNavbar from "components/Navbars/IndexNavbar";
import React from "react";

import AvailableServers from "_pages/Home/AvailableServers";
import HeroBanner from "_pages/Home/HeroBanner";
import HeroSection from "_pages/Home/HeroSection";
import ServerStatistics from "_pages/Home/ServerStatistics";

export default function Index() {
  return (
    <div className="relative">
      <div className="fixed w-screen h-screen -z-2 bg-black" />
      <IndexNavbar fixed />
      <HeroBanner />
      <HeroSection />
      <AvailableServers />
      <ServerStatistics />
      <Footer />
    </div>
  );
}
