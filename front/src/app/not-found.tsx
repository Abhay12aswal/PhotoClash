import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <Image src="/server_error.svg" width={500} height={500} alt='404'/>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  )
}