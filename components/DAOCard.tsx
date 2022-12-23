import type { FC } from 'react';
import Link from 'next/link';

type Props = {
  title: string;
  price: string;
  image: string;
}

export const DAOCard: FC<Props> = ({ title, price, image }) => {
  return (
    <div style={{ width: 250, backgroundColor: '#202a30', cursor: 'pointer' }} className="tw-relative tw-rounded-2xl tw-bg-card-blue tw-h-max tw-text-soft-white tw-text-lg tw-font-normal tw-mb-16 md:tw-mb-0 tw-shadow-xl">
      <Link href='/project/1' className="tw-block tw-relative tw-rounded-xl tw-overflow-hidden" title="Equilibrium">
          <img src={image} className="tw-rounded-xl" style={{ width: 250, height: 175 }} alt="Equilibrium" />
      </Link>
      
      <div className="px-3 py-2 tw-absolute tw-bottom-0 tw-bg-black tw-rounded-b-xl" style={{ width: '100%', opacity: '0.87' }}>
        <div className="tw-text-xl tw-font-semibold tw-mb-2">
          <a style={{ textDecoration: 'none' }} className="tw-text-white hover:tw-text-white tw-transition-colors tw-duration-1000">{title}</a>
        </div>
        
        <p className="tw-text-sm text-white tw-font-semibold tw-tracking-wide tw-ml-1 tw-m-auto">{price}</p>
      </div>
    </div>
  )
}