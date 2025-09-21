"use client";

import { useFormStatus } from "react-dom";

export default function Page() {
  async function handleSubmit(formData) {
    // server action body
    await new Promise(r => setTimeout(r, 2000));
    console.log("Submitted", formData.get("name"));
  }

  function CustomerForm() {
    const { pending } = useFormStatus();
    return (
      <>
        <input name="name" type="text" placeholder="Enter Name" /><br/><br/>
        <input name="password" type="password" placeholder="Enter Password" /><br/><br/>
        <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
      </>
    );
  }

  return (
    <form action={handleSubmit}>
      <CustomerForm />
    </form>
  );
}
