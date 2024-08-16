"use client";

import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Carousel } from "./components/Carousel";
import {InfiniteMovingCards} from "./ui/infinite-moving-cards";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import InstagramGallery from "./components/InstagramGallery";


export default function Home() {
  return (
      <div className={"bg-white min-h-screen mb-5"}>
          <section id={"navigation-section"}>
              <Navbar/>
              <Header/>
          </section>
          <section id={"hero-section"}>
              <Hero/>
          </section>
          <section id={"partners-section"}>
              <div className={"container mx-auto mt-10 text-center"}>
                  <h1 className={"text-4xl uppercase font-semibold"}>Who We Work With</h1>
              </div>
              <div className={"flex items-center justify-center"}>
                  <Carousel
                      images={images}
                      direction={"left"}
                      speed={"slow"}
                      pauseOnHover={false}
                      className={"custom-scroller"}
                  />
              </div>
          </section>
          <section id={"why-choose-scrx"}>
              <div className={"container mx-auto mt-10 text-center"}>
                  <div className="flex flex-col md:flex-row mx-auto justify-center items-center text-center">
                      <div className="flex-1 p-5 text-black">
                          <h1 className="text-2xl sm:text-3xl font-bold mb-4 uppercase">
                              Why Choose Us?
                          </h1>
                          <p className="text-base sm:text-lg">
                              Longest Appointment Times in Portsmouth
                              <br/>
                              You Will Be Fitter, Stronger and More Resilient Than Ever Before
                              <br/>
                              We Use The Latest Technology and Evidence-Based Practice
                          </p>
                          <button className="mt-5 p-[3px] text-lg sm:text-xl md:text-xl relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"/>
                              <div
                                  className="px-8 py-2 bg-blue-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                  Book Today
                              </div>
                          </button>
                      </div>
                      <div className="flex-1 p-5 mt-5 md:mt-0">
                          <video className="w-full h-auto rounded-lg" controls>
                              <source src="https://scrxcdn.fra1.cdn.digitaloceanspaces.com/why-choose-us.mp4" type="video/mp4"/>
                          </video>
                      </div>
                  </div>
              </div>
          </section>
          <section id={"scrx-in-elite-sport"}>
              <div className={"container mx-auto mt-5 text-center"}>
                  <div
                      className="flex flex-col-reverse md:flex-row mx-auto justify-center items-center text-center h-full w-full">
                      <div className="flex-1 p-5 text-black md:order-1 order-2">
                          <h1 className="text-3xl font-bold mb-4 uppercase">Our Work In Elite Sport</h1>
                          <p className={"text-lg"}>
                              South Coast Rx Physiotherapy are proud to be the provider of choice for a number of local
                              sports clubs as well as amateur and elite athletes alike.
                          </p>
                          <button className="mt-5 p-[3px] text-lg sm:text-xl md:text-xl relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"/>
                              <div
                                  className="px-8 py-2 bg-blue-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                  Discover Our Services
                              </div>
                          </button>
                      </div>
                      <div className="flex-1 p-5 mt-5 md:mt-0 md:order-2 order-1">
                          <video className="w-full h-auto rounded-lg" controls>
                              <source src="https://scrxcdn.fra1.cdn.digitaloceanspaces.com/why-choose-us.mp4" type="video/mp4"/>
                          </video>
                      </div>
                  </div>
              </div>
          </section>
          <section id={"reviews"}>
              <div className={"container mx-auto mt-10 text-center items-center justify-center"}>
                  <div className={"w-full p-5"}>
                      <h1 className={"text-4xl uppercase font-semibold pt-2"}>Read What Others <br/>Have to Say</h1>
                  </div>
              </div>
              <div
                  className="mt-5 rounded-md flex flex-col bg-white items-center justify-center relative overflow-hidden">
                  <InfiniteMovingCards
                      items={testimonials}
                      direction="left"
                      speed="slow"
                      pauseOnHover={true}
                  />
              </div>
          </section>
          <section id={"instagram"}>
              <div className={"container mx-auto pt-5 text-center items-center justify-center mt-5"}>
                  <h1 className={"text-4xl uppercase font-bold"}>Check Out Our Instagram</h1>
                  <div className={"mt-2"}>
                      <InstagramGallery/>
                  </div>
              </div>
          </section>
          <section id={"call-to-action"}>
              <div className={"container mx-auto mt-10"}>
                  <CallToAction/>
              </div>
          </section>
          <section id={"footer"}>
              <div className={"mx-auto text-center"}>
              <Footer/>
              </div>
          </section>
      </div>
  );
}

const images = [
    "https://via.placeholder.com/200x150?text=1",
    "https://via.placeholder.com/200x150?text=2",
    "https://via.placeholder.com/200x150?text=3",
    "https://via.placeholder.com/200x150?text=4",
    "https://via.placeholder.com/200x150?text=5",
    "https://via.placeholder.com/200x150?text=6",
    "https://via.placeholder.com/200x150?text=7",
    "https://via.placeholder.com/200x150?text=8"
];

const testimonials = [
    {
        review:
            "I have been seeing the team at South Coast Rx for a number of years now and I can honestly say they are the best in the business. I have had a number of injuries over the years and they have always been able to get me back to full fitness in no time at all. I would highly recommend them to anyone.",
        name: "Charles Dickens",
    },
    {
        review:
            "I have been seeing the team at South Coast Rx for a number of years now and I can honestly say they are the best in the business. I have had a number of injuries over the years and they have always been able to get me back to full fitness in no time at all. I would highly recommend them to anyone.",
        name: "William Shakespeare",
    },
    {
        review:
            "I have been seeing the team at South Coast Rx for a number of years now and I can honestly say they are the best in the business. I have had a number of injuries over the years and they have always been able to get me back to full fitness in no time at all. I would highly recommend them to anyone.",
        name: "Edgar Allan Poe",
    },
    {
        review:
            "I have been seeing the team at South Coast Rx for a number of years now and I can honestly say they are the best in the business. I have had a number of injuries over the years and they have always been able to get me back to full fitness in no time at all. I would highly recommend them to anyone.",
        name: "Jane Austen",
    },
    {
        review:
            "I have been seeing the team at South Coast Rx for a number of years now and I can honestly say they are the best in the business. I have had a number of injuries over the years and they have always been able to get me back to full fitness in no time at all. I would highly recommend them to anyone.",
        name: "Herman Melville",
    },
];