import styled from "styled-components";

import { SearchField } from "ios/SearchFields";
import { InvisibleButton } from "module/InvisibleButton";
import { useRouter } from "module/Router";

import { IoIosArrowBack as BackArrow } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosArrowForward as ForwardArrow } from "@react-icons/all-files/io/IoIosArrowForward";
import { IoShareOutline as Share } from "@react-icons/all-files/io5/IoShareOutline";
import { BsBook as History } from "@react-icons/all-files/bs/BsBook";
import { IoCopyOutline as Tabs } from "@react-icons/all-files/io5/IoCopyOutline";

export const Toolbar = () => {
  const { navigate } = useRouter();

  const handleSearch = (value: string) => {};
  const handleBack = () => {};
  const handleForward = () => {};
  const handleShare = () => {};
  const handleHistory = () => {};
  const handleTabs = () => navigate("/tabs");

  return (
    <Container>
      <SearchBox>
        <SearchField
          unFocusPlaceholder="Search or enter website"
          focusPlaceholder="Search or enter website name"
          onSubmit={handleSearch}
        />
      </SearchBox>
      <Actions>
        <Action onClick={handleBack}>
          <BackArrow size={24} color={active(false)} />
        </Action>
        <Action onClick={handleForward}>
          <ForwardArrow size={24} color={active(false)} />
        </Action>
        <Action onClick={handleShare}>
          <Share size={26} color={active(false)} />
        </Action>
        <Action onClick={handleHistory}>
          <History size={24} color={active(true)} />
        </Action>
        <Action onClick={handleTabs}>
          <Tabs size={24} color={active(true)} />
        </Action>
      </Actions>
    </Container>
  );
};

const active = (isActive: boolean) => {
  return isActive ? "var(--iosColorBlue)" : "var(--iosColorGray3)";
};

const Container = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  padding-bottom: 24px;

  background-color: ${({ theme }) => theme.ios.color.gray6};
`;

const SearchBox = styled.div`
  margin: 0px 16px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-direction: row;
`;

const Action = styled(InvisibleButton)`
  padding-top: 4px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;
