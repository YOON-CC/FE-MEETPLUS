import StayAnimation from "@/components/organism/animation/StayAnimation";
import { cookies } from "next/headers";

export default async function Page(props: any) {
  const authorization = cookies().get("authorization")?.value;
  const uuid = cookies().get("uuid")?.value;
  const pathName = props.params.id;

  return (
    <main>
      <StayAnimation
        authorization={authorization}
        auctionUuid={pathName}
        uuid={uuid}
      />
    </main>
  );
}
