import { User } from "../models/user";

export async function fetchUserData(userId: number): Promise<User> {
    //using dummy API
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
}