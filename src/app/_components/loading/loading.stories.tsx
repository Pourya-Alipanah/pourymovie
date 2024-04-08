import { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./loading";

const meta: Meta<typeof Loading> = {
  component: Loading,
  title: "Loading",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const LoadingVariants: Story = {
    render: () => (
        <>
            <Loading variant="ghost"/>
            <Loading variant="error"/>
            <Loading variant="primary"/>
            <Loading variant="neutral"/>
            <Loading variant="info"/>
            <Loading variant="success"/>
            <Loading variant="warning"/>
        </>
    ),
};

export const LoadingPulse: Story = {
    render: () => (
        <>
            <Loading size="tiny" variant="ghost"/>
            <Loading size="small" variant="ghost"/>
            <Loading size="normal" variant="ghost"/>
            <Loading size="large" variant="ghost"/>
        </>
    ),
};
export const LoadingBlocks: Story = {
    render: () => (
        <>
            <Loading type="blocks" size="tiny" variant="primary"/>
            <Loading type="blocks" size="small" variant="primary"/>
            <Loading type="blocks" size="normal" variant="primary"/>
            <Loading type="blocks" size="large" variant="primary"/>
        </>
    ),
};

export const LoadingBalls: Story = {
    render: () => (
        <>
            <Loading type="balls" size="tiny" variant="info"/>
            <Loading type="balls" size="small" variant="info"/>
            <Loading type="balls" size="normal" variant="info"/>
            <Loading type="balls" size="large" variant="info"/>
        </>
    ),
};
