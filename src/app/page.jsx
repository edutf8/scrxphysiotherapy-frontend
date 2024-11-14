"use client";

import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Carousel } from "./components/Carousel";
import {InfiniteMovingCards} from "./ui/infinite-moving-cards";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import InstagramGallery from "./components/InstagramGallery";
import PartnersGrid from "@/app/components/PartnersGrid";


export default function Home() {
  return (
      <div className={"bg-gray-100 min-h-screen"}>
          <section id={"navigation-section"}>
              <Navbar/>
              <Header/>
          </section>
          <section id={"hero-section"}>
              <Hero/>
          </section>
          <section id={"physio-at-home"}>
              <div className={"mt-10 text-center bg-gray-200"}>
                  <div className={"container mx-auto pt-5 pb-5"}>
                      <h1 className={"text-4xl uppercase font-semibold"}>South Coast Rx Physiotherapy now offers
                          appointments at home</h1>
                      <a className={"mt-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium" +
                          " rounded-full border border-gray-200 bg-blue-500 text-gray-800 shadow-sm hover:bg-blue-700" +
                          " focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none text-white"}
                         href={"https://south-coast-rx-physiotherapy12.selectandbook.com/"}>
                          Click Here to Find Out More
                      </a>
                  </div>
              </div>
          </section>
          <section id={"partners-section"}>
              <div className={"container mx-auto mt-10 text-center"}>
                  <h1 className={"text-4xl uppercase font-semibold"}>Who We Work With</h1>
              </div>
              <div className={"container mx-auto"}>
                  <PartnersGrid partners={partners}/>
              </div>
          </section>
          <section id={"partners-section-remake"}>

          </section>
          <section id={"why-choose-scrx"}>
              <div className={"container mx-auto mt-10 text-center"}>
                  <div className="flex flex-col md:flex-row mx-auto justify-center items-center text-center">
                      <div className="flex-1 p-5 text-black">
                          <h1 className="text-2xl sm:text-3xl font-bold mb-4 uppercase">
                              Why Choose Us?
                          </h1>
                          <p className="text-base sm:text-lg">
                              Longest Appointment & Treatment Times in Portsmouth
                              <br/>
                              We are the highest rated physiotherapy clinic in Portsmouth
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
                      <div className="flex-1 p-5 text-black md:order-2 order-2">
                          <h1 className="text-3xl font-bold mb-4 uppercase">Our Work In Elite Sport</h1>
                          <p className={"text-lg"}>
                              South Coast Rx Physiotherapy are proud to be the provider of choice for a number of England, GB and other professional athletes.
                          </p>
                          <button className="mt-5 p-[3px] text-lg sm:text-xl md:text-xl relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"/>
                              <div
                                  className="px-8 py-2 bg-blue-500 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                                  Discover Our Services
                              </div>
                          </button>
                      </div>
                      <div className="flex-1 p-5 mt-5 md:mt-0 md:order-1 order-1">
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
                      <h1 className={"text-4xl uppercase font-semibold pt-2"}>Our Testimonials</h1>
                  </div>
              </div>
              <div
                  className="container mx-auto mt-5 rounded-md flex flex-col bg-gray-100 items-center justify-center relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                      <div
                          className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                          <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">NAME</h3>
                          <video className="w-full h-auto rounded-lg" controls>
                              <source src="https://scrxcdn.fra1.cdn.digitaloceanspaces.com/why-choose-us.mp4"
                                      type="video/mp4"/>
                          </video>
                          <p className="text-gray-700 text-center mt-5">
                              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                          </p>
                      </div>
                      <div
                          className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                          <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">NAME</h3>
                          <video className="w-full h-auto rounded-lg" controls>
                              <source src="https://scrxcdn.fra1.cdn.digitaloceanspaces.com/why-choose-us.mp4"
                                      type="video/mp4"/>
                          </video>
                          <p className="text-gray-700 text-center mt-5">
                              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                          </p>
                      </div>
                      <div
                          className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                          <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">NAME</h3>
                          <video className="w-full h-auto rounded-lg" controls>
                              <source src="https://scrxcdn.fra1.cdn.digitaloceanspaces.com/why-choose-us.mp4"
                                      type="video/mp4"/>
                          </video>
                          <p className="text-gray-700 text-center mt-5">
                              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                          </p>
                      </div>
                  </div>
              </div>
          </section>
          <section id={"call-to-action"}>
              <div className={"mx-auto mt-10"}>
                  <CTA/>
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

const partners = [
    {
        name: "University of Portsmouth",
        logo: "https://via.placeholder.com/200x150?text=1"
    },
    {
        name: "PGMOL",
        logo: "https://via.placeholder.com/200x150?text=2"
    },
    {
        name: "University of Chichester",
        logo: "https://via.placeholder.com/200x150?text=3"
    },
    {
        name: "PA",
        logo: "https://via.placeholder.com/200x150?text=4"
    },
    {
        name: "EHUB",
        logo: "https://via.placeholder.com/200x150?text=5"
    },
    {
        name: "Constant",
        logo: "https://via.placeholder.com/200x150?text=6"
    },
    {
        name: "Southampton Solent University",
        logo: "https://via.placeholder.com/200x150?text=7"
    },
    {
        name: "Southern Legion",
        logo: "https://via.placeholder.com/200x150?text=8"
    },
    {
        name: "NHS",
        logo: "https://via.placeholder.com/200x150?text=9"
    },
    {
        name: "Wild Dogs Rugby",
        logo: "https://via.placeholder.com/200x150?text=10"
    },
    {
        name: "Alexandra Sports",
        logo: "https://via.placeholder.com/200x150?text=11"
    },
    {
        name: "Arthritis Action",
        logo: "https://via.placeholder.com/200x150?text=12"
    },
    {
        name: "TASS",
        logo: "https://via.placeholder.com/200x150?text=7"
    },
    {
        name: "South Island Sevens",
        logo: "https://via.placeholder.com/200x150?text=8"
    },
    {
        name: "Portsmouth Force",
        logo: "https://via.placeholder.com/200x150?text=9"
    },
    {
        name: "PN",
        logo: "https://via.placeholder.com/200x150?text=10"
    },
    {
        name: "Believe & Achieve",
        logo: "https://via.placeholder.com/200x150?text=11"
    },
    {
        name: "Garmin",
        logo: "https://via.placeholder.com/200x150?text=12"
    },
    {
        name: "Portsmouth Grammar School",
        logo: "https://via.placeholder.com/200x150?text=7"
    },
    {
        name: "Royal Navy",
        logo: "https://via.placeholder.com/200x150?text=8"
    }
]