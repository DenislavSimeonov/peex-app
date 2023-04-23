import { ReactNode, useRef } from 'react';

interface IAnchorLink {
  id?: string;
  children: ReactNode;
  scrollDelay: number;
}

const AnchorLink = ({ id, children, scrollDelay }: IAnchorLink) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const handleClickScroll = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    }, scrollDelay);
  };

  return <>{id ? <div onClick={handleClickScroll}>{children}</div> : children}</>;
};

AnchorLink.defaultProps = {
  isActive: true,
  scrollDelay: 0,
};

export default AnchorLink;
