export const fetchUser = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const randomID = Math.floor(Math.random() * 10);
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomID}`, {
    cache: 'no-cache',
  });
  const user = await response.json();

  return user;
};
