import { useBoolean } from "react-raw-hooks/hooks/useBoolean";
import { useInput } from "react-raw-hooks/hooks/useInput";
import styled from "styled-components";

import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { HiMicrophone } from "@react-icons/all-files/hi/HiMicrophone";
import { IoCloseCircle } from "@react-icons/all-files/io5/IoCloseCircle";

import { InvisibleButton } from "module/InvisibleButton";

type SearchFieldProps = {
  focusPlaceholder?: string;
  unFocusPlaceholder?: string;
  onSubmit?: (value: string) => void;
};

export const SearchField = (props: SearchFieldProps) => {
  const [focused, { setTrue, setFalse }] = useBoolean(false);
  const [search, { clear }] = useInput();
  const canBeCleared = search.value.length >= 1;

  const handleSubmit = () => {
    props.onSubmit?.(search.value);
  };

  return (
    <Container>
      {!focused && <SearchIcon size={16} color="var(--iosColorGray2)" />}
      <SearchInput
        onFocus={setTrue}
        onBlur={() => {
          setFalse();
          clear();
        }}
        placeholder={focused ? props.focusPlaceholder : props.unFocusPlaceholder}
        focused={focused}
        {...search}
        onKeyUp={({ key }) => {
          if (key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <ListenIconContainer rightOffset={canBeCleared ? 32 : 0}>
        <HiMicrophone size={18} color="var(--iosColorGray2)" />
      </ListenIconContainer>
      {canBeCleared && (
        <ResetIconContainer onClick={clear}>
          <IoCloseCircle size={18} color="var(--iosColorGray2)" />
        </ResetIconContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 8px;
  position: relative;
`;

const SearchInput = styled.input<{ focused: boolean }>`
  border: none;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 2px 32px ${({ theme }) => theme.ios.color.gray4};
  width: calc(100% - 16px);
  font-size: 16px;
  padding: 12px;
  border-radius: 8px;
  text-align: ${({ focused }) => (focused ? "left" : "center")};

  &::placeholder {

    font-size: 14px;
    color: ${({ theme }) => theme.ios.color.gray2};
    letter-spacing: 1px;

  }
`;

const SearchIcon = styled(BiSearch)`
  position: absolute;
  top: 14px;
  left: 12px;
`;

const ListenIconContainer = styled(InvisibleButton)<{ rightOffset: number }>`
  position: absolute;
  top: 12px;
  right: ${({ rightOffset }) => `${0 + rightOffset}px`};
`;

const ResetIconContainer = styled(InvisibleButton)`
  position: absolute;
  top: 12px;
  right: 0px;
`;
