import Link from "next/link";
export default function DashboardPage(props) {
  console.log(props)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >

      <div className="flex gap-2">
        <Link href="/users-ssr">Versi SSR</Link>
        <Link href="/">Versi CSR</Link>
      </div>

    </main>
  )
}