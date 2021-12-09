
/*
 * @jest-environment jsdom
*/

import { screen, render } from "@testing-library/react";
import { Header } from ".";
import userEvent from '@testing-library/user-event';

describe("NavBar", () => {
  test("it renders a nav tag", () => {
    render(<Header />);
    const nav = screen.queryByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  test("it renders a nav button", () => {
    render(<Header />);
    const navBtn = screen.queryByRole("navBtn");
    expect(navBtn).toBeInTheDocument();
  });

  test("it renders a home button", () => {
    render(<Header />);
    const Home = screen.queryByRole("Home");
    userEvent.click(Home)
    // expect(Home).toHaveBeenCalledTimes(1)
    // expect(Home.getAttribute("href")).toBe('/')
    // expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '')
    // expect(home).toContain("/");
  });
  

  // test("it renders a logout button", () => {
  //   render(<Header />);
  //   const logout = screen.queryByRole("logout");
  //   expect(logout.getAttribute("href")).toBe('/logout')
  //   expect(logout).toContain("Logout");
  // });

  // test("it renders a comming soon button", () => {
  //   render(<Header />);
  //   const comming_soon = screen.queryByRole("comming_soon");
  //   expect(comming_soon).toContain("Coming soon!");
  // });

});
