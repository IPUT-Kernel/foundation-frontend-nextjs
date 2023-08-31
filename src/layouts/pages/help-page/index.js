import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";

// Material Dashboard 2 PRO React examples
import PageLayout from "examples/LayoutContainers/PageLayout";

// Pricing page components
import Header from "layouts/pages/help-page/components/Header";
import Footer from "layouts/pages/help-page/components/Footer";
import Faq from "layouts/pages/help-page/components/Faq";

function PricingPage() {

  return (
    <PageLayout>
      <Header >
        <Faq />
      </Header>
      <Footer />
    </PageLayout>
  );
}

export default PricingPage;
