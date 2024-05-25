import client from "@/lib/api";

const getPet = async (petId: number) => {
  console.log("🚀 ~ getPet ~ petId:", petId);
  const { data, error } = await client.GET("/pet/{petId}", {
    params: {
      path: { petId: petId },
    },
  });
  console.log("data", error);
  return { data, error };
};

export { getPet };
