import { getAllProviders } from "@/actions/public/providers";
import { AllProviders } from "@/components/pages/public/all-providers";

export const metadata = {
  title: `Canada777-All-Providers`,
};

export default async function AllProvidersPage() {
  const { data: response } = await getAllProviders({});
  const providers = response?.data || [];

  return <AllProviders providers={providers} />;
}
