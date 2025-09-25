use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import ProcessRoadmap from '@/components/sections/layouts/roadmap/ProcessRoadmap';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: "futuristicAndOutOfBox",
      colorTemplate: 2,
      textAnimation: "slide"
    }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutSplitBottom
          logoSrc="/images/logo.svg"
          logoWidth={24}
          logoHeight={24}
          buttonText="Get Early Access"
          onButtonClick={() => {}}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Roadmap", id: "roadmap" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to Peak"
          subtitle="Experience the Future of Tech"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => {}}
          onSecondaryButtonClick={() => {}}/>
      </div>
      <div id="about" data-section="about">
        <SocialsAbout
          title="About Peak"
          descriptions={[
            "We offer innovative solutions that are both sleek and functional.",
            "Our focus is on privacy and user empowerment."
          ]}/>
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ
          items={[
            { title: "What is Peak?", content: "Peak is a futuristic tech platform that focuses on user privacy and efficiency." },
            { title: "How can I get started?", content: "Click the Get Started button on our homepage!" },
            { title: "What features do you offer?", content: "We offer a range of features including AI assistance, secure browsing, and more." },
            { title: "How do you ensure privacy?", content: "We use advanced encryption and privacy-focused technology to protect your data." },
            { title: "Is there a referral program?", content: "Yes! You can refer friends to earn rewards." }
          ]}/>
      </div>
      <div id="roadmap" data-section="roadmap" className="scroll-mt-24">
        <ProcessRoadmap
          items={[
            { id: "phase1", title: "Research", description: "Conducting initial research to identify key areas for development." },
            { id: "phase2", title: "Development", description: "Building the core products and features based on research findings." },
            { id: "phase3", title: "Launch", description: "Official launch of the Peak platform to the public." }
          ]}/>
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"/>
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics Overview"
          description="Learn about our token distribution and economics."
          cardItems={[
            { id: 1, title: "Total Supply", description: "1 Million Tokens" },
            { id: 2, title: "Liquidity", description: "60% Locked for 2 Years" },
            { id: 3, title: "Marketing", description: "20% Allocated for Promotions" }
          ]}/>
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={24}
          logoHeight={24}
          columns={[
            { title: "Quick Links", items: [
              { label: "Home", onClick: () => {} },
              { label: "About", onClick: () => {} },
              { label: "FAQ", onClick: () => {} }
            ]},
            { title: "Support", items: [
              { label: "Contact Us", onClick: () => {} },
              { label: "Privacy Policy", onClick: () => {} }
            ]},
            { title: "Social", items: [
              { label: "Twitter", onClick: () => {} },
              { label: "LinkedIn", onClick: () => {} }
            ]}
          ]}
          copyrightText="© 2023 Peak, All Rights Reserved"
          onPrivacyClick={() => {} }/>
      </div>
    </SiteThemeProvider>
  );
}
