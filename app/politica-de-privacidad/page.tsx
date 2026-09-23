import type { Metadata } from "next";
import { PrivacyPolicyContent } from "../components/ui/PrivacyPolicyContent";

export const metadata: Metadata = {
    title: "Política de Privacidad | O M Catering",
    description: "Política de privacidad de O M Catering.",
};

export default function PrivacyPolicyPage() {
    return <main><PrivacyPolicyContent /></main>;
}
