import { fetchUserData } from "../src/utils/api"

describe("Test API Functionality", () => {

    //setup - run before each test
    beforeAll(() => {
        //for all these test, we are going to be using the same mock function
        global.fetch = jest.fn();
    })

    //teardown - run after each test
    afterEach(() => {
        //after each test, we are going to be clearing all of the mock functions
        jest.resetAllMocks();
    })

    test("fetchUserData should return valid data based on ID", async () => {

        //Arrange
        const userId = 1
        const expectedUser = {id: 1, name: "Leanne Graham" }

        //Act
        global.fetch = jest.fn(); //setting up our mock function
        //overriding the fetch function with mock implementation
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => expectedUser
        });

        const result = await fetchUserData(userId);

        //Assert
        expect(result).toEqual(expectedUser);
        expect(fetch).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/${userId}`);
    })

    test("fetchUserData should throw and error on network failure", async () => {

        //Arrange
        (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

        //Act
        const result = fetchUserData(0); //error

        //Assert
        expect(result).rejects.toThrow('Network response was not ok');
        //expect(fetch).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/${userId}`);
    })
})