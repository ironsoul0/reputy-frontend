import type { FC } from 'react';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  image: string;
  tag: string;
  status: string;
}

export const DAOCard: FC<Props> = ({ title, description, image, tag, status }) => {
  return (
    <div style={{ width: 300, backgroundColor: '#202a30', cursor: 'pointer' }} className="tw-relative tw-rounded-2xl tw-bg-card-blue tw-h-max tw-text-soft-white tw-text-lg tw-font-normal tw-mb-16 md:tw-mb-0 tw-shadow-xl">
      <div className="tw-absolute tw-top-2 tw-right-2 tw-px-2 tw-py-1 tw-rounded-lg" style={{ backgroundColor: '#232627' }}>
        <p className="tw-text-sm tw-text-white tw-m-0">{tag}</p>
      </div>
      
      <Link href='/project/1' className="tw-block tw-relative tw-rounded-xl tw-overflow-hidden" title="Equilibrium">
          <img src={image} className="tw-rounded-xl" style={{ width: 300, height: 210 }} alt="Equilibrium" />
      </Link>
      
      <div className="px-3 py-2 tw-absolute tw-bottom-0 tw-rounded-b-xl" style={{ width: '100%', height: 90, backgroundColor: 'rgba(0,0,0, 0.85)' }}>
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-2">
          <p className="tw-text-lg tw-font-semibold tw-text-white hover:tw-text-white tw-transition-colors tw-duration-1000 tw-m-0">{title}</p>
          <p style={{ zIndex: 100, color: '#9fef00', fontSize: 14 }} className="tw-font-semibold hover:tw-text-white tw-transition-colors tw-duration-1000 tw-m-0">{status}</p>
        </div>
        
        <p className="tw-text-sm text-white tw-tracking-wide tw-m-0">{description}</p>
      </div>
    </div>
  )
}