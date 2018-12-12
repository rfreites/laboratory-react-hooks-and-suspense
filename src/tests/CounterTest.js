import React from "react";
import { render, fireEvent, afterEach } from "react-testing-library";
import Counter from "../modules/Counter";

export default function counterTest() {
  afterEach(() => {
    window.localStorage.removeItem("count");
  });

  test("counter increments the count", () => {
    const { container } = render(<Counter />);
    const button = container.firstChild;
    fireEvent.click(button);
    expect(button.textContent).toBe("1");
  });

  test("reads and updates localstorage", () => {
    window.localStorage.setItem("count", 3);
    const { container } = render(<Counter />);
    const button = container.firstChild;
    expect(button.textContent).toBe("3");
    fireEvent.click(button);
    expect(button.textContent).toBe("4");
    expect(window.localStorage.getItem("count")).toBe("4");
  });
}
