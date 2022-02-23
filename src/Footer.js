import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <Image
        src="/assets/img-video.png"
        width={250}
        height={166}
        alt="Footer video"
      />
      <Link href="https://facebook.com">FACEBOOK</Link>
      <Link href="https://instagram.com">INSTAGRAM</Link>
      <Link href="https://youtube.com">YOUTUBE</Link>
      <Link href="https://twitter.com">TWITTER</Link>
      <Link href="/mais" className="explore">
        EXPLORE MAIS
      </Link>
    </footer>
  );
};

export default Footer;
