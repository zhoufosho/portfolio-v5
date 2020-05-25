import React from "react";
import { Box, Flex, Heading, Text, Image, Button } from "rebass";
import { Label, Input } from '@rebass/forms'


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

export class PrivatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isAuthenticated: false,
    };
  }

  handleSubmit = (event) => {
    if (this.state.password === TEMP_PW) {
      this.setState({isAuthenticated: "true"});
    }
  }

  handleChange = (event) => {
    this.setState({ password: event.target.value }); 
  }

  renderPasswordInput() {
    return (
      <Box
        as='form'
        onSubmit={(event) => this.handleSubmit(event)}
      >
        <Input
          id='password'
          name='password'
          type='password'
          placeholder='password'
          onChange = {(event) => this.handleChange(event) }/>
        <Button>
          Beep
        </Button>
      </Box>
    );
  }

  render() {
    const Component = this.props.component;
    return this.state.isAuthenticated ? <Component /> : this.renderPasswordInput()
  }
}
