import React from "react";
import styled from "styled-components";

import { FavouritesSection } from "./Sections/FavouritesSection";
import { FrequentlyVisitedSection } from "./Sections/FrequentlyVisitedSection";
import { SharedWithYouSection } from "./Sections/SharedWithYouSection";
import { PrivacyReportSection } from "./Sections/PrivacyReportSection";
import { SiriSuggestionsSection } from "./Sections/SiriSuggestionsSection";
import { ReadingListSection } from "./Sections/ReadingListSection";
import { ICloudTabsSection } from "./Sections/ICloudTabsSection";

export const HomeScreen = () => {
  return (
    <Container>
      <FavouritesSection />
      <FrequentlyVisitedSection />
      <SharedWithYouSection />
      <PrivacyReportSection />
      <SiriSuggestionsSection />
      <ReadingListSection />
      <ICloudTabsSection />
    </Container>
  );
};

const Container = styled.div`
  padding: 8px;
`;
