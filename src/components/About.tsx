type AboutProps = {
  isDark: boolean
}

export default function About({ isDark }: AboutProps) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className={`text-3xl md:text-4xl font-bold mt-3 md:mt-0 ${isDark ? "text-white" : "text-black"}`}>Let me introduce myself</h1>
      <p className="md:text-lg">My real name is Samsad, I’m from Bihar (India), and I started my coding journey by following my passion. I’m also a YouTuber who teaches coding and improves every day</p>
      <p className="md:text-lg">My goal is to build <span className={`font-medium ${isDark ? "text-purple-400" : "text-purple-600"} font-semibold}`}>simple and delightfull user experiences</span> that people genuinely enjoy</p>
    </div>
  );
}