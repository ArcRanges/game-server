import Container from "components/Container";
import IndexNavbar from "components/Navbars/IndexNavbar";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import HeroBanner from "_pages/Home/HeroBanner";

const PAYPAL_LINK =
  "https://www.paypal.com/donate/?business=8389QZ23QRDPE&no_recurring=0&item_name=Gameserver+community+donataion&currency_code=USD";

export default function index() {
  return (
    <div className="relative">
      <IndexNavbar fixed />
      <HeroBanner />
      <div className="pt-20" />

      <Container>
        <div className="mx-auto text-center">
          <h2 className="font-bold text-white">Donate</h2>
          <p className="text-gray-200 mb-3">We appreciate your support</p>

          <div className="flex flex-col items-center">
            <div style={{ height: 150, width: 150, marginBottom: 20 }}>
              <Image
                src="/img/donate-qr.png"
                height="150px"
                width="150px"
                layout="responsive"
              />
            </div>
            <form
              className="mb-3"
              action="https://www.paypal.com/donate"
              method="post"
              target="_top"
            >
              <div className="flex justify-center">
                <input type="hidden" name="business" value="8389QZ23QRDPE" />
                <input type="hidden" name="no_recurring" value="0" />
                <input
                  type="hidden"
                  name="item_name"
                  value="Gameserver community donation"
                />
                <input type="hidden" name="currency_code" value="USD" />
                <input
                  type="image"
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                  name="submit"
                  title="PayPal - The safer, easier way to pay online!"
                  alt="Donate with PayPal button"
                />
                <img
                  alt=""
                  src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </div>
            </form>

            <Link href={PAYPAL_LINK}>
              <span className="text-white cursor-pointer hover:opacity-70">
                Button doesn't show? Cick here.
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
