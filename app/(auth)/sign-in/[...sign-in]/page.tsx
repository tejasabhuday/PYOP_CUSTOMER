import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div>
      <SignIn path="/sign-in" routing="path" />
    </div>
  );
}
