import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import styled from "styled-components";
import { useRouter } from "module/Router";

type ItemProps = LinkItemProps | ChildItemProps

export const Item = (props: ItemProps) => {

  if ("link" in props) {
    return <LinkItem {...props} />
  }

  if ("children" in props) {
    return <ChildItem {...props} />
  }

  return <></>
}

type LinkItemProps = {
  title: string;
  icon: () => JSX.Element;
  link: string;
  status?: string;
}

const LinkItem = ({ icon: Icon, ...props }: LinkItemProps) => {
  const { navigate } = useRouter()

  const handleClick = () => {
    navigate(props.link)
  }

  return (
    <Container onClick={handleClick}>
      <Icon />
      <Details>
        <ItemTitle>{props.title}</ItemTitle>
        <ToScreen>
          {props.status && <Status>{props.status}</Status>}
          <IoIosArrowForward color="var(--iosColorGray3)" size={18} />
        </ToScreen>
      </Details>
    </Container>
  )
}

type ChildItemProps = {
  title: string;
  icon: () => JSX.Element;
  children: JSX.Element;
}

const ChildItem = ({ icon: Icon, ...props }: ChildItemProps) => {
  return (
    <Container>
      <Icon />
      <Details>
        <ItemTitle>{props.title}</ItemTitle>
        <ToScreen>
          {props.children}
        </ToScreen>
      </Details>
    </Container>
  )
} 

const Container = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding-right: 0px;
  padding-left: 18px;
  /* margin-bottom: 8px; */

  &:last-child {
    
    > div {
      border: none;
    }

  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding-right: 18px;
  border-bottom: 1px solid ${({ theme }) => theme.ios.color.gray4};
  height: 48px;
`;

const ItemTitle = styled.h3`
  margin: 0;
  font-weight: lighter;
`;

const ToScreen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const Status = styled.span`
  color: ${({ theme }) => theme.ios.color.gray};
  font-size: 14px;
`;