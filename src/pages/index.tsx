// pages/attractions.js
import Image from "next/image";
import NavbarHome from "../components/Navbars/navbarHome";
import FooterHome from "@/components/Footers/footerHome";
import GalleryHome from "@/components/Gallerys/galleryHome";
export default function Attractions() {
  const attractions = [
    {
      id: 1,
      title: "Beautiful Beach",
      location: "Tropical Island",
      description:
        "A stunning beach with clear blue water, soft sand, and beautiful palm trees. Perfect for a relaxing getaway.",
      imageUrl: "https://example.com/beach.jpg", // replace with your own image URL
    },
    {
      id: 2,
      title: "Historic Castle",
      location: "Europe",
      description:
        "Explore the history and grandeur of this preserved medieval castle.",
      imageUrl: "https://example.com/castle.jpg", // replace with your own image URL
    },
    {
      id: 3,
      title: "Bustling Marketplace",
      location: "Asia",
      description:
        "Experience the vibrant culture and taste the delicious food at this local market.",
      imageUrl: "https://example.com/market.jpg", // replace with your own image URL
    },
  ];
  return (
    <>
      <NavbarHome />

      <GalleryHome />

      <FooterHome />
    </>
  );
}
