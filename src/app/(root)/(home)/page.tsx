import { Button } from "../../_components/button";

export default function Home() {
  return (
    <div className="grid h-screen place-content-center text-center">
      <Button
        variant="warning"
        size="large"
        isLoading
        loadingType="blocks"
        shape="wide"
      >
        در دست ساخت
      </Button>
    </div>
  );
}
