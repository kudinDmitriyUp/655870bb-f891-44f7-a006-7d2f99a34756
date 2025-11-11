"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { BookOpen, Heart, Sparkles, Calendar, Users, Coffee, Star, Quote, HelpCircle, PenTool, Handshake, Twitter, Mail, Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="floatingGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Books", id: "books" },
            { name: "Events", id: "events" },
            { name: "Blog", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Mooney's Books"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Where Stories Come Alive"
          description="Discover your next great read at Manhattan's beloved independent bookstore on the Upper East Side"
          tag="Est. 1985"
          tagIcon={BookOpen}
          buttons={[
            { text: "Browse Books", href: "books" },
            { text: "Visit Us", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g2750ac895a9b76668bc643bac6657bc8f7328ca8d0c31de21dcef47d95bf2b8edd7f8dbb097b5a90ef050ee50f04a8eb4df5d0fbe92de39ebeb18698a55ad9e0_1280.jpg",
              imageAlt: "Cozy bookstore interior"
            },
            {
              imageSrc: "https://pixabay.com/get/ge3cb336b49446aa82df7d7a1276e3a430162585e335c5832fb9414de4fbc666277984ccf2fe580b9b476f46156f443fde596ffab3394454ac195fff4387e3fd7_1280.jpg",
              imageAlt: "Literary book shelves"
            },
            {
              imageSrc: "https://pixabay.com/get/gfbb9e8416c0fe0c36efb9c6ec79d16e9cf5820c9a5a78a5f22105da6ddf66811582f44af4a1ef13938e3b47b538a2b86f2921486f2cd78b8e0714eba69a854ce_1280.jpg",
              imageAlt: "Reading corner"
            },
            {
              imageSrc: "https://pixabay.com/get/gfbe98cbda993a1c0e936788c36cf72ae03729be74142a88e071cffbe69e438a271cd16a896070926bfbafeb84b72151061a1b1110ec243ab70231da1fb05587a_1280.jpg",
              imageAlt: "Customers browsing"
            },
            {
              imageSrc: "https://pixabay.com/get/g0763e3d73e338e0afadc5c54bb577f5f30dc11053b6d345feff98df9db60ffb6a7d9768d63bfe36a094f6d7ab683fba0aabd17b22bdb848a3faaf9c49bd8b98f_1280.jpg",
              imageAlt: "Storefront window"
            }
          ]
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="A Literary Haven Since 1985"
          description="Nestled in the heart of Manhattan's Upper East Side, Mooney's Books has been serving the literary community for nearly four decades. We're more than just a bookstore—we're a gathering place for readers, writers, and book lovers."
          tag="Our Story"
          tagIcon={Heart}
          textboxLayout="default"
          imagePosition="right"
          imageSrc="https://pixabay.com/get/g2750ac895a9b76668bc643bac6657bc8f7328ca8d0c31de21dcef47d95bf2b8edd7f8dbb097b5a90ef050ee50f04a8eb4df5d0fbe92de39ebeb18698a55ad9e0_1280.jpg"
          imageAlt="Inside Mooney's Books"
          bulletPoints={[
            {
              title: "Curated Selection",
              description: "Handpicked books across fiction, non-fiction, poetry, and rare finds",
              icon: Sparkles
            },
            {
              title: "Literary Events",
              description: "Author readings, book clubs, and literary discussions throughout the year",
              icon: Calendar
            },
            {
              title: "Personal Service",
              description: "Expert recommendations from our knowledgeable staff who love books as much as you do",
              icon: Users
            },
            {
              title: "Community Hub",
              description: "A welcoming space where book lovers connect and discover new voices",
              icon: Coffee
            }
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="books" data-section="books">
        <ProductCardOne
          title="Featured Books"
          description="Discover our staff picks and bestsellers, carefully selected for discerning readers"
          tag="Curated Picks"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "The Seven Moons of Maali Almeida",
              price: "$28.95",
              imageSrc: "https://pixabay.com/get/g0660aeddcb519222e1fa3793ba37f90b80ccf04fc561a3b95efb8f5f7e9db659f88f5be7c26b216244f560eaec72e13d8dc45f5a9bbf86240798d527832a08cc_1280.jpg",
              imageAlt: "Bestselling fiction novel"
            },
            {
              id: "2",
              name: "Lessons in Chemistry",
              price: "$17.99",
              imageSrc: "https://pixabay.com/get/g0ec9450b50dfcff31559e8c661575c5a44b3b14d9d829cfa611e139eb34352ff9325496e109f04cae24a34b5bf6ae21d34acf22a734470bdb765daab3386b8f4_1280.jpg",
              imageAlt: "Literary classic book"
            },
            {
              id: "3",
              name: "The Atlas of AI",
              price: "$29.95",
              imageSrc: "https://pixabay.com/get/ge0e776a9fe0ef0054188f3293824a083dfee5f69ff4227a42d9ff1d75108e175356b2c699f5473685a2f11303a9a26bf03a87dc7ad3c4709b1388a9f2b83eed5_1280.jpg",
              imageAlt: "Contemporary non-fiction"
            },
            {
              id: "4",
              name: "Klara and the Sun",
              price: "$26.95",
              imageSrc: "https://pixabay.com/get/g8f0e982c1b1a4edf777c7cf3bb4dfdc56856e684b556eb2760f18f8ad31ecd565c7f81fb06d4bb659308f3bdf75f83a2465425e9d5937807f2b3ff785a57f555_1280.jpg",
              imageAlt: "Nobel prize winner fiction"
            },
            {
              id: "5",
              name: "The Thursday Murder Club",
              price: "$16.99",
              imageSrc: "https://pixabay.com/get/ge2d7d1e157fb903b96e19e2144a45088ba4870ada998a98b017c45368f1ed1923069a2ea7fbb5b1481c05c13748def7ba128a6cdc14c543210dfa33c13788813_1280.jpg",
              imageAlt: "Mystery thriller bestseller"
            }
          ]
        />
      </div>

      <div id="events" data-section="events">
        <FeatureCardOne
          title="Literary Events & Services"
          description="Join our vibrant community through readings, book clubs, and special literary events"
          tag="What We Offer"
          tagIcon={Calendar}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Author Readings",
              description: "Meet acclaimed authors and discover new voices in intimate reading events",
              imageSrc: "https://pixabay.com/get/g7f8cee6e27998c542a6b742b83a7a695733e5157b67750d13802bce33c318f12dc7c0674b470933b04abecf33395d397875b1464c473061843dff1eeb6c42888_1280.jpg",
              imageAlt: "Author reading event"
            },
            {
              title: "Book Clubs",
              description: "Join fellow readers in monthly discussions of contemporary and classic literature",
              imageSrc: "https://pixabay.com/get/g948491b087aec844df881c4b9b5770ba54ae6d76320e5d78bd3709a21e2be6554fb14f4ebe84e31143c5ba29e4899aba018394784ac2c4ad08326715dfcf751f_1280.jpg",
              imageAlt: "Book club discussion"
            },
            {
              title: "Personal Curation",
              description: "Let our experts curate personalized book recommendations just for you",
              imageSrc: "https://pixabay.com/get/gc5692f3be24e335b032acc42dc3921e2855f9ca58e6b1237012af131ae92dea3af5ad977cc224bb5c5f89bdabaa759aadf7ba402d3810cce428cdfd725bb5187_1280.jpg",
              imageAlt: "Staff book recommendations"
            },
            {
              title: "Special Orders",
              description: "Can't find what you're looking for? We'll track down any book you need",
              imageSrc: "https://pixabay.com/get/ge3cb336b49446aa82df7d7a1276e3a430162585e335c5832fb9414de4fbc666277984ccf2fe580b9b476f46156f443fde596ffab3394454ac195fff4387e3fd7_1280.jpg",
              imageAlt: "Book ordering service"
            }
          ]
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Readers Say"
          description="Discover why book lovers have made Mooney's their literary home for decades"
          tag="Reader Reviews"
          tagIcon={Quote}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "Literature Professor",
              company: "Columbia University",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g948491b087aec844df881c4b9b5770ba54ae6d76320e5d78bd3709a21e2be6554fb14f4ebe84e31143c5ba29e4899aba018394784ac2c4ad08326715dfcf751f_1280.jpg",
              imageAlt: "Sarah Chen portrait",
              content: "Mooney's Books is a treasure trove of literary gems. The staff's recommendations have introduced me to authors I never would have discovered otherwise."
            },
            {
              id: "2",
              name: "Marcus Williams",
              role: "Writer",
              company: "The New Yorker",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g6bcf6c8df3b24c9f6916a8de30f1b6c18d371869bd1afba039d62549be9343735d4e4d4aaba8c956502229774b3cade8ca0ce928eb0343a17ff3c1cd93a25aca_1280.jpg",
              imageAlt: "Marcus Williams portrait",
              content: "The literary events at Mooney's create an intimate atmosphere perfect for discovering new voices. It's where the city's literary community gathers."
            },
            {
              id: "3",
              name: "Elena Rodriguez",
              role: "Book Club Leader",
              company: "UES Readers",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g5f6358b0965dab00e93326af679c9c6a1d631dc6c6495e94d714bac8486e9a602aeab9d74b2546c023336a31ed4fb3e8fc51431bfc95dc2f83844f1c4e9ffac9_1280.jpg",
              imageAlt: "Elena Rodriguez portrait",
              content: "Our book club has called Mooney's home for five years. The space fosters incredible discussions and the staff always has perfect recommendations."
            },
            {
              id: "4",
              name: "David Kim",
              role: "Novelist",
              company: "Independent Author",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ge1671f19e8216a6443a53c1d22c3e95eacdaaee1365c623d46f4f22949ade226f3eed551cd93591754442e42e9753643bcc341867c8a0d4d9b5ed311dce6f546_1280.jpg",
              imageAlt: "David Kim portrait",
              content: "As a writer, I find inspiration in every corner of Mooney's. The carefully curated selection and knowledgeable staff make it essential for any author."
            },
            {
              id: "5",
              name: "Jennifer Thompson",
              role: "Editor",
              company: "Random House",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g01cbe46d6b1a199844e208b0e9b751d41a214cb9af1bafc9c1fee861d1ae39b6c2f2e0813d1ac009ecf322a23fe236159685bb7c1ce4bf47ba6188a4ca7db67c_1280.jpg",
              imageAlt: "Jennifer Thompson portrait",
              content: "Mooney's understands books in a way that chain stores simply can't match. Their passion for literature is evident in every recommendation and event."
            }
          ]
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Team"
          description="The passionate book lovers behind Mooney's Books"
          tag="Our People"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Patricia Mooney",
              role: "Owner & Founder",
              imageSrc: "https://pixabay.com/get/g2183d509110f8b31ef9e7afea5ef6dd999447f12d9702363c68cc8e90dc3204009e3a768a38537d5cd2e71113ab0ea0219a30bcf5fad4d0af4d3d54e071927d4_1280.jpg",
              imageAlt: "Patricia Mooney portrait",
              socialLinks: [
                { icon: "Twitter", url: "https://twitter.com/mooneybooks" },
                { icon: "Mail", url: "mailto:patricia@mooneysbooks.com" }
              ]
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Literary Curator",
              imageSrc: "https://pixabay.com/get/g9c7758578af5ae38e6721f77ef49aa3b5b8964c4c2931f37a533807dc6e10a51029010c0ab698f48783e00fa5cc593a56d929c19c3041969adfd0873b480e6e0_1280.jpg",
              imageAlt: "James Rodriguez portrait",
              socialLinks: [
                { icon: "BookOpen", url: "https://goodreads.com/james" },
                { icon: "Mail", url: "mailto:james@mooneysbooks.com" }
              ]
            },
            {
              id: "3",
              name: "Amanda Foster",
              role: "Events Coordinator",
              imageSrc: "https://pixabay.com/get/gf673ad8ae4f5f369fecdc5354a50119dd40faef33e6504e2d02fb387aefa77129ec7008e7011e6205db10614f201bcd508c5f95aacf4db723cc225047fdb79f7_1280.jpg",
              imageAlt: "Amanda Foster portrait",
              socialLinks: [
                { icon: "Instagram", url: "https://instagram.com/mooneyevents" },
                { icon: "Mail", url: "mailto:events@mooneysbooks.com" }
              ]
            }
          ]
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Trusted by Publishers"
          description="Proud partners with the world's leading literary publishers"
          tag="Our Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/gd67bf76884469b0dd08e7557f679052d419518d972b70d42ed7d1104b75a028a9cca768539a45e53271994936f3a1947138eb0f12d4418ba134bed1b8f04fa50_1280.jpg",
            "https://pixabay.com/get/ge1d16da503c26a54ac365a9ea55775c90f6f8f9e042177fcbb6e87d1f1d3b68fe80e904b2811b6b7440bc0b55fe468ffd23ade67a3958f78634717ddc5e1ec93_1280.jpg",
            "https://pixabay.com/get/g26fb75a6c3474c0f8d37b90370f9f47bc2432ae6006ecf5448a1dff006172e6140a978268d1aef4487ccf671810935eb5c59833c2b34ca14cb3095e9818a4d25_1280.jpg",
            "https://pixabay.com/get/g49c47576825f29c2868993ac393ae8b6f4034f42244a9dc3de156bfd4a7eee2d1eeb8d6f09be82dc50bc671e310cb4d1d09db5196ef2ffe1df83cc2556fbfe44_1280.jpg",
            "https://pixabay.com/get/g4b6ca26e0bfbb508dc9042d611e44d93b2bea6c2986548351a32cb5c976d60340703d49b55895af1aaa78dec672986d0c02391d7c0965ee603f36befac9ff089_1280.jpg"
          ]
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about visiting Mooney's Books"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are your store hours?",
              content: "We're open Monday through Saturday 10am-8pm, and Sunday 11am-6pm. During holidays, hours may vary - please call ahead."
            },
            {
              id: "2",
              title: "Do you buy used books?",
              content: "Yes! We purchase quality used books in good condition. Bring them in during regular hours for evaluation - no appointment necessary."
            },
            {
              id: "3",
              title: "Can you order books that aren't in stock?",
              content: "Absolutely. We can special order almost any book in print. Most orders arrive within 3-5 business days."
            },
            {
              id: "4",
              title: "Do you host private events?",
              content: "Yes, we offer the space for book clubs, private readings, and literary gatherings. Contact us to discuss availability and pricing."
            },
            {
              id: "5",
              title: "Is there parking nearby?",
              content: "Street parking is available, and there's a parking garage two blocks north on 85th Street. We're also easily accessible by subway - take the 4, 5, or 6 to 86th Street."
            }
          ]
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="From Our Literary Journal"
          description="Book reviews, author interviews, and literary insights from the Mooney's team"
          tag="Latest Posts"
          tagIcon={PenTool}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Review",
              title: "Winter Reading: Our Top 10 Picks",
              excerpt: "As the temperatures drop, curl up with these captivating novels that will transport you to other worlds",
              imageSrc: "https://pixabay.com/get/g6a2094bf20677fe87a00a3222694ee410228c0f79f94ca3f86541cf70f720aa216bd9a270118cc2fee7dfd8e09cbe9ce29e6e990a405e34ce18ee8c4d2077720_1280.jpg",
              imageAlt: "Winter reading recommendations",
              authorName: "Patricia Mooney",
              authorAvatar: "https://pixabay.com/get/g2183d509110f8b31ef9e7afea5ef6dd999447f12d9702363c68cc8e90dc3204009e3a768a38537d5cd2e71113ab0ea0219a30bcf5fad4d0af4d3d54e071927d4_1280.jpg",
              date: "15 Dec 2024"
            },
            {
              id: "2",
              category: "Interview",
              title: "In Conversation: Local Authors",
              excerpt: "We sat down with three NYC-based writers to discuss their latest works and the city's influence on their writing",
              imageSrc: "https://pixabay.com/get/gae186561e32b8f6114b1b87c78558a434384be1fe6a4ff24c6ae116078a7a1ca5285309329c27058a6765cb1779cf49cf33b8370fae2cb00e1f6df4387a21f21_1280.jpg",
              imageAlt: "Author interview session",
              authorName: "James Rodriguez",
              authorAvatar: "https://pixabay.com/get/g9c7758578af5ae38e6721f77ef49aa3b5b8964c4c2931f37a533807dc6e10a51029010c0ab698f48783e00fa5cc593a56d929c19c3041969adfd0873b480e6e0_1280.jpg",
              date: "08 Dec 2024"
            },
            {
              id: "3",
              category: "Events",
              title: "January Book Club Selections",
              excerpt: "Join us this month as we explore contemporary fiction that examines family, identity, and belonging",
              imageSrc: "https://pixabay.com/get/g7f8cee6e27998c542a6b742b83a7a695733e5157b67750d13802bce33c318f12dc7c0674b470933b04abecf33395d397875b1464c473061843dff1eeb6c42888_1280.jpg",
              imageAlt: "Book club meeting",
              authorName: "Amanda Foster",
              authorAvatar: "https://pixabay.com/get/gf673ad8ae4f5f369fecdc5354a50119dd40faef33e6504e2d02fb387aefa77129ec7008e7011e6205db10614f201bcd508c5f95aacf4db723cc225047fdb79f7_1280.jpg",
              date: "02 Dec 2024"
            },
            {
              id: "4",
              category: "Curation",
              title: "Hidden Gems: Staff Discoveries",
              excerpt: "Our team shares recent finds - lesser-known titles that deserve a place on your reading list",
              imageSrc: "https://pixabay.com/get/gc5692f3be24e335b032acc42dc3921e2855f9ca58e6b1237012af131ae92dea3af5ad977cc224bb5c5f89bdabaa759aadf7ba402d3810cce428cdfd725bb5187_1280.jpg",
              imageAlt: "Staff book picks display",
              authorName: "Patricia Mooney",
              authorAvatar: "https://pixabay.com/get/g2183d509110f8b31ef9e7afea5ef6dd999447f12d9702363c68cc8e90dc3204009e3a768a38537d5cd2e71113ab0ea0219a30bcf5fad4d0af4d3d54e071927d4_1280.jpg",
              date: "28 Nov 2024"
            },
            {
              id: "5",
              category: "Opinion",
              title: "The Future of Independent Bookstores",
              excerpt: "Reflecting on nearly 40 years in business and why community bookstores matter more than ever",
              imageSrc: "https://pixabay.com/get/g8a6244837b215525043bb8d4566ed8ff608bd3a234e988e8a08fd75935c0f75f859df86d5c3a311fd9747d13420ef0d012f3816ed7b20ca96b7d68c7e2c3f2cd_1280.jpg",
              imageAlt: "Independent bookstore perspective",
              authorName: "Patricia Mooney",
              authorAvatar: "https://pixabay.com/get/g2183d509110f8b31ef9e7afea5ef6dd999447f12d9702363c68cc8e90dc3204009e3a768a38537d5cd2e71113ab0ea0219a30bcf5fad4d0af4d3d54e071927d4_1280.jpg",
              date: "20 Nov 2024"
            }
          ]
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Visit Us or Get In Touch"
          description="Located on the Upper East Side at 123 East 84th Street. Stop by or send us a message - we'd love to help you find your next great read."
          buttonText="Send Message"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number (Optional)", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "What can we help you find? Book recommendations, event inquiries, special orders...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Mooney's Books"
          copyrightText="© 2024 Mooney's Books | 123 East 84th Street, New York, NY 10028"
          columns={[
            {
              title: "Store",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Books", href: "books" },
                { label: "Events", href: "events" },
                { label: "Blog", href: "blog" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Special Orders", href: "contact" },
                { label: "Book Clubs", href: "events" },
                { label: "Author Readings", href: "events" },
                { label: "Private Events", href: "contact" }
              ]
            },
            {
              title: "Visit",
              items: [
                { label: "Store Hours", href: "contact" },
                { label: "Location & Parking", href: "contact" },
                { label: "Contact Us", href: "contact" },
                { label: "Newsletter", href: "contact" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Book Reviews", href: "blog" },
                { label: "Reading Lists", href: "blog" },
                { label: "Literary Events", href: "events" },
                { label: "Community", href: "about" }
              ]
            }
          ]}
          socialLinks={[
            { icon: "Twitter", href: "https://twitter.com/mooneybooks", ariaLabel: "Follow us on Twitter" },
            { icon: "Instagram", href: "https://instagram.com/mooneysbooks", ariaLabel: "Follow us on Instagram" },
            { icon: "Facebook", href: "https://facebook.com/mooneysbooks", ariaLabel: "Follow us on Facebook" },
            { icon: "Mail", href: "mailto:info@mooneysbooks.com", ariaLabel: "Email us" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}