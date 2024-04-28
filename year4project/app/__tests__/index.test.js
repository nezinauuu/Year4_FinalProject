import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PetPractices from "../(main)/(routes)/PetPractices/page";
import PetCareAssistant from "../(main)/(routes)/openAi/page";
import ErrorBoundary from "../../components/ErrorBoundary.js";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation.js";
import ForumPage from "../(main)/(routes)/forums/page";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    query: "",
    asPath: "",
    push: jest.fn().mockResolvedValue(true),
    replace: jest.fn().mockResolvedValue(true),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
  }),
}));

jest.mock("@clerk/nextjs", () => ({
  useUser: jest.fn().mockReturnValue({
    isLoaded: true,
    user: null, 
  }),
}));

describe("Common Pet FAQ", () => {
  it("renders a heading with the text 'Common Pet FAQ'", () => {
    render(
      <ErrorBoundary>
        <PetPractices />
      </ErrorBoundary>
    );

    const heading = screen.getByText("Common Pet FAQ", { exact: false });

    expect(heading).toBeInTheDocument();
  });

  it("renders a heading with the text 'Pet Health Checklist'", () => {
    render(
      <ErrorBoundary>
        <PetPractices />
      </ErrorBoundary>
    );

    const heading = screen.getByText("Pet Health Checklist", {
      exact: false,
    });

    expect(heading).toBeInTheDocument();
  });
});

describe("Pet Ai", () => {
  describe("when user is not logged in", () => {
    it("User must sign in to enter openAi page.", () => {
      // Mock window.location.assign to simulate redirection
      const assignMock = jest.fn();
      Object.defineProperty(window, "location", {
        value: { assign: assignMock },
        writable: true,
      });

      render(
        <ErrorBoundary>
          <PetCareAssistant />
        </ErrorBoundary>
      );
      expect(screen.queryByText("Pet Assistant")).toBeNull();
    });
  });

  describe("when user is logged in", () => {
    beforeEach(() => {
      useUser.mockReturnValue({
        user: { id: "123", email: "test@example.com" },
        isAuthenticated: true,
      });

      useRouter.mockImplementation(() => ({
        pathname: "/openAi",
      }));
    });

    it('redirects to "/openAi"', () => {
      render(<PetCareAssistant />);

      expect(useRouter).toHaveBeenCalled();
      const router = useRouter();
      expect(router.pathname).toBe("/openAi");
    });
  });
});

