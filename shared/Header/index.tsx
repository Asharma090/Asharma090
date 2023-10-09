import Image from 'next/image';
import logo from '../../public/images/logo.svg'
import Link from 'next/link';
import { Search } from '@/icons';

interface IHeader {
  isSearch?: boolean;
  isNeedHelp?: boolean;
}

const Header: React.FC<IHeader> = ({ isNeedHelp = false, isSearch = false }) => {
  return (
    <header className="header">
      <div className="container">
        <div className='logo'>
          <Link href="/">
            <Image src={logo} alt='Logo' />
          </Link>
        </div>

        <div className='wrap'>
          {isSearch && (
            <div className='search-bar'>
              <div className="input-group">
                <input placeholder='Service' type="text" aria-label="First name" className="form-control" />
                <input placeholder='City' type="text" aria-label="Last name" className="form-control" />
                <button className="btn btn-primary px-3" type="button">
                  <Search />
                </button>
              </div>
            </div>
          )}


          <div className='button-group'>
            {isNeedHelp ? (
              <button type="button" className="btn btn-primary">
                Need Help?
              </button>
            ) : (
              <>
                <button type="button" className="btn btn-outline-primary">
                  Join as Vendor
                </button>
                <button type="button" className="btn btn-primary">
                  Login / Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;