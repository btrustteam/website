import { redirect } from 'next/navigation';
import { DISCORD_LINK } from "@/lib/constants";

export default function DiscordPage() {
  // Redirect to the Discord invitation page
  redirect(DISCORD_LINK);
}
