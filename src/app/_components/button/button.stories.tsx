import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { IconHome } from "../icons";
import {withTests} from '@storybook/addon-jest';
import results from '../../../../.jest-test-results.json';

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Tests:Story = {
  render: (args)=>(
    <Button {...args}>Click here</Button>
  )
}
Tests.decorators = [withTests({results})]

export const ButtonColors: Story = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="neutral">neutral</Button>
      <Button variant="ghost">ghost</Button>
      <Button isLink>Link</Button>
    </>
  ),
};

export const StateColors: Story = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button variant="success">success</Button>
      <Button variant="warning">warning</Button>
      <Button variant="error">Error</Button>
      <Button variant="info">info</Button>
    </>
  ),
};

export const OutlineButtonColors: Story = {
  render: () => (
    <>
      <Button isOutline>Default</Button>
      <Button isOutline variant="primary">
        Primary
      </Button>
      <Button isOutline variant="neutral">
        neutral
      </Button>
    </>
  ),
};

export const OutlineStateColors: Story = {
  render: () => (
    <>
      <Button isOutline>Default</Button>
      <Button isOutline variant="success">
        success
      </Button>
      <Button isOutline variant="warning">
        warning
      </Button>
      <Button isOutline variant="error">
        Error
      </Button>
      <Button isOutline variant="info">
        info
      </Button>
    </>
  ),
};

export const ButtonSizes: Story = {
  render: () => (
    <>
      <Button size="tiny">tiny</Button>
      <Button size="small">small</Button>
      <Button size="normal">normal</Button>
      <Button size="large">large</Button>
    </>
  ),
};

export const WideButton: Story = {
  render: () => (
    <>
      <Button shape="wide">Wide</Button>
    </>
  ),
};

export const FullButton: Story = {
  render: () => (
    <>
      <Button shape="full">Full</Button>
    </>
  ),
};

export const SquareButton: Story = {
  render: () => (
    <>
      <Button shape="square" size="tiny">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </Button>
      <Button shape="square" size="small">
        <IconHome/>
      </Button>
      <Button shape="square" size="normal">
        <IconHome/>
      </Button>
      <Button shape="square" size="large">
        <IconHome/>
      </Button>
    </>
  ),
};

export const CircleButton: Story = {
  render: () => (
    <>
      <Button shape="circle" size="tiny">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </Button>
      <Button shape="circle" size="small">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </Button>
      <Button shape="circle" size="normal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </Button>
      <Button shape="circle" size="large">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </Button>
    </>
  ),
};

export const DisabledButton: Story = {
  render: () => (
    <>
      <Button variant="info" isDisabled>
        Disabled
        </Button>
    </>
  ),
};

export const IconButtons: Story = {
  render: () => (
    <>
      <Button variant="error">
        <IconHome/>
        Home
      </Button>
      <Button>
        Home
        <IconHome/>
      </Button>
    </>
  ),
};

export const LoadingButton: Story = {
  render: () => (
    <>
      <Button isLoading>Loading</Button>
      <Button variant="info" isLoading loadingType="blocks">Loading</Button>
      <Button isLoading loadingType="balls" variant="primary" isOutline>Loading</Button>
    </>
  ),
};
