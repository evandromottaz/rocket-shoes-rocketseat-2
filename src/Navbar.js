import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="container">
      <Link href="/" passHref className="logo">
        <a>
          <Image
            src="/assets/favicon.ico"
            alt="site logo"
            width={52}
            height={36}
          />
        </a>
      </Link>
      <Link href="/homem">HOMEM</Link>
      <Link href="/mulher">MULHER</Link>
      <Link href="/crianca">CRIANÇA</Link>
      <Link href="/costumizar">CUSTOMIZAR</Link>
      <div className="search-box">
        <input type="search" name="search" placeholder="Pesquisar" />
      </div>
      <Image
        src="/assets/icon-bag.svg"
        alt="carrinho de compras"
        width={25}
        height={28}
      />
    </nav>
  );
};

export default Navbar;
