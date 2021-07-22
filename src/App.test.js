import { render, screen, fireEvent, act } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

function toJSONBlob(obj) {
  return new Blob([JSON.stringify(obj)], {
    type: "application/json;charset=utf-8",
  });
}

test("renders learn react link", async () => {
  jest
    .spyOn(window, "fetch")
    .mockResolvedValue(new Response(toJSONBlob({ name: "Michal" })));

  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: /fetch/i }));
  act(() => {
    jest.advanceTimersByTime(300);
  });

  await screen.findByRole("heading", { name: /michal/i });
});
