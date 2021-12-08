/*
 * @jest-environment jsdom
*/

import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NavBar } from ".";

describe("NavBar", () => {
  test("it renders a nav tag", () => {
    render(<NavBar />, { wrapper: MemoryRouter });
    const nav = screen.queryByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
});