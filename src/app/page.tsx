"use client"

import { Award, Bed, Calendar, Crown, HelpCircle, MessageSquare, Star } from "lucide-react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Amenities", id: "amenities" },
            { name: "Rooms", id: "rooms" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grandview Hotel"
          button={{
            text: "Book Now",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Discover unparalleled comfort and elegance at Grandview Hotel, where every moment becomes a cherished memory"
          tag="5-Star Experience"
          tagIcon={Star}
          buttons={[
            { text: "Reserve Now", href: "#contact" },
            { text: "Explore Amenities", href: "#amenities" }
          ]}
          imageSrc="https://images.pexels.com/photos/1755288/pexels-photo-1755288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grandview Hotel luxury exterior"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Welcome to Grandview"
          description={[
            "For over three decades, Grandview Hotel has been the epitome of luxury hospitality, setting the standard for exceptional service and elegance.",
            "Our commitment to creating unforgettable experiences has made us the preferred destination for discerning travelers seeking the finest in accommodation and amenities."
          ]}
          buttons={[
            { text: "Our Story", href: "#heritage" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Indulge in our exceptional facilities designed to exceed your every expectation"
          tag="Luxury Features"
          tagIcon={Crown}
          features={[
            {
              title: "Serenity Spa",
              description: "Rejuvenate your body and mind in our award-winning spa featuring therapeutic treatments and wellness programs",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa treatment room"
            },
            {
              title: "Gourmet Dining",
              description: "Experience culinary excellence at our signature restaurant, featuring world-class cuisine and impeccable service",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant hotel restaurant"
            },
            {
              title: "Infinity Pool",
              description: "Relax and unwind in our stunning infinity pool overlooking breathtaking city views",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel infinity pool"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <PricingCardThree
          title="Luxury Accommodations"
          description="Choose from our carefully curated selection of rooms and suites"
          tag="Premium Rooms"
          tagIcon={Bed}
          plans={[
            {
              id: "deluxe",
              price: "$299/night",
              name: "Deluxe Room",
              buttons: [
                { text: "Book Now", href: "#contact" },
                { text: "View Details", href: "#room-details" }
              ],
              features: [
                "King-size bed with premium linens",
                "Marble bathroom with rainfall shower",
                "City view from floor-to-ceiling windows",
                "Complimentary high-speed WiFi",
                "24/7 room service"
              ]
            },
            {
              id: "executive",
              badge: "Most Popular",
              badgeIcon: Award,
              price: "$499/night",
              name: "Executive Suite",
              buttons: [
                { text: "Book Now", href: "#contact" },
                { text: "View Details", href: "#room-details" }
              ],
              features: [
                "Separate living area with dining space",
                "Premium king bed with luxury amenities",
                "Panoramic city views",
                "Executive lounge access",
                "Personal concierge service",
                "Complimentary breakfast"
              ]
            },
            {
              id: "presidential",
              price: "$899/night",
              name: "Presidential Suite",
              buttons: [
                { text: "Book Now", href: "#contact" },
                { text: "View Details", href: "#room-details" }
              ],
              features: [
                "Two-bedroom suite with full kitchen",
                "Private terrace with stunning views",
                "Butler and personal chef service",
                "Private spa treatment room",
                "Limousine airport transfers",
                "VIP check-in and exclusive amenities"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Read testimonials from our valued guests who have experienced the Grandview difference"
          tag="Guest Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechVentures Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson portrait",
              content: "Grandview Hotel exceeded all expectations. The luxury accommodations, exceptional service, and attention to detail made our corporate retreat truly memorable."
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Director",
              company: "Global Consulting",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen portrait",
              content: "The presidential suite was absolutely stunning. From the personalized service to the world-class amenities, every aspect of our stay was perfect."
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "VP Marketing",
              company: "Innovation Labs",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8425032/pexels-photo-8425032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez portrait",
              content: "The spa and wellness facilities are second to none. The entire experience at Grandview was rejuvenating and exactly what we needed for our team building event."
            },
            {
              id: "4",
              name: "David Kim",
              role: "Managing Partner",
              company: "Strategic Advisors",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait",
              content: "Outstanding hospitality and luxury at its finest. The concierge service and dining experiences made our business conference a remarkable success."
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grandview Hotel"
          tag="Guest Info"
          tagIcon={HelpCircle}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel lobby reception"
          mediaPosition="right"
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary shuttle service to and from the airport for our guests. Please contact our concierge 24 hours in advance to arrange your transfer."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "Our hotel features a signature fine dining restaurant, casual café, rooftop bar, and 24/7 room service. We also offer special dietary accommodations upon request."
            },
            {
              id: "4",
              title: "Is parking available?",
              content: "We offer both self-parking and valet parking services. Valet parking is complimentary for suite guests, while standard parking rates apply for other accommodations."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Ready to Experience Luxury?"
          description="Book your stay with us today and discover what makes Grandview Hotel truly exceptional. Our reservations team is here to help you plan the perfect getaway."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email for booking"
          buttonText="Request Booking"
          termsText="By submitting, you agree to receive booking information and special offers from Grandview Hotel."
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel lobby interior"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "About Us", href: "about" },
                { label: "Amenities", href: "amenities" },
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Dining", href: "dining" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Spa & Wellness", href: "spa" },
                { label: "Business Center", href: "business" },
                { label: "Events", href: "events" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Customer Service", href: "support" },
                { label: "Location", href: "location" },
                { label: "Careers", href: "careers" }
              ]
            }
          ]}
          copyrightText="© 2025 | Grandview Hotel"
        />
      </div>
    </ThemeProvider>
  );
}