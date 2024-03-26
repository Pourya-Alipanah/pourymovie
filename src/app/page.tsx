import { Button } from "./_components/button";

export default function Home() {
  return (
    <div className="grid h-screen place-content-center text-center">
      در دست ساخت
      <div lang="en">Under Construction</div>
      <Button variant="warning" size="small" isLoading loadingType="blocks">
        تست
      </Button>
    </div>
  );
}
