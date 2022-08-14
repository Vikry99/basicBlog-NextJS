import { useEffect } from "react"
import { useRouter } from "next/router";
export default function PageNotFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, [])
  return (
    <div>
        <h1 className="title-not-found">Ooopsss....</h1>
        <h1 className="title-not-found">Halaman yang anda cari tidak di temukan!</h1>
    </div>
  )
}
