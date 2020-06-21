import React from "react";
import { Heading, Text, Image, Button, Link } from "rebass";
import { Flex, Box } from "reflexbox"
import { Label, Input } from "@rebass/forms"


const FULL_WIDTH = 1000;
const TEMP_PW = "mochi";

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
      color="secondary"
      sx={{ "-webkit-font-smoothing": "antialiased" }}
    >
      {children}
    </Text>
  );
};

export const Footer = ({ children, ...restProps }) => {
  return (
    <Text
      {...restProps}
      variant="footer"
      textAlign="center"
      width={["100%", "80%"]}
      mx="auto"
      sx={{ "-webkit-font-smoothing": "antialiased" }}
    >
      {children}
    </Text>
  );
};

export const SiteHeader = ({ children, ...restProps }) => {
  return (
    <Container mt="large">
      <Paragraph mt="small" px="medium">
        <Link href="/" sx={{
          ":hover": {
            fontWeight: "bold",
            color: "teal"
          }
        }}>
        elaine
        </Link>
      </Paragraph>

      
    </Container>
  );
};

export const StyledLink = ({ children, ...restProps }) => {
  return (
    <Link 
      {...restProps}
      sx={{
        "text-decoration": "underline",
        ":hover": {
          fontWeight: "bold",
          color: "teal"
        }
      }}
    >
      {children}
    </Link>
  );
};

export const Strong = props => {
  return (
    <Text
      {...props}
      as="span"
      color="primary"
      fontWeight="bold"
      sx={{ "-webkit-font-smoothing": "antialiased" }} />
  );
};

export const Italic = props => {
  return (
    <Text
      {...props}
      as="span"
      color="primary"
      fontStyle='italic'
      sx={{ "-webkit-font-smoothing": "antialiased" }} />
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
        py: "large",
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
        boxSizing: "content-box",
        px: "medium",
        py: "huge",
      }}
    >
      {children}
    </Box>
  );
};

export const MainAndSecondaryGrid = ({ main, mainWidth, secondary, ...restProps}) => {
  const secondaryWidth = 1 - mainWidth

  return (
    <Flex 
      {...restProps}
      flexWrap="wrap"
    >
      <Box 
        width={[1, mainWidth]}
        pr={[0, "large"]}
      >
        {main}
      </Box>
      <Box 
        width={[1, secondaryWidth]}
        pl={[0, "large"]}
        mt={["medium", 0]}
      >
        {secondary}
      </Box>
    </Flex>
  );
};

export const RegularWidth = ({ children, ...restProps }) => {
  return (
    <Box 
      {...restProps}
      width={["100%", "85%"]}
      mx="auto"
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
        px: "regular",
        py: "small",
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
            <Flex 
              sx={{
                borderBottom: "1px solid",
                borderColor: "muted",
              }}>
              <InputField
                id="password"
                name="password"
                type="password"
                placeholder="password"
                onChange = {(event) => this.handleChange(event) } 
                onSubmit={(event) => this.handleSubmit(event)} />
              {this.state.showSubmit && 
                <Box onClick={(event) => this.handleSubmit(event)}> 
                  <Image src="/images/chevron_right.png" />
                </Box>
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
