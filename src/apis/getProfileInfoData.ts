export async function getProfileInfoData(pathName: any, authorization: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/auctionpost-service/api/v1/influencer?influencerUuid=${pathName}`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${authorization}`,
        // uuid: `${uuid}`,
      },
    }
  );
  const data = await res.json();
  return data;
}
