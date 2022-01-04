import React from "react";
import styled from "styled-components";
import GlobalFonts from "../fonts/fonts";

interface ContainerProps {
  width: number;
  height: number;
}

interface HeaderProps {
  width: number;
}

interface MainImgProps {
  width: number;
}

const Container = styled.div`
  flex: 1;
  width: ${(props) => props};
  height: ${(props) => props};
  background: #ffffff;
  padding-top: 56px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Header = styled.div`
  flex: 1;
  width: ${(props) => props};
  height: 150px;
`;

const HeaderText = styled.div`
  flex: 1;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  color: #1f3350;
  font-family: "AppleSDGothicNeo";
`;

const MainImg = styled.div`
  height: 300px;
  width: ${(props) => props};
  background: red;
`;

class MainScreen extends React.Component {
  state = {
    isLoading: true,
    width: window.innerWidth,
    height: window.innerHeight,
  };

  getDatas = () => {
    console.log("Hello world");
    this.setState({
      isLoading: false,
    });
  };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentDidMount() {
    this.getDatas();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { isLoading } = this.state;
    console.log(window.innerHeight);
    console.log(this.state.height);
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <GlobalFonts />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Container width={this.state.width} height={this.state.height}>
            <Header width={this.state.width}>
              <HeaderText>Hello </HeaderText>
              <HeaderText>Let's get Your</HeaderText>
              <HeaderText>Stick!</HeaderText>
            </Header>
            <MainImg width={this.state.width}></MainImg>
          </Container>
        )}
      </div>
    );
  }
}
export default MainScreen;
