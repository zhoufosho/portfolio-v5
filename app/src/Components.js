import React from "react";
import { Box, Flex, Heading, Text, Image, Button } from "rebass";
import { Label, Input } from "@rebass/forms"


const FULL_WIDTH = 960;
const TEMP_PW = "qwerqwer";

export const Heading1 = props => {
  return <Text variant="heading" {...props} />;
};

export const Subheading = props => {
  return <Text variant="subheading" {...props} />;
};

export const Heading2 = props => {
  return <Text variant="heading2" {...props} />;
};

export const Heading3 = props => {
  return (
    <Text variant="heading3" {...props} />
  );
};

export const Paragraph = ({ children, ...restProps }) => {
  return (
    <Text
      {...restProps}
      variant="body"
      sx={{ "-webkit-font-smoothing": "antialiased" }}
    >
      {children}
    </Text>
  );
};

export const Container = ({ children, ...restProps }) => {
  return (
    <Box 
      {...restProps}
      sx={{
        maxWidth: FULL_WIDTH,
        mx: "auto",
        px: "medium",
      }}
    >
      {children}
    </Box>
  );
};

export const Section = ({ children, ...restProps }) => {
  return (
    <Box 
      {...restProps}
      sx={{
        maxHeight: "80vh",
        px: "medium",
        py: "giant",
      }}
    >
      {children}
    </Box>
  );
};

export const InputField = props => {
  return (
    <Input {...props} 
      sx={{ 
        border: "none",
        lineHeight: "1.8",
        px: 15,
        py: 10,
        ":focus": {
          outline: "none",
        }
      }} 
      css={{

      }}/>
  );
};

export class PrivatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      isAuthenticated: false,
      showSubmit: false,
    };
  }

  handleSubmit = (event) => {
    if (this.state.password === TEMP_PW) {
      this.setState({isAuthenticated: "true"});
    }
  }

  handleChange = (event) => {
    this.setState({ password: event.target.value });
    this.setState({ showSubmit: event.target.value });
  }

  renderPasswordPage() {
    return (
      <Section>
        <Container>
          <Box as="form" onSubmit={(event) => this.handleSubmit(event)}>
            <Flex>
              <InputField
                id="password"
                name="password"
                type="password"
                placeholder="password"
                onChange = {(event) => this.handleChange(event) } />
              {this.state.showSubmit && <Button 
                  sx={{
                    borderRadius: "circle",
                    width: 40,
                    height: 40,
                  }}> 
                  {">"} 
                </Button>
              }
            </Flex>
          </Box>
        </Container>
      </Section>
    );
  }

  render() {
    const Component = this.props.component;
    return this.state.isAuthenticated ? <Component /> : this.renderPasswordPage()
  }
}
