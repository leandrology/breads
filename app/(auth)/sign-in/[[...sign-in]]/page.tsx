import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <h1 className="text-light-1 text-heading1-bold py-4"> Join now. </h1>
      <div className="transparent-card">
        <SignIn />
      </div>
    </>
  );
}
