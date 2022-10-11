import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
    return (
      <div>
        {
          // [] get all channel ids
          // [] call third party api to get links
          // [] load the component that shows channel links
        }

        <div>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("google")}>Sign in with google</button>
    </>
  );
}
