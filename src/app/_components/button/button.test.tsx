import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("render a default button", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("disables the button when isDisabled is true", () => {
    render(<Button isDisabled>Click me</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("disables the button when isLoading is true", () => {
    render(<Button isLoading>Click me</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies correct css class for different button variants", () => {
    const { rerender } = render(<Button variant="error">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-error");

    rerender(<Button variant="primary">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");
  });

  it("applies correct css class for different button sizes", () => {
    const { rerender } = render(<Button size="tiny">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-xs");

    rerender(<Button size="small">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-sm");

    rerender(<Button size="large">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-lg");
  });

  it("applies correct css class for different button shapes", () => {
    const { rerender } = render(<Button shape="wide">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-wide");

    rerender(<Button shape="full">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-full");

    rerender(<Button shape="square">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-square");

    rerender(<Button shape="circle">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-circle");
  });

  it("applies correct css class for outline button", () => {
    render(<Button isOutline>Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-outline");
  });

  it("applies correct css class for link button", () => {
    render(<Button isLink>Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-link");
  });

  it("applies custom class to button", () => {
    render(<Button className="custom-class">Click me</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("renders loading component when isLoading is true", () => {
    render(
      <Button data-testid="loading" isLoading>
        Click me
      </Button>
    );
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("renders loading component with custom text", () => {
    render(<Button isLoading>Loading...</Button>);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders loading component with custom type", () => {
    render(
      <Button data-testid="loading" isLoading loadingType="balls">
        Loading...
      </Button>
    );
    expect(screen.getByTestId("loading").childNodes[0]).toHaveClass(
      "loading-balls"
    );
  });

  it("renders loading component with default type when loadingType is not provided", () => {
    render(
      <Button data-testid="loading" isLoading>
        Loading...
      </Button>
    );
    expect(screen.getByTestId("loading").childNodes[0]).toHaveClass("loading");
  });

  it("renders a button with custom type", () => {
    render(<Button type="submit">Click me</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
  
});
