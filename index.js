import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  // Use the useSession hook to get session data
  const { data: session } = useSession();

  return (
    <div>
      {/* Check if we have session data indicating the user is logged in */}
      {session ? (
        <>
          <p>Welcome, {session.user.email}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <p>You are not signed in</p>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
}
