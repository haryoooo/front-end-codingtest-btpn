import { render, fireEvent } from "@testing-library/react";
import SearchBarComponent from "./components/SearchBarComponent";

it("searchRenderCheck", () => {
    const { queryBytitle } = render(<SearchBarComponent />);
    const input = queryBytitle("dummysearch");
    expect(input).toBeTruthy();
  });

  describe("changeInInput", () => {
    it("onchange", () => {
      const { queryBytitle } = render(<SearchBarComponent />);
      const input = queryBytitle("dummysearch");
      fireEvent.change(input, { target: { value: "testValue" } });
      expect(input.value).toBe("testValue");
    });
  });