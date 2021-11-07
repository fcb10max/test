import styled from "styled-components"
import GetBlock from "./DevicesComponents/GetBlock";
import SetupInstructions from "./DevicesComponents/SetupInstructions";
import WhyChooseComponent from "./DevicesComponents/WhyChooseComponent";
import DevicesNavbar from "./Navbars/DevicesNavbar";

const Container = styled.div`
  overflow-x: hidden;
`;
const Wrapper = styled.div``;

const Devices = ({device}) => {

  return (
    <Container>
      <Wrapper>
        <DevicesNavbar
          title={device.navbar.title}
          desc={device.navbar.desc}
          list={device.navbar.list}
          bg={device.navbar.bg}
          img={device.navbar.img}
        />
        <SetupInstructions title={device.stepsTitle} steps={device.steps}/>
        <GetBlock
          title={device.lastBlock.title}
          desc={device.lastBlock.desc}
          item1={device.lastBlock.items.item1}
          item2={device.lastBlock.items.item2}
          img={device.lastBlock.img}
        />
        <WhyChooseComponent/>
      </Wrapper>
    </Container>
  )
}

export default Devices
