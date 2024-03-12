// pages/protected-page.js
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ProtectedPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/api/auth/signin');
    }
  }, [session, router]);

  return <div>Protected Content</div>;
}
