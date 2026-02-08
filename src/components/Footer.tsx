export default function Footer({isDark}: {isDark: boolean}) {
  return (
    <footer className="p-7 md:p-8">
		  <p className={`text-base font-medium text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>© {new Date().getFullYear()} SifaanDev — All rights reserved.</p>
		</footer>
  );
}