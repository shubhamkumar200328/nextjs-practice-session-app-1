// This is a Server Component

async function fetchUsers() {
  // Simulating API call with delay
  await new Promise((res) => setTimeout(res, 2000)); // 2-second delay
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <main style={{ padding: '2rem' }}>
      <div className="usersCont bg-gray-400 text-gray-900 text-left mx-100 p-10">
        <h1 className=" text-2xl text-bold text-center my-5">Fetched Users by making API call</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
      </div>
      <div className="discription m-10 text-center p-5 bg-gray-400 rounded-md">
        <p>
            <span className=" text-xl text-bold">Note:</span> we explore the loading.tsx file in Next.js, which allows us to create loading states visible to users while content is loading. Learn how to implement a basic loading state, the benefits of using loading UI, and how it enhances user experience by making your app feel responsive.
        </p>
      </div>
    </main>
  );
}
