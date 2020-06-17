import { handleSubmit } from "../src/client/js/formHandler";


describe("Test the handleSubmit method", () => {
  const event = { preventDefault: () => {} };

  let defaultMessage = "I am happy to see you";

  beforeEach(() => {
    jest.spyOn(event, "preventDefault");
    fetch.resetMocks();
  });

  test("Form Handler: Should return a response after calling the API", () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        response: {
          text: defaultMessage,
          language: "en",
          categories: [
            {
              confidence: "0.7",
              code: "0113232323",
              label: "Arts and Religion"
            }
          ]
        }
      })
    );

    expect(handleSubmit(event)).resolves.toHaveProperty("response");
  });
});